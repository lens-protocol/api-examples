import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { argsBespokeInit, PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { ProfileDocument, SingleProfileQueryRequest } from '../graphql/generated';

const getProfileRequest = async (request: SingleProfileQueryRequest) => {
  const result = await apolloClient.query({
    query: ProfileDocument,
    variables: {
      request,
    },
  });

  return result.data.profile;
};

export const profile = async (request?: SingleProfileQueryRequest) => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('profiles: address', address);

  await login(address);

  if (!request) {
    request = { profileId: '0x09' };
  }

  const profile = await getProfileRequest(request);

  console.log('profile: result', profile);

  return profile;
};

(async () => {
  if (argsBespokeInit()) {
    await profile();
  }
})();
