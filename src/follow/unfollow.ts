import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { broadcastOnchainRequest } from '../broadcast/shared-broadcast';
import { USE_GASLESS } from '../config';
import { getAddressFromSigner, signedTypeData, splitSignature } from '../ethers.service';
import { CreateUnfollowTypedDataDocument, UnfollowRequest } from '../graphql/generated';
import { knownProfileId } from '../known-common-input-constants';
import { lensHub } from '../lens-hub';
import { waitUntilBroadcastTransactionIsComplete } from '../transaction/wait-until-complete';

const createUnfollowTypedData = async (request: UnfollowRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateUnfollowTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createUnfollowTypedData;
};

export const unfollow = async () => {
  const address = getAddressFromSigner();
  console.log('unfollow: address', address);

  await login(address);

  const { id, typedData } = await createUnfollowTypedData({ unfollow: [knownProfileId] });
  console.log('unfollow: result', { id, typedData });

  console.log('unfollow: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('unfollow: signature', signature);

  if (USE_GASLESS) {
    const broadcastResult = await broadcastOnchainRequest({ id, signature });

    await waitUntilBroadcastTransactionIsComplete(broadcastResult, 'unfollow');
  } else {
    const { v, r, s } = splitSignature(signature);

    const tx = await lensHub.unfollowWithSig(
      typedData.value.unfollowerProfileId,
      typedData.value.idsOfProfilesToUnfollow,
      {
        signer: address,
        v,
        r,
        s,
        deadline: typedData.value.deadline,
      }
    );
    console.log('unfollow: tx hash', tx.hash);
    return tx.hash;
  }
};

(async () => {
  await unfollow();
})();
