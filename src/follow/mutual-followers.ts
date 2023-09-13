import { apolloClient } from '../apollo-client';
import { PROFILE_ID } from '../config';
import { MutualFollowersDocument, MutualFollowersRequest } from '../graphql/generated';
import { knownProfileId } from '../known-common-input-constants';

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
  const result = await mutualFollowersRequest({
    observer: PROFILE_ID,
    viewing: knownProfileId,
  });
  console.log('mutualFollowers: result', result);

  return result;
};

(async () => {
  await mutualFollowers();
})();
