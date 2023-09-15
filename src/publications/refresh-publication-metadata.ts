import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { getAddressFromSigner } from '../ethers.service';
import {
  RefreshPublicationMetadataDocument,
  RefreshPublicationMetadataRequest,
} from '../graphql/generated';
import { knownPostId } from '../known-common-input-constants';

export const refreshPublicationMetadataApi = async (request: RefreshPublicationMetadataRequest) => {
  const result = await apolloClient.mutate({
    mutation: RefreshPublicationMetadataDocument,
    variables: {
      request,
    },
  });

  return result.data!.refreshPublicationMetadata;
};

export const refreshPublicationMetadata = async () => {
  const address = getAddressFromSigner();
  console.log('refresh publication: address', address);

  await login(address);

  await refreshPublicationMetadataApi({
    for: knownPostId,
  });

  console.log('delete publication: success');
};

(async () => {
  await refreshPublicationMetadata();
})();
