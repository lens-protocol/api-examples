import { apolloClient } from '../apollo-client';
import { PublicationRevenueRequest, RevenueForPublicationDocument } from '../graphql/generated';

export const publicationRevenueRequest = async (request: PublicationRevenueRequest) => {
  const result = await apolloClient.query({
    query: RevenueForPublicationDocument,
    variables: {
      request,
      statsRequest: {},
    },
  });

  return result.data.revenueForPublication;
};

export const publicationRevenue = async () => {
  const result = await publicationRevenueRequest({
    for: '0x01-0x01',
  });
  console.log('publication revenue: result', result);

  return result;
};

(async () => {
  await publicationRevenue();
})();
