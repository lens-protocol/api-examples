import { gql } from '@apollo/client/core';
import { apolloClient } from '../apollo-client';
import { prettyJSON } from '../helpers';

const WHO_COLLECTED = `
  query($request: WhoCollectedPublicationRequest!) {
    whoCollectedPublication(request: $request) {
       items {
        address
        defaultProfile {
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
      }
      pageInfo {
        prev
        next
        totalCount
      }
    }
  }
`;

export const whoCollectedRequest = (publicationId: string) => {
  return apolloClient.query({
    query: gql(WHO_COLLECTED),
    variables: {
      request: {
        publicationId,
      },
    },
  });
};

export const whoCollected = async () => {
  const result = await whoCollectedRequest('0x0f-0x01');
  prettyJSON('who collected: result', result.data);

  return result.data;
};

(async () => {
  await whoCollected();
})();
