import { apolloClient } from '../apollo-client';
import { ProxyActionStatusDocument } from '../../graphql-v1/generated';

export const proxyActionStatusRequest = async (proxyActionId: string) => {
  const result = await apolloClient.query({
    query: ProxyActionStatusDocument,
    variables: {
      proxyActionId,
    },
  });

  return result.data.proxyActionStatus;
};
