import { gql } from '@apollo/client/core';
import { apolloClient } from '../apollo-client';
import { prettyJSON } from '../helpers';

const GET_PING = `
  query {
    ping
  }
`;

const pingRequest = () => {
  return apolloClient.query({
    query: gql(GET_PING),
  });
};

export const ping = async () => {
  const result = await pingRequest();
  prettyJSON('ping: result', result.data);

  return result.data;
};

(async () => {
  await ping();
})();
