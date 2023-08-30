import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { EnabledModulesDocument } from '../../graphql-v1/generated';

const enabledModulesRequest = async () => {
  const result = await apolloClient.query({
    query: EnabledModulesDocument,
  });

  return result.data.enabledModules;
};

export const enabledModules = async () => {
  const address = getAddressFromSigner();
  console.log('enabled modules: address', address);

  await login(address);

  const result = await enabledModulesRequest();

  console.log('enabled modules: result', result);

  return result;
};

(async () => {
  if (explicitStart(__filename)) {
    await enabledModules();
  }
})();
