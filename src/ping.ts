
import { apolloClient } from '../apollo-client';

import {PingDocument } from '../graphql/generated'

const pingRequest = () => {
  return apolloClient.query({
    query: PingDocument,
  });
};

export const ping = async () => {
  const result = await pingRequest();
  //prettyJSON('ping: result', result);
  console.log(result)
  return result.data;
};

(async () => {
  await ping();
})();