import { apolloClient } from '../apollo-client';
import { PROFILE_ID } from '../config';
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

export const nftGalleries = async () => {
  const nftGalleries = await getNftGalleries({
    for: PROFILE_ID,
  });

  console.log(`nft galleries: ${nftGalleries.items}`);

  return nftGalleries;
};

(async () => {
  await nftGalleries();
})();
