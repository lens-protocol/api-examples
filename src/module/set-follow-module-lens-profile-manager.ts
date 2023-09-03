import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { SetFollowModuleDocument, SetFollowModuleRequest } from '../graphql/generated';
import { waitUntilLensManagerTransactionIsComplete } from '../transaction/wait-until-complete';
import { freeFollowModule } from './helpers/follow-module-options';

const setFollowModule = async (request: SetFollowModuleRequest) => {
  const result = await apolloClient.mutate({
    mutation: SetFollowModuleDocument,
    variables: {
      request,
    },
  });

  return result.data!.setFollowModule;
};

export const setFollowModuleLensProfileManager = async (profileId: string = '0x02') => {
  const address = getAddressFromSigner();
  console.log('set follow module lens profile manager: address', address);

  await login(address);

  // hard coded to make the code example clear
  const setFollowModuleRequest: SetFollowModuleRequest = {
    // you can play around with follow modules here
    // all request objects are in `follow-module-options.ts`
    followModule: freeFollowModule,
  };

  const result = await setFollowModule(setFollowModuleRequest);
  console.log('set follow module lens profile manager: result', result);
  await waitUntilLensManagerTransactionIsComplete(result, 'unfollow');
};

(async () => {
  if (explicitStart(__filename)) {
    await setFollowModuleLensProfileManager();
  }
})();
