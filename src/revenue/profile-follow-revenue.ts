import { apolloClient } from '../apollo-client';
import {
  ProfileFollowRevenueDocument,
  ProfileFollowRevenueQueryRequest,
} from '../../graphql-v1/generated';

export const profileFollowRevenueRequest = async (request: ProfileFollowRevenueQueryRequest) => {
  const result = await apolloClient.query({
    query: ProfileFollowRevenueDocument,
    variables: {
      request,
    },
  });

  return result.data.profileFollowRevenue;
};

export const profileFollowRevenue = async () => {
  const result = await profileFollowRevenueRequest({ profileId: '0x15' });
  console.log('profiles follow revenues: result', result);

  return result;
};

(async () => {
  await profileFollowRevenue();
})();
