import { apolloClient } from '../apollo-client';
import { MomokaSummaryDocument } from '../graphql/generated';

(async function () {
  const result = await apolloClient.query({
    query: MomokaSummaryDocument,
  });

  console.log(`total # of momoka transactions: ${result.data.momokaSummary.totalTransactions}`);
})();
