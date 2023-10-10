import { apolloClient } from '../apollo-client';
import { NewMomokaTransactionDocument } from '../graphql/generated';

const newMomokaTransactionSubscription = () => {
  apolloClient
    .subscribe({
      query: NewMomokaTransactionDocument,
    })
    .subscribe({
      next(value) {
        console.log('new tranasction: ', value);
      },
    });
};

newMomokaTransactionSubscription();
