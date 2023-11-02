import { apolloClient } from '../apollo-client';
import { getAddressFromSigner } from '../ethers.service';
import { RevokeAuthenticationDocument } from '../graphql/generated';
import { decode } from 'jsonwebtoken';
import { login } from './login';

const revokeAuth = async (authorizationId: string) => {
  await apolloClient.mutate({
    mutation: RevokeAuthenticationDocument,
    variables: {
      authorizationId,
    },
  });
};

export const revoke = async () => {
  const address = getAddressFromSigner();
  console.log('refresh: address', address);

  const authenticationResult = await login(address);

  const payload = decode(authenticationResult?.accessToken);
  if (typeof payload === 'string' || !payload) {
    throw new Error('Invalid payload');
  }

  const authorizationId = payload.authorizationId;

  console.log('session: authorizationId', authorizationId);

  await revokeAuth(authorizationId);
};

(async () => {
  await revoke();
})();
