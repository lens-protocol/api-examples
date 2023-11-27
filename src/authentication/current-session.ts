import { apolloClient } from '../apollo-client';
import { getAddressFromSigner } from '../ethers.service';
import { CurrentSessionDocument } from '../graphql/generated';
import { login } from './login';

const getCurrentSession = async () => {
  const result = await apolloClient.query({
    query: CurrentSessionDocument,
  });

  return result.data.currentSession;
};

(async function () {
  const address = getAddressFromSigner();
  console.log('current session: address', address);
  await login();

  const currentSession = await getCurrentSession();

  console.log(`current session id:`, currentSession.authorizationId);
  const currentSession2 = await getCurrentSession();

  console.log(`current session id:`, currentSession2.authorizationId);
})();
