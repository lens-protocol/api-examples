import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { LinkHandleToProfileDocument, LinkHandleToProfileRequest } from '../graphql/generated';
import { waitUntilLensManagerTransactionIsComplete } from '../transaction/wait-until-complete';

const linkHandleToProfile = async (request: LinkHandleToProfileRequest) => {
  const result = await apolloClient.mutate({
    mutation: LinkHandleToProfileDocument,
    variables: {
      request,
    },
  });

  return result.data!.linkHandleToProfile;
};

export const linkHandleToProfileProfileManager = async () => {
  const address = getAddressFromSigner();
  console.log('link handle to profile: lens profile manager: address', address);

  await login(address);

  const result = await linkHandleToProfile({
    handle: 'test/wagmi',
  });
  console.log('link handle to profile: lens profile manager: result', result);
  await waitUntilLensManagerTransactionIsComplete(result, 'unlinkHandleFromProfile');
};

(async () => {
  if (explicitStart(__filename)) {
    await linkHandleToProfileProfileManager();
  }
})();
