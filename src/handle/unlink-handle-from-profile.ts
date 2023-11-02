import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { broadcastOnchainRequest } from '../broadcast/shared-broadcast';
import { USE_GASLESS } from '../config';
import { getAddressFromSigner, signedTypeData, splitSignature } from '../ethers.service';
import {
  CreateUnlinkHandleFromProfileTypedDataDocument,
  UnlinkHandleFromProfileRequest,
} from '../graphql/generated';
import { lensTokenHandleRegistry } from '../lens-token-handle-registry';
import { waitUntilBroadcastTransactionIsComplete } from '../transaction/wait-until-complete';

const createUnlinkHandleFromProfileTypedData = async (request: UnlinkHandleFromProfileRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateUnlinkHandleFromProfileTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createUnlinkHandleFromProfileTypedData;
};

export const unlink = async () => {
  const address = getAddressFromSigner();
  console.log('unlink handle from profile: address', address);

  await login(address);

  const { id, typedData } = await createUnlinkHandleFromProfileTypedData({
    handle: 'test/wagmi',
  });
  console.log('unlink handle from profile: result', { id, typedData });

  console.log('unlink handle from profile: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('unlink handle from profile: signature', signature);

  if (USE_GASLESS) {
    const broadcastResult = await broadcastOnchainRequest({ id, signature });

    await waitUntilBroadcastTransactionIsComplete(broadcastResult, 'unlink handle from profile');
  } else {
    const { v, r, s } = splitSignature(signature);

    const tx = await lensTokenHandleRegistry.unlinkWithSig(
      typedData.value.handleId,
      typedData.value.profileId,
      {
        signer: address,
        v,
        r,
        s,
        deadline: typedData.value.deadline,
      }
    );
    console.log('unlink handle from profile: tx hash', tx.hash);
    return tx.hash;
  }
};

(async () => {
  await unlink();
})();
