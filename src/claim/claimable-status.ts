import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { ClaimableStatusDocument } from '../graphql/generated';

const getClaimableStatusRequest = async () => {
  const result = await apolloClient.query({
    query: ClaimableStatusDocument,
    variables: {},
  });

  return result.data.claimableStatus;
};

export const claimableStatus = async () => {
  const address = getAddressFromSigner();
  console.log('profiles: address', address);

  await login(address);

  const status = await getClaimableStatusRequest();

  console.log('claimable profiles: result', status);

  return status;
};

(async () => {
  if (explicitStart(__filename)) {
    await claimableStatus();
  }
})();
