import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { AddPublicationBookmarkDocument, PublicationBookmarkRequest } from '../graphql/generated';
import { knownPostId } from '../known-common-input-constants';

const addPublicationProfileBookmark = async (request: PublicationBookmarkRequest) => {
  const result = await apolloClient.mutate({
    mutation: AddPublicationBookmarkDocument,
    variables: {
      request,
    },
  });

  return result.data!.addPublicationBookmark;
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
    on: knownPostId,
  });

  console.log('add bookmark: success');
};

(async () => {
  await addBookmark();
})();
