import { v4 as uuidv4 } from 'uuid';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner, signedTypeData, splitSignature } from '../ethers.service';
import {
  CreatePublicSetProfileMetadataUriRequest,
  CreateSetProfileMetadataTypedDataDocument,
} from '../graphql/generated';
import { pollUntilIndexed } from '../indexer/has-transaction-been-indexed';
import { ProfileMetadata } from '../interfaces/profile-metadata';
import { uploadIpfs } from '../ipfs';
import { lensPeriphery } from '../lens-hub';

const createSetProfileMetadataTypedData = async (
  request: CreatePublicSetProfileMetadataUriRequest
) => {
  const result = await apolloClient.mutate({
    mutation: CreateSetProfileMetadataTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createSetProfileMetadataTypedData;
};

export const setProfileMetadata = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('create profile: address', address);

  await login(address);

  const ipfsResult = await uploadIpfs<ProfileMetadata>({
    name: 'LensProtocol.eth',
    bio: 'A permissionless, composable, & decentralized social graph that makes building a Web3 social platform easy.',
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
  console.log('create profile: ipfs result', ipfsResult);

  // hard coded to make the code example clear
  const createProfileMetadataRequest = {
    profileId,
    metadata: 'ipfs://' + ipfsResult.path,
  };

  const result = await createSetProfileMetadataTypedData({
    profileId: createProfileMetadataRequest.profileId,
    metadata: createProfileMetadataRequest.metadata,
  });

  console.log('create profile: createSetProfileMetadataTypedData', result);

  const typedData = result.typedData;
  console.log('create profile: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('create profile: signature', signature);

  const { v, r, s } = splitSignature(signature);

  const tx = await lensPeriphery.setProfileMetadataURIWithSig({
    profileId: createProfileMetadataRequest.profileId,
    metadata: createProfileMetadataRequest.metadata,
    sig: {
      v,
      r,
      s,
      deadline: typedData.value.deadline,
    },
  });
  console.log('create profile metadata: tx hash', tx.hash);

  console.log('create profile metadata: poll until indexed');
  const indexedResult = await pollUntilIndexed(tx.hash);

  console.log('create profile metadata: profile has been indexed', result);

  const logs = indexedResult.txReceipt!.logs;

  console.log('create profile metadata: logs', logs);

  return result;
};

(async () => {
  await setProfileMetadata();
})();
