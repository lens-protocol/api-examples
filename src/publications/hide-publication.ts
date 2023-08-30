import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { getAddressFromSigner } from '../ethers.service';
import { HidePublicationDocument, HidePublicationRequest } from '../../graphql-v1/generated';

export const deletePublicationRequest = async (request: HidePublicationRequest) => {
  const result = await apolloClient.mutate({
    mutation: HidePublicationDocument,
    variables: {
      request,
    },
  });

  return result.data!.hidePublication;
};

export const deletePublication = async () => {
  const address = getAddressFromSigner();
  console.log('delete publication: address', address);

  await login(address);

  await deletePublicationRequest({ publicationId: 'YOUR_PUBLICATION_ID' });

  console.log('delete publication: success');
};

(async () => {
  await deletePublication();
})();
