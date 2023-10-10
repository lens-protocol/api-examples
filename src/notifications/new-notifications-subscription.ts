import { apolloClient } from '../apollo-client';
import { PROFILE_ID } from '../config';
import { NotificationsSubscriptionDocument } from '../graphql/generated';

const newNotificationsSubscription = (profileId: string) => {
  apolloClient
    .subscribe({
      query: NotificationsSubscriptionDocument,
      variables: {
        for: profileId,
      },
    })
    .subscribe({
      next(value) {
        console.log('newNotificationsSubscription:', value);
      },
    });
};

if (!PROFILE_ID) {
  throw new Error('Must define PROFILE_ID in the .env to run this');
}

newNotificationsSubscription('0xba');
