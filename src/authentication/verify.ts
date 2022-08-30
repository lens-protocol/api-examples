
import { apolloClient } from '../apollo-client';
import { getAddressFromSigner } from '../ethers.service';
import { login } from './login';

import {VerifyDocument } from '../graphql/generated'


const verify = (accessToken: string) => {
  return apolloClient.query({
    query: VerifyDocument,
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

  const result = await verify(accessTokens!.authenticate.accessToken);
  console.log('verify: result', result.data);

  return result.data;
};

(async () => {
  await verifyRequest();
})();
