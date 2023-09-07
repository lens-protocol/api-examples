import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { OnchainQuoteRequest, QuoteOnchainDocument } from '../graphql/generated';
import { uploadIpfs } from '../ipfs';
import { knownPostId } from '../known-common-input-constants';
import { waitUntilLensManagerTransactionIsComplete } from '../transaction/wait-until-complete';
import { publicationMetadataTextOnly } from './helpers/publication-metadata-mocks';
import { simpleCollectAmountAndLimit } from './helpers/publication-open-action-options';

const quoteOnChain = async (request: OnchainQuoteRequest) => {
  const result = await apolloClient.mutate({
    mutation: QuoteOnchainDocument,
    variables: {
      request,
    },
  });

  return result.data!.quoteOnchain;
};

export const quoteOnChainLensProfileManager = async (profileId: string = '0x02') => {
  const address = getAddressFromSigner();
  console.log('quote onchain lens profile manager: address', address);

  await login(address);

  const ipfsResult = await uploadIpfs(publicationMetadataTextOnly);
  console.log('quote onchain: ipfs result', ipfsResult);

  // TODO! in docs make sure we talk about onchain referrals
  const request: OnchainQuoteRequest = {
    quoteOn: knownPostId,
    contentURI: `ipfs://${ipfsResult.path}`,
    // you can play around with open actions modules here all request
    // objects are in `publication-open-action-options.ts`
    openActionModules: [simpleCollectAmountAndLimit(address)],
    //
    // you can play around with reference modules here
    // all request objects are in `publication-reference-module-options.ts`,
    // referenceModule: referenceModuleFollowOnly,
  };

  const result = await quoteOnChain(request);
  console.log('quote onchain lens profile manager: result', result);
  await waitUntilLensManagerTransactionIsComplete(result, 'unblock');
};

(async () => {
  if (explicitStart(__filename)) {
    await quoteOnChainLensProfileManager();
  }
})();
