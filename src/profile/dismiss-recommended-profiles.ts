import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { DismissRecommendedProfilesDocument } from '../graphql/generated';
import { knownPostId } from '../known-common-input-constants';

const dismissRecommendedProfilesRequest = async (dismiss: string[]) => {
  await apolloClient.query({
    query: DismissRecommendedProfilesDocument,
    variables: {
      request: {
        dismiss,
      },
    },
  });
};

// Currently errors due to graphql error
export const dismissRecommendedProfiles = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  await login(address);

  await dismissRecommendedProfilesRequest([knownPostId]);
};

(async () => {
  await dismissRecommendedProfiles();
})();
