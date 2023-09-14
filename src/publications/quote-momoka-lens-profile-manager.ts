import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { uploadIpfs } from '../ipfs';
import {
  MomokaQuoteRequest,
  QuoteOnMomokaDocument,
} from '../graphql/generated';
import { PublicationMetadataSchema } from '@lens-protocol/metadata';
import { publicationMetadataTextOnly } from './helpers/publication-metadata-mocks';

const createMomokaQuoteWithLensManager = async (request: MomokaQuoteRequest) => {
  const result = await apolloClient.mutate({
    mutation: QuoteOnMomokaDocument,
    variables: {
      request,
    },
  });

  return result.data!.quoteOnMomoka;
};

const createQuoteOnMomoka = async (
  createMomokaQuoteRequest: MomokaQuoteRequest,
) => {
  const dispatcherResult = await createMomokaQuoteWithLensManager(createMomokaQuoteRequest);

  console.log(
    'create momoka quote via lens-manager: createMomokaQuoteWithLensManager',
    dispatcherResult
  );

  return dispatcherResult;
};

export const quoteOnMomokaLensProfileManager = async () => {
  const address = getAddressFromSigner();
  console.log('create momoka quote: address', address);

  await login(address);

  const ipfsResult = await uploadIpfs(publicationMetadataTextOnly);

  console.log('quote momoka: ipfs result', ipfsResult);

  const request: MomokaQuoteRequest = {
    contentURI: `ipfs://${ipfsResult.path}`,
    quoteOn: "0x19-0x09-DA-b837b7e3",

  };

  const result = await createQuoteOnMomoka(request);
  console.log('create momoka quote created', result);

  if (result.__typename !== 'CreateMomokaPublicationResult') {
    console.error('create momoka quote failed', result);
    return;
  }

  // TODO! Fix MOMOKA proof
  // const valid = await checkProofs(result.proof);
  // console.log('create DA post: valid', valid);

  return result;
};

(async () => {
  if (explicitStart(__filename)) {
    await quoteOnMomokaLensProfileManager();
  }
})();
