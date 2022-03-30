import { gql } from '@apollo/client/core';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { getAddressFromSigner } from '../ethers.service';

const HIDE_PUBLICATION = `
  mutation($request: HidePublicationRequest!) { 
   hidePublication(request: $request)
 }
`;

export const deletePublicationRequest = (publicationId: string) => {
  return apolloClient.mutate({
    mutation: gql(HIDE_PUBLICATION),
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
