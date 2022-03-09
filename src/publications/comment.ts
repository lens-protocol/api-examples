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

const CREATE_COMMENT_TYPED_DATA = `
  mutation($request: CreatePublicCommentRequest!) { 
    createCommentTypedData(request: $request) {
      id
      expiresAt
      typedData {
        types {
          CommentWithSig {
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
        profileIdPointed
        pubIdPointed
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

// TODO types
const createCommentTypedData = (createCommentTypedDataRequest: any) => {
  return apolloClient.mutate({
    mutation: gql(CREATE_COMMENT_TYPED_DATA),
    variables: {
      request: createCommentTypedDataRequest,
    },
  });
};

export const createComment = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('create comment: address', address);

  await login(address);

  const currencies = await enabledCurrencies();

  // hard coded to make the code example clear
  const createCommentRequest = {
    profileId,
    // remember it has to be indexed and follow metadata standards to be traceable!
    publicationId: `0x032f1a-0x02`,
    // this content is just a mock ipfs change this to point to real metadata!
    contentURI: 'ipfs://QmPogtffEF3oAbKERsoR4Ky8aTvLgBF5totp5AuF8YN6vm.json',
    collectModule: {
      timedFeeCollectModule: {
        amount: {
          currency: currencies.enabledModuleCurrencies.map(
            (c: any) => c.address
          )[0],
          value: '0.01',
        },
        recipient: address,
        referralFee: 10.5,
      },
    },
    referenceModule: {
      followerOnlyReferenceModule: false,
    },
  };

  const result = await createCommentTypedData(createCommentRequest);
  console.log('create comment: createCommentTypedData', result);

  const typedData = result.data.createCommentTypedData.typedData;
  console.log('create comment: typedData', typedData);

  const signature = await signedTypeData(
    typedData.domain,
    typedData.types,
    typedData.value
  );
  console.log('create comment: signature', signature);

  const { v, r, s } = splitSignature(signature);

  const tx = await lensHub.commentWithSig({
    profileId: typedData.value.profileId,
    contentURI: typedData.value.contentURI,
    profileIdPointed: typedData.value.profileIdPointed,
    pubIdPointed: typedData.value.pubIdPointed,
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
  console.log('create comment: tx hash', tx.hash);
};

(async () => {
  await createComment();
})();
