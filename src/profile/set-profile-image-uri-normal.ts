import { gql } from '@apollo/client/core';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import {
  getAddressFromSigner,
  signedTypeData,
  splitSignature,
} from '../ethers.service';
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

// TODO typings
const createSetProfileImageUriTypedData = (request: any) => {
  return apolloClient.mutate({
    mutation: gql(CREATE_SET_PROFILE_IMAGE_URI_TYPED_DATA),
    variables: {
      request,
    },
  });
};

export const setProfileImageUriNormal = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('set profile image uri normal: address', address);

  await login(address);

  // hard coded to make the code example clear
  const setProfileImageUriRequest = {
    profileId,
    url: 'ipfs://QmSfyMcnh1wnJHrAWCBjZHapTS859oNSsuDFiAPPdAHgHP',
  };

  const result = await createSetProfileImageUriTypedData(
    setProfileImageUriRequest
  );
  console.log(
    'set profile image uri normal: enableDispatcherWithTypedData',
    result
  );

  const typedData = result.data.createSetProfileImageURITypedData.typedData;
  console.log('set profile image uri normal: typedData', typedData);

  const signature = await signedTypeData(
    typedData.domain,
    typedData.types,
    typedData.value
  );
  console.log('set profile image uri normal: signature', signature);

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
  await setProfileImageUriNormal();
})();
