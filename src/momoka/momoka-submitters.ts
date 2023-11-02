import { apolloClient } from '../apollo-client';
import { MomokaSubmittersDocument } from '../graphql/generated';

(async function () {
  const result = await apolloClient.query({
    query: MomokaSubmittersDocument,
  });

  console.log(`total # of momoka submitters: ${result.data.momokaSubmitters.items.length}`);
})();
