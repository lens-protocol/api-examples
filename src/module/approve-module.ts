import { apolloClient } from '../apollo-client';
import { explicitStart } from '../config';
import { getAddressFromSigner, sendTx } from '../ethers.service';
import {
  CollectModules,
  GenerateModuleCurrencyApprovalDataDocument,
  GenerateModuleCurrencyApprovalDataRequest,
} from '../graphql/generated';
import { enabledCurrencies } from './enabled-modules-currencies';

const getModuleApprovalData = async (request: GenerateModuleCurrencyApprovalDataRequest) => {
  const result = await apolloClient.query({
    query: GenerateModuleCurrencyApprovalDataDocument,
    variables: {
      request,
    },
  });

  return result.data.generateModuleCurrencyApprovalData;
};

export const approveModule = async () => {
  const address = getAddressFromSigner();
  console.log('approve module: address', address);

  const currencies = await enabledCurrencies();

  const generateModuleCurrencyApprovalData = await getModuleApprovalData({
    currency: currencies.map((c: any) => c.address)[0],
    value: '10',
    collectModule: CollectModules.FeeCollectModule,
  });
  console.log('approve module: result', generateModuleCurrencyApprovalData);

  const tx = await sendTx({
    to: generateModuleCurrencyApprovalData.to,
    from: generateModuleCurrencyApprovalData.from,
    data: generateModuleCurrencyApprovalData.data,
  });

  console.log('approve module: txHash', tx.hash);

  await tx.wait();

  console.log('approve module: txHash mined', tx.hash);
};

(async () => {
  if (explicitStart(__filename)) {
    await approveModule();
  }
})();
