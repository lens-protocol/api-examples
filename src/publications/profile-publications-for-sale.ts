import { apolloClient } from '../apollo-client';
import {
  ProfilePublicationsForSaleDocument,
  ProfilePublicationsForSaleRequest,
} from '../graphql/generated';

export const profilePublicationsForSaleRequest = async (
  request: ProfilePublicationsForSaleRequest
) => {
  const result = await apolloClient.query({
    query: ProfilePublicationsForSaleDocument,
    variables: {
      request,
    },
  });

  return result.data.profilePublicationsForSale;
};

export const profilePublicationsForSale = async () => {
  const result = await profilePublicationsForSaleRequest({ profileId: '0x01' });
  console.log('publications for sale: result', result);

  return result;
};

(async () => {
  await profilePublicationsForSale();
})();
