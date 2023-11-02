import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { FollowDocument, FollowLensManagerRequest } from '../graphql/generated';
import { knownProfileId } from '../known-common-input-constants';
import { waitUntilLensManagerTransactionIsComplete } from '../transaction/wait-until-complete';

const follow = async (request: FollowLensManagerRequest) => {
  const result = await apolloClient.mutate({
    mutation: FollowDocument,
    variables: {
      request,
    },
  });

  return result.data!.follow;
};

export const followLensProfileManager = async (profileId: string = knownProfileId) => {
  const address = getAddressFromSigner();
  console.log('follow lens profile manager: address', address);

  await login(address);

  const result = await follow({
    follow: [
      {
        profileId: profileId,
      },
    ],
  });
  console.log('follow lens profile manager: result', result);
  await waitUntilLensManagerTransactionIsComplete(result, 'follow');
};

(async () => {
  if (explicitStart(__filename)) {
    await followLensProfileManager();
  }
})();
