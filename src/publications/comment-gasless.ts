import { BigNumber, utils } from 'ethers';
import { v4 as uuidv4 } from 'uuid';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { broadcastRequest } from '../broadcast/broadcast-follow-example';
import { argsBespokeInit, PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import {
  CreateCommentViaDispatcherDocument,
  CreatePublicCommentRequest,
} from '../graphql/generated';
import { pollUntilIndexed } from '../indexer/has-transaction-been-indexed';
import { Metadata, PublicationMainFocus } from '../interfaces/publication';
import { uploadIpfs } from '../ipfs';
import { profile } from '../profile/get-profile';
import { signCreateCommentTypedData } from './comment';

const createCommentViaDispatcherRequest = async (request: CreatePublicCommentRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateCommentViaDispatcherDocument,
    variables: {
      request,
    },
  });

  return result.data!.createCommentViaDispatcher;
};

const comment = async (createCommentRequest: CreatePublicCommentRequest) => {
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

    const broadcastResult = await broadcastRequest({
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
  console.log('create comment: ipfs result', ipfsResult);

  // hard coded to make the code example clear
  const createCommentRequest = {
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

  const result = await comment(createCommentRequest);
  console.log('create comment gasless', result);

  console.log('create comment: poll until indexed');
  const indexedResult = await pollUntilIndexed({ txId: result.txId });

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
    await createCommentGasless();
  }
})();
