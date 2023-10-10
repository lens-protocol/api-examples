import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { POST_ID, PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import {
  AddReactionDocument,
  PublicationReactionType,
  ReactionRequest,
} from '../graphql/generated';
import { knownPostId } from '../known-common-input-constants';

const addReactionRequest = async (request: ReactionRequest) => {
  const result = await apolloClient.mutate({
    mutation: AddReactionDocument,
    variables: {
      request,
    },
  });

  return result.data!.addReaction;
};

export const addReaction = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('add reaction: address', address);

  await login(address);

  await addReactionRequest({
    reaction: PublicationReactionType.Upvote,
    for: POST_ID || knownPostId,
  });

  console.log('add reaction: success');
};

(async () => {
  await addReaction();
})();
