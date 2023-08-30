import { apolloClient } from '../apollo-client';
import {
  WhoReactedPublicationDocument,
  WhoReactedPublicationRequest,
} from '../../graphql-v1/generated';

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
  const result = await whoReactedPublicationRequest({ publicationId: '0x41-0x03' });
  console.log('who collected: result', result);

  return result;
};

(async () => {
  await whoReactedPublication();
})();
