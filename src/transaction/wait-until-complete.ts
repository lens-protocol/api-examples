import { LensProfileManagerRelayError, RelayError, RelaySuccess } from '../graphql/generated';
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
  const indexedResult = await waitUntilComplete({ forTxId: broadcastResult.txId });
  console.log(`${actionToBroadcast}: has been indexed`, indexedResult);

  console.log(`${actionToBroadcast}: complete`);
}

export async function waitUntilLensManagerTransactionIsComplete(
  result: RelaySuccess | LensProfileManagerRelayError,
  name: string
) {
  console.log('lens profile manager with action - ', { name });

  if (result.__typename !== 'RelaySuccess') {
    console.error(`${result}: failed`, result);
    throw new Error(`${result}: failed`);
  }

  console.log(`${result}: poll until indexed`);
  const indexedResult = await waitUntilComplete({ forTxId: result.txId });
  console.log(`${result}: has been indexed`, indexedResult);

  console.log(`${result}: complete`);
}
