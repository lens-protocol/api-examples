import { apolloClient } from '../apollo-client';
import { PoapHoldersDocument, PoapHoldersQueryRequest } from '../graphql/generated';

const getPoapHolders = async (request: PoapHoldersQueryRequest) => {
  const result = await apolloClient.query({
    query: PoapHoldersDocument,
    variables: {
      request,
    },
  });

  return result.data.poapHolders;
};

const poapEvent = async () => {
  const poapHolders = await getPoapHolders({
    eventId: 1,
  });

  console.log('poap holders: result', poapHolders);

  return poapHolders;
};

(async function () {
  await poapEvent();
})();
