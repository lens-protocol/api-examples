import { gql } from '@apollo/client/core';
import { apolloClient } from '../apollo-client';
import { getAddressFromSigner } from '../ethers.service';
import { prettyJSON } from '../helpers';
import { login } from './login';

const VERIFY = `
  query($request: VerifyRequest!) {
    verify(request: $request)
  }
`;

export const verify = (accessToken: string) => {
  return apolloClient.query({
    query: gql(VERIFY),
    variables: {
      request: {
        accessToken,
      },
    },
  });
};

export const verifyRequest = async () => {
  const address = getAddressFromSigner();
  console.log('verify: address', address);

  const accessTokens = await login(address);

  const result = await verify(accessTokens.authenticate.accessToken);
  prettyJSON('verify: result', result.data);

  return result.data;
};

(async () => {
  await verifyRequest();
})();
