import util from 'util';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { NotificationRequest, NotificationsDocument } from '../graphql/generated';

const getNotifications = async (request: NotificationRequest) => {
  const result = await apolloClient.mutate({
    mutation: NotificationsDocument,
    variables: {
      request,
    },
  });

  return result.data!.notifications;
};

export const notifications = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('notifications: address', address);

  await login(address);

  const result = await getNotifications({});

  console.log('notifications: result', util.inspect(result, { showHidden: false, depth: null }));

  return result;
};

(async () => {
  await notifications();
})();
