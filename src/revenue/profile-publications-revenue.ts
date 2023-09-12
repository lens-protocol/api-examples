import { apolloClient } from '../apollo-client';
import {
  PublicationType,
  RevenueFromPublicationsDocument,
  RevenueFromPublicationsRequest,
} from '../graphql/generated';

export const profilePublicationsRevenueRequest = async (
  request: RevenueFromPublicationsRequest
) => {
  const result = await apolloClient.query({
    query: RevenueFromPublicationsDocument,
    variables: {
      request,
      statsRequest: {},
    },
  });

  return result.data.revenueFromPublications;
};

export const profilePublicationsRevenue = async () => {
  const result = await profilePublicationsRevenueRequest({
    for: '0x01',
    where: {
      fromCollects: true,
      publicationTypes: [PublicationType.Post, PublicationType.Quote, PublicationType.Comment],
    },
  });
  console.log('publications profile revenues: result', result);

  return result;
};

(async () => {
  await profilePublicationsRevenue();
})();
