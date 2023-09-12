import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { ProfileBookmarksDocument, ProfileBookmarksRequest } from '../graphql/generated';

const publicationsProfileBookmarks = (request: ProfileBookmarksRequest) => {
  return apolloClient.query({
    query: ProfileBookmarksDocument,
    variables: {
      request,
      statsRequest: {},
    },
  });
};

export const bookmarks = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('bookmarks: address', address);

  await login(address);

  const result = await publicationsProfileBookmarks({});

  console.log('bookmarks: result', result.data);

  return result.data;
};

(async () => {
  await bookmarks();
})();
