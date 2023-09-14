import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import {
  HandleUnlinkFromProfileDocument,
  HandleUnlinkFromProfileRequest,
} from '../graphql/generated';
import { waitUntilLensManagerTransactionIsComplete } from '../transaction/wait-until-complete';

const unlinkHandleFromProfile = async (request: HandleUnlinkFromProfileRequest) => {
  const result = await apolloClient.mutate({
    mutation: HandleUnlinkFromProfileDocument,
    variables: {
      request,
    },
  });

  return result.data!.handleUnlinkFromProfile;
};

export const unlinkHandleFromProfileManager = async () => {
  const address = getAddressFromSigner();
  console.log('unlink handle from profile lens profile manager: address', address);

  await login(address);

  const result = await unlinkHandleFromProfile({
    handle: 'wagmi.test',
  });
  console.log('unlink handle from profile lens profile manager: result', result);
  await waitUntilLensManagerTransactionIsComplete(result, 'unlinkHandleFromProfile');
};

(async () => {
  if (explicitStart(__filename)) {
    await unlinkHandleFromProfileManager();
  }
})();
