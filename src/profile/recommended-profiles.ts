
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { getAddressFromSigner } from '../ethers.service';


import {RecommendedProfilesDocument } from '../graphql/generated'

const getRecommendedProfilesRequest = () => {
  return apolloClient.query({
    query: RecommendedProfilesDocument,
  });
};

export const recommendedProfiles = async () => {
  const address = getAddressFromSigner();
  console.log('recommended profiles: address', address);

  await login(address);

  // only showing one example to query but you can see from request
  // above you can query many
  const result = await getRecommendedProfilesRequest();

  console.log('recommended profiles: result', result.data);

  return result.data;
};

(async () => {
  await recommendedProfiles();
})();
