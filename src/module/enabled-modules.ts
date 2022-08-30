
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { argsBespokeInit } from '../config';
import { getAddressFromSigner } from '../ethers.service';

import {EnabledModulesDocument } from '../graphql/generated'

const enabledModulesRequest = () => {
  return apolloClient.query({
    query: EnabledModulesDocument,
  });
};

export const enabledModules = async () => {
  const address = getAddressFromSigner();
  console.log('enabled modules: address', address);

  await login(address);

  const result = await enabledModulesRequest();

  console.log('enabled modules: result', result.data);

  return result.data;
};

(async () => {
  if (argsBespokeInit()) {
    await enabledModules();
  }
})();
