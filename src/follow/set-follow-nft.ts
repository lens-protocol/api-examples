
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';

import {CreateSetFollowNftUriTypedDataDocument } from '../graphql/generated'
import { PROFILE_ID } from '../config';
import {
  getAddressFromSigner,
  signedTypeData,
  splitSignature,
} from '../ethers.service';
import { lensHub } from '../lens-hub';


const createSetFollowNFTUriTypedData = (setFollowNFTUriRequest: {
  profileId: string;
  followNFTURI?: string | undefined;
}) => {
  return apolloClient.mutate({
    mutation: CreateSetFollowNftUriTypedDataDocument,
    variables: {
      request: setFollowNFTUriRequest,
    },
  });
};

export const setFollowNftUri = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('set follow nft uri: address', address);

  await login(address);

  // hard coded to make the code example clear
  const setFollowNftUriRequest = {
    profileId,
    // should be ipfs or reachable url with the metadata mapped
    // im going to leave empty so i use the super cool changing NFT which will
    // show the last publication of your profile as the NFT which looks awesome
    // but you can set this to anything you want! It must conform to opensea
    // metadata standard else it will not render on there!
    // followNFTURI: 'ipfs://LmTqN4LZ2G4QRrsS2y2QFMUH5K7dT2ix6P6TuL3pq9CShx',
  };

  const result = await createSetFollowNFTUriTypedData(setFollowNftUriRequest);
  console.log('set follow nft uri: result', result);

  const typedData = result.data!.createSetFollowNFTUriTypedData.typedData;
  console.log('set follow nft uri: typedData', typedData);

  const signature = await signedTypeData(
    typedData.domain,
    typedData!.types,
    typedData.value
  );
  console.log('set follow nft uri: signature', signature);

  const { v, r, s } = splitSignature(signature);

  const tx = await lensHub.setFollowNFTURIWithSig({
    profileId: typedData.value.profileId,
    followNFTURI: typedData.value.followNFTURI,
    sig: {
      v,
      r,
      s,
      deadline: typedData.value.deadline,
    },
  });
  console.log('set follow nft uri: hash', tx.hash);
};

(async () => {
  await setFollowNftUri();
})();
