import { BigNumber, utils } from 'ethers';
import { v4 as uuidv4 } from 'uuid';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { broadcastRequestOnchain } from '../broadcast/shared-broadcast';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import {
  CreatePostViaDispatcherDocument,
  CreatePublicPostRequest,
  PublicationMainFocus,
} from '../../graphql-v1/generated';
import { waitUntilComplete } from '../indexer/has-transaction-been-indexed';
import { Metadata } from '../interfaces/publication';
import { uploadIpfs } from '../ipfs';
import { createMediaAttachment } from '../media/create-attachment';
import { profile } from '../profile/get-profile';
import { signCreatePostTypedData } from './post';

const createPostAttachViaDispatcherRequest = async (request: CreatePublicPostRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreatePostViaDispatcherDocument,
    variables: {
      request,
    },
  });

  return result.data!.createPostViaDispatcher;
};

const post = async (createPostRequest: CreatePublicPostRequest) => {
  const profileResult = await profile({ profileId: PROFILE_ID });
  if (!profileResult) {
    throw new Error('Could not find profile');
  }

  // this means it they have not setup the dispatcher, if its a no you must use broadcast
  if (profileResult.dispatcher?.canUseRelay) {
    const dispatcherResult = await createPostAttachViaDispatcherRequest(createPostRequest);
    console.log('create post via dispatcher: createPostViaDispatcherRequest', dispatcherResult);

    if (dispatcherResult.__typename !== 'RelayerResult') {
      console.error('create post via dispatcher: failed', dispatcherResult);
      throw new Error('create post via dispatcher: failed');
    }

    return { txHash: dispatcherResult.txHash, txId: dispatcherResult.txId };
  } else {
    const signedResult = await signCreatePostTypedData(createPostRequest);
    console.log('create post via broadcast: signedResult', signedResult);

    const broadcastResult = await broadcastRequestOnchain({
      id: signedResult.result.id,
      signature: signedResult.signature,
    });

    if (broadcastResult.__typename !== 'RelayerResult') {
      console.error('create post via broadcast: failed', broadcastResult);
      throw new Error('create post via broadcast: failed');
    }

    console.log('create post via broadcast: broadcastResult', broadcastResult);
    return { txHash: broadcastResult.txHash, txId: broadcastResult.txId };
  }
};

export const createPostGasless = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('create post: address', address);

  await login(address);
  const mediaFile = await createMediaAttachment();
  const ipfsResult = await uploadIpfs<Metadata>({
    version: '2.0.0',
    mainContentFocus: PublicationMainFocus.Video,
    metadata_id: uuidv4(),
    description: 'Description',
    locale: 'en-US',
    content: 'Content Testing',
    external_url: null,
    image: null,
    imageMimeType: null,
    name: 'Name',
    attributes: [],
    media: [mediaFile],
    tags: ['using_api_examples'],
    appId: 'api_examples_github',
  });
  console.log('create post: ipfs result', ipfsResult);

  // hard coded to make the code example clear
  const createPostRequest = {
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
    },
    referenceModule: {
      followerOnlyReferenceModule: false,
    },
  };

  const result = await post(createPostRequest);
  console.log('create post gasless', result);

  console.log('create post: poll until indexed');
  const indexedResult = await waitUntilComplete({ txId: result.txId });

  console.log('create post: profile has been indexed', result);

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

  return result;
};

(async () => {
  await createPostGasless();
})();
