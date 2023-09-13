import { apolloClient } from '../apollo-client';
import { PROFILE_ID } from '../config';
import { MutualPoapsDocument, MutualPoapsQueryRequest } from '../graphql/generated';
import { knownProfileId } from '../known-common-input-constants';

const getMutualPoaps = async (request: MutualPoapsQueryRequest) => {
  const result = await apolloClient.query({
    query: MutualPoapsDocument,
    variables: {
      request,
    },
  });

  return result.data.mutualPoaps.items;
};

const mutualPoaps = async () => {
  const poapEvent = await getMutualPoaps({
    observer: PROFILE_ID,
    viewing: knownProfileId,
  });

  console.log('mutual poaps: result', poapEvent);

  return poapEvent;
};

(async function () {
  await mutualPoaps();
})();
