import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import {
  ProfileRecommendationsDocument,
  ProfileRecommendationsRequest,
} from '../graphql/generated';

const getRecommendedProfilesRequest = async (request: ProfileRecommendationsRequest) => {
  const result = await apolloClient.query({
    query: ProfileRecommendationsDocument,
    variables: {
      request,
    },
  });

  return result.data.profileRecommendations;
};

export const recommendedProfiles = async () => {
  const address = getAddressFromSigner();
  console.log('recommended profiles: address', address);

  await login(address);

  // only showing one example to query but you can see from request
  // above you can query many
  const result = await getRecommendedProfilesRequest({
    for: PROFILE_ID,
  });

  console.log('recommended profiles: result', result);

  return result;
};

(async () => {
  await recommendedProfiles();
})();
