import { apolloClient } from '../apollo-client';
import { PROFILE_ID } from '../config';
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
      for: PROFILE_ID || '0x01',
    },
  });

  console.log(`feed highlights: ${feedHighlights.items}`);

  return feedHighlights;
};

(async () => {
  await feedHighlights();
})();
