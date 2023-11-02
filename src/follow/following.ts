import { apolloClient } from '../apollo-client';
import { PROFILE_ID } from '../config';
import { FollowingDocument, FollowingRequest } from '../graphql/generated';

const followingRequest = async (request: FollowingRequest) => {
  const result = await apolloClient.query({
    query: FollowingDocument,
    variables: {
      request,
    },
  });

  return result.data.following;
};

export const following = async () => {
  const profileId = PROFILE_ID;
  console.log('following: ProfileId', profileId);

  const result = await followingRequest({
    for: profileId,
  });
  console.log('following: result', result);

  return result;
};

(async () => {
  await following();
})();
