import { apolloClient } from '../apollo-client';
import { PublicationRevenueRequest, RevenueForPublicationDocument } from '../graphql/generated';
import { knownPostId } from '../known-common-input-constants';

export const revenueForPublicationRequest = async (request: PublicationRevenueRequest) => {
  const result = await apolloClient.query({
    query: RevenueForPublicationDocument,
    variables: {
      request,
    },
  });

  return result.data.revenueForPublication;
};

export const revenueForPublication = async () => {
  const result = await revenueForPublicationRequest({
    for: knownPostId,
  });
  console.log('publication revenue: result', result);

  return result;
};

(async () => {
  await revenueForPublication();
})();
