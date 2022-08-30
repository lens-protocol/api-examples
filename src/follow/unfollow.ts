
import { ethers } from 'ethers';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { LENS_FOLLOW_NFT_ABI } from '../config';
import { getAddressFromSigner, getSigner, signedTypeData, splitSignature } from '../ethers.service';
import {CreateUnfollowTypedDataDocument } from '../graphql/generated'

const createUnfollowTypedData = (profile: string) => {
  return apolloClient.mutate({
    mutation: CreateUnfollowTypedDataDocument,
    variables: {
      request: {
        profile,
      },
    },
  });
};

export const unfollow = async () => {
  const address = getAddressFromSigner();
  console.log('unfollow: address', address);

  await login(address);

  // hard coded to make the code example clear
  const unfollowProfileId = '0x01';
  const result = await createUnfollowTypedData(unfollowProfileId);
  console.log('unfollow: result', result);

  const typedData = result.data!.createUnfollowTypedData.typedData;
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
