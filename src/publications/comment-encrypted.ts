// @ts-ignore
import { LensGatedSDK, LensEnvironment, LensNetwork } from '@lens/sdk-gated/server';
import { BigNumber, utils } from 'ethers';
import { v4 as uuidv4 } from 'uuid';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { argsBespokeInit, PROFILE_ID } from '../config';
import {
  ethersProvider,
  getAddressFromSigner,
  getSigner,
  signedTypeData,
  splitSignature,
} from '../ethers.service';
import {
  AccessCriteriaType,
  ContractType,
  CreateCommentTypedDataDocument,
  CreatePublicCommentRequest,
  NftOwnershipInput,
  PublicationMainFocus,
  PublicationMetadataV2Input as MetadataV2,
} from '../graphql/generated';
import { pollUntilIndexed } from '../indexer/has-transaction-been-indexed';
import { uploadIpfs } from '../ipfs';
import { lensHub } from '../lens-hub';

export const createCommentTypedData = async (request: CreatePublicCommentRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateCommentTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createCommentTypedData;
};

export const signCreateCommentTypedData = async (request: CreatePublicCommentRequest) => {
  const result = await createCommentTypedData(request);
  console.log('create comment: createCommentTypedData', result);

  const typedData = result.typedData;
  console.log('create comment: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('create comment: signature', signature);

  return { result, signature };
};

const createCommentEncrypted = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('create comment: address', address);

  await login(address);

  const metadata: MetadataV2 = {
    version: '2.0.0',
    mainContentFocus: PublicationMainFocus.TextOnly,
    metadata_id: uuidv4(),
    description: 'Description',
    locale: 'en-US',
    content: 'Content',
    external_url: null,
    image: null,
    imageMimeType: null,
    name: 'Name',
    attributes: [],
    tags: ['using_api_examples'],
    appId: 'api_examples_github',
    media: [
      {
        type: 'IMAGE',
        altTag: 'alt tag',
        cover: 'cover',
        item: 'http://example.com',
      },
    ],
    animation_url: null,
  };

  // instantiate SDK and connect to Lit Network
  const sdk = new LensGatedSDK({
    provider: ethersProvider,
    signer: getSigner(),
    env: LensEnvironment.production,
    network: LensNetwork.polygon,
  });

  const accessConditions: NftOwnershipInput = {
    type: AccessCriteriaType.Nft,
    contractAddress: '0x5832be646a8a7a1a7a7843efd6b8165ac06e360d', // lens protocol follower nft
    contractType: ContractType.Erc721,
    chainID: 80001,
  };
  const { contentURI, encryptedMetadata } = await sdk.gated.encryptMetadata(
    metadata,
    accessConditions,
    uploadIpfs
  );

  console.log('create comment: ipfs result', contentURI);
  console.log('create comment: encryptedMetadata', encryptedMetadata);

  // hard coded to make the code example clear
  const createCommentRequest = {
    profileId,
    // remember it has to be indexed and follow metadata standards to be traceable!
    publicationId: `0x44c1-0x13`,
    contentURI: 'ipfs://' + contentURI.path,
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

  const signedResult = await signCreateCommentTypedData(createCommentRequest);
  console.log('create comment: signedResult', signedResult);

  const typedData = signedResult.result.typedData;

  const { v, r, s } = splitSignature(signedResult.signature);

  const tx = await lensHub.commentWithSig(
    {
      profileId: typedData.value.profileId,
      contentURI: typedData.value.contentURI,
      profileIdPointed: typedData.value.profileIdPointed,
      pubIdPointed: typedData.value.pubIdPointed,
      collectModule: typedData.value.collectModule,
      collectModuleInitData: typedData.value.collectModuleInitData,
      referenceModule: typedData.value.referenceModule,
      referenceModuleInitData: typedData.value.referenceModuleInitData,
      referenceModuleData: typedData.value.referenceModuleData,
      sig: {
        v,
        r,
        s,
        deadline: typedData.value.deadline,
      },
    },
    { gasLimit: 500000 }
  );
  console.log('create comment: tx hash', tx.hash);

  console.log('create comment: poll until indexed');
  const indexedResult = await pollUntilIndexed({
    txHash: tx.hash,
  });

  console.log('create comment: profile has been indexed');

  const logs = indexedResult.txReceipt!.logs;

  console.log('create comment: logs', logs);

  const topicId = utils.id(
    'CommentCreated(uint256,uint256,string,uint256,uint256,bytes,address,bytes,address,bytes,uint256)'
  );
  console.log('topicid we care about', topicId);

  const profileCreatedLog = logs.find((l: any) => l.topics[0] === topicId);
  console.log('create comment: created log', profileCreatedLog);

  let profileCreatedEventLog = profileCreatedLog!.topics;
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
};

(async () => {
  if (argsBespokeInit()) {
    await createCommentEncrypted();
  }
})();
