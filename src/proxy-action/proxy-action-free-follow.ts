import { apolloClient } from '../apollo-client';
import { ProxyActionDocument, ProxyActionRequest } from '../graphql/generated';
import { sleep } from '../helpers';
import { proxyActionStatusRequest } from './proxy-action-status';

const proxyActionFreeFollowRequest = async (request: ProxyActionRequest) => {
  const result = await apolloClient.query({
    query: ProxyActionDocument,
    variables: {
      request,
    },
  });

  return result.data.proxyAction;
};

export const proxyActionFreeFollow = async () => {
  const result = await proxyActionFreeFollowRequest({
    follow: {
      freeFollow: {
        profileId: '0x01',
      },
    },
  });
  console.log('proxy action free follow: result', result);

  while (true) {
    const status = await proxyActionStatusRequest(result);
    console.log('proxy action free follow: status', status);
    if (status.__typename === 'ProxyActionStatusResult') {
      console.log('proxy action free follow: complete', status);
      break;
    }
    await sleep(1000);
  }

  return result;
};

(async () => {
  await proxyActionFreeFollow();
})();
