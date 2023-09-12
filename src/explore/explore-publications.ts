import { apolloClient } from '../apollo-client';
import {
  ExplorePublicationRequest,
  ExplorePublicationsDocument,
  ExplorePublicationsOrderByType,
} from '../graphql/generated';

const explorePublications = (request: ExplorePublicationRequest) => {
  return apolloClient.query({
    query: ExplorePublicationsDocument,
    variables: {
      request,
      statsRequest: {},
    },
  });
};

export const explore = async () => {
  const result = await explorePublications({
    orderBy: ExplorePublicationsOrderByType.Latest,
  });

  console.log('explore: result', result.data);

  return result.data;
};

(async () => {
  await explore();
})();
