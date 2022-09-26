import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner, signedTypeData, splitSignature } from '../ethers.service';
import {
  CreateSetDefaultProfileRequest,
  CreateSetDefaultProfileTypedDataDocument,
} from '../graphql/generated';
import { pollUntilIndexed } from '../indexer/has-transaction-been-indexed';
import { lensHub } from '../lens-hub';

const createSetDefaultProfileTypedData = async (request: CreateSetDefaultProfileRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateSetDefaultProfileTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createSetDefaultProfileTypedData;
};

export const setDefaultProfile = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('set default profile: address', address);

  await login(address);

  const result = await createSetDefaultProfileTypedData({ profileId });
  console.log('set default profile: createSetDefaultProfileTypedData', result);

  const typedData = result.typedData;
  console.log('set default profile: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('set default profile: signature', signature);

  const { v, r, s } = splitSignature(signature);

  const tx = await lensHub.setDefaultProfileWithSig({
    profileId: typedData.value.profileId,
    wallet: typedData.value.wallet,
    sig: {
      v,
      r,
      s,
      deadline: typedData.value.deadline,
    },
  });
  console.log('set default profile: tx hash', tx.hash);

  console.log('set default profile: poll until indexed');
  const indexedResult = await pollUntilIndexed({ txHash: tx.txHash });

  console.log('set default profile: action has been indexed', indexedResult);

  return result;
};

(async () => {
  await setDefaultProfile();
})();
