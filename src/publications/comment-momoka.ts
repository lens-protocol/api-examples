import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { broadcastOnMomokaRequest } from '../broadcast/shared-broadcast';
import { explicitStart } from '../config';
import { getAddressFromSigner, signedTypeData } from '../ethers.service';
import { CreateMomokaCommentTypedDataDocument, MomokaCommentRequest } from '../graphql/generated';
import { uploadIpfs } from '../ipfs';
import { knownMomokaPostId } from '../known-common-input-constants';
import { publicationMetadataTextOnly } from './helpers/publication-metadata-mocks';

export const createMomokaCommentTypedData = async (request: MomokaCommentRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateMomokaCommentTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createMomokaCommentTypedData;
};

export const signCreateMomokaCommentTypedData = async (request: MomokaCommentRequest) => {
  const result = await createMomokaCommentTypedData(request);
  console.log('create momoka comment: createMomokaCommentTypedData', result);

  const typedData = result.typedData;
  console.log('create momoka comment: typedData', JSON.stringify(typedData, null, 2));

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('create momoka comment: signature', signature);

  return { result, signature };
};

const createCommentOnMomoka = async (momokaCommentRequest: MomokaCommentRequest) => {
  const signedResult = await signCreateMomokaCommentTypedData(momokaCommentRequest);
  console.log('create momoka comment via broadcast: signedResult', signedResult);

  const broadcastResult = await broadcastOnMomokaRequest({
    id: signedResult.result.id,
    signature: signedResult.signature,
  });

  if (broadcastResult.__typename !== 'CreateMomokaPublicationResult') {
    console.error('create momoka comment via broadcast: failed', broadcastResult);
    throw new Error('create momoka comment via broadcast: failed');
  }

  console.log('create momoka comment via broadcast: broadcastResult', broadcastResult);

  return broadcastResult;
};

export const commentOnMomoka = async () => {
  const address = getAddressFromSigner();
  console.log('create momoka comment: address', address);

  await login(address);

  const ipfsResult = await uploadIpfs(publicationMetadataTextOnly);

  console.log('comment momoka: ipfs result', ipfsResult);

  const request: MomokaCommentRequest = {
    contentURI: `ipfs://${ipfsResult.path}`,
    commentOn: knownMomokaPostId,
  };

  // hard coded to make the code example clearer
  const result = await createCommentOnMomoka(request);
  console.log('create momoka comment created', result);

  if (result.__typename !== 'CreateMomokaPublicationResult') {
    console.error('create momoka comment failed', result);
    return;
  }

  // TODO!: Check momoka proof
  // const valid = await checkProofs(result.proof);
  // console.log('create momoka comment: valid', valid);

  return result;
};

(async () => {
  if (explicitStart(__filename)) {
    await commentOnMomoka();
  }
})();
