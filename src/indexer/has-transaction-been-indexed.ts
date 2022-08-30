
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { argsBespokeInit } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { follow } from '../follow/follow';
import {HasTxHashBeenIndexedDocument } from '../graphql/generated'


const hasTxBeenIndexed = (txHash: string) => {
  return apolloClient.query({
    query: HasTxHashBeenIndexedDocument,
    variables: {
      request: {
        txHash,
      },
    },
    fetchPolicy: 'network-only',
  });
};

export const pollUntilIndexed = async (txHash: string) => {
  while (true) {
    const result = await hasTxBeenIndexed(txHash);
    console.log('pool until indexed: result', result.data);

    const response = result.data!.hasTxHashBeenIndexed;
    if (response.__typename === 'TransactionIndexedResult') {
      console.log('pool until indexed: indexed', response.indexed);
      console.log('pool until metadataStatus: metadataStatus', response.metadataStatus);

      console.log(response.metadataStatus)
      if (response.metadataStatus) {
        if (response.metadataStatus.status === 'SUCCESS') {
          return response;
        }

        if (response.metadataStatus.status === 'METADATA_VALIDATION_FAILED') {
          throw new Error(response.metadataStatus.status);
        }
      } else {
        if (response.indexed) {
          return response;
        }
      }

      console.log('pool until indexed: sleep for 1500 milliseconds then try again');
      // sleep for a second before trying again
      await new Promise( resolve => setTimeout(resolve, 1500) );
    } else {
      // it got reverted and failed!
      throw new Error(response.reason);
    }
  }
};

const testTransaction = async () => {
  const address = getAddressFromSigner();
  console.log('testTransaction: address', address);

  await login(address);

  const hash = await follow('0x06');
  console.log('testTransaction: hash', hash);

  await pollUntilIndexed(hash);

  console.log('testTransaction: Indexed');
};

(async () => {
  if (argsBespokeInit()) {
    await testTransaction();
  }
})();
