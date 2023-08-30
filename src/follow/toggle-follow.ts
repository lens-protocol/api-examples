import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { getAddressFromSigner, signedTypeData, splitSignature } from '../ethers.service';
import {
  CreateToggleFollowRequest,
  CreateToggleFollowTypedDataDocument,
} from '../../graphql-v1/generated';
import { waitUntilComplete } from '../indexer/has-transaction-been-indexed';
import { lensPeriphery } from '../lens-hub';

const createToggleFollowTypedData = async (request: CreateToggleFollowRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateToggleFollowTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createToggleFollowTypedData;
};

export const toggleFollow = async (profileId: string = '0x032f1a') => {
  const address = getAddressFromSigner();
  console.log('follow: address', address);

  await login(address);
  // yoginth - 0x0f
  const profileIds: string[] = ['0x0f']; // Ensure you follow this profileID
  const enables: boolean[] = [false];

  const result = await createToggleFollowTypedData({ profileIds, enables });
  console.log('follow: result', result);

  const typedData = result.typedData;
  console.log('follow: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('follow: signature', signature);

  const { v, r, s } = splitSignature(signature);

  //   return tx.hash;

  const tx = await lensPeriphery.toggleFollowWithSig({
    follower: address,
    profileIds: profileIds,
    enables: enables,
    sig: {
      v,
      r,
      s,
      deadline: typedData.value.deadline,
    },
  });
  console.log('follow: tx hash', tx.hash);

  console.log('follow: poll until indexed');
  const indexedResult = await waitUntilComplete({ txHash: tx.hash });

  console.log('follow: profile has been indexed', result);

  const logs = indexedResult!.txReceipt!.logs;

  console.log('follow: logs', logs);
};

(async () => {
  await toggleFollow();
})();
