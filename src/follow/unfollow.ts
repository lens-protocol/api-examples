import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { getAddressFromSigner, signedTypeData, splitSignature } from '../ethers.service';
import { CreateUnfollowTypedDataDocument, UnfollowRequest } from '../graphql/generated';
import { lensHub } from '../lens-hub';

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

  const result = await createUnfollowTypedData({ profiles: ['0x02'] });
  console.log('unfollow: result', result);

  const typedData = result.typedData;
  console.log('unfollow: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('unfollow: signature', signature);

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
  console.log('follow: tx hash', tx.hash);
  return tx.hash;
};

(async () => {
  await unfollow();
})();
