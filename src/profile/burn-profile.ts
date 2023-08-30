import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner, signedTypeData, splitSignature } from '../ethers.service';
import { BurnProfileRequest, CreateBurnProfileTypedDataDocument } from '../../graphql-v1/generated';
import { lensHub } from '../lens-hub';

const createBurnProfileTypedData = async (request: BurnProfileRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateBurnProfileTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createBurnProfileTypedData;
};

export const burnProfile = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('set profile image uri normal: address', address);

  await login(address);

  const result = await createBurnProfileTypedData({
    profileId,
  });
  console.log('burn profile', result);

  const typedData = result.typedData;
  console.log('burn profile: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('burn profile: signature', signature);

  const { v, r, s } = splitSignature(signature);
  const tx = lensHub.burnWithSig(typedData.value.tokenId, {
    v,
    r,
    s,
    deadline: typedData.value.deadline,
  });

  console.log('burn profile: tx hash', tx.hash);
};

(async () => {
  await burnProfile();
})();
