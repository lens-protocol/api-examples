import { apolloClient } from '../apollo-client';
import { FollowRevenueRequest, FollowRevenuesDocument } from '../graphql/generated';

export const profileFollowRevenueRequest = async (request: FollowRevenueRequest) => {
  const result = await apolloClient.query({
    query: FollowRevenuesDocument,
    variables: {
      request,
    },
  });

  return result.data.followRevenues;
};

export const profileFollowRevenue = async () => {
  const result = await profileFollowRevenueRequest({
    for: '0x15',
  });
  console.log('profiles follow revenues: result', result);

  return result;
};

(async () => {
  await profileFollowRevenue();
})();
