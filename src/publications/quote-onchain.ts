import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { broadcastOnchainRequest } from '../broadcast/shared-broadcast';
import { explicitStart, PROFILE_ID, USE_GASLESS } from '../config';
import { getAddressFromSigner, signedTypeData, splitSignature } from '../ethers.service';
import { CreateOnchainQuoteTypedDataDocument, OnchainQuoteRequest } from '../graphql/generated';
import { uploadIpfs } from '../ipfs';
import { lensHub } from '../lens-hub';
import { waitUntilBroadcastTransactionIsComplete } from '../transaction/wait-until-complete';

export const createOnchainQuoteTypedData = async (request: OnchainQuoteRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateOnchainQuoteTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createOnchainQuoteTypedData;
};

const quoteOnChain = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('quote onchain: address', address);

  await login(address);

  // TODO! USE METADATA PACKAGE FOR NICE TYPINGS
  const ipfsResult = await uploadIpfs<any>({
    $schema:
      'https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/text-only/1.0.0/schema.json',
    name: 'My text',
    description: 'My text Description',
    external_url: 'https://mytext.com',
    attributes: [],
    image: 'https://text.com/image.png',
    lens: {
      title: 'My text',
      id: '1030ee6e-51cb-4a09-a74a-abdccc6ef890',
      locale: 'en-US',
      mainContentFocus: 'TEXT_ONLY',
      content: 'My text Content',
      tags: ['text'],
      appId: 'my-app-id',
    },
  });
  console.log('quote onchain: ipfs result', ipfsResult);

  // TODO! in docs make sure we talk about onchain referrals
  const request: OnchainQuoteRequest = {
    quoteOn: '0x03-0x03',
    contentURI: `ipfs://${ipfsResult.path}`,
  };

  const { id, typedData } = await createOnchainQuoteTypedData(request);
  console.log('quote onchain: result', { id, typedData });

  console.log('quote onchain: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('quote onchain: signature', signature);

  if (USE_GASLESS) {
    const broadcastResult = await broadcastOnchainRequest({ id, signature });

    await waitUntilBroadcastTransactionIsComplete(broadcastResult, 'Quote');
  } else {
    const { v, r, s } = splitSignature(signature);

    const tx = await lensHub.quoteWithSig(
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
    console.log('quote onchain: tx hash', tx.hash);
  }
};

(async () => {
  if (explicitStart(__filename)) {
    await quoteOnChain();
  }
})();
