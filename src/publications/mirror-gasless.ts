import { BigNumber, utils } from 'ethers';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { broadcastRequest } from '../broadcast/broadcast-follow-example';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { CreateMirrorRequest, CreateMirrorViaDispatcherDocument } from '../graphql/generated';
import { pollUntilIndexed } from '../indexer/has-transaction-been-indexed';
import { profile } from '../profile/get-profile';
import { signCreateMirrorTypedData } from './mirror';

const createMirrorViaDispatcherRequest = async (request: CreateMirrorRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateMirrorViaDispatcherDocument,
    variables: {
      request,
    },
  });

  return result.data!.createMirrorViaDispatcher;
};

const mirror = async (createMirrorRequest: CreateMirrorRequest) => {
  const profileResult = await profile({ profileId: PROFILE_ID });
  if (!profileResult) {
    throw new Error('Could not find profile');
  }

  // this means it they have not setup the dispatcher, if its a no you must use broadcast
  if (profileResult.dispatcher?.canUseRelay) {
    const dispatcherResult = await createMirrorViaDispatcherRequest(createMirrorRequest);
    console.log('create mirror via dispatcher: createPostViaDispatcherRequest', dispatcherResult);

    if (dispatcherResult.__typename !== 'RelayerResult') {
      console.error('create mirror via dispatcher: failed', dispatcherResult);
      throw new Error('create mirror via dispatcher: failed');
    }

    return { txHash: dispatcherResult.txHash, txId: dispatcherResult.txId };
  } else {
    const signedResult = await signCreateMirrorTypedData(createMirrorRequest);
    console.log('create mirror via broadcast: signedResult', signedResult);

    const broadcastResult = await broadcastRequest({
      id: signedResult.result.id,
      signature: signedResult.signature,
    });

    if (broadcastResult.__typename !== 'RelayerResult') {
      console.error('create mirror via broadcast: failed', broadcastResult);
      throw new Error('create mirror via broadcast: failed');
    }

    console.log('create mirror via broadcast: broadcastResult', broadcastResult);
    return { txHash: broadcastResult.txHash, txId: broadcastResult.txId };
  }
};

export const createMirror = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('create mirror: address', address);

  await login(address);

  // hard coded to make the code example clear
  const createMirrorRequest = {
    profileId,
    // remember it has to be indexed and follow metadata standards to be traceable!
    publicationId: '0x0f-0x01',
    referenceModule: {
      followerOnlyReferenceModule: false,
    },
  };

  const result = await mirror(createMirrorRequest);
  console.log('create mirror gasless', result);

  console.log('create mirror: poll until indexed');
  const indexedResult = await pollUntilIndexed(result.txHash);

  console.log('create mirror: profile has been indexed', result);

  const logs = indexedResult.txReceipt!.logs;

  console.log('create mirror: logs', logs);

  const topicId = utils.id(
    'MirrorCreated(uint256,uint256,uint256,uint256,bytes,address,bytes,uint256)'
  );
  console.log('topicid we care about', topicId);

  const profileCreatedLog = logs.find((l: any) => l.topics[0] === topicId);
  console.log('create mirror: created log', profileCreatedLog);

  let profileCreatedEventLog = profileCreatedLog!.topics;
  console.log('create mirror: created event logs', profileCreatedEventLog);

  const publicationId = utils.defaultAbiCoder.decode(['uint256'], profileCreatedEventLog[2])[0];

  console.log(
    'create mirror: contract publication id',
    BigNumber.from(publicationId).toHexString()
  );
  console.log(
    'create mirror: internal publication id',
    profileId + '-' + BigNumber.from(publicationId).toHexString()
  );

  return result;
};

(async () => {
  await createMirror();
})();
