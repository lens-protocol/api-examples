import { apolloClient } from '../apollo-client';
import {
  SearchPublicationsDocument,
  SearchQueryRequest,
  SearchRequestTypes,
} from '../graphql/generated';

const searchRequest = async (request: SearchQueryRequest) => {
  const result = await apolloClient.query({
    query: SearchPublicationsDocument,
    variables: {
      request,
    },
  });

  return result.data.search;
};

export const search = async () => {
  const result = await searchRequest({
    query: 'lens',
    type: SearchRequestTypes.Publication,
  });
  console.log('search publications: result', result);

  return result;
};

(async () => {
  await search();
})();
