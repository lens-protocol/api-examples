import { gql } from '@apollo/client/core';
import { apolloClient } from '../apollo-client';
import { prettyJSON } from '../helpers';

const GET_FOLLOWER_NFT_TOKEN_IDS = `
  query($request: FollowerNftOwnedTokenIdsRequest!) {
    followerNftOwnedTokenIds(request: $request) { 
        followerNftAddress
        tokensIds
	}
  }
`;

export const getFollowerNFTTokenIds = (address: string, profileId: string) => {
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
  const result = await getFollowerNFTTokenIds(
    '0x2376e9C7C604D1827bA9aCb1293Dc8b4DA2f0DB3',
    '0x01'
  );
  prettyJSON('followerNFTTokenIds: result', result.data);

  return result.data;
};

(async () => {
  await followerNFTTokenIds();
})();
