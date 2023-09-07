import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart } from '../config';
import { getAddressFromSigner, signedTypeData } from '../ethers.service';
import { uploadIpfs } from '../ipfs';
import {
  CreateMomokaPostTypedDataDocument,
  MomokaPostRequest,
} from '../graphql/generated';
import { PublicationMetadataSchema } from '@lens-protocol/metadata';
import { broadcastOnMomokaRequest } from '../broadcast/shared-broadcast';

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
  console.log('create momoka post: createDAPostTypedData', result);

  const typedData = result.typedData;
  console.log('create momoka post: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('create momoka post: signature', signature);

  return { result, signature };
};

const createPostOnMomoka = async (
  createDAPostRequest: MomokaPostRequest,
) => {
  const signedResult = await signCreateMomokaPostTypedData(createDAPostRequest);
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

  // TODO! USE METADATA PACKAGE FOR NICE TYPINGS
  const ipfsResult = await uploadIpfs<any>(PublicationMetadataSchema.parse({
    $schema:
      'https://json-schemas.lens.dev/publications/text-only/3.0.0.json',
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
  }));

  console.log('post onchain: ipfs result', ipfsResult);

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
