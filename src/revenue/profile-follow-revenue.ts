import { apolloClient } from '../apollo-client';
import { FollowRevenueRequest, FollowRevenuesDocument } from '../graphql/generated';
import { knownProfileId } from '../known-common-input-constants';

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
    for: knownProfileId,
  });
  console.log('profiles follow revenues: result', result);

  return result;
};

(async () => {
  await profileFollowRevenue();
})();
