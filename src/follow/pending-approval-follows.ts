import { gql } from '@apollo/client/core';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { argsBespokeInit } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { prettyJSON } from '../helpers';

const GET_PENDING_APPROVAL_FOLLOWS = `
  query($request: PendingApprovalFollowsRequest!) {
    pendingApprovalFollows(request: $request) { 
			    items {
            id
            name
            bio
            location
            website
            twitterUrl
            handle
            picture {
              ... on NftImage {
                contractAddress
                tokenId
                uri
                verified
              }
              ... on MediaSet {
                original {
                  url
                  width
                  height
                  mimeType
                }
                medium {
                  url
                  width
                  height
                  mimeType
                }
                small {
                  url
                  width
                  height
                  mimeType
                }
              }
            }
            coverPicture {
              ... on NftImage {
                contractAddress
                tokenId
                uri
                verified
              }
              ... on MediaSet {
                original {
                  url
                  width
                  height
                  mimeType
                }
                small {
                  width
                  url
                  height
                  mimeType
                }
                medium {
                  url
                  width
                  height
                  mimeType
                }
              }
            }
            ownedBy
            depatcher {
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

const pendingApprovalFollows = () => {
  return apolloClient.query({
    query: gql(GET_PENDING_APPROVAL_FOLLOWS),
    variables: {
      request: {
        limit: 10,
      },
    },
  });
};

export const pendingApprovals = async () => {
  const address = getAddressFromSigner();
  console.log('pending approvals: address', address);

  await login(address);

  const result = await pendingApprovalFollows();
  prettyJSON('pending approvals: result', result.data);

  return result.data;
};

(async () => {
  if (argsBespokeInit()) {
    await pendingApprovals();
  }
})();
