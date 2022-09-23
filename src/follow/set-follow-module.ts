import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner, signedTypeData, splitSignature } from '../ethers.service';
import {
  CreateSetFollowModuleRequest,
  CreateSetFollowModuleTypedDataDocument,
} from '../graphql/generated';
import { lensHub } from '../lens-hub';

const createSetFollowModuleTypedData = async (request: CreateSetFollowModuleRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateSetFollowModuleTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createSetFollowModuleTypedData;
};

export const setFollowModule = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('set follow module: address', address);

  await login(address);

  // hard coded to make the code example clear
  const setFollowModuleRequest = {
    profileId,
    followModule: {
      // freeFollowModule: true,
      // feeFollowModule: {
      //   amount: {
      //     currency: '0x3C68CE8504087f89c640D02d133646d98e64ddd9',
      //     value: '0.01',
      //   },
      //   recipient: address,
      // },
      // revertFollowModule: true,
      profileFollowModule: true,
    },
  };

  const result = await createSetFollowModuleTypedData(setFollowModuleRequest);
  console.log('set follow module: result', result);

  const typedData = result.typedData;
  console.log('set follow module: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('set follow module: signature', signature);

  const { v, r, s } = splitSignature(signature);

  const tx = await lensHub.setFollowModuleWithSig({
    profileId: typedData.value.profileId,
    followModule: typedData.value.followModule,
    followModuleInitData: typedData.value.followModuleInitData,
    sig: {
      v,
      r,
      s,
      deadline: typedData.value.deadline,
    },
  });
  console.log('follow: tx hash', tx.hash);
};

(async () => {
  await setFollowModule();
})();
