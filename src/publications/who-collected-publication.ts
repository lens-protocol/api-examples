
import { apolloClient } from '../apollo-client';

import {WhoCollectedPublicationDocument } from '../graphql/generated'


export const whoCollectedRequest = (publicationId: string) => {
  return apolloClient.query({
    query: WhoCollectedPublicationDocument,
    variables: {
      request: {
        publicationId,
      },
    },
  });
};

export const whoCollected = async () => {
  const result = await whoCollectedRequest('0x0f-0x01');
  console.log('who collected: result', result.data);

  return result.data;
};

(async () => {
  await whoCollected();
})();
