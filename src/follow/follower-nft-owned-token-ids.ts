
import { apolloClient } from '../apollo-client';
import { getAddressFromSigner } from '../ethers.service';

import {FollowerNftOwnedTokenIdsDocument } from '../graphql/generated'



const getFollowerNFTTokenIds = (address: string, profileId: string) => {
  return apolloClient.query({
    query: FollowerNftOwnedTokenIdsDocument,
    variables: {
      request: {
        address,
        profileId,
      },
    },
  });
};

export const followerNFTTokenIds = async () => {
  const address = getAddressFromSigner();
  console.log('followerNFTTokenIds: address', address);

  const result = await getFollowerNFTTokenIds(address, '0x0338a3');
  console.log('followerNFTTokenIds: result', result.data);

  return result.data;
};

(async () => {
  await followerNFTTokenIds();
})();
