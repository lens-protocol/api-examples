import { apolloClient } from '../apollo-client';
import { BroadcastDocument, BroadcastRequest } from '../graphql/generated';

export const broadcastRequest = async (request: BroadcastRequest) => {
  const result = await apolloClient.mutate({
    mutation: BroadcastDocument,
    variables: {
      request,
    },
  });

  return result.data!.broadcast;
};
