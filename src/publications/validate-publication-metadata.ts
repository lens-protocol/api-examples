import { apolloClient } from '../apollo-client';
import { ValidatePublicationMetadataDocument } from '../graphql/generated';
import { publicationMetadataTextOnly } from './helpers/publication-metadata-mocks';

(async function () {
  const result = await apolloClient.query({
    query: ValidatePublicationMetadataDocument,
    variables: {
      request: {
        json: JSON.stringify(publicationMetadataTextOnly),
      },
    },
  });

  console.log(`validate publication metadata result: ${result.data.validatePublicationMetadata}`);
})();
