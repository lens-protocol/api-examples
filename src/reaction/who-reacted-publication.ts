import { apolloClient } from '../apollo-client';
import { WhoReactedPublicationDocument, WhoReactedPublicationRequest } from '../graphql/generated';

export const whoReactedPublicationRequest = async (request: WhoReactedPublicationRequest) => {
  const result = await apolloClient.query({
    query: WhoReactedPublicationDocument,
    variables: {
      request,
    },
  });

  return result.data.whoReactedPublication;
};

export const whoReactedPublication = async () => {
  const result = await whoReactedPublicationRequest({ publicationId: '0x0f-0x01' });
  console.log('who collected: result', result);

  return result;
};

(async () => {
  await whoReactedPublication();
})();
