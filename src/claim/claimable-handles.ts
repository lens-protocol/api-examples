import { gql } from '@apollo/client/core';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { getAddressFromSigner } from '../ethers.service';

const CLAIMABLE_HANDLES = `
  query {
    claimableHandles {
      id
      handle
      source
      expiry
    }
  }
`;

export const getClaimableHandles = () => {
  return apolloClient.query({
    query: gql(CLAIMABLE_HANDLES),
  });
};

export const claimableHandles = async () => {
  const address = getAddressFromSigner();
  console.log('claimable handles: address', address);

  await login(address);

  const result = await getClaimableHandles();
  console.log('claimable handles: result', result.data);

  return result.data;
};

(async () => {
  await claimableHandles();
})();
