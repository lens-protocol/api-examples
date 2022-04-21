import { gql } from '@apollo/client/core';
import { v4 as uuidv4 } from 'uuid';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner, signedTypeData, splitSignature } from '../ethers.service';
import { pollUntilIndexed } from '../indexer/has-transaction-been-indexed';
import { ProfileMetadata } from '../interfaces/profile-metadata';
import { uploadIpfs } from '../ipfs';
import { lensPeriphery } from '../lens-hub';

const CREATE_SET_PROFILE_METADATA_TYPED_DATA = `
  mutation($request: CreatePublicSetProfileMetadataURIRequest!) { 
    createSetProfileMetadataTypedData(request: $request) {
      id
      expiresAt
      typedData {
        types {
          SetProfileMetadataURIWithSig {
            name
            type
          }
        }
        domain {
          name
          chainId
          version
          verifyingContract
        }
        value {
          nonce
          deadline
          profileId
          metadata
        }
      }
    }
  }
`;

const createSetProfileMetadataTypedData = (profileId: string, metadata: string) => {
  return apolloClient.mutate({
    mutation: gql(CREATE_SET_PROFILE_METADATA_TYPED_DATA),
    variables: {
      request: {
        profileId,
        metadata,
      },
    },
  });
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
    social: [
      {
        traitType: 'string',
        value: 'https://lens.dev',
        key: 'website',
      },
      {
        traitType: 'string',
        value: 'LensProtocol',
        key: 'twitter',
      },
    ],
    bio: 'A permissionless, composable, & decentralized social graph that makes building a Web3 social platform easy.  ',
    cover_picture: 'https://pbs.twimg.com/profile_banners/1478109975406858245/1645016027/1500x500',
    location: 'Metaverse',
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

  const result = await createSetProfileMetadataTypedData(
    createProfileMetadataRequest.profileId,
    createProfileMetadataRequest.metadata
  );
  console.log('create profile: createSetProfileMetadataTypedData', result);

  const typedData = result.data.createSetProfileMetadataTypedData.typedData;
  console.log('create profile: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('create profile: signature', signature);

  const { v, r, s } = splitSignature(signature);

  const tx = await lensPeriphery.setProfileMetadataURIWithSig({
    user: address,
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

  const logs = indexedResult.txReceipt.logs;

  console.log('create profile metadata: logs', logs);

  return result.data;
};

(async () => {
  await setProfileMetadata();
})();
