import util from 'util';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { PublicationBookmarksDocument, PublicationBookmarksRequest } from '../graphql/generated';

const publicationsProfileBookmarks = async (request: PublicationBookmarksRequest) => {
  const result = await apolloClient.query({
    query: PublicationBookmarksDocument,
    variables: {
      request,
    },
  });

  return result.data!.publicationBookmarks;
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

  console.log('bookmarks: result', util.inspect(result, { showHidden: false, depth: null }));

  return result;
};

(async () => {
  await bookmarks();
})();
