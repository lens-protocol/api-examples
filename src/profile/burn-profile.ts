import { BurnProfileRequest, CreateBurnProfileTypedDataDocument } from '../../graphql-v1/generated';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
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
  console.log('burn profile: ', PROFILE_ID);

  const tx = await lensHub.burn(profileId);

  console.log('burn profile: tx hash', tx.hash);
};

(async () => {
  await burnProfile();
})();
