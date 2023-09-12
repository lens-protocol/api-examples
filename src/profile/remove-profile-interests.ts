import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { RemoveProfileInterestsDocument } from '../graphql/generated';

const removeProfileInterestsRequest = async (interests: string[]) => {
  await apolloClient.query({
    query: RemoveProfileInterestsDocument,
    variables: {
      request: {
        interests,
      },
    },
  });
};

// Currently fails due to sql error
export const removeProfileInterests = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  await login(address);

  await removeProfileInterestsRequest(['0x0e']);
};

(async () => {
  await removeProfileInterests();
})();
