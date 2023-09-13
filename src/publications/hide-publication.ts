import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { getAddressFromSigner } from '../ethers.service';
import { HidePublicationDocument, HidePublicationRequest } from '../graphql/generated';
import { knownPostId } from '../known-common-input-constants';

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

  await deletePublicationRequest({
    for: knownPostId,
  });

  console.log('delete publication: success');
};

(async () => {
  await deletePublication();
})();
