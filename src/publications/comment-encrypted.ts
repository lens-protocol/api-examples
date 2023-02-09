import { EncryptedMetadata, LensEnvironment, LensGatedSDK } from '@lens-protocol/sdk-gated';
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
  CreateCommentTypedDataDocument,
  CreatePublicCommentRequest,
  PublicationMainFocus,
  PublicationMetadataV2Input as MetadataV2,
} from '../graphql/generated';
import { uploadIpfsGetPath } from '../ipfs';
import { lensHub } from '../lens-hub';
import { pollAndIndexComment } from './comment';
import { followAccessCondition } from './post-encrypted';

const prefix = 'create gated comment';

export const createCommentTypedData = async (request: CreatePublicCommentRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateCommentTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createCommentTypedData;
};

export const createGatedPublicCommentRequest = async (
  profileId: string,
  publicationId: string, // id of the publication you want to comment on
  metadata: MetadataV2,
  condition: AccessConditionOutput
): Promise<{
  request: CreatePublicCommentRequest;
  contentURI: string;
  encryptedMetadata: EncryptedMetadata;
}> => {
  // instantiate SDK and connect to Lit Network
  const sdk = await LensGatedSDK.create({
    provider: ethersProvider,
    signer: getSigner(),
    env: LensEnvironment.Mumbai,
  });

  const { contentURI, encryptedMetadata, error } = await sdk.gated.encryptMetadata(
    metadata,
    profileId,
    condition,
    uploadIpfsGetPath
  );

  await sdk.disconnect();

  if (error) {
    console.error(error);
    throw error;
  }

  console.log(`${prefix}: ipfs result`, contentURI);
  console.log(`${prefix}: encryptedMetadata`, encryptedMetadata);

  // hard coded to make the code example clear
  return {
    request: {
      profileId,
      publicationId,
      contentURI: 'ipfs://' + contentURI,
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
      gated: {
        ...encryptedMetadata!.encryptionParams.accessCondition,
        encryptedSymmetricKey:
          encryptedMetadata!.encryptionParams.providerSpecificParams.encryptionKey,
      },
    },
    contentURI: contentURI!,
    encryptedMetadata: encryptedMetadata!,
  };
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
  const publicationId = '0x0f-0x01';
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
    content: 'gated comment',
    external_url: null,
    image: null,
    imageMimeType: null,
    name: 'Name',
    attributes: [],
    tags: ['using_api_examples'],
    appId: 'api_examples_github',
    media: null,
    animation_url: null,
  };

  const { request } = await createGatedPublicCommentRequest(
    profileId,
    publicationId,
    metadata,
    followAccessCondition(profileId)
  );

  const signedResult = await signCreateCommentTypedData(request);
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
    await createCommentEncrypted();
  }
})();
