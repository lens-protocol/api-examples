import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import {
  AddPublicationProfileNotInterestedDocument,
  PublicationProfileNotInterestedRequest,
} from '../graphql/generated';

const addPublicationProfileNotInterested = async (
  request: PublicationProfileNotInterestedRequest
) => {
  const result = await apolloClient.mutate({
    mutation: AddPublicationProfileNotInterestedDocument,
    variables: {
      request,
    },
  });

  return result.data!.addPublicationProfileNotInterested;
};

export const addNotInterested = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('add not interested: address', address);

  await login(address);

  await addPublicationProfileNotInterested({
    profileId,
    publicationId: '0x2f-0x01be',
  });

  console.log('add not interested: success');
};

(async () => {
  await addNotInterested();
})();
