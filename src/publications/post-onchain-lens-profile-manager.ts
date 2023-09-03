import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { OnchainPostRequest, PostOnchainDocument } from '../graphql/generated';
import { uploadIpfs } from '../ipfs';
import { waitUntilLensManagerTransactionIsComplete } from '../transaction/wait-until-complete';

const postOnChain = async (request: OnchainPostRequest) => {
  const result = await apolloClient.mutate({
    mutation: PostOnchainDocument,
    variables: {
      request,
    },
  });

  return result.data!.postOnchain;
};

export const postOnChainLensProfileManager = async (profileId: string = '0x02') => {
  const address = getAddressFromSigner();
  console.log('post onchain lens profile manager: address', address);

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
  console.log('post onchain lens profile manager: ipfs result', ipfsResult);

  const request: OnchainPostRequest = {
    contentURI: `ipfs://${ipfsResult.path}`,
    // you can play around with open actions modules here all request
    // objects are in `publication-open-action-options.ts`
    // openActionModules: [simpleCollectAmountAndLimit(address)],
    //
    // you can play around with reference modules here
    // all request objects are in `publication-reference-module-options.ts`,
    // referenceModule: referenceModuleFollowOnly,
  };

  const result = await postOnChain(request);
  console.log('post onchain lens profile manager: result', result);
  await waitUntilLensManagerTransactionIsComplete(result, 'unblock');
};

(async () => {
  if (explicitStart(__filename)) {
    await postOnChainLensProfileManager();
  }
})();
