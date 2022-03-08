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

const CREATE_SET_DISPATCHER_TYPED_DATA = `
  mutation($request: SetDispatcherRequest!) { 
    createSetDispatcherTypedData(request: $request) {
      id
      expiresAt
      typedData {
        types {
          SetDispatcherWithSig {
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
          dispatcher
        }
      }
    }
 }
`;

export const enableDispatcherWithTypedData = (
  profileId: string,
  dispatcher: string
) => {
  return apolloClient.mutate({
    mutation: gql(CREATE_SET_DISPATCHER_TYPED_DATA),
    variables: {
      request: {
        profileId,
        dispatcher,
      },
    },
  });
};

export const disableDispatcherWithTypedData = (profileId: string) => {
  return apolloClient.mutate({
    mutation: gql(CREATE_SET_DISPATCHER_TYPED_DATA),
    variables: {
      request: {
        profileId,
        enabled: false,
      },
    },
  });
};

export const setDispatcher = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('set dispatcher: address', address);

  await login(address);

  const setDispatcherRequest = {
    profileId,
    dispatcher: '0xEEA0C1f5ab0159dba749Dc0BAee462E5e293daaF',
  };

  const result = await enableDispatcherWithTypedData(
    setDispatcherRequest.profileId,
    setDispatcherRequest.dispatcher
  );
  console.log('set dispatcher: enableDispatcherWithTypedData', result);

  const typedData = result.data.createSetDispatcherTypedData.typedData;
  console.log('set dispatcher: typedData', typedData);

  const signature = await signedTypeData(
    typedData.domain,
    typedData.types,
    typedData.value
  );
  console.log('set dispatcher: signature', signature);

  const { v, r, s } = splitSignature(signature);

  const tx = await lensHub.setDispatcherWithSig({
    profileId: typedData.value.profileId,
    dispatcher: typedData.value.dispatcher,
    sig: {
      v,
      r,
      s,
      deadline: typedData.value.deadline,
    },
  });
  console.log('set dispatcher: tx hash', tx.hash);
};

(async () => {
  await setDispatcher();
})();
