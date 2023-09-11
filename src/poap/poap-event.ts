import { apolloClient } from '../apollo-client';
import { PoapEventDocument, PoapEventQueryRequest } from '../graphql/generated';

const getPoapEvent = async (request: PoapEventQueryRequest) => {
  const result = await apolloClient.query({
    query: PoapEventDocument,
    variables: {
      request,
    },
  });

  return result.data.poapEvent;
};

const poapEvent = async () => {
  const poapEvent = await getPoapEvent({
    eventId: '1',
  });

  console.log('poap event: result', poapEvent);

  return poapEvent;
};

(async function () {
  await poapEvent();
})();
