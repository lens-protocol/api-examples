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
  const result = await getFollowerNFTTokenIds(
    '0xEEA0C1f5ab0159dba749Dc0BAee462E5e293daaF',
    '0x032f1a'
  );
  prettyJSON('followerNFTTokenIds: result', result.data);

  return result.data;
};

(async () => {
  await followerNFTTokenIds();
})();
