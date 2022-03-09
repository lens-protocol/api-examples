import { gql } from '@apollo/client/core';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { getAddressFromSigner } from '../ethers.service';
import { prettyJSON } from '../helpers';

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

const getClaimableHandles = () => {
  return apolloClient.query({
    query: gql(CLAIMABLE_HANDLES),
  });
};

export const claimableHandles = async () => {
  const address = getAddressFromSigner();
  console.log('claimable handles: address', address);

  await login(address);

  const result = await getClaimableHandles();
  prettyJSON('claimable handles: result', result.data);

  return result.data;
};

(async () => {
  await claimableHandles();
})();
