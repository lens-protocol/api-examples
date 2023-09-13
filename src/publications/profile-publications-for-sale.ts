import {
  ProfilePublicationsForSaleDocument,
  ProfilePublicationsForSaleRequest,
} from '../../graphql-v1/generated';
import { apolloClient } from '../apollo-client';
import { knownProfileId } from '../known-common-input-constants';

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
  const result = await profilePublicationsForSaleRequest({ profileId: knownProfileId });
  console.log('publications for sale: result', result);

  return result;
};

(async () => {
  await profilePublicationsForSale();
})();
