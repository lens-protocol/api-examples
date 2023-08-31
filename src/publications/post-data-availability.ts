import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { broadcastDataAvailabilityRequest } from '../broadcast/broadcast-momoka-post-example';
import { PROFILE_ID } from '../config';
import { checkProofs } from '../data-availability-proof-check';
import { getAddressFromSigner, signedTypeData } from '../ethers.service';
import {
  CreateDataAvailabilityPostRequest,
  CreateDataAvailabilityPostTypedDataDocument,
  CreateDataAvailabilityPostViaDispatcherDocument,
} from '../../graphql-v1/generated';
import { profile } from '../profile/get-profile';

const createDAPostViaDispatcherRequest = async (request: CreateDataAvailabilityPostRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateDataAvailabilityPostViaDispatcherDocument,
    variables: {
      request,
    },
  });

  return result.data!.createDataAvailabilityPostViaDispatcher;
};

export const createDAPostTypedData = async (request: CreateDataAvailabilityPostRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateDataAvailabilityPostTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createDataAvailabilityPostTypedData;
};

export const signCreateDAPostTypedData = async (request: CreateDataAvailabilityPostRequest) => {
  const result = await createDAPostTypedData(request);
  console.log('create DA post: createDAPostTypedData', result);

  const typedData = result.typedData;
  console.log('create DA post: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('create DA post: signature', signature);

  return { result, signature };
};

const createPostOnMomoka = async (
  createDAPostRequest: CreateDataAvailabilityPostRequest,
  useDispatcherIfEnabled: boolean
) => {
  const profileResult = await profile({ profileId: PROFILE_ID });
  if (!profileResult) {
    throw new Error('Could not find profile');
  }

  console.log('create DA post: profileResult', profileResult);

  // this means it they have not setup the dispatcher, if its a no you must use broadcast
  if (profileResult.dispatcher?.canUseRelay && useDispatcherIfEnabled) {
    const dispatcherResult = await createDAPostViaDispatcherRequest(createDAPostRequest);
    console.log(
      'create DA post via dispatcher: createDAPostViaDispatcherRequest',
      dispatcherResult
    );

    return dispatcherResult;
  } else {
    const signedResult = await signCreateDAPostTypedData(createDAPostRequest);
    console.log('create DA post via broadcast: signedResult', signedResult);

    const broadcastResult = await broadcastDataAvailabilityRequest({
      id: signedResult.result.id,
      signature: signedResult.signature,
    });

    if (broadcastResult.__typename !== 'CreateDataAvailabilityPublicationResult') {
      console.error('create DA post via broadcast: failed', broadcastResult);
      throw new Error('create DA post via broadcast: failed');
    }

    console.log('create DA post via broadcast: broadcastResult', broadcastResult);
    return broadcastResult;
  }
};

export const createPostDataAvailability = async (useDispatcherIfEnabled: boolean) => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('create DA post: address', address);

  await login(address);

  // hard coded to make the code example clear
  const createDAPostRequest: CreateDataAvailabilityPostRequest = {
    from: profileId,
    contentURI: 'https://arweave.net/A492V5l-4w43v0QbqQZ2vtivOuRxEHTUHBJvub68CZE',
  };

  const result = await createPostOnMomoka(createDAPostRequest, useDispatcherIfEnabled);
  console.log('create DA post created', result);

  if (result.__typename !== 'CreateDataAvailabilityPublicationResult') {
    console.error('create DA post failed', result);
    return;
  }

  const valid = await checkProofs(result.proofs);
  console.log('create DA post: valid', valid);

  return result;
};

(async () => {
  // toggle to false if you only want to use the signed typed data approach! (good for testing)
  await createPostDataAvailability(true);
})();
