
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import {RemoveReactionDocument,ReactionTypes } from '../graphql/generated'



const removeReactionRequest = (
  profileId: string,
  reaction: ReactionTypes,
  publicationId: string
) => {
  return apolloClient.mutate({
    mutation: RemoveReactionDocument,
    variables: {
      request: {
        profileId,
        reaction,
        publicationId,
      },
    },
  });
};

export const removeReaction = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('remove reaction: address', address);

  await login(address);

  await removeReactionRequest(profileId, ReactionTypes.Upvote, '0x0f-0x01');

  console.log('remove reaction: sucess');
};

(async () => {
  await removeReaction();
})();
