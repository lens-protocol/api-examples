import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { ActOnOpenActionDocument, ActOnOpenActionRequest } from '../graphql/generated';
import { waitUntilLensManagerTransactionIsComplete } from '../transaction/wait-until-complete';

const actOn = async (request: ActOnOpenActionRequest) => {
  const result = await apolloClient.mutate({
    mutation: ActOnOpenActionDocument,
    variables: {
      request,
    },
  });

  return result.data!.actOnOpenAction;
};

export const actOnProfileManager = async () => {
  const address = getAddressFromSigner();
  console.log('act on: address', address);

  await login(address);

  const result = await actOn({
    for: '0x03-0x4b',
    actOn: {
      simpleCollectOpenAction: true,
    },
  });
  console.log('act on: result', result);
  await waitUntilLensManagerTransactionIsComplete(result, 'unfollow');
};

(async () => {
  if (explicitStart(__filename)) {
    await actOnProfileManager();
  }
})();
