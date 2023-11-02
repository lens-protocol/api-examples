import { apolloClient } from '../apollo-client';
import { PublicationsTagsDocument, PublicationsTagsRequest } from '../graphql/generated';

const getPublicationsTagsRequest = async (request: PublicationsTagsRequest) => {
  const result = await apolloClient.query({
    query: PublicationsTagsDocument,
    variables: {
      request,
    },
  });

  return result.data.publicationsTags;
};

export const getPublicationsTags = async () => {
  const result = await getPublicationsTagsRequest({
    where: {
      publishedOn: [],
    },
  });
  console.log('publications tags: result', result);

  return result;
};

(async () => {
  await getPublicationsTags();
})();
