import { apolloClient } from '../apollo-client';
import { explicitStart } from '../config';
import { QueryTxIdToTxHashArgs, TxIdToTxHashDocument } from '../graphql/generated';

const txIdToTxHashRequest = async (request: QueryTxIdToTxHashArgs) => {
  const result = await apolloClient.query({
    query: TxIdToTxHashDocument,
    variables: request,
    fetchPolicy: 'network-only',
  });

  return result.data.txIdToTxHash;
};

const txIdToTxHash = async () => {
  const result = await txIdToTxHashRequest({
    txId: '41e86c8e-6cb0-417f-b359-ae681194394a',
  });

  console.log('txIdToTxHash result:', result);
};

(async () => {
  if (explicitStart(__filename)) {
    await txIdToTxHash();
  }
})();
