import { gql } from '@apollo/client/core';
import { BigNumber, utils } from 'ethers';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner, signedTypeData, splitSignature } from '../ethers.service';
import { pollUntilIndexed } from '../indexer/has-transaction-been-indexed';
import { uploadIpfs } from '../ipfs';
import { lensHub } from '../lens-hub';
import { v4 as uuidv4 } from 'uuid';
import { ProfileMetadata } from '../interfaces/profile-metadata';
const CREATE_SET_PROFILE_METADATA_TYPED_DATA = `
  mutation($request: CreatePublicSetProfileMetadataURIRequest!) { 
    createSetProfileMetadataTypedData(request: $request) {
      id
      expiresAt
      typedData {
        types {
          SetProfileMetadataUTIWithSig {
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
        profileIdPointed
        pubIdPointed
        contentURI
        collectModule
        collectModuleData
        referenceModule
        referenceModuleData
      }
     }
   }
 }
`;

// TODO types
const createSetUpdateProfileTypedData = (createCommentTypedDataRequest: any) => {
  return apolloClient.mutate({
    mutation: gql(CREATE_SET_PROFILE_METADATA_TYPED_DATA),
    variables: {
      request: createCommentTypedDataRequest,
    },
  });
};

export const setUpdateProfile = async () => {
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
    attributes: [], // Optional
    version: '1.0.0',
    metadata_id: uuidv4(),
    appId: 'testing123',
  });
  console.log('create profile: ipfs result', ipfsResult);

  // hard coded to make the code example clear
  const createProfileMetadataRequest = {
    profileId,
    // remember it has to be indexed and follow metadata standards to be traceable!
    publicationId: `0x13-0x3e`,
    contentURI: 'ipfs://' + ipfsResult.path,
    collectModule: {
      // timedFeeCollectModule: {
      //   amount: {
      //     currency: currencies.enabledModuleCurrencies.map((c: any) => c.address)[0],
      //     value: '0.01',
      //   },
      //   recipient: address,
      //   referralFee: 10.5,
      // },
      revertCollectModule: true,
    },
    referenceModule: {
      followerOnlyReferenceModule: false,
    },
  };

  const result = await createSetUpdateProfileTypedData(createProfileMetadataRequest);
  console.log('create profile: createSetUpdateProfileTypedData', result);

  const typedData = result.data.createSetUpdateProfileTypedData.typedData;
  console.log('create profile: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('create profile: signature', signature);

  const { v, r, s } = splitSignature(signature);

  const tx = await lensHub.commentWithSig({
    profileId: typedData.value.profileId,
    contentURI: typedData.value.contentURI,
    profileIdPointed: typedData.value.profileIdPointed,
    pubIdPointed: typedData.value.pubIdPointed,
    collectModule: typedData.value.collectModule,
    collectModuleData: typedData.value.collectModuleData,
    referenceModule: typedData.value.referenceModule,
    referenceModuleData: typedData.value.referenceModuleData,
    sig: {
      v,
      r,
      s,
      deadline: typedData.value.deadline,
    },
  });
  console.log('create comment: tx hash', tx.hash);

  console.log('create comment: poll until indexed');
  const indexedResult = await pollUntilIndexed(tx.hash);

  console.log('create comment: profile has been indexed', result);

  const logs = indexedResult.txReceipt.logs;

  console.log('create comment: logs', logs);

  const topicId = utils.id(
    'CommentCreated(uint256,uint256,string,uint256,uint256,address,bytes,address,bytes,uint256)'
  );
  console.log('topicid we care about', topicId);

  const profileCreatedLog = logs.find((l: any) => l.topics[0] === topicId);
  console.log('create comment: created log', profileCreatedLog);

  let profileCreatedEventLog = profileCreatedLog.topics;
  console.log('create comment: created event logs', profileCreatedEventLog);

  const publicationId = utils.defaultAbiCoder.decode(['uint256'], profileCreatedEventLog[2])[0];

  console.log(
    'create comment: contract publication id',
    BigNumber.from(publicationId).toHexString()
  );
  console.log(
    'create comment: internal publication id',
    profileId + '-' + BigNumber.from(publicationId).toHexString()
  );

  return result.data;
};

(async () => {
  await setUpdateProfile();
})();
