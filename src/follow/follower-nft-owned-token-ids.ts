import { gql } from '@apollo/client/core';
import { apolloClient } from '../apollo-client';
import { getAddressFromSigner } from '../ethers.service';
import { prettyJSON } from '../helpers';

const GET_FOLLOWER_NFT_TOKEN_IDS = `
  query($request: FollowerNftOwnedTokenIdsRequest!) {
    followerNftOwnedTokenIds(request: $request) { 
        followerNftAddress
        tokensIds
	  }
  }
`;

const getFollowerNFTTokenIds = (address: string, profileId: string) => {
  return apolloClient.query({
    query: gql(GET_FOLLOWER_NFT_TOKEN_IDS),
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
  prettyJSON('followerNFTTokenIds: result', result.data);

  return result.data;
};

(async () => {
  await followerNFTTokenIds();
})();
