import { apolloClient } from '../apollo-client';
import { PROFILE_ID } from '../config';
import { MutualNftCollectionsDocument, MutualNftCollectionsRequest } from '../graphql/generated';
import { knownProfileId } from '../known-common-input-constants';

const getMutualNftCollections = async (request: MutualNftCollectionsRequest) => {
  const result = await apolloClient.query({
    query: MutualNftCollectionsDocument,
    variables: {
      request,
    },
  });

  return result.data.mutualNftCollections.items;
};

export const usersNfts = async () => {
  const mutualNftCollections = await getMutualNftCollections({
    viewingProfileId: knownProfileId,
    yourProfileId: PROFILE_ID,
  });

  console.log(`mutual nft collections: ${mutualNftCollections.length}`);

  return mutualNftCollections;
};

(async () => {
  await usersNfts();
})();
