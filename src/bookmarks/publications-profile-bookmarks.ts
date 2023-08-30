import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import {
  PublicationSortCriteria,
  PublicationsProfileBookmarkedQueryRequest,
  PublicationsProfileBookmarksDocument,
} from '../../graphql-v1/generated';

const publicationsProfileBookmarks = (request: PublicationsProfileBookmarkedQueryRequest) => {
  return apolloClient.query({
    query: PublicationsProfileBookmarksDocument,
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

  const result = await publicationsProfileBookmarks({
    profileId,
  });

  console.log('bookmarks: result', result.data);

  return result.data;
};

(async () => {
  await bookmarks();
})();
