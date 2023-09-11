import { apolloClient } from '../apollo-client';
import { FollowingDocument, FollowingRequest } from '../graphql/generated';
// import { FollowingDocument, FollowingRequest } from '../../graphql-v1/generated';

const followingRequest = async (request: FollowingRequest) => {
  const result = await apolloClient.query({
    query: FollowingDocument,
    variables: {
      request,
      statsRequest: {},
      reactionsRequest: {},
      countOpenActionsRequest: {},
    },
  });

  return result.data.following;
};

export const following = async () => {
  const profileId = '0x0e';
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
