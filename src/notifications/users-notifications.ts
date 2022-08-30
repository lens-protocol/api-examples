
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';


import {NotificationsDocument } from '../graphql/generated'


const getNotifications = (profileId: string) => {
  return apolloClient.mutate({
    mutation: NotificationsDocument,
    variables: {
      request: {
        profileId,
        limit: 10,
      },
    },
  });
};

export const notifications = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('notifications: address', address);

  await login(address);

  const result = await getNotifications(profileId);

  console.log('notifications: result', result.data);

  return result.data;
};

(async () => {
  await notifications();
})();
