import { apolloClient } from '../apollo-client';
import { PROFILE_ID } from '../config';
import { PublicationsDocument, PublicationsRequest } from '../graphql/generated';

const getPublicationsRequest = async (request: PublicationsRequest) => {
  const result = await apolloClient.query({
    query: PublicationsDocument,
    variables: {
      request,
      statsRequest: {},
    },
  });

  return result.data.publications;
};

export const getPublications = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const result = await getPublicationsRequest({
    where: {
      from: [profileId],
    },
    // profileId,
    // publicationTypes: [PublicationTypes.Post, PublicationTypes.Comment, PublicationTypes.Mirror],
  });
  console.log('publications: result', result.items);

  return result;
};

(async () => {
  await getPublications();
})();
