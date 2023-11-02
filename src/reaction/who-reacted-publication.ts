import util from 'util';
import { apolloClient } from '../apollo-client';
import { WhoReactedPublicationDocument, WhoReactedPublicationRequest } from '../graphql/generated';
import { knownPostId } from '../known-common-input-constants';

export const whoReactedPublicationRequest = async (request: WhoReactedPublicationRequest) => {
  const result = await apolloClient.query({
    query: WhoReactedPublicationDocument,
    variables: {
      request,
    },
  });

  return result.data.whoReactedPublication;
};

export const whoReactedPublication = async () => {
  const result = await whoReactedPublicationRequest({
    for: knownPostId,
  });
  console.log('who reacted to : result', util.inspect(result, { showHidden: false, depth: null }));

  return result;
};

(async () => {
  await whoReactedPublication();
})();
