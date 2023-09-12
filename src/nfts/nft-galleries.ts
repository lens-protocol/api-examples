import { apolloClient } from '../apollo-client';
import { NftGalleriesDocument, NftGalleriesRequest } from '../graphql/generated';

// Currently not working: "Expected Iterable, but did not find one for field \"Query.nftGalleries\".
const getNftGalleries = async (request: NftGalleriesRequest) => {
  const result = await apolloClient.query({
    query: NftGalleriesDocument,
    variables: {
      request,
    },
  });

  return result.data.nftGalleries;
};

export const nftCollections = async () => {
  const nftGalleries = await getNftGalleries({
    for: '0x01',
  });

  console.log(`nft galleries: ${nftGalleries.length}`);

  return nftGalleries;
};

(async () => {
  await nftCollections();
})();
