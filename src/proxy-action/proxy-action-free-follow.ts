import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { getAddressFromSigner } from '../ethers.service';
import {
  ProxyActionDocument,
  ProxyActionRequest,
  ProxyActionStatusTypes,
} from '../../graphql-v1/generated';
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
  const address = getAddressFromSigner();
  console.log('proxy action free follow: address', address);

  await login(address);

  const result = await proxyActionFreeFollowRequest({
    follow: {
      freeFollow: {
        profileId: '0x01',
      },
    },
  });
  console.log('proxy action free follow: result', result);

  while (true) {
    const statusResult = await proxyActionStatusRequest(result);
    console.log('proxy action free follow: status', statusResult);
    if (statusResult.__typename === 'ProxyActionStatusResult') {
      if (statusResult.status === ProxyActionStatusTypes.Complete) {
        console.log('proxy action free follow: complete', statusResult);
        break;
      }
    }
    if (statusResult.__typename === 'ProxyActionError') {
      console.log('proxy action free follow: failed', statusResult);
      break;
    }
    await sleep(1000);
  }

  return result;
};

(async () => {
  await proxyActionFreeFollow();
})();
