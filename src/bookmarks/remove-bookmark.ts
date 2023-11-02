import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import {
  PublicationBookmarkRequest,
  RemovePublicationBookmarkDocument,
} from '../graphql/generated';
import { knownPostId } from '../known-common-input-constants';

const removePublicationProfileBookmark = async (request: PublicationBookmarkRequest) => {
  const result = await apolloClient.mutate({
    mutation: RemovePublicationBookmarkDocument,
    variables: {
      request,
    },
  });

  return result.data!.removePublicationBookmark;
};

export const removeBookmark = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('remove bookmark: address', address);

  await login(address);

  await removePublicationProfileBookmark({
    on: knownPostId,
  });

  console.log('remove bookmark: success');
};

(async () => {
  await removeBookmark();
})();
