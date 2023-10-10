import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { POST_ID, PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import {
  PublicationReactionType,
  ReactionRequest,
  RemoveReactionDocument,
} from '../graphql/generated';
import { knownPostId } from '../known-common-input-constants';

const removeReactionRequest = async (request: ReactionRequest) => {
  const result = await apolloClient.mutate({
    mutation: RemoveReactionDocument,
    variables: {
      request,
    },
  });

  return result.data!.removeReaction;
};

export const removeReaction = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('remove reaction: address', address);

  await login(address);

  await removeReactionRequest({
    reaction: PublicationReactionType.Upvote,
    for: POST_ID || knownPostId,
  });

  console.log('remove reaction: success');
};

(async () => {
  await removeReaction();
})();
