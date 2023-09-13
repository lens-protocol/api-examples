import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { CommentOnchainDocument, OnchainCommentRequest } from '../graphql/generated';
import { uploadIpfs } from '../ipfs';
import { knownPostId } from '../known-common-input-constants';
import { waitUntilLensManagerTransactionIsComplete } from '../transaction/wait-until-complete';
import { publicationMetadataTextOnly } from './helpers/publication-metadata-mocks';

const commentOnChain = async (request: OnchainCommentRequest) => {
  const result = await apolloClient.mutate({
    mutation: CommentOnchainDocument,
    variables: {
      request,
    },
  });

  return result.data!.commentOnchain;
};

export const commentOnChainLensProfileManager = async () => {
  const address = getAddressFromSigner();
  console.log('comment onchain lens profile manager: address', address);

  await login(address);

  const ipfsResult = await uploadIpfs(publicationMetadataTextOnly);
  console.log('comment onchain: ipfs result', ipfsResult);

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

  const result = await commentOnChain(request);
  console.log('comment onchain lens profile manager: result', result);
  await waitUntilLensManagerTransactionIsComplete(result, 'unblock');
};

(async () => {
  if (explicitStart(__filename)) {
    await commentOnChainLensProfileManager();
  }
})();
