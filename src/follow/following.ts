import { apolloClient } from '../apollo-client';
import { getAddressFromSigner } from '../ethers.service';
import { FollowingDocument, FollowingRequest } from '../../graphql-v1/generated';

const followingRequest = async (request: FollowingRequest) => {
  const result = await apolloClient.query({
    query: FollowingDocument,
    variables: {
      request,
    },
  });

  return result.data.following;
};

export const following = async () => {
  const address = getAddressFromSigner();
  console.log('following: address', address);

  const result = await followingRequest({ address });
  console.log('following: result', result);

  return result;
};

(async () => {
  await following();
})();
