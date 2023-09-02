import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { MirrorOnchainDocument, OnchainMirrorRequest } from '../graphql/generated';
import { waitUntilLensManagerTransactionIsComplete } from '../transaction/wait-until-complete';

const mirrorOnChain = async (request: OnchainMirrorRequest) => {
  const result = await apolloClient.mutate({
    mutation: MirrorOnchainDocument,
    variables: {
      request,
    },
  });

  return result.data!.mirrorOnchain;
};

export const MirrorOnChainLensProfileManager = async (profileId: string = '0x02') => {
  const address = getAddressFromSigner();
  console.log('mirror onchain lens profile manager: address', address);

  await login(address);

  // TODO! in docs make sure we talk about onchain referrals
  const request: OnchainMirrorRequest = {
    mirrorOn: '0x03-0x03',
  };

  const result = await mirrorOnChain(request);
  console.log('mirror onchain lens profile manager: result', result);
  await waitUntilLensManagerTransactionIsComplete(result, 'unblock');
};

(async () => {
  if (explicitStart(__filename)) {
    await MirrorOnChainLensProfileManager();
  }
})();
