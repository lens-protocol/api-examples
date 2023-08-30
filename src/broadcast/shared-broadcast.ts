import { apolloClient } from '../apollo-client';
import { BroadcastOnchainDocument, BroadcastRequest } from '../graphql/generated';

export const broadcastRequestOnchain = async (request: BroadcastRequest) => {
  const result = await apolloClient.mutate({
    mutation: BroadcastOnchainDocument,
    variables: {
      request,
    },
  });

  return result.data!.broadcastOnchain;
};
