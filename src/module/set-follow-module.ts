import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { broadcastOnchainRequest } from '../broadcast/shared-broadcast';
import { USE_GASLESS } from '../config';
import { getAddressFromSigner, signedTypeData, splitSignature } from '../ethers.service';
import {
  CreateSetFollowModuleTypedDataDocument,
  SetFollowModuleRequest,
} from '../graphql/generated';
import { lensHub } from '../lens-hub';
import { waitUntilBroadcastTransactionIsComplete } from '../transaction/wait-until-complete';

const createSetFollowModuleTypedData = async (request: SetFollowModuleRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateSetFollowModuleTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createSetFollowModuleTypedData;
};

export const setFollowModule = async () => {
  const address = getAddressFromSigner();
  console.log('set follow module: address', address);

  await login(address);

  // hard coded to make the code example clear
  const setFollowModuleRequest = {
    followModule: {
      freeFollowModule: true,
    },
  };

  const { id, typedData } = await createSetFollowModuleTypedData(setFollowModuleRequest);
  console.log('set follow module: result', { id, typedData });

  console.log('set follow module: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('set follow module: signature', signature);

  if (USE_GASLESS) {
    const broadcastResult = await broadcastOnchainRequest({ id, signature });

    await waitUntilBroadcastTransactionIsComplete(broadcastResult, 'unfollow');
  } else {
    const { v, r, s } = splitSignature(signature);

    const tx = await lensHub.setFollowModuleWithSig(
      typedData.value.profileId,
      typedData.value.followModule,
      typedData.value.followModuleInitData,
      {
        signer: address,
        v,
        r,
        s,
        deadline: typedData.value.deadline,
      }
    );
    console.log('set follow module: tx hash', tx.hash);
    return tx.hash;
  }
};

(async () => {
  await setFollowModule();
})();
