import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart, PROFILE_ID } from '../config';
import { getAddressFromSigner, signedTypeData, splitSignature } from '../ethers.service';
import {
  CreateSetProfileImageUriTypedDataDocument,
  UpdateProfileImageRequest,
} from '../../graphql-v1/generated';
import { lensHub } from '../lens-hub';

export const createSetProfileImageUriTypedData = async (request: UpdateProfileImageRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateSetProfileImageUriTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createSetProfileImageURITypedData;
};

export const signCreateSetProfileImageUriTypedData = async (request: UpdateProfileImageRequest) => {
  const result = await createSetProfileImageUriTypedData(request);
  console.log('set profile image uri: createSetProfileImageUriTypedData', result);

  const typedData = result.typedData;
  console.log('set profile image uri: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('set profile image uri: signature', signature);

  return { result, signature };
};

const setProfileImageUri = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('set profile image uri: address', address);

  await login(address);

  // hard coded to make the code example clear
  const setProfileImageUriRequest = {
    profileId,
    url: 'ipfs://QmSfyMcnh1wnJHrAWCBjZHapTS859oNSsuDFiAPPdAHgHP',
  };

  const signedResult = await signCreateSetProfileImageUriTypedData(setProfileImageUriRequest);
  console.log('set profile image uri: signedResult', signedResult);

  const typedData = signedResult.result.typedData;

  const { v, r, s } = splitSignature(signedResult.signature);

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
  console.log('set profile image uri: tx hash', tx.hash);
};

(async () => {
  if (explicitStart(__filename)) {
    await setProfileImageUri();
  }
})();
