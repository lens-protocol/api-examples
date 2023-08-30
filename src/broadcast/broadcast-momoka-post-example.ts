import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart } from '../config';
import { getAddressFromSigner, signedTypeData } from '../ethers.service';
import { CreateMomokaPostTypedDataDocument, MomokaPostRequest } from '../graphql/generated';
import { broadcastOnMomokaRequest } from './shared-broadcast';

export const createMomokaPostTypedData = async (request: MomokaPostRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateMomokaPostTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createMomokaPostTypedData;
};

const createMomokaPost = async () => {
  const address = getAddressFromSigner();
  console.log('follow with broadcast: address', address);

  await login(address);

  const result = await createMomokaPostTypedData({
    contentURI: 'your-content-uri',
  });

  const typedData = result.typedData;
  console.log('create post on momoka:', { typedData });

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('create post on momoka:', { signature });

  const broadcastResult = await broadcastOnMomokaRequest({
    id: result.id,
    signature,
  });
  console.log('create post on momoka', { broadcastResult });

  if (broadcastResult.__typename === 'RelayError') {
    console.error('create post on momoka: failed', broadcastResult);
    throw new Error('create post on momoka: failed');
  }

  console.log('create post on momoka: complete');
};

(async () => {
  if (explicitStart(__filename)) {
    await createMomokaPost();
  }
})();
