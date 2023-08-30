import { apolloClient } from '../apollo-client';
import {
  ExploreProfilesDocument,
  ExploreProfilesRequest,
  ProfileSortCriteria,
} from '../../graphql-v1/generated';

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
    sortCriteria: ProfileSortCriteria.MostFollowers,
  });

  console.log('explore: result', result);

  return result;
};

(async () => {
  await explore();
})();
