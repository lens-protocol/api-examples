
import { apolloClient } from '../apollo-client';
import { getAddressFromSigner } from '../ethers.service';
import { login } from './login';

import {RefreshDocument } from '../graphql/generated'


const refreshAuth = (refreshToken: string) => {
  return apolloClient.mutate({
    mutation: RefreshDocument,
    variables: {
      request: {
        refreshToken,
      },
    },
  });
};

export const refresh = async () => {
  const address = getAddressFromSigner();
  console.log('refresh: address', address);

  const accessTokens = await login(address);

  const newAccessToken = await refreshAuth(
    accessTokens!.authenticate.refreshToken
  );
  console.log('refresh: result', newAccessToken.data);

  return newAccessToken.data;
};

(async () => {
  await refresh();
})();
