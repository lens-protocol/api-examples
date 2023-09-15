import { apolloClient } from '../apollo-client';
import { PROFILE_ID } from '../config';
import { ForYouDocument, PublicationForYouRequest } from '../graphql/generated';

const forYouRequest = async (request: PublicationForYouRequest) => {
  const result = await apolloClient.query({
    query: ForYouDocument,
    variables: {
      request,
    },
  });

  return result.data.forYou;
};

export const getPublications = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const result = await forYouRequest({
    for: profileId,
  });
  console.log('publications for you: result', result.items);

  return result;
};

(async () => {
  await getPublications();
})();
