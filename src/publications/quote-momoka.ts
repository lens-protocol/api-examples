import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart } from '../config';
import { getAddressFromSigner, signedTypeData } from '../ethers.service';
import { uploadIpfs } from '../ipfs';
import {
  CreateMomokaQuoteTypedDataDocument,
  MomokaQuoteRequest,
} from '../graphql/generated';
import { broadcastOnMomokaRequest } from '../broadcast/shared-broadcast';
import { publicationMetadataTextOnly } from './helpers/publication-metadata-mocks';

export const createMomokaQuoteTypedData = async (request: MomokaQuoteRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateMomokaQuoteTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createMomokaQuoteTypedData;
};

export const signCreateMomokaQuoteTypedData = async (request: MomokaQuoteRequest) => {
  const result = await createMomokaQuoteTypedData(request);
  console.log('create momoka quote: createMomokaQuoteTypedData', result);

  const typedData = result.typedData;
  console.log('create momoka quote: typedData', JSON.stringify(typedData, null, 2));

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('create momoka quote: signature', signature);

  return { result, signature };
};

const createQuoteOnMomoka = async (
  momokaQuoteRequest: MomokaQuoteRequest,
) => {
  const signedResult = await signCreateMomokaQuoteTypedData(momokaQuoteRequest);
  console.log('create momoka quote via broadcast: signedResult', signedResult);

  const broadcastResult = await broadcastOnMomokaRequest({
    id: signedResult.result.id,
    signature: signedResult.signature,
  });

  if (broadcastResult.__typename !== 'CreateMomokaPublicationResult') {
    console.error('create momoka quote via broadcast: failed', broadcastResult);
    throw new Error('create momoka quote via broadcast: failed');
  }

  console.log('create momoka quote via broadcast: broadcastResult', broadcastResult);

  return broadcastResult;
};

export const quoteOnMomoka = async () => {
  const address = getAddressFromSigner();
  console.log('create momoka quote: address', address);

  await login(address);

  const ipfsResult = await uploadIpfs(publicationMetadataTextOnly);

  console.log('quote momoka: ipfs result', ipfsResult);

  const request: MomokaQuoteRequest = {
    contentURI: `ipfs://${ipfsResult.path}`,
    quoteOn: "0x07-0x04-DA-967942cb"
  };

  // hard coded to make the code example clearer
  const result = await createQuoteOnMomoka(request);
  console.log('create momoka quote created', result);

  if (result.__typename !== 'CreateMomokaPublicationResult') {
    console.error('create momoka quote failed', result);
    return;
  }

  // TODO!: Check momoka proof
  // const valid = await checkProofs(result.proof);
  // console.log('create momoka quote: valid', valid);

  return result;
};

(async () => {
  if (explicitStart(__filename)) {
    await quoteOnMomoka();
  }
})();
