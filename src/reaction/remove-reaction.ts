import { gql } from '@apollo/client/core';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';

const REMOVE_REACTION = `
  mutation($request: ReactionRequest!) { 
   removeReaction(request: $request)
 }
`;

enum ReactionType {
  UPVOTE = 'UPVOTE',
  DOWNVOTE = 'DOWNVOTE',
}

const removeReactionRequest = (
  profileId: string,
  reaction: ReactionType,
  publicationId: string
) => {
  return apolloClient.mutate({
    mutation: gql(REMOVE_REACTION),
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

  await removeReactionRequest(profileId, ReactionType.UPVOTE, '0x0f-0x01');

  console.log('remove reaction: sucess');
};

(async () => {
  await removeReaction();
})();
