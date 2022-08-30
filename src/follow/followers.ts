import { apolloClient } from '../apollo-client';
import { PROFILE_ID } from '../config';
import {FollowersDocument } from '../graphql/generated'

const followersRequest = (profileId: string) => {
  return apolloClient.query({
    query: FollowersDocument,
    variables: {
      request: {
        profileId,
        limit: 10,
      },
    },
  });
};

export const followers = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const result = await followersRequest(profileId);
  console.log('followers: result', result.data);

  return result.data;
};

(async () => {
  await followers();
})();
