import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart } from '../config';
import { getAddressFromSigner, signedTypeData, splitSignature } from '../ethers.service';
import { CreateFollowTypedDataDocument, FollowRequest } from '../graphql/generated';
import { lensHub } from '../lens-hub';

export const createFollowTypedData = async (request: FollowRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateFollowTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createFollowTypedData;
};

export const follow = async (profileId: string = '0x02') => {
  const address = getAddressFromSigner();
  console.log('follow: address', address);

  await login(address);

  const result = await createFollowTypedData({
    follow: [
      {
        profileId: profileId,
      },
    ],
  });
  console.log('follow: result', result);

  const typedData = result.typedData;
  console.log('follow: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('follow: signature', signature);

  const { v, r, s } = splitSignature(signature);

  const tx = await lensHub.followWithSig(
    typedData.value.followerProfileId,
    typedData.value.idsOfProfilesToFollow,
    typedData.value.followTokenIds,
    typedData.value.datas,
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
  if (explicitStart(__filename)) {
    await follow();
  }
})();
