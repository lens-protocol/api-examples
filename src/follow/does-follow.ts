import { apolloClient } from '../apollo-client';
import { DoesFollowDocument, DoesFollowRequest } from '../graphql/generated';
import { followerProfileId, knownProfileId } from '../known-common-input-constants';

const doesFollowRequest = async (request: DoesFollowRequest) => {
  const result = await apolloClient.query({
    query: DoesFollowDocument,
    variables: {
      request,
    },
  });

  return result.data.doesFollow;
};

export const doesFollow = async () => {
  // Note this endpoint depends on PR https://github.com/lens-protocol/lens-monorepo/pull/182 on the api side

  const result = await doesFollowRequest({
    for: knownProfileId,
    followers: [followerProfileId],
  });
  console.log('does follow: result', result);

  return result;
};

(async () => {
  await doesFollow();
})();
