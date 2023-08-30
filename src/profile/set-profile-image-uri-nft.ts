import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner, signedTypeData, signText, splitSignature } from '../ethers.service';
import {
  CreateSetProfileImageUriTypedDataDocument,
  NftOwnershipChallengeDocument,
  NftOwnershipChallengeRequest,
  UpdateProfileImageRequest,
} from '../../graphql-v1/generated';
import { lensHub } from '../lens-hub';

const createSetProfileImageUriTypedData = async (request: UpdateProfileImageRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateSetProfileImageUriTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createSetProfileImageURITypedData;
};

export const generateNftChallenge = async (request: NftOwnershipChallengeRequest) => {
  const result = await apolloClient.query({
    query: NftOwnershipChallengeDocument,
    variables: {
      request,
    },
  });

  return result.data!.nftOwnershipChallenge;
};

export const setProfileImageUriNFT = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const ethereumAddress = getAddressFromSigner();
  console.log('set profile image uri normal: address', ethereumAddress);

  await login(ethereumAddress);

  // prove ownership of the nft
  // use an NFT that you actually own
  const challengeResponse = await generateNftChallenge({
    ethereumAddress,
    nfts: [
      {
        contractAddress: '0x60ae865ee4c725cd04353b5aab364553f56cef82',
        tokenId: '974',
        chainId: 80001,
      },
    ],
  });

  // sign the text with the wallet
  const challengeSignature = await signText(challengeResponse.text);

  const setProfileImageUriNFTRequest = {
    profileId,
    nftData: {
      id: challengeResponse.id,
      signature: challengeSignature,
    },
  };

  const result = await createSetProfileImageUriTypedData(setProfileImageUriNFTRequest);
  console.log('set profile image uri nft: enableDispatcherWithTypedData', result);

  const typedData = result.typedData;
  console.log('set profile image uri nft: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('set profile image uri nft: signature', signature);

  const { v, r, s } = splitSignature(signature);

  const tx = await lensHub.setProfileImageURIWithSig({
    profileId: typedData.value.profileId,
    imageURI: typedData.value.imageURI,
    sig: {
      v,
      r,
      s,
      deadline: typedData.value.deadline,
    },
  });
  console.log('set profile image uri normal: tx hash', tx.hash);
};

(async () => {
  await setProfileImageUriNFT();
})();
