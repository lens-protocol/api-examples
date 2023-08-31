import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { follow } from '../follow/follow';
import {
  LensTransactionStatusDocument,
  LensTransactionStatusRequest,
  LensTransactionStatusType,
} from '../graphql/generated';

const hasTxBeenIndexed = async (request: LensTransactionStatusRequest) => {
  const result = await apolloClient.query({
    query: LensTransactionStatusDocument,
    variables: {
      request,
    },
    fetchPolicy: 'network-only',
  });

  return result.data.lensTransactionStatus;
};

export const waitUntilComplete = async (input: { txHash: string } | { txId: string }) => {
  while (true) {
    const response = await hasTxBeenIndexed(input);
    console.log('pool until indexed: result', response);

    switch (response.status) {
      case LensTransactionStatusType.Failed:
        if (response.__typename === 'LensTransaction') {
          // it got reverted and failed!
          throw new Error(response.reason ?? 'Transaction failed');
        } else {
          throw new Error(response.metadataFailedReason ?? 'Transaction failed');
        }

      case LensTransactionStatusType.Progressing:
        console.log('still in progress');
        break;

      case LensTransactionStatusType.Complete:
        console.log('complete and indexed onchain');
        return response;
    }

    console.log('pool until indexed: sleep for 1500 milliseconds then try again');
    // sleep for before trying again
    await new Promise((resolve) => setTimeout(resolve, 1500));
  }
};

const testTransaction = async () => {
  const address = getAddressFromSigner();
  console.log('testTransaction: address', address);

  await login(address);

  const hash = await follow('0x06');
  console.log('testTransaction: hash', hash);

  await waitUntilComplete({ txHash: hash });

  console.log('testTransaction: Indexed');
};

(async () => {
  if (explicitStart(__filename)) {
    await testTransaction();
  }
})();
