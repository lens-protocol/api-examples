
import { apolloClient } from '../apollo-client';

import {ExplorePublicationsDocument,ExplorePublicationRequest } from '../graphql/generated'



const explorePublications = (ExplorePublicationRequest: any) => {
  return apolloClient.query({
    query: ExplorePublicationsDocument,
    variables: {
      request: ExplorePublicationRequest,
    },
  });
};

export const explore = async () => {
  const result = await explorePublications({
    // switch for `TOP_COLLECTED` if you wanted collected!
    // switch for `TOP_MIRRORED` if you wanted top mirrored
    // switch for `TOP_COMMENTED` if you wanted top commented
    sortCriteria: 'LATEST',
    limit: 50,
  });

  console.log('explore: result', result.data);

  return result.data;
};

(async () => {
  await explore();
})();
