import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { ProfileAlreadyInvitedDocument } from '../graphql/generated';

const getProfileAlreadyInvited = async () => {
  const result = await apolloClient.query({
    query: ProfileAlreadyInvitedDocument,
    variables: {
      request: {
        address: '0x54be3a794282c030b15e43ae2bb182e14c409c5e',
      },
    },
  });

  return result.data.profileAlreadyInvited;
};

export const profileAlreadyInvited = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('add bookmark: address', address);

  await login(address);

  const profileAlreadyInvited = await getProfileAlreadyInvited();

  console.log(`profile already invited result: ${profileAlreadyInvited}`);

  return profileAlreadyInvited;
};

(async () => {
  await profileAlreadyInvited();
})();
