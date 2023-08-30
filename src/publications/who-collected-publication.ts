import { apolloClient } from '../apollo-client';
import {
  WhoCollectedPublicationDocument,
  WhoCollectedPublicationRequest,
} from '../../graphql-v1/generated';

export const whoCollectedRequest = async (request: WhoCollectedPublicationRequest) => {
  const result = await apolloClient.query({
    query: WhoCollectedPublicationDocument,
    variables: {
      request,
    },
  });

  return result.data.whoCollectedPublication;
};

export const whoCollected = async () => {
  const result = await whoCollectedRequest({ publicationId: '0x41-0x03' });
  console.log('who collected: result', result);

  return result;
};

(async () => {
  await whoCollected();
})();
