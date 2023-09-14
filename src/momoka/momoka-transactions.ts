import { apolloClient } from '../apollo-client';
import { MomokaTransactionsDocument } from '../graphql/generated';
import { prettyJSON } from '../helpers';

(async function () {
  const result = await apolloClient.query({
    query: MomokaTransactionsDocument,
    variables: { request: {} },
  });

  prettyJSON(`momoka transactions: result: `, result.data.momokaTransactions.items);
})();
