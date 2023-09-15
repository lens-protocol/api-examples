import { apolloClient } from '../apollo-client';
import {
  PublicationType,
  RevenueFromPublicationsDocument,
  RevenueFromPublicationsRequest,
} from '../graphql/generated';
import { knownPostId } from '../known-common-input-constants';

export const revenueFromPublicationsRequest = async (request: RevenueFromPublicationsRequest) => {
  const result = await apolloClient.query({
    query: RevenueFromPublicationsDocument,
    variables: {
      request,
    },
  });

  return result.data.revenueFromPublications;
};

export const revenueFromPublications = async () => {
  const result = await revenueFromPublicationsRequest({
    for: knownPostId,
    where: {
      fromCollects: true,
      publicationTypes: [PublicationType.Post, PublicationType.Quote, PublicationType.Comment],
    },
  });
  console.log('publications profile revenues: result', result);

  return result;
};

(async () => {
  await revenueFromPublications();
})();
