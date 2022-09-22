import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { argsBespokeInit } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { PendingApprovalFollowsDocument } from '../graphql/generated';

const pendingApprovalFollows = async () => {
  const result = await apolloClient.query({
    query: PendingApprovalFollowsDocument,
  });

  return result.data.pendingApprovalFollows;
};

export const pendingApprovals = async () => {
  const address = getAddressFromSigner();
  console.log('pending approvals: address', address);

  await login(address);

  const result = await pendingApprovalFollows();
  console.log('pending approvals: result', result);

  return result;
};

(async () => {
  if (argsBespokeInit()) {
    await pendingApprovals();
  }
})();
