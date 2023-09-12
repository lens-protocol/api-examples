import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { broadcastOnchainRequest } from '../broadcast/shared-broadcast';
import { explicitStart, PROFILE_ID, USE_GASLESS } from '../config';
import { getAddressFromSigner, signedTypeData, splitSignature } from '../ethers.service';
import { CreateOnchainCommentTypedDataDocument, OnchainCommentRequest } from '../graphql/generated';
import { uploadIpfs } from '../ipfs';
import { knownPostId } from '../known-common-input-constants';
import { lensHub } from '../lens-hub';
import { waitUntilBroadcastTransactionIsComplete } from '../transaction/wait-until-complete';
import { publicationMetadataTextOnly } from './helpers/publication-metadata-mocks';

export const createOnchainCommentTypedData = async (request: OnchainCommentRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateOnchainCommentTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createOnchainCommentTypedData;
};

const commentOnChain = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('comment onchain: address', address);

  await login(address);

  const ipfsResult = await uploadIpfs(publicationMetadataTextOnly);

  // TODO! in docs make sure we talk about onchain referrals
  const request: OnchainCommentRequest = {
    commentOn: knownPostId,
    contentURI: `ipfs://${ipfsResult.path}`,
    // you can play around with open actions modules here all request
    // objects are in `publication-open-action-options.ts`
    // openActionModules: [simpleCollectAmountAndLimit(address)],
    //
    // you can play around with reference modules here
    // all request objects are in `publication-reference-module-options.ts`,
    // referenceModule: referenceModuleFollowOnly,
  };

  const { id, typedData } = await createOnchainCommentTypedData(request);
  console.log('comment onchain: result', { id, typedData });

  console.log('comment onchain: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('comment onchain: signature', signature);

  if (USE_GASLESS) {
    const broadcastResult = await broadcastOnchainRequest({ id, signature });

    await waitUntilBroadcastTransactionIsComplete(broadcastResult, 'Comment');
  } else {
    const { v, r, s } = splitSignature(signature);

    const tx = await lensHub.commentWithSig(
      {
        profileId: typedData.value.profileId,
        contentURI: typedData.value.contentURI,
        pointedProfileId: typedData.value.pointedProfileId,
        pointedPubId: typedData.value.pointedPubId,
        referrerProfileIds: typedData.value.referrerProfileIds,
        referrerPubIds: typedData.value.referrerPubIds,
        referenceModuleData: typedData.value.referenceModuleData,
        actionModules: typedData.value.actionModules,
        actionModulesInitDatas: typedData.value.actionModulesInitDatas,
        referenceModule: typedData.value.referenceModule,
        referenceModuleInitData: typedData.value.referenceModuleInitData,
      },
      {
        signer: address,
        v,
        r,
        s,
        deadline: typedData.value.deadline,
      },
      { gasLimit: 10000000 }
    );
    console.log('comment onchain: tx hash', tx.hash);
  }
};

(async () => {
  if (explicitStart(__filename)) {
    await commentOnChain();
  }
})();
