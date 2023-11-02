import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { broadcastOnchainRequest } from '../broadcast/shared-broadcast';
import { USE_GASLESS, explicitStart, POST_ID } from '../config';
import { getAddressFromSigner, signedTypeData, splitSignature } from '../ethers.service';
import {
  ActOnOpenActionRequest,
  CreateActOnOpenActionTypedDataDocument,
} from '../graphql/generated';
import { lensHub } from '../lens-hub';
import { waitUntilBroadcastTransactionIsComplete } from '../transaction/wait-until-complete';

export const createActOnOpenActionTypedData = async (request: ActOnOpenActionRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateActOnOpenActionTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createActOnOpenActionTypedData;
};

export const actOn = async () => {
  const address = getAddressFromSigner();
  console.log('act on: address', address);

  await login(address);

  const { id, typedData } = await createActOnOpenActionTypedData({
    for: POST_ID || '0x03-0x4b',
    actOn: {
      simpleCollectOpenAction: true,
    },
  });
  console.log('act on: result', { id, typedData });
  console.log('act on: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('act on: signature', signature);

  if (USE_GASLESS) {
    const broadcastResult = await broadcastOnchainRequest({ id, signature });

    await waitUntilBroadcastTransactionIsComplete(broadcastResult, 'act on');
  } else {
    const { v, r, s } = splitSignature(signature);

    const tx = await lensHub.actWithSig(
      {
        publicationActedProfileId: typedData.value.publicationActedProfileId,
        publicationActedId: typedData.value.publicationActedId,
        actorProfileId: typedData.value.actorProfileId,
        referrerProfileIds: typedData.value.referrerProfileIds,
        referrerPubIds: typedData.value.referrerPubIds,
        actionModuleAddress: typedData.value.actionModuleAddress,
        actionModuleData: typedData.value.actionModuleData,
      },
      {
        signer: address,
        v,
        r,
        s,
        deadline: typedData.value.deadline,
      }
    );
    console.log('act on: tx hash', tx.hash);
    return tx.hash;
  }
};

(async () => {
  if (explicitStart(__filename)) {
    await actOn();
  }
})();
