import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import {
  PendingApprovalFollowsDocument,
  PendingApprovalFollowsRequest,
} from '../graphql/generated';

const pendingApprovalFollows = async (request: PendingApprovalFollowsRequest) => {
  const result = await apolloClient.query({
    query: PendingApprovalFollowsDocument,
    variables: {
      request,
    },
  });

  return result.data.pendingApprovalFollows;
};

export const pendingApprovals = async () => {
  const address = getAddressFromSigner();
  console.log('pending approvals: address', address);

  await login(address);

  const result = await pendingApprovalFollows({ limit: 20 });
  console.log('pending approvals: result', result);

  return result;
};

(async () => {
  if (explicitStart(__filename)) {
    await pendingApprovals();
  }
})();
