import { apolloClient } from '../apollo-client';
import {
  WhoCollectedPublicationDocument,
  WhoCollectedPublicationRequest,
} from '../graphql/generated';

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
  const result = await whoCollectedRequest({ publicationId: '0x0f-0x01' });
  console.log('who collected: result', result);

  return result;
};

(async () => {
  await whoCollected();
})();
