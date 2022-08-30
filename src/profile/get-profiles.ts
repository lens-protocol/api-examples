
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { argsBespokeInit } from '../config';
import { getAddressFromSigner } from '../ethers.service';


import {ProfilesDocument,ProfileQueryRequest } from '../graphql/generated'


const getProfilesRequest = (ProfileQueryRequest: any) => {
  return apolloClient.query({
    query: ProfilesDocument,
    variables: {
      request: { profileIds: ["0x01"], limit: 10 }
    },
  });
}

export const profiles = async () => {
  const address = getAddressFromSigner();
  console.log('profiles: address', address);

  await login(address);

  const profileIds: string[] = ['0x0f']; // Ensure you follow this profileID


  // only showing one example to query but you can see from request
  // above you can query many
  const profilesFromProfileIds = await getProfilesRequest(profileIds);

  console.log('profiles: result', profilesFromProfileIds.data);

  return profilesFromProfileIds.data;
};

(async () => {
  if (argsBespokeInit()) {
    await profiles();
  }
})();
