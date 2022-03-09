import { gql } from '@apollo/client/core';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { profiles } from './get-profiles';

const UPDATE_PROFILE = `
  mutation($request: UpdateProfileRequest!) { 
    updateProfile(request: $request)
 }
`;

// TODO sort types!
const updateProfileRequest = (profileInfo: any) => {
  return apolloClient.mutate({
    mutation: gql(UPDATE_PROFILE),
    variables: {
      request: profileInfo,
    },
  });
};

export const updateProfile = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('update profile: address', address);

  await login(address);

  await updateProfileRequest({
    profileId,
    name: 'josh stevens',
    bio: 'hey this is my profile',
    location: 'UK',
    website: null,
    twitterUrl: null,
    coverPicture: null,
  });

  await profiles({ profileIds: [profileId] });
};

(async () => {
  await updateProfile();
})();
