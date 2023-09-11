import { apolloClient } from '../apollo-client';
import { MutualFollowersDocument, MutualFollowersRequest } from '../graphql/generated';

export const mutualProfileFollowsRequest = async (request: MutualFollowersRequest) => {
  const result = await apolloClient.query({
    query: MutualFollowersDocument,
    variables: {
      request,
    },
  });

  return result.data.mutualFollowers;
};

export const mutualProfileFollows = async () => {
  const result = await mutualProfileFollowsRequest({
    observer: '0x01',
    viewing: '0x02',
  });
  console.log('mutual profiles follow: result', result);

  return result;
};

(async () => {
  await mutualProfileFollows();
})();
