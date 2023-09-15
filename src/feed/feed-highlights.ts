import { apolloClient } from '../apollo-client';
import { FeedHighlightsDocument, FeedHighlightsRequest } from '../graphql/generated';

const getFeedHighlights = async (request: FeedHighlightsRequest) => {
  const result = await apolloClient.query({
    query: FeedHighlightsDocument,
    variables: {
      request,
    },
  });

  return result.data.feedHighlights;
};

export const feedHighlights = async () => {
  const feedHighlights = await getFeedHighlights({
    where: {
      for: '0x01',
    },
  });

  console.log(`feed highlights: ${feedHighlights}`);

  return feedHighlights;
};

(async () => {
  await feedHighlights();
})();
