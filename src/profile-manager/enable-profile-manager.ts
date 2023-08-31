import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { broadcastOnchainRequest } from '../broadcast/shared-broadcast';
import { PROFILE_ID, USE_GASLESS } from '../config';
import { getAddressFromSigner, signedTypeData } from '../ethers.service';
import {
  ChangeProfileManagersRequest,
  CreateChangeProfileManagersTypedDataDocument,
} from '../graphql/generated';

import { waitUntilBroadcastTransactionIsComplete } from '../transaction/wait-until-complete';

export const createChangeProfileManagersTypedData = async (
  request: ChangeProfileManagersRequest
) => {
  const result = await apolloClient.mutate({
    mutation: CreateChangeProfileManagersTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createChangeProfileManagersTypedData;
};

export const enableLensProfileManager = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('change profile manager: address', address);

  await login(address);

  const { id, typedData } = await createChangeProfileManagersTypedData({
    approveLensManager: true,
    // leave it blank if you want to use the lens API dispatcher!
    // changeManagers: [
    //   {
    //     action: ChangeProfileManagerActionType.Add,
    //      address: '0xEEA0C1f5ab0159dba749Dc0BAee462E5e293daaF',
    //   },
    // ],
  });
  console.log('change profile manager:', { id, typedData });

  console.log('change profile manager: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('change profile manager: signature', signature);

  if (USE_GASLESS) {
    const broadcastResult = await broadcastOnchainRequest({ id, signature });

    await waitUntilBroadcastTransactionIsComplete(broadcastResult, 'change profile manager');
  } else {
    // TODO: add with sig method calling updates lens hub contract
    throw new Error('method not implemented');
  }
};

(async () => {
  await enableLensProfileManager();
})();
