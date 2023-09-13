import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import {
  PublicationNotInterestedRequest,
  UndoPublicationNotInterestedDocument,
} from '../graphql/generated';
import { knownPostId } from '../known-common-input-constants';

const removePublicationProfileNotInterested = async (request: PublicationNotInterestedRequest) => {
  const result = await apolloClient.mutate({
    mutation: UndoPublicationNotInterestedDocument,
    variables: {
      request,
    },
  });

  return result.data!.undoPublicationNotInterested;
};

export const removeNotInterested = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('remove not interested: address', address);

  await login(address);

  await removePublicationProfileNotInterested({
    on: knownPostId,
  });

  console.log('remove not interested: success');
};

(async () => {
  await removeNotInterested();
})();
