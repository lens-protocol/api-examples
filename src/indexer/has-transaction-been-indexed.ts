import { apolloClient } from '../apollo-client';
import { explicitStart } from '../config';
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

    if (!response) {
      break;
    }

    console.log('pool until indexed: result', response);

    switch (response.status) {
      case LensTransactionStatusType.Failed:
        throw new Error(response.reason ?? 'Transaction failed');

      case LensTransactionStatusType.Processing:
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

(async () => {
  if (explicitStart(__filename)) {
    await testTransaction();
  }
})();
