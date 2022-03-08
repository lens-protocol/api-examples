import { gql } from '@apollo/client/core';
import { apolloClient } from '../apollo-client';

const APPROVE_FOLLOW = `
  mutation($request: ApproveFollowsRequest!) { 
   approveFollow(request: $request)
 }
`;

export const approveFollow = (profileId: string) => {
  return apolloClient.mutate({
    mutation: gql(APPROVE_FOLLOW),
    variables: {
      request: {
        profileId,
      },
    },
  });
};
