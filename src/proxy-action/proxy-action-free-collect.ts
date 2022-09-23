import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { getAddressFromSigner } from '../ethers.service';
import {
  ProxyActionDocument,
  ProxyActionRequest,
  ProxyActionStatusTypes,
} from '../graphql/generated';
import { sleep } from '../helpers';
import { proxyActionStatusRequest } from './proxy-action-status';

const proxyActionFreeCollectRequest = async (request: ProxyActionRequest) => {
  const result = await apolloClient.query({
    query: ProxyActionDocument,
    variables: {
      request,
    },
  });

  return result.data.proxyAction as string;
};

export const proxyActionFreeCollect = async () => {
  const address = getAddressFromSigner();
  console.log('proxy action free collect: address', address);

  await login(address);

  const result = await proxyActionFreeCollectRequest({
    collect: {
      freeCollect: {
        publicationId: '0x06-0x01',
      },
    },
  });
  console.log('proxy action free collect: result', result);

  while (true) {
    const statusResult = await proxyActionStatusRequest(result);
    console.log('proxy action free collect: status', statusResult);
    if (statusResult.__typename === 'ProxyActionStatusResult') {
      if (statusResult.status === ProxyActionStatusTypes.Complete) {
        console.log('proxy action free collect: complete', statusResult);
        break;
      }
    }
    if (statusResult.__typename === 'ProxyActionError') {
      console.log('proxy action free collect: failed', statusResult);
      break;
    }
    await sleep(1000);
  }

  return result;
};

(async () => {
  await proxyActionFreeCollect();
})();
