import { apolloClient } from '../apollo-client';
import { PublicationDocument, PublicationRequest } from '../graphql/generated';
import { knownPostId } from '../known-common-input-constants';
// import { PublicationDocument, PublicationQueryRequest } from '../../graphql-v1/generated';

const getPublicationRequest = async (request: PublicationRequest) => {
  const result = await apolloClient.query({
    query: PublicationDocument,
    variables: {
      request,
    },
  });

  return result.data.publication;
};

export const getPublication = async () => {
  const result = await getPublicationRequest({
    for: knownPostId,
  });
  console.log('publication: result', result);

  return result;
};

(async () => {
  await getPublication();
})();
