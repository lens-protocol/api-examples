import { apolloClient } from '../apollo-client';
import { explicitStart } from '../config';
import { QueryTxIdToTxHashArgs, TxIdToTxHashDocument } from '../graphql/generated';

const txIdToTxHashRequest = async (request: QueryTxIdToTxHashArgs) => {
  const result = await apolloClient.query({
    query: TxIdToTxHashDocument,
    variables: {
      txId: request.txId,
    },
    fetchPolicy: 'network-only',
  });

  return result.data.txIdToTxHash;
};

export const waitUntilComplete = async (input: QueryTxIdToTxHashArgs) => {
  while (true) {
    const txHash = await txIdToTxHashRequest(input);

    if (!txHash) {
      break;
    }

    console.log('pool until indexed: result', txHash);
    if (txHash) {
      console.log('txHash', txHash);
      return txHash;
    }

    console.log('pool until indexed: sleep for 1500 milliseconds then try again');
    // sleep for before trying again
    await new Promise((resolve) => setTimeout(resolve, 1500));
  }
};

(async () => {
  if (explicitStart(__filename)) {
    // await testTransaction();
  }
})();
