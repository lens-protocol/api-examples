import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { ClaimableProfilesDocument } from '../graphql/generated';

const getClaimableProfilesRequest = async () => {
  const result = await apolloClient.query({
    query: ClaimableProfilesDocument,
    variables: {},
  });

  return result.data.claimableProfiles;
};

export const claimableProfiles = async () => {
  const address = getAddressFromSigner();
  console.log('profiles: address', address);

  await login(address);

  const claimables = await getClaimableProfilesRequest();

  console.log('claimable profiles: result', claimables);

  return claimables;
};

(async () => {
  if (explicitStart(__filename)) {
    await claimableProfiles();
  }
})();
