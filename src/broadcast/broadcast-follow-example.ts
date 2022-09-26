import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { argsBespokeInit } from '../config';
import { getAddressFromSigner, signedTypeData } from '../ethers.service';
import { createFollowTypedData } from '../follow/follow';
import { BroadcastDocument, BroadcastRequest } from '../graphql/generated';
import { pollUntilIndexed } from '../indexer/has-transaction-been-indexed';

export const broadcastRequest = async (request: BroadcastRequest) => {
  const result = await apolloClient.mutate({
    mutation: BroadcastDocument,
    variables: {
      request,
    },
  });

  return result.data!.broadcast;
};

const broadcast = async () => {
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
  console.log('follow with broadcast: broadcastResult', broadcastResult);
  if (broadcastResult.__typename !== 'RelayerResult') {
    console.error('follow with broadcast: failed', broadcastResult);
    throw new Error('follow with broadcast: failed');
  }

  console.log('follow with broadcast: poll until indexed');
  const indexedResult = await pollUntilIndexed({ txId: broadcastResult.txId });

  console.log('follow with broadcast: has been indexed', result);

  const logs = indexedResult!.txReceipt!.logs;

  console.log('follow with broadcast: logs', logs);
};

(async () => {
  if (argsBespokeInit()) {
    await broadcast();
  }
})();
