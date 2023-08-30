import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { broadcastRequestOnchain } from '../broadcast/shared-broadcast';
import { explicitStart, PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import {
  CreateSetProfileImageUriViaDispatcherDocument,
  UpdateProfileImageRequest,
} from '../../graphql-v1/generated';
import { pollUntilIndexed } from '../indexer/has-transaction-been-indexed';
import { profile } from './get-profile';
import { signCreateSetProfileImageUriTypedData } from './set-profile-image-uri';

const createSetProfileUriViaDispatcherRequest = async (request: UpdateProfileImageRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateSetProfileImageUriViaDispatcherDocument,
    variables: {
      request,
    },
  });

  return result.data!.createSetProfileImageURIViaDispatcher;
};
const setProfileImage = async (createProfileImageRequest: UpdateProfileImageRequest) => {
  const profileResult = await profile({ profileId: PROFILE_ID });
  if (!profileResult) {
    throw new Error('Could not find profile');
  }

  // this means it they have not setup the dispatcher, if its a no you must use broadcast
  if (profileResult.dispatcher?.canUseRelay) {
    const dispatcherResult = await createSetProfileUriViaDispatcherRequest(
      createProfileImageRequest
    );
    console.log(
      'set profile image url via dispatcher: createPostViaDispatcherRequest',
      dispatcherResult
    );

    if (dispatcherResult.__typename !== 'RelayerResult') {
      console.error('set profile image url via dispatcher: failed', dispatcherResult);
      throw new Error('set profile image url via dispatcher: failed');
    }

    return { txHash: dispatcherResult.txHash, txId: dispatcherResult.txId };
  } else {
    const signedResult = await signCreateSetProfileImageUriTypedData(createProfileImageRequest);
    console.log('set profile image url via broadcast: signedResult', signedResult);

    const broadcastResult = await broadcastRequestOnchain({
      id: signedResult.result.id,
      signature: signedResult.signature,
    });

    if (broadcastResult.__typename !== 'RelayerResult') {
      console.error('set profile image url via broadcast: failed', broadcastResult);
      throw new Error('set profile image url via broadcast: failed');
    }

    console.log('set profile image url via broadcast: broadcastResult', broadcastResult);
    return { txHash: broadcastResult.txHash, txId: broadcastResult.txId };
  }
};

const setProfileImageUri = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('set profile image uri: address', address);

  await login(address);

  // hard coded to make the code example clear
  const setProfileImageUriRequest = {
    profileId,
    url: 'ipfs://QmSfyMcnh1wnJHrAWCBjZHapTS859oNSsuDFiAPPdAHgHP',
  };

  const result = await setProfileImage(setProfileImageUriRequest);
  console.log('set profile image url gasless', result);

  console.log('set profile image url: poll until indexed');
  const indexedResult = await pollUntilIndexed({ txId: result.txId });

  console.log('set profile image url: profile has been indexed', result);

  const logs = indexedResult.txReceipt!.logs;

  console.log('set profile image url: logs', logs);
};

(async () => {
  if (explicitStart(__filename)) {
    await setProfileImageUri();
  }
})();
