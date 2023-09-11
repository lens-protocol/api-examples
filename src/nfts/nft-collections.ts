import { apolloClient } from '../apollo-client';
import { NftCollectionsDocument, NftCollectionsRequest } from '../graphql/generated';

const getNftCollections = async (request: NftCollectionsRequest) => {
  const result = await apolloClient.query({
    query: NftCollectionsDocument,
    variables: {
      request,
    },
  });

  return result.data.nftCollections.items;
};

export const nftCollections = async () => {
  const nftCollections = await getNftCollections({
    forAddress: '0x54be3a794282c030b15e43ae2bb182e14c409c5e',
  });

  console.log(`nft collections: ${nftCollections.length}`);

  return nftCollections;
};

(async () => {
  await nftCollections();
})();
