import { apolloClient } from '../apollo-client';
import { PROFILE_ID } from '../config';
import { FollowersDocument, FollowersRequest } from '../graphql/generated';

const followersRequest = async (request: FollowersRequest) => {
  const result = await apolloClient.query({
    query: FollowersDocument,
    variables: {
      request,
    },
  });

  return result.data.followers;
};

export const followers = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const result = await followersRequest({ of: profileId });
  console.log('followers: result', result);

  return result;
};

(async () => {
  await followers();
})();
