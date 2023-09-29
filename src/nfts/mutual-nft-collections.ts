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

  return result.data.mutualNftCollections;
};

export const mutualNftCollections = async () => {
  const mutualNftCollections = await getMutualNftCollections({
    viewing: knownProfileId,
    observer: PROFILE_ID,
  });

  console.log(`mutual nft collections: ${JSON.stringify(mutualNftCollections)}`);

  return mutualNftCollections;
};

(async () => {
  await mutualNftCollections();
})();
