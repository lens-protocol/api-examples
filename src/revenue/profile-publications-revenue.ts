import { apolloClient } from '../apollo-client';
import {
  ProfilePublicationRevenueDocument,
  ProfilePublicationRevenueQueryRequest,
} from '../graphql/generated';

export const profilePublicationsRevenueRequest = async (
  request: ProfilePublicationRevenueQueryRequest
) => {
  const result = await apolloClient.query({
    query: ProfilePublicationRevenueDocument,
    variables: {
      request,
    },
  });

  return result.data.profilePublicationRevenue;
};

export const profilePublicationsRevenue = async () => {
  const result = await profilePublicationsRevenueRequest({ profileId: '0x41' });
  console.log('publications profile revenues: result', result);

  return result;
};

(async () => {
  await profilePublicationsRevenue();
})();
