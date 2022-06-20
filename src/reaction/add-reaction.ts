import { gql } from '@apollo/client/core';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';

const ADD_REACTION = `
  mutation($request: ReactionRequest!) { 
   addReaction(request: $request)
 }
`;

enum ReactionType {
  UPVOTE = 'UPVOTE',
  DOWNVOTE = 'DOWNVOTE',
}

const addReactionRequest = (profileId: string, reaction: ReactionType, publicationId: string) => {
  return apolloClient.mutate({
    mutation: gql(ADD_REACTION),
    variables: {
      request: {
        profileId,
        reaction,
        publicationId,
      },
    },
  });
};

export const addReaction = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('add reaction: address', address);

  await login(address);

  await addReactionRequest(profileId, ReactionType.UPVOTE, '0x0f-0x01');

  console.log('add reaction: sucess');
};

(async () => {
  await addReaction();
})();
