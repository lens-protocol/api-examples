
import { apolloClient } from '../apollo-client';
import { PROFILE_ID } from '../config';


import {PublicationsDocument } from '../graphql/generated'


// TODO types
const getPublicationsRequest = (getPublicationQuery: any) => {
  return apolloClient.query({
    query: PublicationsDocument,
    variables: {
      request: getPublicationQuery,
    },
  });
};

export const getPublications = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const result = await getPublicationsRequest({
    profileId,
    publicationTypes: ['POST', 'COMMENT', 'MIRROR'],
  });
  console.log('publications: result', result.data);

  return result.data;
};

(async () => {
  await getPublications();
})();
