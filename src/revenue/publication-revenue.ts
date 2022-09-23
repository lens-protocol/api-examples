import { apolloClient } from '../apollo-client';
import {
  ProfilePublicationRevenueDocument,
  ProfilePublicationRevenueQueryRequest,
} from '../graphql/generated';

export const publicationRevenueRequest = async (request: ProfilePublicationRevenueQueryRequest) => {
  const result = await apolloClient.query({
    query: ProfilePublicationRevenueDocument,
    variables: {
      request,
    },
  });

  return result.data.profilePublicationRevenue;
};

export const publicationRevenue = async () => {
  const result = await publicationRevenueRequest({ profileId: '0x41' });
  console.log('publication revenue: result', result);

  return result;
};

(async () => {
  await publicationRevenue();
})();
