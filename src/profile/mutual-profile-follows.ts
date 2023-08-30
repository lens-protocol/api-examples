import { apolloClient } from '../apollo-client';
import {
  MutualFollowersProfilesDocument,
  MutualFollowersProfilesQueryRequest,
} from '../../graphql-v1/generated';

export const mutualProfileFollowsRequest = async (request: MutualFollowersProfilesQueryRequest) => {
  const result = await apolloClient.query({
    query: MutualFollowersProfilesDocument,
    variables: {
      request,
    },
  });

  return result.data.mutualFollowersProfiles;
};

export const mutualProfileFollows = async () => {
  const result = await mutualProfileFollowsRequest({
    viewingProfileId: '0x01',
    yourProfileId: '0x02',
  });
  console.log('mutual profiles follow: result', result);

  return result;
};

(async () => {
  await mutualProfileFollows();
})();
