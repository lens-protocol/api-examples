import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import {
  AddPublicationProfileBookmarkDocument,
  PublicationProfileBookmarkRequest,
} from '../../graphql-v1/generated';

const addPublicationProfileBookmark = async (request: PublicationProfileBookmarkRequest) => {
  const result = await apolloClient.mutate({
    mutation: AddPublicationProfileBookmarkDocument,
    variables: {
      request,
    },
  });

  return result.data!.addPublicationProfileBookmark;
};

export const addBookmark = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('add bookmark: address', address);

  await login(address);

  await addPublicationProfileBookmark({
    profileId,
    publicationId: '0x2f-0x01be',
  });

  console.log('add bookmark: success');
};

(async () => {
  await addBookmark();
})();
