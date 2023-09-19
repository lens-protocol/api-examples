import { apolloClient } from '../apollo-client';
// import { PublicationRevenueRequest, RevenueFromPublicationDocument } from '../graphql/generated';
import { knownPostId } from '../known-common-input-constants';

export const revenueFromPublicationRequest = async (request: any) => {
  //   const result = await apolloClient.query({
  //     query: RevenueFromPublicationDocument,
  //     variables: {
  //       request,
  //     },
  //   });
  //
  //   return result.data.revenueFromPublication;
};

export const revenueForPublication = async () => {
  //   const result = await revenueFromPublicationRequest({
  //     for: knownPostId,
  //   });
  //   console.log('publication revenue: result', result);
  //
  //   return result;
};

(async () => {
  await revenueForPublication();
})();
