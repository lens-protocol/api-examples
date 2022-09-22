import { apolloClient } from '../apollo-client';
import { getAddressFromSigner } from '../ethers.service';
import { RefreshDocument, RefreshRequest } from '../graphql/generated';
import { login } from './login';

const refreshAuth = async (request: RefreshRequest) => {
  const result = await apolloClient.mutate({
    mutation: RefreshDocument,
    variables: {
      request,
    },
  });

  return result.data!.refresh;
};

export const refresh = async () => {
  const address = getAddressFromSigner();
  console.log('refresh: address', address);

  const authenticationResult = await login(address);

  const refreshResult = await refreshAuth({
    refreshToken: authenticationResult!.refreshToken,
  });
  console.log('refresh: result', refreshResult);

  return refreshResult;
};

(async () => {
  await refresh();
})();
