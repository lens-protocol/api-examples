import { LensGatedSDK, LensEnvironment } from '@lens-protocol/sdk-gated';
import { BigNumber, utils } from 'ethers';
import { v4 as uuidv4 } from 'uuid';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart, PROFILE_ID } from '../config';
import {
  ethersProvider,
  getAddressFromSigner,
  getSigner,
  signedTypeData,
  splitSignature,
} from '../ethers.service';
import {
  AccessConditionOutput,
  ContractType,
  CreatePostTypedDataDocument,
  CreatePublicPostRequest,
  PublicationMainFocus,
  PublicationMetadataV2Input as MetadataV2,
  ScalarOperator,
} from '../graphql/generated';
import { pollUntilIndexed } from '../indexer/has-transaction-been-indexed';
import { uploadIpfsGetPath } from '../ipfs';
import { lensHub } from '../lens-hub';

export const createPostTypedData = async (request: CreatePublicPostRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreatePostTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createPostTypedData;
};

export const signCreatePostTypedData = async (request: CreatePublicPostRequest) => {
  const result = await createPostTypedData(request);
  console.log('create post: createPostTypedData', result);

  const typedData = result.typedData;
  console.log('create post: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('create post: signature', signature);

  return { result, signature };
};

const createPostEncrypted = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('create post: address', address);

  await login(address);

  const metadata: MetadataV2 = {
    version: '2.0.0',
    mainContentFocus: PublicationMainFocus.Image,
    metadata_id: uuidv4(),
    description: 'Description',
    locale: 'en-US',
    content: 'followed me and got rugged',
    external_url: null,
    image: 'ipfs://QmZq4ozZ4ZAoPuPnujgyhQmpmsQTJnBS36KfijUCqmnhQa',
    imageMimeType: null,
    name: 'Name',
    attributes: [],
    tags: ['using_api_examples'],
    appId: 'api_examples_github',
    media: [
      {
        type: 'image/png',
        altTag: 'alt tag',
        cover: 'ipfs://QmZq4ozZ4ZAoPuPnujgyhQmpmsQTJnBS36KfijUCqmnhQa',
        item: 'ipfs://QmZq4ozZ4ZAoPuPnujgyhQmpmsQTJnBS36KfijUCqmnhQa',
      },
    ],
    animation_url: null,
  };

  // instantiate SDK and connect to Lit Network
  const sdk = await LensGatedSDK.create({
    provider: ethersProvider,
    signer: getSigner(),
    env: LensEnvironment.Mumbai,
  });

  const nftAccessCondition: AccessConditionOutput = {
    nft: {
      contractAddress: '0x5832be646a8a7a1a7a7843efd6b8165ac06e360d', // lens protocol follower nft
      contractType: ContractType.Erc721,
      chainID: 80001,
    },
  };

  const eoaAccessCondition: AccessConditionOutput = {
    eoa: {
      address: getAddressFromSigner(),
    },
  };

  const erc20AccessCondition: AccessConditionOutput = {
    token: {
      contractAddress: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889', // WMATIC on Mumbai
      decimals: 18,
      amount: '0',
      chainID: 80001,
      condition: ScalarOperator.GreaterThan,
    },
  };

  const andAccessCondition: AccessConditionOutput = {
    and: {
      criteria: [nftAccessCondition, erc20AccessCondition],
    },
  };

  const orAccessCondition: AccessConditionOutput = {
    or: {
      criteria: [nftAccessCondition, eoaAccessCondition],
    },
  };

  const followAccessCondition: AccessConditionOutput = {
    follow: {
      profileId: '0x01',
    },
  };

  const collectAccessCondition: AccessConditionOutput = {
    collect: {
      publicationId: '0x44c1-0x20',
      // thisPublication: true
    },
  };

  const { contentURI, encryptedMetadata, error } = await sdk.gated.encryptMetadata(
    metadata,
    PROFILE_ID!,
    followAccessCondition,
    uploadIpfsGetPath
  );

  if (error) {
    console.error(error);
    return;
  }
  console.log('create post: ipfs result', contentURI);
  console.log('create post: encryptedMetadata', encryptedMetadata);

  // hard coded to make the code example clear
  const createPostRequest: CreatePublicPostRequest = {
    profileId,
    contentURI: 'ipfs://' + contentURI,
    collectModule: {
      freeCollectModule: { followerOnly: false },
    },
    referenceModule: {
      followerOnlyReferenceModule: false,
    },
    gated: {
      ...followAccessCondition,
      encryptedSymmetricKey:
        encryptedMetadata!.encryptionParams.providerSpecificParams.encryptionKey,
    },
  };

  const signedResult = await signCreatePostTypedData(createPostRequest);
  console.log('create post: signedResult', signedResult);

  const typedData = signedResult.result.typedData;

  const { v, r, s } = splitSignature(signedResult.signature);

  const tx = await lensHub.postWithSig({
    profileId: typedData.value.profileId,
    contentURI: typedData.value.contentURI,
    collectModule: typedData.value.collectModule,
    collectModuleInitData: typedData.value.collectModuleInitData,
    referenceModule: typedData.value.referenceModule,
    referenceModuleInitData: typedData.value.referenceModuleInitData,
    sig: {
      v,
      r,
      s,
      deadline: typedData.value.deadline,
    },
  });
  console.log('create post: tx hash', tx.hash);

  console.log('create post: poll until indexed');
  const indexedResult = await pollUntilIndexed({ txHash: tx.hash });

  console.log('create post: profile has been indexed');

  const logs = indexedResult.txReceipt!.logs;

  console.log('create post: logs', logs);

  const topicId = utils.id(
    'PostCreated(uint256,uint256,string,address,bytes,address,bytes,uint256)'
  );
  console.log('topicid we care about', topicId);

  const profileCreatedLog = logs.find((l: any) => l.topics[0] === topicId);
  console.log('create post: created log', profileCreatedLog);

  let profileCreatedEventLog = profileCreatedLog!.topics;
  console.log('create post: created event logs', profileCreatedEventLog);

  const publicationId = utils.defaultAbiCoder.decode(['uint256'], profileCreatedEventLog[2])[0];

  console.log('create post: contract publication id', BigNumber.from(publicationId).toHexString());
  console.log(
    'create post: internal publication id',
    profileId + '-' + BigNumber.from(publicationId).toHexString()
  );
};

(async () => {
  if (explicitStart(__filename)) {
    await createPostEncrypted();
  }
})();
