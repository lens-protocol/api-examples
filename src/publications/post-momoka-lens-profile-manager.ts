import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { uploadIpfs } from '../ipfs';
import {
  MomokaPostRequest,
  PostOnMomokaDocument,
} from '../graphql/generated';
import { PublicationMetadataSchema } from '@lens-protocol/metadata';
import { publicationMetadataTextOnly } from './helpers/publication-metadata-mocks';

const createMomokaPostWithLensManager = async (request: MomokaPostRequest) => {
  const result = await apolloClient.mutate({
    mutation: PostOnMomokaDocument,
    variables: {
      request,
    },
  });

  return result.data!.postOnMomoka;
};

const createPostOnMomoka = async (
  createMomokaPostRequest: MomokaPostRequest,
) => {
  const dispatcherResult = await createMomokaPostWithLensManager(createMomokaPostRequest);

  console.log(
    'create DA post via dispatcher: createMomokaPostWithLensManager',
    dispatcherResult
  );

  return dispatcherResult;
};

export const postOnMomokaLensProfileManager = async () => {
  const address = getAddressFromSigner();
  console.log('create momoka post: address', address);

  await login(address);

  const ipfsResult = await uploadIpfs(publicationMetadataTextOnly);

  console.log('post onchain: ipfs result', ipfsResult);

  const request: MomokaPostRequest = {
    contentURI: `ipfs://${ipfsResult.path}`,
  };

  const result = await createPostOnMomoka(request);
  console.log('create momoka post created', result);

  if (result.__typename !== 'CreateMomokaPublicationResult') {
    console.error('create momoka post failed', result);
    return;
  }

  // TODO! Fix MOMOKA proof
  // const valid = await checkProofs(result.proof);
  // console.log('create DA post: valid', valid);

  return result;
};

(async () => {
  if (explicitStart(__filename)) {
    await postOnMomokaLensProfileManager();
  }
})();
