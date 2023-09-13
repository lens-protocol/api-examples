import { apolloClient } from '../apollo-client';
import { MomokaTransactionsDocument } from '../graphql/generated';

(async function () {
  const result = await apolloClient.query({
    query: MomokaTransactionsDocument,
    variables: { request: {} },
  });

  console.log(`momoka transactions: result: ${result.data.momokaTransactions.items}`);
})();
