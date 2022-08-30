
import { apolloClient } from '../apollo-client';
import { getAddressFromSigner } from '../ethers.service';
import {FollowingDocument } from '../graphql/generated'



const followingRequest = (walletAddress: string) => {
  return apolloClient.query({
    query: FollowingDocument,
    variables: {
      request: {
        address: walletAddress,
        limit: 10,
      },
    },
  });
};

export const following = async () => {
  const address = getAddressFromSigner();
  console.log('following: address', address);

  const result = await followingRequest(address);
  console.log('following: result', result.data);

  return result.data;
};

(async () => {
  await following();
})();
