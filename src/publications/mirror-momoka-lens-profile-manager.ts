import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { MirrorOnMomokaDocument, MomokaMirrorRequest } from '../graphql/generated';
import { uploadIpfs } from '../ipfs';
import { knownMomokaPostId } from '../known-common-input-constants';
import { publicationMetadataTextOnly } from './helpers/publication-metadata-mocks';

const createMomokaMirrorWithLensManager = async (request: MomokaMirrorRequest) => {
  const result = await apolloClient.mutate({
    mutation: MirrorOnMomokaDocument,
    variables: {
      request,
    },
  });

  return result.data!.mirrorOnMomoka;
};

const createMirrorOnMomoka = async (createMomokaMirrorRequest: MomokaMirrorRequest) => {
  const dispatcherResult = await createMomokaMirrorWithLensManager(createMomokaMirrorRequest);

  console.log(
    'create momoka mirror via lens-manager: createMomokaMirrorWithLensManager',
    dispatcherResult
  );

  return dispatcherResult;
};

export const mirrorOnMomokaLensProfileManager = async () => {
  const address = getAddressFromSigner();
  console.log('create momoka mirror: address', address);

  await login(address);

  const ipfsResult = await uploadIpfs(publicationMetadataTextOnly);

  console.log('mirror momoka: ipfs result', ipfsResult);

  const request: MomokaMirrorRequest = {
    mirrorOn: knownMomokaPostId,
  };

  const result = await createMirrorOnMomoka(request);
  console.log('create momoka mirror created', result);

  if (result.__typename !== 'CreateMomokaPublicationResult') {
    console.error('create momoka mirror failed', result);
    return;
  }

  // TODO! Fix MOMOKA proof
  // const valid = await checkProofs(result.proof);
  // console.log('create DA post: valid', valid);

  return result;
};

(async () => {
  if (explicitStart(__filename)) {
    await mirrorOnMomokaLensProfileManager();
  }
})();
