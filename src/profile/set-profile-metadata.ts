import { v4 as uuidv4 } from 'uuid';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart, PROFILE_ID, USE_GASLESS } from '../config';
import { getAddressFromSigner, signedTypeData, splitSignature } from '../ethers.service';
import {
  CreateOnchainSetProfileMetadataTypedDataDocument,
  OnchainSetProfileMetadataRequest,
} from '../graphql/generated';
import { ProfileMetadata } from '../interfaces/profile-metadata';
import { uploadIpfs } from '../ipfs';
import { lensHub } from '../lens-hub';

export const createOnchainSetProfileMetadataTypedData = async (
  request: OnchainSetProfileMetadataRequest
) => {
  const result = await apolloClient.mutate({
    mutation: CreateOnchainSetProfileMetadataTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createOnchainSetProfileMetadataTypedData;
};

const setProfileMetadata = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('set profile metadata: address', address);

  await login(address);

  const ipfsResult = await uploadIpfs<ProfileMetadata>({
    name: 'API examples',
    bio: 'API examples bio',
    cover_picture: 'https://pbs.twimg.com/profile_banners/1478109975406858245/1645016027/1500x500',
    attributes: [
      {
        traitType: 'string',
        value: 'yes this is custom',
        key: 'custom_field',
      },
    ],
    version: '1.0.0',
    metadata_id: uuidv4(),
  });
  console.log('set profile metadata: ipfs result', ipfsResult);

  const request = {
    metadataURI: `ipfs://${ipfsResult.path}`,
  };

  const { id, typedData } = await createOnchainSetProfileMetadataTypedData(request);
  console.log('set profile metadata: result', { id, typedData });

  console.log('set profile metadata: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('set profile metadata: signature', signature);

  if (USE_GASLESS) {
  } else {
    const { v, r, s } = splitSignature(signature);

    const tx = await lensHub.setProfileMetadataURIWithSig(profileId, request.metadataURI, {
      signer: address,
      v,
      r,
      s,
      deadline: typedData.value.deadline,
    });
    console.log('set profile metadata: tx hash', tx.hash);
  }
};

(async () => {
  if (explicitStart(__filename)) {
    await setProfileMetadata();
  }
})();
