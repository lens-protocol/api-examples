import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { broadcastOnchainRequest } from '../broadcast/shared-broadcast';
import { USE_GASLESS } from '../config';
import { getAddressFromSigner, signedTypeData, splitSignature } from '../ethers.service';
import { BlockRequest, CreateBlockProfilesTypedDataDocument } from '../graphql/generated';
import { lensHub } from '../lens-hub';
import { waitUntilBroadcastTransactionIsComplete } from '../transaction/wait-until-complete';

const createBlockProfilesTypedData = async (request: BlockRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateBlockProfilesTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createBlockProfilesTypedData;
};

export const block = async () => {
  const address = getAddressFromSigner();
  console.log('block: address', address);

  await login(address);

  const { id, typedData } = await createBlockProfilesTypedData({ profiles: ['0x02'] });
  console.log('block: result', { id, typedData });

  console.log('block: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('block: signature', signature);

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
    console.log('block: tx hash', tx.hash);
    return tx.hash;
  }
};

(async () => {
  await block();
})();
