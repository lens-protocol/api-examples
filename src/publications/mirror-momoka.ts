import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart } from '../config';
import { getAddressFromSigner, signedTypeData } from '../ethers.service';
import { uploadIpfs } from '../ipfs';
import {
  CreateMomokaMirrorTypedDataDocument,
  MomokaMirrorRequest,
} from '../graphql/generated';
import { broadcastOnMomokaRequest } from '../broadcast/shared-broadcast';
import { publicationMetadataTextOnly } from './helpers/publication-metadata-mocks';

export const createMomokaMirrorTypedData = async (request: MomokaMirrorRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateMomokaMirrorTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createMomokaMirrorTypedData;
};

export const signCreateMomokaMirrorTypedData = async (request: MomokaMirrorRequest) => {
  const result = await createMomokaMirrorTypedData(request);
  console.log('create momoka mirror: createMomokaMirrorTypedData', result);

  const typedData = result.typedData;
  console.log('create momoka mirror: typedData', JSON.stringify(typedData, null, 2));

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('create momoka mirror: signature', signature);

  return { result, signature };
};

const createMirrorOnMomoka = async (
  momokaMirrorRequest: MomokaMirrorRequest,
) => {
  const signedResult = await signCreateMomokaMirrorTypedData(momokaMirrorRequest);
  console.log('create momoka mirror via broadcast: signedResult', signedResult);

  const broadcastResult = await broadcastOnMomokaRequest({
    id: signedResult.result.id,
    signature: signedResult.signature,
  });

  if (broadcastResult.__typename !== 'CreateMomokaPublicationResult') {
    console.error('create momoka mirror via broadcast: failed', broadcastResult);
    throw new Error('create momoka mirror via broadcast: failed');
  }

  console.log('create momoka mirror via broadcast: broadcastResult', broadcastResult);

  return broadcastResult;
};

export const mirrorOnMomoka = async () => {
  const address = getAddressFromSigner();
  console.log('create momoka mirror: address', address);

  await login(address);

  const ipfsResult = await uploadIpfs(publicationMetadataTextOnly);

  console.log('mirror momoka: ipfs result', ipfsResult);

  const request: MomokaMirrorRequest = {
    mirrorOf: "0x19-0x09-DA-b837b7e3"
  };

  // hard coded to make the code example clearer
  const result = await createMirrorOnMomoka(request);
  console.log('create momoka mirror created', result);

  if (result.__typename !== 'CreateMomokaPublicationResult') {
    console.error('create momoka mirror failed', result);
    return;
  }

  // TODO!: Check momoka proof
  // const valid = await checkProofs(result.proof);
  // console.log('create momoka mirror: valid', valid);

  return result;
};

(async () => {
  if (explicitStart(__filename)) {
    await mirrorOnMomoka();
  }
})();
