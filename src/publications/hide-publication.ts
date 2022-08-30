
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { getAddressFromSigner } from '../ethers.service';

import {HidePublicationDocument } from '../graphql/generated'


export const deletePublicationRequest = (publicationId: string) => {
  return apolloClient.mutate({
    mutation: HidePublicationDocument,
    variables: {
      request: {
        publicationId,
      },
    },
  });
};

export const deletePublication = async () => {
  const address = getAddressFromSigner();
  console.log('delete publication: address', address);

  await login(address);

  await deletePublicationRequest('YOUR_PUBLICATION_ID');

  console.log('delete publication: success');
};

(async () => {
  await deletePublication();
})();
