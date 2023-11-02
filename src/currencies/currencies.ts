import { apolloClient } from '../apollo-client';
import { CurrenciesDocument } from '../graphql/generated';

export const getCurrencies = async () => {
  const result = await apolloClient.query({
    query: CurrenciesDocument,
    variables: {
      request: {},
    },
  });

  return result.data.currencies;
};

export const currencies = async () => {
  const result = await getCurrencies();

  console.log('currencies: result', result);

  return result;
};

(async () => {
  await currencies();
})();
