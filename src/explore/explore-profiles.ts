
import { apolloClient } from '../apollo-client';


import {ExploreProfilesDocument } from '../graphql/generated'


// sort out types by generating them!
export const exploreProfiles = (exploreProfilesQueryRequest: any) => {
  return apolloClient.query({
    query: ExploreProfilesDocument,
    variables: {
      request: exploreProfilesQueryRequest,
    },
  });
};

export const explore = async () => {
  const result = await exploreProfiles({
    sortCriteria: 'MOST_FOLLOWERS',
    limit: 50,
  });

  console.log('explore: result', result);

  return result.data;
};

(async () => {
  await explore();
})();
