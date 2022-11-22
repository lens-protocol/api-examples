import { LensEnvironment, LensGatedSDK } from '@lens-protocol/sdk-gated';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { ethersProvider, getAddressFromSigner, getSigner } from '../ethers.service';
import {
  PostCanDecryptArgs,
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
    { publicationId: '0x44c1-0x31' },
    { profileId: '0x44c1' }
  );

  if (!result) {
    console.error('publication not found, exiting...');
    return;
  }

  console.log('publication: encrypted', result);
  if (!result.canDecrypt.result) {
    console.log('You cannot decrypt this publication, exiting...');
    return;
  }

  // instantiate SDK and connect to Lit Network
  const sdk = await LensGatedSDK.create({
    provider: ethersProvider,
    signer: getSigner(),
    env: LensEnvironment.Mumbai,
  });

  const { decrypted: metadata } = await sdk.gated.decryptMetadata(result.metadata as any);

  const decrypted = {
    ...result,
    metadata,
  };
  console.log('publication: decrypted', decrypted);
};

(async () => {
  await getEncryptedPublication();
})();
