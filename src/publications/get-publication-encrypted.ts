// @ts-ignore
import { LensEnvironment, LensNetwork, LensGatedSDK } from '@lens/sdk-gated/server';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { ethersProvider, getAddressFromSigner, getSigner } from '../ethers.service';
import {
  PostCanDecryptArgs,
  PublicationDocument,
  PublicationEncryptedDocument,
  PublicationQueryRequest,
} from '../graphql/generated';

const getPublicationRequest = async (
  request: PublicationQueryRequest,
  canDecryptArgs: PostCanDecryptArgs
) => {
  const result = await apolloClient.query({
    query: PublicationEncryptedDocument,
    variables: {
      request,
      profileId: canDecryptArgs.profileId,
    },
  });

  return result.data.publication;
};

export const getEncryptedPublication = async () => {
  const result = await getPublicationRequest(
    { publicationId: '0x44c1-0x17' },
    { profileId: '0x01' }
  );
  console.log('publication: encrypted', result);

  // instantiate SDK and connect to Lit Network
  const sdk: LensGatedSDK = new LensGatedSDK({
    provider: ethersProvider,
    signer: getSigner(),
    env: LensEnvironment.production,
    network: LensNetwork.polygon,
  });

  if (!result) {
    throw new Error('Publication not found');
  }
  const { decrypted: metadata } = await sdk.gated.decryptMetadata(result.metadata);

  const decrypted = {
    ...result,
    metadata,
  };
  console.log('publication: decrypted', decrypted);
};

(async () => {
  await getEncryptedPublication();
})();
