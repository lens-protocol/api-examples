import { apolloClient } from '../apollo-client';
import { PROFILE_ID } from '../config';
import { ProfileManagersDocument } from '../graphql/generated';

const getProfilesManagers = async () => {
  const result = await apolloClient.query({
    query: ProfileManagersDocument,
    variables: {
      request: {
        for: PROFILE_ID,
      },
    },
  });

  return result.data.profileManagers;
};

const profilesManagers = async () => {
  const result = await getProfilesManagers();

  console.log(`profiles managed: result`, result);

  return result;
};

(async function () {
  await profilesManagers();
})();
