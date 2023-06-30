import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import {
  PublicationProfileNotInterestedRequest,
  RemovePublicationProfileNotInterestedDocument,
} from '../graphql/generated';

const removePublicationProfileNotInterested = async (
  request: PublicationProfileNotInterestedRequest
) => {
  const result = await apolloClient.mutate({
    mutation: RemovePublicationProfileNotInterestedDocument,
    variables: {
      request,
    },
  });

  return result.data!.removePublicationProfileNotInterested;
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
    profileId,
    publicationId: '0x2f-0x01be',
  });

  console.log('remove not interested: success');
};

(async () => {
  await removeNotInterested();
})();
