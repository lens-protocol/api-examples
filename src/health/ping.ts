import { apolloClient } from '../apollo-client';
import { PingDocument } from '../graphql/generated';

const pingRequest = async () => {
  const result = await apolloClient.query({
    query: PingDocument,
  });

  return result.data.ping;
};

export const ping = async () => {
  const result = await pingRequest();

  console.log('ping: result', result);
  return result;
};

(async () => {
  await ping();
})();
