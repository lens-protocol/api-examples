import { gql } from '@apollo/client/core';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { argsBespokeInit } from '../config';
import { getAddressFromSigner, signedTypeData, splitSignature } from '../ethers.service';
import { lensHub } from '../lens-hub';

const CREATE_FOLLOW_TYPED_DATA = `
  mutation($request: FollowRequest!) { 
    createFollowTypedData(request: $request) {
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
          FollowWithSig {
            name
            type
          }
        }
        value {
          nonce
          deadline
          profileIds
          datas
        }
      }
    }
 }
`;

// TODO sort typed!
const createFollowTypedData = (followRequestInfo: any) => {
  return apolloClient.mutate({
    mutation: gql(CREATE_FOLLOW_TYPED_DATA),
    variables: {
      request: {
        follow: followRequestInfo,
      },
    },
  });
};

export const follow = async (profileId: string = '0x12') => {
  const address = getAddressFromSigner();
  console.log('follow: address', address);

  await login(address);

  // hard coded to make the code example clear
  const followRequest = [
    {
      profile: profileId,
    },
  ];

  const result = await createFollowTypedData(followRequest);
  console.log('follow: result', result);

  const typedData = result.data.createFollowTypedData.typedData;
  console.log('follow: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('follow: signature', signature);

  const { v, r, s } = splitSignature(signature);

  const tx = await lensHub.followWithSig({
    follower: getAddressFromSigner(),
    profileIds: typedData.value.profileIds,
    datas: typedData.value.datas,
    sig: {
      v,
      r,
      s,
      deadline: typedData.value.deadline,
    },
  });
  console.log('follow: tx hash', tx.hash);
  return tx.hash;
};

(async () => {
  if (argsBespokeInit()) {
    await follow();
  }
})();
