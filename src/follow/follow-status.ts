import { apolloClient } from '../apollo-client';
import { PROFILE_ID } from '../config';
import {
  FollowersDocument,
  FollowStatusBulkDocument,
  FollowStatusBulkRequest,
} from '../graphql/generated';
import { followerProfileId, knownProfileId } from '../known-common-input-constants';

const followStatusRequest = async (request: FollowStatusBulkRequest) => {
  const result = await apolloClient.query({
    query: FollowStatusBulkDocument,
    variables: {
      request,
    },
  });

  return result.data.followStatusBulk;
};

export const followStatus = async () => {
  const result = await followStatusRequest({
    followInfos: [
      {
        profileId: knownProfileId,
        follower: followerProfileId,
      },
    ],
  });

  console.log('follow status: result', result);

  return result;
};

(async () => {
  await followStatus();
})();
