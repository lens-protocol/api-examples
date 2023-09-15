import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { getAddressFromSigner } from '../ethers.service';
import { WhoHaveBlockedDocument } from '../graphql/generated';

const getWhoHaveBlocked = async () => {
  const result = await apolloClient.query({
    query: WhoHaveBlockedDocument,
    variables: {
      request: {},
    },
  });

  return result.data.whoHaveBlocked.items;
};

// currently does not work due to postgres syntax error
const whoHaveBlocked = async () => {
  const address = getAddressFromSigner();

  await login(address);

  const result = await getWhoHaveBlocked();

  console.log(`blocked profiles: ${result}`);

  return result;
};

(async function () {
  await whoHaveBlocked();
})();
