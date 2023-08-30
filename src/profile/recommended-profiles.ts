import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { getAddressFromSigner } from '../ethers.service';
import { RecommendedProfilesDocument } from '../../graphql-v1/generated';

const getRecommendedProfilesRequest = async () => {
  const result = await apolloClient.query({
    query: RecommendedProfilesDocument,
  });

  return result.data.recommendedProfiles;
};

export const recommendedProfiles = async () => {
  const address = getAddressFromSigner();
  console.log('recommended profiles: address', address);

  await login(address);

  // only showing one example to query but you can see from request
  // above you can query many
  const result = await getRecommendedProfilesRequest();

  console.log('recommended profiles: result', result);

  return result;
};

(async () => {
  await recommendedProfiles();
})();
