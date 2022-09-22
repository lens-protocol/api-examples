import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner, signedTypeData, splitSignature } from '../ethers.service';
import { CreateSetDispatcherTypedDataDocument, SetDispatcherRequest } from '../graphql/generated';
import { lensHub } from '../lens-hub';

const disableDispatcherWithTypedData = async (request: SetDispatcherRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateSetDispatcherTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createSetDispatcherTypedData;
};

export const disableDispatcher = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('disable dispatcher: address', address);

  await login(address);

  const result = await disableDispatcherWithTypedData({
    profileId,
    enable: false,
  });
  console.log('disable dispatcher: disableDispatcherWithTypedData', result);

  const typedData = result.typedData;
  console.log('disable dispatcher: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('disable dispatcher: signature', signature);

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
  console.log('disable dispatcher: tx hash', tx.hash);
};

(async () => {
  await disableDispatcher();
})();
