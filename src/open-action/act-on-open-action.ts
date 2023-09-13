import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { getAddressFromSigner } from '../ethers.service';
import {
  ActOnOpenActionDocument,
  CreateActOnOpenActionTypedDataDocument,
} from '../graphql/generated';

(async function () {
  const address = getAddressFromSigner();
  console.log('act on open action: address', address);

  await login(address);

  const createOpenActionRes = await apolloClient.mutate({
    mutation: CreateActOnOpenActionTypedDataDocument,
    variables: {
      request: {
        for: '0x01-0x01',
        actOn: {
          simpleCollectOpenAction: true,
        },
      },
    },
  });

  console.info('create open action result', createOpenActionRes);

  await apolloClient.mutate({
    mutation: ActOnOpenActionDocument,
    variables: {
      request: {
        for: '0x01-0x01',
        actOn: {
          simpleCollectOpenAction: true,
        },
      },
    },
  });
})();
