import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { UserSigNoncesDocument } from '../graphql/generated';

const userSigNoncesRequest = async () => {
  const result = await apolloClient.query({
    query: UserSigNoncesDocument,
    fetchPolicy: 'network-only',
  });

  return result.data.userSigNonces;
};

const userSigNonces = async () => {
  const address = getAddressFromSigner();
  console.log('userSigNonces: address', address);

  await login(address);
  const result = await userSigNoncesRequest();

  console.log('userSigNonces result:', result);
};

(async () => {
  if (explicitStart(__filename)) {
    await userSigNonces();
  }
})();
