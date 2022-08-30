
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';


import {ProfileDocument } from '../graphql/generated'


export interface ProfileRequest {
  profileId?: string;
  handles?: string;
}

const getProfileRequest = (request: ProfileRequest) => {
  return apolloClient.query({
    query: ProfileDocument,
    variables: {
      request,
    },
  });
};

export const profile = async (request?: ProfileRequest) => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('profiles: address', address);

  await login(address);

  if (!request) {
    request = { profileId: PROFILE_ID! };
  }

  const profile = await getProfileRequest(request);

  console.log('profile: result', profile.data);

  return profile.data;
};

(async () => {
  await profile();
})();
