import { apolloClient } from '../apollo-client';
import { NftCollectionOwnersDocument, NftCollectionOwnersRequest } from '../graphql/generated';

const getNftCollectionOwners = async (request: NftCollectionOwnersRequest) => {
  const result = await apolloClient.query({
    query: NftCollectionOwnersDocument,
    variables: {
      request,
    },
  });

  return result.data.nftCollectionOwners.items;
};

export const nftCollectionOwners = async () => {
  const nftCollectionOwners = await getNftCollectionOwners({
    address: '0x54be3a794282c030b15e43ae2bb182e14c409c5e',
    chainId: 80001,
  });

  console.log(`nft collection owners: ${nftCollectionOwners.length}`);

  return nftCollectionOwners;
};

(async () => {
  await nftCollectionOwners();
})();
