import { RelayError, RelaySuccess } from '../graphql/generated';
import { waitUntilComplete } from '../indexer/has-transaction-been-indexed';

export async function waitUntilBroadcastTransactionIsComplete(
  broadcastResult: RelaySuccess | RelayError,
  broadcastName?: string // for logging e.g. 'create post'
) {
  const actionToBroadcast = broadcastName ?? 'broadcast';
  console.log(actionToBroadcast, { broadcastResult });

  if (broadcastResult.__typename !== 'RelaySuccess') {
    console.error(`${actionToBroadcast}: failed`, broadcastResult);
    throw new Error(`${actionToBroadcast}: failed`);
  }

  console.log(`${actionToBroadcast}: poll until indexed`);
  const indexedResult = await waitUntilComplete({ txId: broadcastResult.txId });
  console.log(`${actionToBroadcast}: has been indexed`, indexedResult);

  console.log(`${actionToBroadcast}: complete`);
}
