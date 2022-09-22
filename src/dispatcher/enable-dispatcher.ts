import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner, signedTypeData, splitSignature } from '../ethers.service';
import { CreateSetDispatcherTypedDataDocument, SetDispatcherRequest } from '../graphql/generated';
import { lensHub } from '../lens-hub';

export const enableDispatcherWithTypedData = async (request: SetDispatcherRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateSetDispatcherTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createSetDispatcherTypedData;
};

const disableDispatcherWithTypedData = (profileId: string) => {
  return apolloClient.mutate({
    mutation: CreateSetDispatcherTypedDataDocument,
    variables: {
      request: {
        profileId,
        enable: false,
      },
    },
  });
};

export const enableDispatcher = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('set dispatcher: address', address);

  await login(address);

  const result = await enableDispatcherWithTypedData({
    profileId,
    dispatcher: '0xEEA0C1f5ab0159dba749Dc0BAee462E5e293daaF',
  });
  console.log('set dispatcher: enableDispatcherWithTypedData', result);

  const typedData = result.typedData;
  console.log('set dispatcher: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('set dispatcher: signature', signature);

  const { v, r, s } = splitSignature(signature);

  const tx = await lensHub.setDispatcherWithSig({
    profileId: typedData.value.profileId,
    dispatcher: typedData.value.dispatcher,
    sig: {
      v,
      r,
      s,
      deadline: typedData.value.deadline,
    },
  });
  console.log('set dispatcher: tx hash', tx.hash);
};

(async () => {
  await enableDispatcher();
})();
