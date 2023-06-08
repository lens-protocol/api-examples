import { apolloClient } from '../apollo-client';
import { BroadcastDataAvailabilityDocument, BroadcastRequest } from '../graphql/generated';

export const broadcastDataAvailabilityRequest = async (request: BroadcastRequest) => {
  const result = await apolloClient.mutate({
    mutation: BroadcastDataAvailabilityDocument,
    variables: {
      request,
    },
  });

  return result.data!.broadcastDataAvailability;
};
