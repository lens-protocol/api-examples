import { v4 as uuidv4 } from 'uuid';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { broadcastRequestOnchain } from '../broadcast/shared-broadcast';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import {
  CreatePublicSetProfileMetadataUriRequest,
  CreateSetProfileMetadataViaDispatcherDocument,
} from '../../graphql-v1/generated';
import { pollUntilIndexed } from '../indexer/has-transaction-been-indexed';
import { ProfileMetadata } from '../interfaces/profile-metadata';
import { uploadIpfs } from '../ipfs';
import { profile } from './get-profile';
import { signCreateSetProfileMetadataTypedData } from './set-profile-metadata';

const createSetProfileMetadataViaDispatcherRequest = async (
  request: CreatePublicSetProfileMetadataUriRequest
) => {
  const result = await apolloClient.mutate({
    mutation: CreateSetProfileMetadataViaDispatcherDocument,
    variables: {
      request,
    },
  });

  return result.data!.createSetProfileMetadataViaDispatcher;
};

const setMetadata = async (createMetadataRequest: CreatePublicSetProfileMetadataUriRequest) => {
  const profileResult = await profile({ profileId: PROFILE_ID });
  if (!profileResult) {
    throw new Error('Could not find profile');
  }

  // this means it they have not setup the dispatcher, if its a no you must use broadcast
  if (profileResult.dispatcher?.canUseRelay) {
    const dispatcherResult = await createSetProfileMetadataViaDispatcherRequest(
      createMetadataRequest
    );
    console.log(
      'create profile metadata via dispatcher: createPostViaDispatcherRequest',
      dispatcherResult
    );

    if (dispatcherResult.__typename !== 'RelayerResult') {
      console.error('create profile metadata via dispatcher: failed', dispatcherResult);
      throw new Error('create profile metadata via dispatcher: failed');
    }

    return { txHash: dispatcherResult.txHash, txId: dispatcherResult.txId };
  } else {
    const signedResult = await signCreateSetProfileMetadataTypedData(createMetadataRequest);
    console.log('create profile metadata via broadcast: signedResult', signedResult);

    const broadcastResult = await broadcastRequestOnchain({
      id: signedResult.result.id,
      signature: signedResult.signature,
    });

    if (broadcastResult.__typename !== 'RelayerResult') {
      console.error('create profile metadata via broadcast: failed', broadcastResult);
      throw new Error('create profile metadata via broadcast: failed');
    }

    console.log('create profile metadata via broadcast: broadcastResult', broadcastResult);
    return { txHash: broadcastResult.txHash, txId: broadcastResult.txId };
  }
};

export const setProfileMetadata = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('create profile: address', address);

  await login(address);

  const ipfsResult = await uploadIpfs<ProfileMetadata>({
    name: 'LensProtocol.eth',
    bio: 'A permissionless, composable, & decentralized social graph that makes building a Web3 social platform easy.',
    cover_picture: 'https://pbs.twimg.com/profile_banners/1478109975406858245/1645016027/1500x500',
    attributes: [
      {
        traitType: 'string',
        value: 'yes this is custom',
        key: 'custom_field',
      },
    ],
    version: '1.0.0',
    metadata_id: uuidv4(),
  });
  console.log('create profile: ipfs result', ipfsResult);

  // hard coded to make the code example clear
  const createProfileMetadataRequest = {
    profileId,
    metadata: `ipfs://${ipfsResult.path}`,
  };

  const result = await setMetadata(createProfileMetadataRequest);
  console.log('create comment gasless', result);

  console.log('create profile metadata: poll until indexed');
  const indexedResult = await pollUntilIndexed({ txId: result.txId });

  console.log('create profile metadata: profile has been indexed', result);

  const logs = indexedResult.txReceipt!.logs;

  console.log('create profile metadata: logs', logs);

  return result;
};

(async () => {
  await setProfileMetadata();
})();
