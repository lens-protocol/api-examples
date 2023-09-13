import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { getAddressFromSigner } from '../ethers.service';
import { CreateLegacyCollectTypedDataDocument, LegacyCollectDocument } from '../graphql/generated';

// This does not work correctly due to resolver returning unexpected data back
(async function () {
  const address = getAddressFromSigner();
  console.log('legacy collect: address', address);

  await login(address);

  const res = await apolloClient.mutate({
    mutation: CreateLegacyCollectTypedDataDocument,
    variables: {
      request: {
        on: '0x01-0x01',
      },
    },
  });

  console.log('create legacy collect typed data result', res);

  const legacyCollectRes = await apolloClient.mutate({
    mutation: LegacyCollectDocument,
    variables: {
      request: {
        on: '0x01-0x01',
      },
    },
  });

  console.log('legacy collect result', legacyCollectRes);
})();
