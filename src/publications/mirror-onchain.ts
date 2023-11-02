import util from 'util';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { broadcastOnchainRequest } from '../broadcast/shared-broadcast';
import { explicitStart, PROFILE_ID, USE_GASLESS } from '../config';
import { getAddressFromSigner, signedTypeData, splitSignature } from '../ethers.service';
import { CreateOnchainMirrorTypedDataDocument, OnchainMirrorRequest } from '../graphql/generated';
import { knownPostId } from '../known-common-input-constants';
import { lensHub } from '../lens-hub';
import { waitUntilBroadcastTransactionIsComplete } from '../transaction/wait-until-complete';

export const createOnchainMirrorTypedData = async (request: OnchainMirrorRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateOnchainMirrorTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createOnchainMirrorTypedData;
};

const mirrorOnChain = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('mirror onchain: address', address);

  await login(address);

  // TODO! in docs make sure we talk about onchain referrals
  const request: OnchainMirrorRequest = {
    mirrorOn: knownPostId,
    metadataURI: 'ipfs://324324',
  };

  const { id, typedData } = await createOnchainMirrorTypedData(request);
  console.log('mirror onchain: result', { id, typedData });

  console.log(
    'mirror onchain: typedData',
    util.inspect(typedData, { showHidden: false, depth: null })
  );

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('mirror onchain: signature', signature);

  if (USE_GASLESS) {
    const broadcastResult = await broadcastOnchainRequest({ id, signature });

    await waitUntilBroadcastTransactionIsComplete(broadcastResult, 'Mirror');
  } else {
    const { v, r, s } = splitSignature(signature);

    const tx = await lensHub.mirrorWithSig(
      {
        profileId: typedData.value.profileId,
        metadataURI: typedData.value.metadataURI,
        pointedProfileId: typedData.value.pointedProfileId,
        pointedPubId: typedData.value.pointedPubId,
        referrerProfileIds: typedData.value.referrerProfileIds,
        referrerPubIds: typedData.value.referrerPubIds,
        referenceModuleData: typedData.value.referenceModuleData,
      },
      {
        signer: address,
        v,
        r,
        s,
        deadline: typedData.value.deadline,
      }
    );
    console.log('mirror onchain: tx hash', tx.hash);
  }
};

(async () => {
  if (explicitStart(__filename)) {
    await mirrorOnChain();
  }
})();
