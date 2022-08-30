
import { apolloClient } from '../apollo-client';

import {PublicationDocument } from '../graphql/generated'


const getPublicationRequest = (publicationId: string) => {
  return apolloClient.query({
    query: PublicationDocument,
    variables: {
      request: {
        publicationId,
      },
    },
  });
};

export const getPublication = async () => {
  const result = await getPublicationRequest('0x0f-0x01');
  console.log('publication: result', result.data);

  return result.data;
};

(async () => {
  await getPublication();
})();
