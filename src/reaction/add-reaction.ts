import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { AddReactionDocument, ReactionRequest, ReactionTypes } from '../graphql/generated';

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
    profileId,
    reaction: ReactionTypes.Upvote,
    publicationId: '0x2f-0x01be',
  });

  console.log('add reaction: sucess');
};

(async () => {
  await addReaction();
})();
