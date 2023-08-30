import { apolloClient } from '../apollo-client';
import {
  BroadcastOnMomokaDocument,
  BroadcastOnchainDocument,
  BroadcastRequest,
} from '../graphql/generated';

export const broadcastOnchainRequest = async (request: BroadcastRequest) => {
  const result = await apolloClient.mutate({
    mutation: BroadcastOnchainDocument,
    variables: {
      request,
    },
  });

  return result.data!.broadcastOnchain;
};

export const broadcastOnMomokaRequest = async (request: BroadcastRequest) => {
  const result = await apolloClient.mutate({
    mutation: BroadcastOnMomokaDocument,
    variables: {
      request,
    },
  });

  return result.data!.broadcastOnMomoka;
};
