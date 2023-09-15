import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { PublicationBookmarksDocument, PublicationBookmarksRequest } from '../graphql/generated';

const publicationsProfileBookmarks = (request: PublicationBookmarksRequest) => {
  return apolloClient.query({
    query: PublicationBookmarksDocument,
    variables: {
      request,
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
