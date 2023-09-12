import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { getAddressFromSigner } from '../ethers.service';
import { CreateNftGalleryDocument } from '../graphql/generated';

// This does not work due to postgres syntax error
const createNftGallery = async () => {
  await apolloClient.mutate({
    mutation: CreateNftGalleryDocument,
    variables: {
      request: {
        name: 'Test test',
        items: [
          {
            tokenId: 1,
            contract: {
              address: '0x54be3a794282c030b15e43ae2bb182e14c409c5e',
              chainId: 80001,
            },
          },
        ],
      },
    },
  });
};

const nftGalleryOperations = async () => {
  const address = getAddressFromSigner();
  console.log('add bookmark: address', address);

  await login(address);

  await createNftGallery();
};

(async function () {
  await nftGalleryOperations();
})();
