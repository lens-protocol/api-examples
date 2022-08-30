
import { apolloClient } from '../apollo-client';
import {DoesFollowDocument } from '../graphql/generated'

const doesFollowRequest = (
  followInfos: { followerAddress: string; profileId: string }[]
) => {
  return apolloClient.query({
    query: DoesFollowDocument,
    variables: {
      request: {
        followInfos,
      },
    },
  });
};

export const doesFollow = async () => {
  const followInfos = [
    {
      followerAddress: '0xEEA0C1f5ab0159dba749Dc0BAee462E5e293daaF',
      profileId: '0x02',
    },
  ];

  const result = await doesFollowRequest(followInfos);
  console.log('does follow: result', result.data);

  return result.data;
};

(async () => {
  await doesFollow();
})();
