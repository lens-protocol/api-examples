import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { getAddressFromSigner } from '../ethers.service';
import { ProfileInterestTypes, RemoveProfileInterestsDocument } from '../graphql/generated';

const removeProfileInterestsRequest = async (interests: ProfileInterestTypes[]) => {
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
  const address = getAddressFromSigner();
  await login(address);

  await removeProfileInterestsRequest([ProfileInterestTypes.ArtEntertainment]);
};

(async () => {
  await removeProfileInterests();
})();
