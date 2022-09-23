import { apolloClient } from '../apollo-client';
import { ProxyActionDocument, ProxyActionRequest } from '../graphql/generated';
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
  const result = await proxyActionFreeCollectRequest({
    collect: {
      freeCollect: {
        publicationId: '0x01-0x01',
      },
    },
  });
  console.log('proxy action free collect: result', result);

  while (true) {
    const status = await proxyActionStatusRequest(result);
    console.log('proxy action free collect: status', status);
    if (status.__typename === 'ProxyActionStatusResult') {
      console.log('proxy action free collect: complete', status);
      break;
    }
    await sleep(1000);
  }

  return result;
};

(async () => {
  await proxyActionFreeCollect();
})();
