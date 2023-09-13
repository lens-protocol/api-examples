import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import {
  AddPublicationNotInterestedDocument,
  PublicationNotInterestedRequest,
} from '../graphql/generated';

const addPublicationProfileNotInterested = async (request: PublicationNotInterestedRequest) => {
  const result = await apolloClient.mutate({
    mutation: AddPublicationNotInterestedDocument,
    variables: {
      request,
    },
  });

  return result.data!.addPublicationNotInterested;
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
    on: '0x2f-0x01be',
  });

  console.log('add not interested: success');
};

(async () => {
  await addNotInterested();
})();
