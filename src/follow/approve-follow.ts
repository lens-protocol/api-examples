import { gql } from '@apollo/client/core';
import { apolloClient } from '../apollo-client';
import { getAddressFromSigner } from '../ethers.service';
import { prettyJSON } from '../helpers';
import { pendingApprovals } from './pending-approval-follows';

const APPROVE_FOLLOW = `
  mutation($request: ApproveFollowsRequest!) { 
   approveFollow(request: $request)
 }
`;

export const approveFollowRequest = (profileId: string) => {
  return apolloClient.mutate({
    mutation: gql(APPROVE_FOLLOW),
    variables: {
      request: {
        profileId,
      },
    },
  });
};

export const approveFollow = async () => {
  const address = getAddressFromSigner();
  console.log('approve follow: address', address);

  const pending = await pendingApprovals();
  if (pending.pendingApprovalFollows.items.length === 0) {
    console.log('no pending approvals so can not pick the first one!');
    return;
  }

  const pendingOneProfileId = pending.pendingApprovalFollows.items[0].id;
  console.log('approve follow: pendingOne', pendingOneProfileId);

  const result = await approveFollowRequest(pendingOneProfileId);
  prettyJSON('approve follow: result', result.data);

  return result.data;
};

(async () => {
  await approveFollow();
})();
