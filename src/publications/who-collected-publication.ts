import { apolloClient } from '../apollo-client';
import {
  OpenActionCategoryType,
  WhoActedOnPublicationDocument,
  WhoActedOnPublicationRequest,
} from '../graphql/generated';
import { knownPostId } from '../known-common-input-constants';

export const whoCollectedRequest = async (request: WhoActedOnPublicationRequest) => {
  const result = await apolloClient.query({
    query: WhoActedOnPublicationDocument,
    variables: {
      request,
    },
  });

  return result.data.whoActedOnPublication;
};

export const whoCollected = async () => {
  const result = await whoCollectedRequest({
    on: knownPostId,
    where: {
      anyOf: [
        {
          category: OpenActionCategoryType.Collect,
        },
      ],
    },
  });
  console.log('who collected: result', result);

  return result;
};

(async () => {
  await whoCollected();
})();
