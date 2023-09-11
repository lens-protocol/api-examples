import { apolloClient } from '../apollo-client';
import { NftGalleriesDocument, NftGalleriesRequest } from '../graphql/generated';

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
