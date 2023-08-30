import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { ProfileQueryRequest, ProfilesDocument } from '../../graphql-v1/generated';

const getProfilesRequest = async (request: ProfileQueryRequest) => {
  const result = await apolloClient.query({
    query: ProfilesDocument,
    variables: {
      request,
    },
  });

  return result.data.profiles;
};

export const profiles = async () => {
  const address = getAddressFromSigner();
  console.log('profiles: address', address);

  await login(address);

  const profileIds: string[] = ['0x0f']; // Ensure you follow this profileID

  // only showing one example to query but you can see from request
  // above you can query many
  const profilesFromProfileIds = await getProfilesRequest({ profileIds });

  console.log('profiles: result', profilesFromProfileIds);

  return profilesFromProfileIds;
};

(async () => {
  if (explicitStart(__filename)) {
    await profiles();
  }
})();
