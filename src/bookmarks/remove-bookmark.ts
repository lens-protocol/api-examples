import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import {
  PublicationProfileBookmarkRequest,
  RemovePublicationProfileBookmarkDocument,
} from '../../graphql-v1/generated';

const removePublicationProfileBookmark = async (request: PublicationProfileBookmarkRequest) => {
  const result = await apolloClient.mutate({
    mutation: RemovePublicationProfileBookmarkDocument,
    variables: {
      request,
    },
  });

  return result.data!.removePublicationProfileBookmark;
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
    profileId,
    publicationId: '0x2f-0x01be',
  });

  console.log('remove bookmark: success');
};

(async () => {
  await removeBookmark();
})();
