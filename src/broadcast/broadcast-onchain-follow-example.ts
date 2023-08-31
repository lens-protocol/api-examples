import { login } from '../authentication/login';
import { explicitStart } from '../config';
import { getAddressFromSigner, signedTypeData } from '../ethers.service';
import { createFollowTypedData } from '../follow/follow';
import { waitUntilComplete } from '../indexer/has-transaction-been-indexed';
import { broadcastOnchainRequest } from './shared-broadcast';

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

  const broadcastResult = await broadcastOnchainRequest({
    id: result.id,
    signature,
  });
  console.log('follow with broadcast: broadcastResult', broadcastResult);

  if (broadcastResult.__typename !== 'RelaySuccess') {
    console.error('follow with broadcast: failed', broadcastResult);
    throw new Error('follow with broadcast: failed');
  }

  console.log('follow with broadcast: poll until indexed');
  const indexedResult = await waitUntilComplete({ txId: broadcastResult.txId });
  console.log('follow with broadcast: has been indexed', indexedResult);

console.log('follow broadcast: complete');
};

(async () => {
  if (explicitStart(__filename)) {
    await broadcast();
  }
})();
