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
    // @ts-expect-error TODO: This is intentionally a number instead of a string since the backend throws when its a string (which should be correct)
    eventId: 1,
  });

  console.log('poap event: result', poapEvent);

  return poapEvent;
};

(async function () {
  await poapEvent();
})();
