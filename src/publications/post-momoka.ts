import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart } from '../config';
import { getAddressFromSigner, signedTypeData } from '../ethers.service';
import { uploadIpfs } from '../ipfs';
import {
  CreateMomokaPostTypedDataDocument,
  MomokaPostRequest,
} from '../graphql/generated';
import { broadcastOnMomokaRequest } from '../broadcast/shared-broadcast';
import { publicationMetadataTextOnly } from './helpers/publication-metadata-mocks';

export const createMomokaPostTypedData = async (request: MomokaPostRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateMomokaPostTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createMomokaPostTypedData;
};

export const signCreateMomokaPostTypedData = async (request: MomokaPostRequest) => {
  const result = await createMomokaPostTypedData(request);
  console.log('create momoka post: createMomokaPostTypedData', result);

  const typedData = result.typedData;
  console.log('create momoka post: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('create momoka post: signature', signature);

  return { result, signature };
};

const createPostOnMomoka = async (
  momokaPostRequest: MomokaPostRequest,
) => {
  const signedResult = await signCreateMomokaPostTypedData(momokaPostRequest);
  console.log('create momoka post via broadcast: signedResult', signedResult);

  const broadcastResult = await broadcastOnMomokaRequest({
    id: signedResult.result.id,
    signature: signedResult.signature,
  });

  if (broadcastResult.__typename !== 'CreateMomokaPublicationResult') {
    console.error('create momoka post via broadcast: failed', broadcastResult);
    throw new Error('create momoka post via broadcast: failed');
  }

  console.log('create momoka post via broadcast: broadcastResult', broadcastResult);

  return broadcastResult;
};

export const postOnMomoka = async () => {
  const address = getAddressFromSigner();
  console.log('create momoka post: address', address);

  await login(address);

  const ipfsResult = await uploadIpfs(publicationMetadataTextOnly);

  console.log('post momoka: ipfs result', ipfsResult);

  const request: MomokaPostRequest = {
    contentURI: `ipfs://${ipfsResult.path}`,
  };

  // hard coded to make the code example clearer
  const result = await createPostOnMomoka(request);
  console.log('create momoka post created', result);

  if (result.__typename !== 'CreateMomokaPublicationResult') {
    console.error('create momoka post failed', result);
    return;
  }

  // TODO!: Check momoka proof
  // const valid = await checkProofs(result.proof);
  // console.log('create momoka post: valid', valid);

  return result;
};

(async () => {
  if (explicitStart(__filename)) {
    await postOnMomoka();
  }
})();
