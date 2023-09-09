import { apolloClient } from '../apollo-client';
import { PROFILE_ID } from '../config';
import { QueryMutualFollowersProfilesArgs } from '../../graphql-v1/generated';
import { MutualFollowersDocument, MutualFollowersRequest } from '../graphql/generated';

const mutualFollowersRequest = async (request: MutualFollowersRequest) => {
  const result = await apolloClient.query({
    query: MutualFollowersDocument,
    variables: {
      request,
    },
  });

  return result.data.mutualFollowers.items;
};

export const mutualFollowers = async () => {
  const result = await mutualFollowersRequest({ observer: '0x01', viewing: '0x03' });
  console.log('followers: result', result);

  return result;
};

(async () => {
  await mutualFollowers();
})();
