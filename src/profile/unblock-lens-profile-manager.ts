import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { UnblockDocument, UnblockRequest } from '../graphql/generated';
import { knownProfileId } from '../known-common-input-constants';
import { waitUntilLensManagerTransactionIsComplete } from '../transaction/wait-until-complete';

const unblock = async (request: UnblockRequest) => {
  const result = await apolloClient.mutate({
    mutation: UnblockDocument,
    variables: {
      request,
    },
  });

  return result.data!.unblock;
};

export const unblockLensProfileManager = async (profileId: string = knownProfileId) => {
  const address = getAddressFromSigner();
  console.log('unblock lens profile manager: address', address);

  await login(address);

  const result = await unblock({
    profiles: [profileId],
  });
  console.log('unblock lens profile manager: result', result);
  await waitUntilLensManagerTransactionIsComplete(result, 'unblock');
};

(async () => {
  if (explicitStart(__filename)) {
    await unblockLensProfileManager();
  }
})();
