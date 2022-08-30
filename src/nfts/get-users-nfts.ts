
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { getAddressFromSigner } from '../ethers.service';

import {NftsDocument } from '../graphql/generated'


const getUsersNfts = (
  ownerAddress: string,
  chainIds: number[],
  contractAddress?: string
) => {
  return apolloClient.query({
    query: NftsDocument,
    variables: {
      request: {
        ownerAddress,
        contractAddress,
        chainIds,
        limit: 10,
      },
    },
  });
};

export const usersNfts = async () => {
  const address = getAddressFromSigner();
  console.log('users nfts: address', address);

  await login(address);

  // - If you are using testnet this endpoint will only allow you to query `ethereum kovan (chainId: 42)` and `polygon Mumbai (chainId: 80001)`
  // - If you are using mainnet this endpoint will only allow you to query `ethereum mainnet (chainId: 1)` and `polygon mainnet (chainId: 137)`
  const result = await getUsersNfts(
    '0x54be3a794282c030b15e43ae2bb182e14c409c5e',
    [80001]
  );

  console.log('users nfts: result', result.data);

  return result.data;
};

(async () => {
  await usersNfts();
})();
