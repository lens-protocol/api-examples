import { v4 as uuidv4 } from 'uuid';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { broadcastRequestOnchain } from '../broadcast/shared-broadcast';
import { explicitStart, PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import {
  CreateCommentViaDispatcherDocument,
  CreatePublicCommentRequest,
  PublicationMainFocus,
} from '../../graphql-v1/generated';
import { Metadata } from '../interfaces/publication';
import { uploadIpfs } from '../ipfs';
import { profile } from '../profile/get-profile';
import { pollAndIndexComment, signCreateCommentTypedData } from './comment';

const prefix = 'create comment gasless';

export const createCommentViaDispatcherRequest = async (request: CreatePublicCommentRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateCommentViaDispatcherDocument,
    variables: {
      request,
    },
  });

  return result.data!.createCommentViaDispatcher;
};

export const commentGasless = async (createCommentRequest: CreatePublicCommentRequest) => {
  const profileResult = await profile({ profileId: PROFILE_ID });
  if (!profileResult) {
    throw new Error('Could not find profile');
  }

  // this means it they have not setup the dispatcher, if its a no you must use broadcast
  if (profileResult.dispatcher?.canUseRelay) {
    const dispatcherResult = await createCommentViaDispatcherRequest(createCommentRequest);
    console.log('create comment via dispatcher: createPostViaDispatcherRequest', dispatcherResult);

    if (dispatcherResult.__typename !== 'RelayerResult') {
      console.error('create comment via dispatcher: failed', dispatcherResult);
      throw new Error('create comment via dispatcher: failed');
    }

    return { txHash: dispatcherResult.txHash, txId: dispatcherResult.txId };
  } else {
    const signedResult = await signCreateCommentTypedData(createCommentRequest);
    console.log('create comment via broadcast: signedResult', signedResult);

    const broadcastResult = await broadcastRequestOnchain({
      id: signedResult.result.id,
      signature: signedResult.signature,
    });

    if (broadcastResult.__typename !== 'RelayerResult') {
      console.error('create comment via broadcast: failed', broadcastResult);
      throw new Error('create comment via broadcast: failed');
    }

    console.log('create comment via broadcast: broadcastResult', broadcastResult);
    return { txHash: broadcastResult.txHash, txId: broadcastResult.txId };
  }
};

const createCommentGasless = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('create comment: address', address);

  await login(address);

  const ipfsResult = await uploadIpfs<Metadata>({
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
  });
  console.log('create comment: ipfs result', ipfsResult);

  // hard coded to make the code example clear
  const createCommentRequest = {
    profileId,
    // remember it has to be indexed and follow metadata standards to be traceable!
    publicationId: `0x2f-0x01be`,
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

  const result = await commentGasless(createCommentRequest);
  console.log('create comment gasless', result);

  await pollAndIndexComment(result.txHash, profileId, prefix);
};

(async () => {
  if (explicitStart(__filename)) {
    await createCommentGasless();
  }
})();
