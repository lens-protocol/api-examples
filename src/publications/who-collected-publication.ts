import { apolloClient } from '../apollo-client';
import {
  OpenActionCategoryType,
  WhoActedOnPublicationDocument,
  WhoActedOnPublicationRequest,
} from '../graphql/generated';

export const whoCollectedRequest = async (request: WhoActedOnPublicationRequest) => {
  const result = await apolloClient.query({
    query: WhoActedOnPublicationDocument,
    variables: {
      request,
      statsRequest: {},
      countOpenActionsRequest: {},
      reactionsRequest: {},
    },
  });

  return result.data.whoActedOnPublication;
};

export const whoCollected = async () => {
  const result = await whoCollectedRequest({
    on: '0x41-0x03',
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
