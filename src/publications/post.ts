import { BigNumber, utils } from 'ethers';
import { v4 as uuidv4 } from 'uuid';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart, PROFILE_ID } from '../config';
import { getAddressFromSigner, signedTypeData, splitSignature } from '../ethers.service';
import { CreatePostTypedDataDocument, CreatePublicPostRequest } from '../graphql/generated';
import { pollUntilIndexed } from '../indexer/has-transaction-been-indexed';
import { Metadata, PublicationMainFocus } from '../interfaces/publication';
import { uploadIpfs } from '../ipfs';
import { lensHub } from '../lens-hub';

const prefix = 'create post';
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

export const pollAndIndexPost = async (txHash: string, profileId: string, prefix: string) => {
  console.log(`${prefix}: poll until indexed`);
  const indexedResult = await pollUntilIndexed({ txHash });

  console.log(`${prefix}: profile has been indexed`);

  const logs = indexedResult.txReceipt!.logs;

  console.log(`${prefix}: logs`, logs);

  const topicId = utils.id(
    'PostCreated(uint256,uint256,string,address,bytes,address,bytes,uint256)'
  );
  console.log('topicid we care about', topicId);

  const profileCreatedLog = logs.find((l: any) => l.topics[0] === topicId);
  console.log(`${prefix}: created log`, profileCreatedLog);

  let profileCreatedEventLog = profileCreatedLog!.topics;
  console.log(`${prefix}: created event logs`, profileCreatedEventLog);

  const publicationId = utils.defaultAbiCoder.decode(['uint256'], profileCreatedEventLog[2])[0];

  const contractPublicationId = BigNumber.from(publicationId).toHexString();

  const internalPublicationId = profileId + '-' + contractPublicationId;

  console.log(`${prefix}: contract publication id`, contractPublicationId);
  console.log(`${prefix}: internal publication id`, internalPublicationId);
  return internalPublicationId;
};

const createPost = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log(`${prefix}: address`, address);

  await login(address);

  const ipfsResult = await uploadIpfs<Metadata>({
    version: '2.0.0',
    mainContentFocus: PublicationMainFocus.TEXT_ONLY,
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
  });
  console.log(`${prefix}: ipfs result`, ipfsResult);

  // hard coded to make the code example clear
  const createPostRequest: CreatePublicPostRequest = {
    profileId,
    contentURI: `ipfs://${ipfsResult.path}`,
    collectModule: {
      // feeCollectModule: {
      //   amount: {
      //     currency: currencies.enabledModuleCurrencies.map(
      //       (c: any) => c.address
      //     )[0],
      //     value: '0.000001',
      //   },
      //   recipient: address,
      //   referralFee: 10.5,
      // },
      // revertCollectModule: true,
      freeCollectModule: { followerOnly: true },
      // limitedFeeCollectModule: {
      //   amount: {
      //     currency: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
      //     value: '2',
      //   },
      //   collectLimit: '20000',
      //   recipient: '0x3A5bd1E37b099aE3386D13947b6a90d97675e5e3',
      //   referralFee: 0,
      // },
      // multirecipientFeeCollectModule: {
      //   amount: {
      //     currency: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
      //     value: '0.001',
      //   },
      //   collectLimit: '2',
      //   endTimestamp: '2025-01-01T00:00:00.000Z',
      //   referralFee: 0,
      //   followerOnly: false,
      //   recipients: [
      //     {
      //       recipient: address,
      //       split: 50,
      //     },
      //     {
      //       recipient: '0xacab2c2Cdde3a5839b91BABEfFd5fd5128590d6f',
      //       split: 50,
      //     },
      //   ],
      // },
      // aaveFeeCollectModule: {
      //   amount: {
      //     currency: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
      //     value: '0.001',
      //   },
      //   collectLimit: '2',
      //   endTimestamp: '2025-01-01T00:00:00.000Z',
      //   referralFee: 0,
      //   followerOnly: false,
      //   recipient: address,
      // },
      // erc4626FeeCollectModule: {
      //   amount: {
      //     currency: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
      //     value: '0.001',
      //   },
      //   collectLimit: '2',
      //   endTimestamp: '2025-01-01T00:00:00.000Z',
      //   referralFee: 0,
      //   followerOnly: false,
      //   recipient: address,
      //   vault: '0x3A5bd1E37b099aE3386D13947b6a90d97675e5e3', // MUST BE VALID ERC4626 VAULT
      // },
    },
    referenceModule: {
      followerOnlyReferenceModule: false,
    },
  };

  const signedResult = await signCreatePostTypedData(createPostRequest);
  console.log(`${prefix}: signedResult`, signedResult);

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
  console.log(`${prefix}: tx hash`, tx.hash);

  await pollAndIndexPost(tx.hash, profileId, prefix);
};

(async () => {
  if (explicitStart(__filename)) {
    await createPost();
  }
})();
