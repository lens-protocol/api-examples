import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { UnfollowDocument, UnfollowRequest } from '../graphql/generated';
import { waitUntilLensManagerTransactionIsComplete } from '../transaction/wait-until-complete';

const unfollow = async (request: UnfollowRequest) => {
  const result = await apolloClient.mutate({
    mutation: UnfollowDocument,
    variables: {
      request,
    },
  });

  return result.data!.unfollow;
};

export const followLensProfileManager = async (profileId: string = '0x02') => {
  const address = getAddressFromSigner();
  console.log('unfollow lens profile manager: address', address);

  await login(address);

  const result = await unfollow({
    profiles: [profileId],
  });
  console.log('unfollow lens profile manager: result', result);
  await waitUntilLensManagerTransactionIsComplete(result, 'unfollow');
};

(async () => {
  if (explicitStart(__filename)) {
    await followLensProfileManager();
  }
})();
