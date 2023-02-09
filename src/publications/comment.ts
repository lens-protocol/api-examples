import { BigNumber, utils } from 'ethers';
import { v4 as uuidv4 } from 'uuid';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart, PROFILE_ID } from '../config';
import { getAddressFromSigner, signedTypeData, splitSignature } from '../ethers.service';
import { CreateCommentTypedDataDocument, CreatePublicCommentRequest } from '../graphql/generated';
import { pollUntilIndexed } from '../indexer/has-transaction-been-indexed';
import { Metadata, PublicationMainFocus } from '../interfaces/publication';
import { uploadIpfs } from '../ipfs';
import { lensHub } from '../lens-hub';

const prefix = 'create comment';
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

export const pollAndIndexComment = async (txHash: string, profileId: string, prefix: string) => {
  console.log(`${prefix}: poll until indexed`);
  const indexedResult = await pollUntilIndexed({ txHash });

  console.log(`${prefix}: profile has been indexed`);

  const logs = indexedResult.txReceipt!.logs;

  console.log(`${prefix}: logs`, logs);

  const topicId = utils.id(
    'CommentCreated(uint256,uint256,string,uint256,uint256,bytes,address,bytes,address,bytes,uint256)'
  );
  console.log('topicid we care about', topicId);

  const profileCreatedLog = logs.find((l: any) => l.topics[0] === topicId);
  console.log(`${prefix}: created log`, profileCreatedLog);

  let profileCreatedEventLog = profileCreatedLog!.topics;
  console.log(`${prefix}: created event logs`, profileCreatedEventLog);

  const publicationId = utils.defaultAbiCoder.decode(['uint256'], profileCreatedEventLog[2])[0];

  console.log(`${prefix}: contract publication id`, BigNumber.from(publicationId).toHexString());
  console.log(
    `${prefix}: internal publication id`,
    profileId + '-' + BigNumber.from(publicationId).toHexString()
  );
};

const createComment = async () => {
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
  const createCommentRequest: CreatePublicCommentRequest = {
    profileId,
    // remember it has to be indexed and follow metadata standards to be traceable!
    publicationId: `0x0f-0x01`,
    contentURI: `ipfs://${ipfsResult.path}`,
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
  console.log(`${prefix}: signedResult`, signedResult);

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
  console.log(`${prefix}: tx hash`, tx.hash);

  await pollAndIndexComment(tx.hash, profileId, prefix);
};

(async () => {
  if (explicitStart(__filename)) {
    await createComment();
  }
})();
