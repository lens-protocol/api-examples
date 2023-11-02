import { apolloClient } from '../apollo-client';
import { ProfileSearchRequest, SearchProfilesDocument } from '../graphql/generated';

const searchRequest = async (request: ProfileSearchRequest) => {
  const result = await apolloClient.query({
    query: SearchProfilesDocument,
    variables: {
      request,
    },
  });

  return result.data.searchProfiles;
};

export const search = async () => {
  const result = await searchRequest({
    query: 'josh',
  });
  console.log('search profile: result', result);

  return result;
};

(async () => {
  await search();
})();
