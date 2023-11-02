import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { getAddressFromSigner } from '../ethers.service';
import { PublicationDocument, PublicationRequest } from '../graphql/generated';
import { knownPostId } from '../known-common-input-constants';

const getPublicationRequest = async (request: PublicationRequest) => {
  const result = await apolloClient.query({
    query: PublicationDocument,
    variables: {
      request,
    },
  });

  return result.data.publication;
};

export const getPublication = async () => {
  const address = getAddressFromSigner();
  await login(address);

  const result = await getPublicationRequest({
    forId: knownPostId,
  });
  console.log('publication: result', result);

  return result;
};

(async () => {
  await getPublication();
})();
