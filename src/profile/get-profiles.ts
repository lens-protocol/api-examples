import { gql } from '@apollo/client/core';
import { BigNumber } from 'ethers';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { argsBespokeInit } from '../config';
import { getAddressFromSigner } from '../ethers.service';

const GET_PROFILES = `
  query($request: ProfileQueryRequest!) {
    profiles(request: $request) {
      items {
        id
        name
        bio
        attributes {
          displayType
          traitType
          key
          value
        }
        followNftAddress
        metadata
        isDefault
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

export interface ProfilesRequest {
  profileIds?: string[];
  ownedBy?: string;
  handles?: string[];
  whoMirroredPublicationId?: string;
}

const getProfilesRequest = (request: ProfilesRequest) => {
  return apolloClient.query({
    query: gql(GET_PROFILES),
    variables: {
      request,
    },
    fetchPolicy: 'no-cache',
  });
};

export const profiles = async (request?: ProfilesRequest) => {
  const address = getAddressFromSigner();
  console.log('profiles: address', address);

  await login(address);

  let from = 0;
  while (true) {
    let profileIds = [];
    let afterFrom = from + 45;
    for (let i = from; i < afterFrom; i++) {
      profileIds.push(BigNumber.from(i).toHexString());
    }

    from = afterFrom;

    console.log('profiles: profileIds', profileIds);

    // only showing one example to query but you can see from request
    // above you can query many
    const profilesFromProfileIds = await getProfilesRequest({ profileIds });

    console.log(
      'result',
      profilesFromProfileIds.data.profiles.items.map((profile2: any) => profile2.id)
    );

    // prettyJSON(
    //   'profiles: result',
    //   profilesFromProfileIds.data.profiles.map((profile2: any) => profile2.id)
    // );
  }
};

(async () => {
  if (argsBespokeInit()) {
    await profiles();
  }
})();
