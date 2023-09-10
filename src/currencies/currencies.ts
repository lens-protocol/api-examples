import { apolloClient } from '../apollo-client';
import { explicitStart } from '../config';
import { CurrenciesDocument } from '../graphql/generated';

export const getCurrencies = async () => {
  const result = await apolloClient.query({
    query: CurrenciesDocument,
    variables: {
      request: {},
    },
  });

  return result.data.currencies.items;
};

export const currencies = async () => {
  const result = await getCurrencies();

  console.log('currencies: result', result);

  return result;
};

(async () => {
  if (explicitStart(__filename)) {
    await currencies();
  }
})();
