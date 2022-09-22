import { apolloClient } from '../apollo-client';
import { GlobalProtocolStatsDocument } from '../graphql/generated';

const getGlobalStatsRequest = async () => {
  const result = await apolloClient.query({
    query: GlobalProtocolStatsDocument,
  });

  return result.data.globalProtocolStats;
};

export const getGlobalStats = async () => {
  const result = await getGlobalStatsRequest();
  console.log('global protocol stats: result', result);

  return result;
};

(async () => {
  await getGlobalStats();
})();
