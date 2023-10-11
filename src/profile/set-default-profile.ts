import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart, PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { SetDefaultProfileDocument } from '../graphql/generated';

export const setDefaultProfileRequest = async (defaultProfileId: string) => {
  const result = await apolloClient.mutate({
    mutation: SetDefaultProfileDocument,
    variables: {
      request: {
        defaultProfileId,
      },
    },
  });

  return result.data!.setDefaultProfile;
};

const setDefaultProfile = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('set default profile: address', address);

  await login(address);

  await setDefaultProfileRequest(profileId);
  console.log('set default profile: success');
};

(async () => {
  if (explicitStart(__filename)) {
    await setDefaultProfile();
  }
})();
