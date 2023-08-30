import { apolloClient } from '../apollo-client';
import { getAddressFromSigner } from '../ethers.service';
import {
  FollowerNftOwnedTokenIdsDocument,
  FollowerNftOwnedTokenIdsRequest,
} from '../../graphql-v1/generated';

const getFollowerNFTTokenIds = async (request: FollowerNftOwnedTokenIdsRequest) => {
  const result = await apolloClient.query({
    query: FollowerNftOwnedTokenIdsDocument,
    variables: {
      request,
    },
  });

  return result.data.followerNftOwnedTokenIds;
};

export const followerNFTTokenIds = async () => {
  const address = getAddressFromSigner();
  console.log('followerNFTTokenIds: address', address);

  const result = await getFollowerNFTTokenIds({ address, profileId: '0x01' });
  console.log('followerNFTTokenIds: result', result);

  return result;
};

(async () => {
  await followerNFTTokenIds();
})();
