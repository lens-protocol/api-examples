import { apolloClient } from '../apollo-client';
import { DoesFollowDocument, DoesFollowRequest } from '../graphql/generated';

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
  const followInfos = [
    {
      followerAddress: '0xEEA0C1f5ab0159dba749Dc0BAee462E5e293daaF',
      profileId: '0x02',
    },
  ];

  const result = await doesFollowRequest({ followInfos });
  console.log('does follow: result', result);

  return result;
};

(async () => {
  await doesFollow();
})();
