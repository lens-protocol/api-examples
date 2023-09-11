import { apolloClient } from '../apollo-client';
import { MutualPoapsDocument, MutualPoapsQueryRequest } from '../graphql/generated';

const getMutualPoaps = async (request: MutualPoapsQueryRequest) => {
  const result = await apolloClient.query({
    query: MutualPoapsDocument,
    variables: {
      request,
    },
  });

  return result.data.mutualPoaps.items;
};

const mutualPoaps = async () => {
  const poapEvent = await getMutualPoaps({
    observer: '0x01',
    viewing: '0x02',
  });

  console.log('mutual poaps: result', poapEvent);

  return poapEvent;
};

(async function () {
  await mutualPoaps();
})();
