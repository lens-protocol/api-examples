import { apolloClient } from '../apollo-client';
import { getAddressFromSigner } from '../ethers.service';
import { ApprovedAuthenticationsDocument, CurrentSessionDocument } from '../graphql/generated';
import { login } from './login';

const getApprovedAuthentications = async () => {
  const result = await apolloClient.query({
    query: ApprovedAuthenticationsDocument,
  });

  return result.data.approvedAuthentications;
};

(async function () {
  const address = getAddressFromSigner();
  console.log('address:', address);
  await login();

  console.log(JSON.stringify(await getApprovedAuthentications(), null, 2));
  console.log(JSON.stringify(await getApprovedAuthentications(), null, 2));
})();
