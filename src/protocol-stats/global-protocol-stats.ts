import { gql } from '@apollo/client/core';
import { apolloClient } from '../apollo-client';
import { prettyJSON } from '../helpers';

const GET_GLOBAL_PROTOCOL_STATS = `
  query($request: GlobalProtocolStatsRequest) {
    globalProtocolStats(request: $request) {
        totalProfiles
        totalBurntProfiles
        totalPosts
        totalMirrors
        totalComments
        totalCollects
        totalFollows
        totalRevenue {
            asset {
                name
                symbol
                decimals
                address
            }
            value
        }
     }
  }
`;

const getGlobalStatsRequest = () => {
  return apolloClient.query({
    query: gql(GET_GLOBAL_PROTOCOL_STATS),
  });
};

export const getGlobalStats = async () => {
  const result = await getGlobalStatsRequest();
  prettyJSON('global protocol stats: result', result.data);

  return result.data;
};

(async () => {
  await getGlobalStats();
})();
