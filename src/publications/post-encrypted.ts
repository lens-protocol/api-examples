import { EncryptedMetadata, LensEnvironment, LensGatedSDK } from '@lens-protocol/sdk-gated';
import { v4 as uuidv4 } from 'uuid';
import { login } from '../authentication/login';
import { explicitStart, PROFILE_ID } from '../config';
import { ethersProvider, getAddressFromSigner, getSigner, splitSignature } from '../ethers.service';
import {
  AccessConditionOutput,
  ContractType,
  CreatePublicPostRequest,
  PublicationMainFocus,
  PublicationMetadataV2Input as MetadataV2,
  ScalarOperator,
} from '../graphql/generated';
import { uploadIpfsGetPath } from '../ipfs';
import { lensHub } from '../lens-hub';
import { pollAndIndexPost, signCreatePostTypedData } from './post';

const prefix = 'create gated post';

export const nftAccessCondition = ({
  contractAddress,
  contractType,
  chainID,
}: {
  contractAddress: string;
  contractType: ContractType;
  chainID: number;
}): AccessConditionOutput => ({
  nft: {
    contractAddress,
    contractType,
    chainID,
  },
});

export const eoaAccessCondition = (
  address: string = getAddressFromSigner()
): AccessConditionOutput => ({
  eoa: {
    address,
  },
});

export const erc20AccessCondition = (
  { contractAddress, chainID, amount, condition, decimals } = {
    contractAddress: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889', // WMATIC on Mumbai
    decimals: 18,
    amount: '0.0001',
    chainID: 80001,
    condition: ScalarOperator.GreaterThanOrEqual,
  }
): AccessConditionOutput => ({
  token: {
    contractAddress,
    decimals,
    amount,
    chainID,
    condition,
  },
});

export const andAccessCondition = (criteria: AccessConditionOutput[]): AccessConditionOutput => ({
  and: {
    criteria,
  },
});

export const orAccessCondition = (criteria: AccessConditionOutput[]): AccessConditionOutput => ({
  or: {
    criteria,
  },
});

export const followAccessCondition = (profileId: string = '0x01'): AccessConditionOutput => ({
  follow: {
    profileId,
  },
});

export const collectAccessCondition = (publicationId?: string): AccessConditionOutput => {
  if (publicationId) {
    return {
      collect: {
        publicationId,
      },
    };
  }
  return {
    collect: {
      thisPublication: true,
    },
  };
};

export const createGatedPublicPostRequest = async (
  profileId: string,
  metadata: MetadataV2,
  condition: AccessConditionOutput
): Promise<{
  request: CreatePublicPostRequest;
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
      contentURI: 'ipfs://' + contentURI,
      collectModule: {
        freeCollectModule: { followerOnly: false },
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

const createPostEncrypted = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log(`${prefix}: address`, address);

  await login(address);

  const metadata: MetadataV2 = {
    version: '2.0.0',
    mainContentFocus: PublicationMainFocus.TextOnly,
    metadata_id: uuidv4(),
    description: 'Description',
    locale: 'en-US',
    content: 'gated!',
    external_url: null,
    image: null,
    imageMimeType: null,
    name: 'Name',
    attributes: [],
    tags: ['using_api_examples'],
    appId: 'api_examples_github',
    // media: [
    //   {
    //     type: 'image/png',
    //     altTag: 'alt tag',
    //     cover: 'ipfs://QmZq4ozZ4ZAoPuPnujgyhQmpmsQTJnBS36KfijUCqmnhQa',
    //     item: 'ipfs://QmZq4ozZ4ZAoPuPnujgyhQmpmsQTJnBS36KfijUCqmnhQa',
    //   },
    // ],
    animation_url: null,
  };

  const { request } = await createGatedPublicPostRequest(
    profileId,
    metadata,
    followAccessCondition(profileId)
  );

  const signedResult = await signCreatePostTypedData(request);
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
    await createPostEncrypted();
  }
})();
