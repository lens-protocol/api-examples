import { apolloClient } from '../apollo-client';
import {
  SearchProfilesDocument,
  SearchQueryRequest,
  SearchRequestTypes,
} from '../graphql/generated';

const searchRequest = async (request: SearchQueryRequest) => {
  const result = await apolloClient.query({
    query: SearchProfilesDocument,
    variables: {
      request,
    },
  });

  return result.data.search;
};

export const search = async () => {
  const result = await searchRequest({
    query: 'josh',
    type: SearchRequestTypes.Profile,
  });
  console.log('search profile: result', result);

  return result;
};

(async () => {
  await search();
})();
