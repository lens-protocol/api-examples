import { gql } from '@apollo/client/core';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { getAddressFromSigner } from '../ethers.service';
import { prettyJSON } from '../helpers';

const CLAIMED_HANDLES = `
  query {
    claimedHandles {
      id
      handle
      source
      claimedAt
  	}
  }
`;

const getClaimedHandles = () => {
  return apolloClient.query({
    query: gql(CLAIMED_HANDLES),
  });
};

export const claimedHandles = async () => {
  const address = getAddressFromSigner();
  console.log('claimed handles: address', address);

  await login(address);

  const result = await getClaimedHandles();
  prettyJSON('claimable handles: result', result.data);

  return result.data;
};

(async () => {
  await claimedHandles();
})();
