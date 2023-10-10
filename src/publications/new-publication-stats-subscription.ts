import { apolloClient } from '../apollo-client';
import { POST_ID } from '../config';
import { NewPublicationStatsDocument } from '../graphql/generated';
import { knownPostId } from '../known-common-input-constants';

const newPublicationStatsSubscription = (publicationId: string) => {
  apolloClient
    .subscribe({
      query: NewPublicationStatsDocument,
      variables: {
        for: publicationId,
      },
    })
    .subscribe({
      next(value) {
        console.log('newPublicationStatsSubscription:', value);
      },
    });
};

newPublicationStatsSubscription(POST_ID || knownPostId);
