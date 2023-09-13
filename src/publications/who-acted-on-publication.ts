import { apolloClient } from '../apollo-client';
import { WhoActedOnPublicationDocument, WhoActedOnPublicationRequest } from '../graphql/generated';
import { knownPostId } from '../known-common-input-constants';

export const getWhoActedOnPublication = async (request: WhoActedOnPublicationRequest) => {
  const result = await apolloClient.query({
    query: WhoActedOnPublicationDocument,
    variables: {
      request,
    },
  });

  return result.data.whoActedOnPublication;
};

// currently does not work due to postgres syntax error
export const whoActedOnPublication = async () => {
  const result = await getWhoActedOnPublication({ on: knownPostId });
  console.log('who acted on publication: result', result);

  return result;
};

(async () => {
  await whoActedOnPublication();
})();
