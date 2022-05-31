import { gql } from '@apollo/client/core';
import { apolloClient } from '../apollo-client';
import { generateChallenge, login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner, signedTypeData, signText, splitSignature } from '../ethers.service';
import { lensHub } from '../lens-hub';

const CREATE_SET_PROFILE_IMAGE_URI_TYPED_DATA = `
  mutation($request: UpdateProfileImageRequest!) { 
    createSetProfileImageURITypedData(request: $request) {
      id
      expiresAt
      typedData {
        domain {
          name
          chainId
          version
          verifyingContract
        }
        types {
          SetProfileImageURIWithSig {
            name
            type
          }
        }
        value {
          nonce
        	deadline
        	imageURI
        	profileId
        }
      }
    }
 }
`;

const createSetProfileImageUriTypedData = (request: any) => {
  return apolloClient.mutate({
    mutation: gql(CREATE_SET_PROFILE_IMAGE_URI_TYPED_DATA),
    variables: {
      request,
    },
  });
};

const GET_NFT_CHALLENGE = `
  query($request: NftOwnershipChallengeRequest!) {
    nftOwnershipChallenge(request: $request) { 
      id
      text 
    }
  }
`;

export const generateNftChallenge = (
  ownerAddress: string,
  nftContractAddress = '0x60ae865ee4c725cd04353b5aab364553f56cef82',
  tokenId: string = '974',
  chainId: number = 80001
) => {
  return apolloClient.query({
    query: gql(GET_NFT_CHALLENGE),
    variables: {
      request: {
        ethereumAddress: ownerAddress,
        nfts: {
          contractAddress: nftContractAddress,
          tokenId,
          chainId,
        },
      },
    },
  });
};

export const setProfileImageUriNFT = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('set profile image uri normal: address', address);

  await login(address);

  // prove ownership of the nft
  // use an NFT that you actually own
  const challengeResponse = await generateNftChallenge(address);

  // sign the text with the wallet
  const challengeSignature = await signText(challengeResponse.data.nftOwnershipChallenge?.text);

  const setProfileImageUriNFTRequest = {
    profileId,
    nftData: {
      id: challengeResponse.data.nftOwnershipChallenge.id,
      signature: challengeSignature,
    },
  };

  const result = await createSetProfileImageUriTypedData(setProfileImageUriNFTRequest);
  console.log('set profile image uri nft: enableDispatcherWithTypedData', result);

  const typedData = result.data.createSetProfileImageURITypedData.typedData;
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
