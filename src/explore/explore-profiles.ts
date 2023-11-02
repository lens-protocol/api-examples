import { apolloClient } from '../apollo-client';
import {
  ExploreProfilesDocument,
  ExploreProfilesOrderByType,
  ExploreProfilesRequest,
} from '../graphql/generated';

// sort out types by generating them!
export const exploreProfiles = async (request: ExploreProfilesRequest) => {
  const result = await apolloClient.query({
    query: ExploreProfilesDocument,
    variables: {
      request,
    },
  });

  return result.data.exploreProfiles;
};

export const explore = async () => {
  const result = await exploreProfiles({
    orderBy: ExploreProfilesOrderByType.MostFollowers,
  });

  console.log('explore: result', result);

  return result;
};

(async () => {
  await explore();
})();
