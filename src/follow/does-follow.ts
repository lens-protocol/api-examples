import { gql } from '@apollo/client/core';
import { apolloClient } from '../apollo-client';
import { prettyJSON } from '../helpers';

const DOES_FOLLOW = `
  query($request: DoesFollowRequest!) {
    doesFollow(request: $request) { 
			followerAddress
    	profileId
    	follows
		}
  }
`;

export const doesFollowRequest = (
  followInfos: { followerAddress: string; profileId: string }[]
) => {
  return apolloClient.query({
    query: gql(DOES_FOLLOW),
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
  prettyJSON('does follow: result', result.data);

  return result.data;
};

(async () => {
  await doesFollow();
})();
