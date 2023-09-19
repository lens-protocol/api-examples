import { apolloClient } from '../apollo-client';
import {
  PublicationSearchRequest,
  PublicationType,
  SearchPublicationsDocument,
} from '../graphql/generated';

const searchRequest = async (request: PublicationSearchRequest) => {
  const result = await apolloClient.query({
    query: SearchPublicationsDocument,
    variables: {
      request,
    },
  });

  return result.data.searchPublications;
};

export const search = async () => {
  const result = await searchRequest({
    query: 'content',
    // TODO: Fix to where being not required
    where: {},
  });
  console.log('search publications: result', result);

  return result;
};

(async () => {
  await search();
})();
