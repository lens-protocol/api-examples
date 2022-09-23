import { apolloClient } from '../apollo-client';
import {
  ExplorePublicationRequest,
  ExplorePublicationsDocument,
  PublicationSortCriteria,
} from '../graphql/generated';

const explorePublications = (request: ExplorePublicationRequest) => {
  return apolloClient.query({
    query: ExplorePublicationsDocument,
    variables: {
      request,
    },
  });
};

export const explore = async () => {
  const result = await explorePublications({
    // switch for `PublicationSortCriteria.TOP_COLLECTED` if you wanted collected!
    // switch for `PublicationSortCriteria.TOP_MIRRORED` if you wanted top mirrored
    // switch for `PublicationSortCriteria.TOP_COMMENTED` if you wanted top commented
    sortCriteria: PublicationSortCriteria.Latest,
  });

  console.log('explore: result', result.data);

  return result.data;
};

(async () => {
  await explore();
})();
