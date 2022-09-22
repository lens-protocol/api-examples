import { apolloClient } from '../apollo-client';
import { getAddressFromSigner } from '../ethers.service';
import { VerifyDocument, VerifyRequest } from '../graphql/generated';
import { login } from './login';

const verify = async (request: VerifyRequest) => {
  const result = await apolloClient.query({
    query: VerifyDocument,
    variables: {
      request,
    },
  });

  return result.data.verify;
};

export const verifyRequest = async () => {
  const address = getAddressFromSigner();
  console.log('verify: address', address);

  const authenticationResult = await login(address);

  const result = await verify(authenticationResult!.accessToken);
  console.log('verify: result', result);

  return result;
};

(async () => {
  await verifyRequest();
})();
