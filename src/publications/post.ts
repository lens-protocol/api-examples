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
import { enabledCurrencies } from '../module/enabled-modules-currencies';

const CREATE_POST_TYPED_DATA = `
  mutation($request: CreatePublicPostRequest!) { 
    createPostTypedData(request: $request) {
      id
      expiresAt
      typedData {
        types {
          PostWithSig {
            name
            type
          }
        }
      domain {
        name
        chainId
        version
        verifyingContract
      }
      value {
        nonce
        deadline
        profileId
        contentURI
        collectModule
        collectModuleData
        referenceModule
        referenceModuleData
      }
    }
  }
}
`;

//TODO typings
const createPostTypedData = (createPostTypedDataRequest: any) => {
  return apolloClient.mutate({
    mutation: gql(CREATE_POST_TYPED_DATA),
    variables: {
      request: createPostTypedDataRequest,
    },
  });
};

export const createPost = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('create post: address', address);

  await login(address);

  const currencies = await enabledCurrencies();

  // hard coded to make the code example clear
  const createPostRequest = {
    profileId,
    // this content is just a mock ipfs change this to point to real metadata!
    contentURI: 'ipfs://QmPogtffEF3oAbKERsoR4Ky8aTvLgBF5totp5AuF8YN6vl.json',
    collectModule: {
      timedFeeCollectModule: {
        amount: {
          currency: currencies.enabledModuleCurrencies.map(
            (c: any) => c.address
          )[0],
          value: '0.01',
        },
        recipient: '0xEEA0C1f5ab0159dba749Dc0BAee462E5e293daaF',
        referralFee: 10.5,
      },
    },
    referenceModule: {
      followerOnlyReferenceModule: false,
    },
  };

  const result = await createPostTypedData(createPostRequest);
  console.log('create post: enableDispatcherWithTypedData', result);

  const typedData = result.data.createPostTypedData.typedData;
  console.log('create post: typedData', typedData);

  const signature = await signedTypeData(
    typedData.domain,
    typedData.types,
    typedData.value
  );
  console.log('create post: signature', signature);

  const { v, r, s } = splitSignature(signature);

  const tx = await lensHub.postWithSig({
    profileId: typedData.value.profileId,
    contentURI: typedData.value.contentURI,
    collectModule: typedData.value.collectModule,
    collectModuleData: typedData.value.collectModuleData,
    referenceModule: typedData.value.referenceModule,
    referenceModuleData: typedData.value.referenceModuleData,
    sig: {
      v,
      r,
      s,
      deadline: typedData.value.deadline,
    },
  });
  console.log('create post: tx hash', tx.hash);
};

(async () => {
  await createPost();
})();
