import { apolloClient } from '../apollo-client';
import { WhoActedOnPublicationDocument, WhoActedOnPublicationRequest } from '../graphql/generated';

export const getWhoActedOnPublication = async (request: WhoActedOnPublicationRequest) => {
  const result = await apolloClient.query({
    query: WhoActedOnPublicationDocument,
    variables: {
      request,
    },
  });

  return result.data.whoActedOnPublication;
};

// currently does not work due to postgres syntax error
export const whoActedOnPublication = async () => {
  const result = await getWhoActedOnPublication({ on: '0x41-0x03' });
  console.log('who acted on publication: result', result);

  return result;
};

(async () => {
  await whoActedOnPublication();
})();
