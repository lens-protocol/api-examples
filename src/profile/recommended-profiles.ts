import { gql } from '@apollo/client/core';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { getAddressFromSigner } from '../ethers.service';
import { prettyJSON } from '../helpers';

const RECOMMENDED_PROFILES = `
  query {
    recommendedProfiles {
        id
        name
        bio
        location
        website
        twitterUrl
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
            small {
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
          }
          __typename
        }
        handle
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
              height
              width
              url
              mimeType
            }
            medium {
              url
              width
              height
              mimeType
            }
          }
          __typename
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
                symbol
                name
                decimals
                address
              }
              value
            }
            recipient
          }
          __typename
        }
  	}
  }
`;

const getRecommendedProfilesRequest = () => {
  return apolloClient.query({
    query: gql(RECOMMENDED_PROFILES),
  });
};

export const recommendedProfiles = async () => {
  const address = getAddressFromSigner();
  console.log('recommended profiles: address', address);

  await login(address);

  // only showing one example to query but you can see from request
  // above you can query many
  const result = await getRecommendedProfilesRequest();

  prettyJSON('recommended profiles: result', result.data);

  return result.data;
};

(async () => {
  await recommendedProfiles();
})();
