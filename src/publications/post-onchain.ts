import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { broadcastOnchainRequest } from '../broadcast/shared-broadcast';
import { explicitStart, PROFILE_ID, USE_GASLESS } from '../config';
import { getAddressFromSigner, signedTypeData, splitSignature } from '../ethers.service';
import { CreateOnchainPostTypedDataDocument, OnchainPostRequest } from '../graphql/generated';
import { uploadIpfs } from '../ipfs';
import { lensHub } from '../lens-hub';
import { waitUntilBroadcastTransactionIsComplete } from '../transaction/wait-until-complete';

export const createOnchainPostTypedData = async (request: OnchainPostRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateOnchainPostTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createOnchainPostTypedData;
};

const postOnChain = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('post onchain: address', address);

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
  console.log('post onchain: ipfs result', ipfsResult);

  const request: OnchainPostRequest = {
    contentURI: `ipfs://${ipfsResult.path}`,
  };

  const { id, typedData } = await createOnchainPostTypedData(request);
  console.log('post onchain: result', { id, typedData });

  console.log('post onchain: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('post onchain: signature', signature);

  if (USE_GASLESS) {
    const broadcastResult = await broadcastOnchainRequest({ id, signature });

    await waitUntilBroadcastTransactionIsComplete(broadcastResult, 'post');
  } else {
    const { v, r, s } = splitSignature(signature);

    const tx = await lensHub.postWithSig(
      {
        profileId: typedData.value.profileId,
        contentURI: typedData.value.contentURI,
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
      }
    );
    console.log('post onchain: tx hash', tx.hash);
  }
};

(async () => {
  if (explicitStart(__filename)) {
    await postOnChain();
  }
})();
