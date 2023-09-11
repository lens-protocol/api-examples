import { apolloClient } from '../apollo-client';
import { PROFILE_ID } from '../config';
import { login } from '../authentication/login';
import { GetInvitedProfilesDocument } from '../graphql/generated';
import { getAddressFromSigner } from '../ethers.service';

const getInvitedProfiles = async () => {
  const res = await apolloClient.query({
    query: GetInvitedProfilesDocument,
  });

  return res.data.invitedProfiles;
};

const invitedProfiles = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('add bookmark: address', address);

  await login(address);

  const invitedProfiles = await getInvitedProfiles();

  console.log(`invitedProfiles: ${invitedProfiles.length} profiles`);
};

(async function () {
  await invitedProfiles();
})();
