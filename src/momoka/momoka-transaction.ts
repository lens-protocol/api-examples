import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { createMomokaPost } from '../broadcast/broadcast-momoka-post-example';
import { getAddressFromSigner } from '../ethers.service';
import { MomokaTransactionDocument } from '../graphql/generated';

(async function () {
  const address = getAddressFromSigner();
  console.log('post on momoka broadcast: address', address);

  await login(address);

  const momokaId = await createMomokaPost();

  const result = await apolloClient.query({
    query: MomokaTransactionDocument,
    variables: { request: { id: momokaId } },
  });

  console.log(
    `momoka transaction publication id: result: ${result.data.momokaTransaction?.publicationId}`
  );
})();
