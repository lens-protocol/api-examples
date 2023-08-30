import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { broadcastDataAvailabilityRequest } from '../broadcast/broadcast-data-availability';
import { explicitStart, PROFILE_ID } from '../config';
import { getAddressFromSigner, signedTypeData } from '../ethers.service';
import {
  CreateDataAvailabilityCommentRequest,
  CreateDataAvailabilityCommentTypedDataDocument,
  CreateDataAvailabilityCommentViaDispatcherDocument,
} from '../../graphql-v1/generated';
import { profile } from '../profile/get-profile';

const createDACommentViaDispatcherRequest = async (
  request: CreateDataAvailabilityCommentRequest
) => {
  const result = await apolloClient.mutate({
    mutation: CreateDataAvailabilityCommentViaDispatcherDocument,
    variables: {
      request,
    },
  });

  return result.data!.createDataAvailabilityCommentViaDispatcher;
};

export const createDACommentTypedData = async (request: CreateDataAvailabilityCommentRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateDataAvailabilityCommentTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createDataAvailabilityCommentTypedData;
};

export const signCreateDACommentTypedData = async (
  request: CreateDataAvailabilityCommentRequest
) => {
  const result = await createDACommentTypedData(request);
  console.log('create DA comment: createCommentTypedData', result);

  const typedData = result.typedData;
  console.log('create DA comment: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('create DA comment: signature', signature);

  return { result, signature };
};

const commentDA = async (
  createDACommentRequest: CreateDataAvailabilityCommentRequest,
  useDispatcherIfEnabled: boolean
) => {
  const profileResult = await profile({ profileId: PROFILE_ID });
  if (!profileResult) {
    throw new Error('Could not find profile');
  }

  // this means it they have not setup the dispatcher, if its a no you must use broadcast
  if (profileResult.dispatcher?.canUseRelay && useDispatcherIfEnabled) {
    const dispatcherResult = await createDACommentViaDispatcherRequest(createDACommentRequest);
    console.log(
      'create DA comment via dispatcher: createDACommentViaDispatcherRequest',
      dispatcherResult
    );

    return dispatcherResult;
  } else {
    const signedResult = await signCreateDACommentTypedData(createDACommentRequest);
    console.log('create DA comment via broadcast: signedResult', signedResult);

    const broadcastResult = await broadcastDataAvailabilityRequest({
      id: signedResult.result.id,
      signature: signedResult.signature,
    });

    if (broadcastResult.__typename !== 'CreateDataAvailabilityPublicationResult') {
      console.error('create DA comment via broadcast: failed', broadcastResult);
      throw new Error('create DA comment via broadcast: failed');
    }

    console.log('create DA comment via broadcast: broadcastResult', broadcastResult);
    return broadcastResult;
  }
};

export const createCommentDataAvailability = async (useDispatcherIfEnabled: boolean) => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('create DA comment: address', address);

  await login(address);

  // hard coded to make the code example clear
  const createDACommentRequest: CreateDataAvailabilityCommentRequest = {
    from: profileId,
    commentOn: '0x18-0x3a-DA-f334d07c',
    contentURI: 'https://arweave.net/A492V5l-4w43v0QbqQZ2vtivOuRxEHTUHBJvub68CZE',
  };

  const result = await commentDA(createDACommentRequest, useDispatcherIfEnabled);
  console.log('create DA comment created', result);

  return result;
};

(async () => {
  if (explicitStart(__filename)) {
    // toggle to false if you only want to use the signed typed data approach! (good for testing)
    await createCommentDataAvailability(true);
  }
})();
