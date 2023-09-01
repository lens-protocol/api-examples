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

export const unlinkHandleFromProfileManager = async (profileId: string = '0x02') => {
  const address = getAddressFromSigner();
  console.log('unlink handle from profile lens profile manager: address', address);

  await login(address);

  const result = await unlinkHandleFromProfile({
    handleId: '0x443e20e50db22e9d9b71d12d2d6e67a50096909698e387edd5a38f71707fb1d4',
  });
  console.log('unlink handle from profile lens profile manager: result', result);
  await waitUntilLensManagerTransactionIsComplete(result, 'unlinkHandleFromProfile');
};

(async () => {
  if (explicitStart(__filename)) {
    await unlinkHandleFromProfileManager();
  }
})();
