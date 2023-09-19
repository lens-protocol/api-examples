import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import {
  CreateNftGalleryDocument,
  DeleteNftGalleryDocument,
  UpdateNftGalleryInfoDocument,
} from '../graphql/generated';

const createNftGallery = async () => {
  const res = await apolloClient.mutate({
    mutation: CreateNftGalleryDocument,
    variables: {
      request: {
        name: 'Test test',
        items: [
          {
            tokenId: '1',
            contract: {
              address: '0x54be3a794282c030b15e43ae2bb182e14c409c5e',
              chainId: 80001,
            },
          },
        ],
      },
    },
  });

  return res.data?.createNftGallery;
};

const updateNftGalleryInfo = async (nftGalleryId: string, name: string) => {
  await apolloClient.mutate({
    mutation: UpdateNftGalleryInfoDocument,
    variables: {
      request: {
        name,
        galleryId: nftGalleryId,
      },
    },
  });
};

const deleteNftGallery = async (nftGalleryId: string) => {
  await apolloClient.mutate({
    mutation: DeleteNftGalleryDocument,
    variables: {
      request: {
        galleryId: nftGalleryId,
      },
    },
  });
};

const nftGalleryOperations = async () => {
  const address = getAddressFromSigner();
  console.log('nft gallery operations: address', address);

  if (!PROFILE_ID) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  await login(address);

  const nftGalleryId = await createNftGallery();

  await updateNftGalleryInfo(nftGalleryId, 'Test test 2');

  await deleteNftGallery(nftGalleryId);
};

(async function () {
  await nftGalleryOperations();
})();
