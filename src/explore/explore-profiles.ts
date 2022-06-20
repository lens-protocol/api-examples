import { gql } from '@apollo/client/core';
import { apolloClient } from '../apollo-client';
import { prettyJSON } from '../helpers';

const EXPLORE_PROFILES = `
  query($request: ExploreProfilesRequest!) {
    exploreProfiles(request: $request) {
      items {
        id
        name
        bio
        isDefault
        attributes {
          displayType
          traitType
          key
          value
        }
        followNftAddress
        metadata
        handle
        picture {
          ... on NftImage {
            contractAddress
            tokenId
            uri
            chainId
            verified
          }
          ... on MediaSet {
            original {
              url
              mimeType
            }
          }
        }
        coverPicture {
          ... on NftImage {
            contractAddress
            tokenId
            uri
            chainId
            verified
          }
          ... on MediaSet {
            original {
              url
              mimeType
            }
          }
        }
        ownedBy
        dispatcher {
          address
          canUseRelay
        }
        stats {
          totalFollowers
          totalFollowing
          totalPosts
          totalComments
          totalMirrors
          totalPublications
          totalCollects
        }
        followModule {
          ... on FeeFollowModuleSettings {
            type
            contractAddress
            amount {
              asset {
                name
                symbol
                decimals
                address
              }
              value
            }
            recipient
          }
          ... on ProfileFollowModuleSettings {
          type
          }
          ... on RevertFollowModuleSettings {
          type
          }
        }
      }
      pageInfo {
        prev
        next
        totalCount
      }
    }
  }
`;

// sort out types by generating them!
export const exploreProfiles = (exploreProfilesQueryRequest: any) => {
  return apolloClient.query({
    query: gql(EXPLORE_PROFILES),
    variables: {
      request: exploreProfilesQueryRequest,
    },
  });
};

export const explore = async () => {
  const result = await exploreProfiles({
    sortCriteria: 'MOST_FOLLOWERS',
    limit: 50,
  });

  prettyJSON('explore: result', result.data);

  return result.data;
};

(async () => {
  await explore();
})();
