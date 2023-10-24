import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import {
  UnlinkHandleFromProfileDocument,
  UnlinkHandleFromProfileRequest,
} from '../graphql/generated';
import { waitUntilLensManagerTransactionIsComplete } from '../transaction/wait-until-complete';

const unlinkHandleFromProfile = async (request: UnlinkHandleFromProfileRequest) => {
  const result = await apolloClient.mutate({
    mutation: UnlinkHandleFromProfileDocument,
    variables: {
      request,
    },
  });

  return result.data!.unlinkHandleFromProfile;
};

export const unlinkHandleFromProfileManager = async () => {
  const address = getAddressFromSigner();
  console.log('unlink handle from profile lens profile manager: address', address);

  await login(address);

  const result = await unlinkHandleFromProfile({
    handle: 'test/wagmi',
  });
  console.log('unlink handle from profile lens profile manager: result', result);
  await waitUntilLensManagerTransactionIsComplete(result, 'unlinkHandleFromProfile');
};

(async () => {
  if (explicitStart(__filename)) {
    await unlinkHandleFromProfileManager();
  }
})();
