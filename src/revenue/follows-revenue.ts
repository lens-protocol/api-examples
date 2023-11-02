import { apolloClient } from '../apollo-client';
import { FollowRevenueRequest, FollowRevenuesDocument } from '../graphql/generated';
import { knownProfileId } from '../known-common-input-constants';

export const followsRevenueRequest = async (request: FollowRevenueRequest) => {
  const result = await apolloClient.query({
    query: FollowRevenuesDocument,
    variables: {
      request,
    },
  });

  return result.data.followRevenues;
};

export const followsRevenue = async () => {
  const result = await followsRevenueRequest({
    for: knownProfileId,
  });
  console.log('profiles follow revenues: result', result);

  return result;
};

(async () => {
  await followsRevenue();
})();
