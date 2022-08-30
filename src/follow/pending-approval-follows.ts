
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { argsBespokeInit } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import {PendingApprovalFollowsDocument } from '../graphql/generated'


const pendingApprovalFollows = () => {
  return apolloClient.query({
    query: PendingApprovalFollowsDocument,
    variables: {
      request: {
        limit: 10,
      },
    },
  });
};

export const pendingApprovals = async () => {
  const address = getAddressFromSigner();
  console.log('pending approvals: address', address);

  await login(address);

  const result = await pendingApprovalFollows();
  console.log('pending approvals: result', result.data);

  return result.data;
};

(async () => {
  if (argsBespokeInit()) {
    await pendingApprovals();
  }
})();
