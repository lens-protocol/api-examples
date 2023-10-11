import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart, PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { GetDefaultProfileDocument } from '../graphql/generated';

const getDefaultProfileRequest = async (address: string) => {
  const result = await apolloClient.query({
    query: GetDefaultProfileDocument,
    variables: {
      request: {
        for: address,
      },
    },
  });

  return result.data.defaultProfile;
};

export const defaultProfile = async (ownerAddress?: string) => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = ownerAddress || getAddressFromSigner();
  console.log('get default profile: address', address);

  await login(address);

  const defaultProfile = await getDefaultProfileRequest(address);

  console.log('get default profile: result', defaultProfile);

  return defaultProfile;
};

(async () => {
  if (explicitStart(__filename)) {
    await defaultProfile();
  }
})();
