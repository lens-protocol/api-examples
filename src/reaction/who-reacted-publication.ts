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
  const result = await whoReactedPublicationRequest({
    for: '0x01-0x01',
  });
  console.log('who reacted to : result', result);

  return result;
};

(async () => {
  await whoReactedPublication();
})();
