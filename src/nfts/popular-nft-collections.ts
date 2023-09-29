import { apolloClient } from '../apollo-client';
import {
  PopularNftCollectionsDocument,
  PopularNftCollectionsRequest,
  PopularNftCollectionsOrder,
} from '../graphql/generated';

const getPopularNftCollections = async (request: PopularNftCollectionsRequest) => {
  const result = await apolloClient.query({
    query: PopularNftCollectionsDocument,
    variables: {
      request,
    },
  });

  return result.data.popularNftCollections;
};

export const popularNftCollections = async () => {
  const popularNftCollections = await getPopularNftCollections({
    onlyVerified: true,
    orderBy: PopularNftCollectionsOrder.TotalLensProfileOwners,
  });

  console.log(`popular nft collections: ${JSON.stringify(popularNftCollections)}`);

  return popularNftCollections;
};

(async () => {
  await popularNftCollections();
})();
