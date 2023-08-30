import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { broadcastDataAvailabilityRequest } from '../broadcast/broadcast-data-availability';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner, signedTypeData } from '../ethers.service';
import {
  CreateDataAvailabilityMirrorRequest,
  CreateDataAvailabilityMirrorTypedDataDocument,
  CreateDataAvailabilityMirrorViaDispatcherDocument,
} from '../../graphql-v1/generated';
import { profile } from '../profile/get-profile';

const createDAMirrorViaDispatcherRequest = async (request: CreateDataAvailabilityMirrorRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateDataAvailabilityMirrorViaDispatcherDocument,
    variables: {
      request,
    },
  });

  return result.data!.createDataAvailabilityMirrorViaDispatcher;
};

export const createDAMirrorTypedData = async (request: CreateDataAvailabilityMirrorRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateDataAvailabilityMirrorTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createDataAvailabilityMirrorTypedData;
};

export const signCreateMirrorTypedData = async (request: CreateDataAvailabilityMirrorRequest) => {
  const result = await createDAMirrorTypedData(request);
  console.log('create DA mirror: createMirrorTypedData', result);

  const typedData = result.typedData;
  console.log('create DA mirror: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('create DA mirror: signature', signature);

  return { result, signature };
};

const mirrorDA = async (
  createMirrorRequest: CreateDataAvailabilityMirrorRequest,
  useDispatcherIfEnabled: boolean
) => {
  const profileResult = await profile({ profileId: PROFILE_ID });
  if (!profileResult) {
    throw new Error('Could not find profile');
  }

  // this means it they have not setup the dispatcher, if its a no you must use broadcast
  if (profileResult.dispatcher?.canUseRelay && useDispatcherIfEnabled) {
    const dispatcherResult = await createDAMirrorViaDispatcherRequest(createMirrorRequest);
    console.log(
      'create DA mirror via dispatcher: createDAMirrorViaDispatcherRequest',
      dispatcherResult
    );

    return dispatcherResult;
  } else {
    const signedResult = await signCreateMirrorTypedData(createMirrorRequest);
    console.log('create DA mirror via broadcast: signedResult', signedResult);

    const broadcastResult = await broadcastDataAvailabilityRequest({
      id: signedResult.result.id,
      signature: signedResult.signature,
    });

    if (broadcastResult.__typename !== 'CreateDataAvailabilityPublicationResult') {
      console.error('create DA mirror via broadcast: failed', broadcastResult);
      throw new Error('create DA mirror via broadcast: failed');
    }

    console.log('create DA mirror via broadcast: broadcastResult', broadcastResult);
    return broadcastResult;
  }
};

export const createMirrorDataAvailability = async (useDispatcherIfEnabled: boolean) => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('create DA mirror: address', address);

  await login(address);

  // hard coded to make the code example clear
  const createMirrorRequest: CreateDataAvailabilityMirrorRequest = {
    from: profileId,
    mirror: '0x18-0x3a-DA-ece9b6a4',
  };

  const result = await mirrorDA(createMirrorRequest, useDispatcherIfEnabled);
  console.log('create DA mirror created', result);

  return result;
};

(async () => {
  // toggle to false if you only want to use the signed typed data approach! (good for testing)
  await createMirrorDataAvailability(true);
})();
