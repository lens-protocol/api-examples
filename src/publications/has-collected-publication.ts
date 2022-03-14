import { gql } from '@apollo/client/core';
import { apolloClient } from '../apollo-client';
import { prettyJSON } from '../helpers';

const HAS_COLLECTED = `
  query($request: HasCollectedRequest!) {
    hasCollected(request: $request) {
      walletAddress
      results {
        collected
        publicationId
        collectedTimes
      }
    }
  }
`;

const hasCollectedRequest = (
  collectRequests: { walletAddress: string; publicationIds: string[] }[]
) => {
  return apolloClient.query({
    query: gql(HAS_COLLECTED),
    variables: {
      request: {
        collectRequests,
      },
    },
  });
};

export const hasCollected = async () => {
  const result = await hasCollectedRequest([
    {
      walletAddress: '0x109eCbC12836F7Dd63255254fa973d21425819aE',
      publicationIds: ['0x032f1a-0x02', '0x17-0x01'],
    },
  ]);
  prettyJSON('has collected: result', result.data);

  return result.data;
};

(async () => {
  await hasCollected();
})();
