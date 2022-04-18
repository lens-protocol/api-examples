import { gql } from '@apollo/client/core';
import { apolloClient } from '../apollo-client';
import { getAddressFromSigner } from '../ethers.service';
import { prettyJSON } from '../helpers';

const GET_DEFAULT_PROFILES = `
  query($request: DefaultProfileRequest!) {
    defaultProfile(request: $request) {
      id
      name
      bio
      location
      website
      twitter
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

const getDefaultProfileRequest = (ethereumAddress: string) => {
  return apolloClient.query({
    query: gql(GET_DEFAULT_PROFILES),
    variables: {
      request: {
        ethereumAddress,
      },
    },
  });
};

export const getDefaultProfile = async () => {
  const address = getAddressFromSigner();
  console.log('set default profile: address', address);

  const result = await getDefaultProfileRequest(address);
  prettyJSON('profiles: result', result.data);

  return result.data;
};

(async () => {
  await getDefaultProfile();
})();
