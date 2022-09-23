import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { getAddressFromSigner, signedTypeData } from '../ethers.service';
import { createFollowTypedData } from '../follow/follow';
import { BroadcastDocument, BroadcastRequest } from '../graphql/generated';

const broadcastRequest = async (request: BroadcastRequest) => {
  const result = await apolloClient.mutate({
    mutation: BroadcastDocument,
    variables: {
      request,
    },
  });

  return result.data!.broadcast;
};

export const broadcast = async () => {
  const address = getAddressFromSigner();
  console.log('follow with broadcast: address', address);

  await login(address);

  const result = await createFollowTypedData({
    follow: [
      {
        profile: '0x01',
      },
    ],
  });
  console.log('follow with broadcast: result', result);

  const typedData = result.typedData;
  console.log('follow with broadcast: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('follow with broadcast: signature', signature);

  const broadcastResult = await broadcastRequest({
    id: result.id,
    signature,
  });
  console.log('follow with broadcast: tx hash', broadcastResult);
  return broadcastResult;
};

(async () => {
  await broadcast();
})();
