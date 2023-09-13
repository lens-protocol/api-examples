import { apolloClient } from '../apollo-client';
import { PublicationRevenueRequest, RevenueForPublicationDocument } from '../graphql/generated';
import { knownPostId } from '../known-common-input-constants';

export const publicationRevenueRequest = async (request: PublicationRevenueRequest) => {
  const result = await apolloClient.query({
    query: RevenueForPublicationDocument,
    variables: {
      request,
    },
  });

  return result.data.revenueForPublication;
};

export const publicationRevenue = async () => {
  const result = await publicationRevenueRequest({
    for: knownPostId,
  });
  console.log('publication revenue: result', result);

  return result;
};

(async () => {
  await publicationRevenue();
})();
