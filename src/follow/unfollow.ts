import { ethers } from 'ethers';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { LENS_FOLLOW_NFT_ABI } from '../config';
import { getAddressFromSigner, getSigner, signedTypeData, splitSignature } from '../ethers.service';
import { CreateUnfollowTypedDataDocument, UnfollowRequest } from '../graphql/generated';

const createUnfollowTypedData = async (request: UnfollowRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateUnfollowTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createUnfollowTypedData;
};

export const unfollow = async () => {
  const address = getAddressFromSigner();
  console.log('unfollow: address', address);

  await login(address);

  const result = await createUnfollowTypedData({ profile: '0x01' });
  console.log('unfollow: result', result);

  const typedData = result.typedData;
  console.log('unfollow: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('unfollow: signature', signature);

  const { v, r, s } = splitSignature(signature);

  // load up the follower nft contract
  const followNftContract = new ethers.Contract(
    typedData.domain.verifyingContract,
    LENS_FOLLOW_NFT_ABI,
    getSigner()
  );

  const sig = {
    v,
    r,
    s,
    deadline: typedData.value.deadline,
  };

  // force the tx to send
  const tx = await followNftContract.burnWithSig(typedData.value.tokenId, sig);
  console.log('follow: tx hash', tx.hash);
};

(async () => {
  await unfollow();
})();
