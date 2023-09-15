import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { getAddressFromSigner } from '../ethers.service';
import { MomokaTransactionDocument } from '../graphql/generated';
import { postOnMomoka } from '../publications/post-momoka';

(async function () {
  const address = getAddressFromSigner();
  console.log('post on momoka broadcast: address', address);

  await login(address);

  const post = await postOnMomoka();

  if (!post) {
    console.error('post on momoka broadcast: failed');
    return;
  }

  const result = await apolloClient.query({
    query: MomokaTransactionDocument,
    variables: { request: { for: post.proof.replace('ar://', '') } },
  });

  if (!result.data.momokaTransaction) {
    console.error('momoka transaction by momoka id: failed');
    return;
  }

  console.log(
    `momoka transaction publication id: result: ${result.data.momokaTransaction.publicationId}`
  );
})();
