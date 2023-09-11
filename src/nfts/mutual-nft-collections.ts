import { apolloClient } from '../apollo-client';
import { MutualNftCollectionsDocument, MutualNftCollectionsRequest } from '../graphql/generated';

const getMutualNftCollections = async (request: MutualNftCollectionsRequest) => {
  const result = await apolloClient.query({
    query: MutualNftCollectionsDocument,
    variables: {
      request,
    },
  });

  return result.data.mutualNftCollections.items;
};

export const usersNfts = async () => {
  const mutualNftCollections = await getMutualNftCollections({
    viewingProfileId: '0x01',
    yourProfileId: '0x03',
  });

  console.log(`mutual nft collections: ${mutualNftCollections.length}`);

  return mutualNftCollections;
};

(async () => {
  await usersNfts();
})();
