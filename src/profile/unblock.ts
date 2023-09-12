import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { broadcastOnchainRequest } from '../broadcast/shared-broadcast';
import { USE_GASLESS } from '../config';
import { getAddressFromSigner, signedTypeData, splitSignature } from '../ethers.service';
import { BlockRequest, CreateUnblockProfilesTypedDataDocument } from '../graphql/generated';
import { lensHub } from '../lens-hub';
import { waitUntilBroadcastTransactionIsComplete } from '../transaction/wait-until-complete';

const createUnblockProfilesTypedData = async (request: BlockRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateUnblockProfilesTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createUnblockProfilesTypedData;
};

export const unblock = async () => {
  const address = getAddressFromSigner();
  console.log('unblock: address', address);

  await login(address);

  const { id, typedData } = await createUnblockProfilesTypedData({ profiles: ['0x02'] });
  console.log('unblock: result', { id, typedData });

  console.log('unblock: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('unblock: signature', signature);

  if (USE_GASLESS) {
    const broadcastResult = await broadcastOnchainRequest({ id, signature });

    await waitUntilBroadcastTransactionIsComplete(broadcastResult, 'block');
  } else {
    const { v, r, s } = splitSignature(signature);

    const tx = await lensHub.setBlockStatusWithSig(
      typedData.value.byProfileId,
      typedData.value.idsOfProfilesToSetBlockStatus,
      typedData.value.blockStatus,
      {
        signer: address,
        v,
        r,
        s,
        deadline: typedData.value.deadline,
      }
    );
    console.log('unblock: tx hash', tx.hash);
    return tx.hash;
  }
};

(async () => {
  await unblock();
})();
