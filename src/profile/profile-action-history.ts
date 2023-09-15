import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { ProfileActionHistoryDocument } from '../graphql/generated';

const getProfileActionHistory = async () => {
  const result = await apolloClient.query({
    query: ProfileActionHistoryDocument,
    variables: {
      request: {},
    },
  });

  return result.data.profileActionHistory;
};

export const profileActionHistory = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('add bookmark: address', address);

  await login(address);

  const profileActionHistory = await getProfileActionHistory();

  console.log(`profile action history: ${profileActionHistory}`);

  return profileActionHistory;
};

(async () => {
  await profileActionHistory();
})();
