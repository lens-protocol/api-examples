import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { uploadIpfs } from '../ipfs';
import {
  MomokaCommentRequest,
  CommentOnMomokaDocument,
} from '../graphql/generated';
import { PublicationMetadataSchema } from '@lens-protocol/metadata';
import { publicationMetadataTextOnly } from './helpers/publication-metadata-mocks';

const createMomokaCommentWithLensManager = async (request: MomokaCommentRequest) => {
  const result = await apolloClient.mutate({
    mutation: CommentOnMomokaDocument,
    variables: {
      request,
    },
  });

  return result.data!.commentOnMomoka;
};

const createCommentOnMomoka = async (
  createMomokaCommentRequest: MomokaCommentRequest,
) => {
  const dispatcherResult = await createMomokaCommentWithLensManager(createMomokaCommentRequest);

  console.log(
    'create momoka comment via lens-manager: createMomokaCommentWithLensManager',
    dispatcherResult
  );

  return dispatcherResult;
};

export const commentOnMomokaLensProfileManager = async () => {
  const address = getAddressFromSigner();
  console.log('create momoka comment: address', address);

  await login(address);

  const ipfsResult = await uploadIpfs(publicationMetadataTextOnly);

  console.log('comment momoka: ipfs result', ipfsResult);

  const request: MomokaCommentRequest = {
    contentURI: `ipfs://${ipfsResult.path}`,
    commentOn: "0x19-0x09-DA-b837b7e3",

  };

  const result = await createCommentOnMomoka(request);
  console.log('create momoka comment created', result);

  if (result.__typename !== 'CreateMomokaPublicationResult') {
    console.error('create momoka comment failed', result);
    return;
  }

  // TODO! Fix MOMOKA proof
  // const valid = await checkProofs(result.proof);
  // console.log('create DA post: valid', valid);

  return result;
};

(async () => {
  if (explicitStart(__filename)) {
    await commentOnMomokaLensProfileManager();
  }
})();
