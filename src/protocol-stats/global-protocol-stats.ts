
import { apolloClient } from '../apollo-client';

import {GlobalProtocolStatsDocument } from '../graphql/generated'

const getGlobalStatsRequest = () => {
  return apolloClient.query({
    query: GlobalProtocolStatsDocument,
  });
};

export const getGlobalStats = async () => {
  const result = await getGlobalStatsRequest();
  console.log('global protocol stats: result', result.data);

  return result.data;
};

(async () => {
  await getGlobalStats();
})();
