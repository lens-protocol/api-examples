
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { argsBespokeInit } from '../config';
import { getAddressFromSigner } from '../ethers.service';

import {EnabledModuleCurrenciesDocument } from '../graphql/generated'


const enabledCurrenciesRequest = () => {
  return apolloClient.query({
    query: EnabledModuleCurrenciesDocument,
  });
};

export const enabledCurrencies = async () => {
  const address = getAddressFromSigner();
  console.log('enabled currencies: address', address);

  await login(address);

  const result = await enabledCurrenciesRequest();

  console.log('enabled currencies: result', result.data);

  return result.data;
};

(async () => {
  if (argsBespokeInit()) {
    await enabledCurrencies();
  }
})();
