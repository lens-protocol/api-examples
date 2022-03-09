import { gql } from '@apollo/client/core';
import { apolloClient } from '../apollo-client';
import { argsBespokeInit } from '../config';
import { getAddressFromSigner, sendTx } from '../ethers.service';
import { enabledCurrencies } from './enabled-modules-currencies';

const MODULE_APPROVAL_DATA = `
  query($request: GenerateModuleCurrencyApprovalDataRequest!) {
    generateModuleCurrencyApprovalData(request: $request) {
      to
   	  from
      data
    }
  }
`;

// TODO typings!
export const getModuleApprovalData = (moduleApprovalRequest: any) => {
  return apolloClient.query({
    query: gql(MODULE_APPROVAL_DATA),
    variables: {
      request: moduleApprovalRequest,
    },
  });
};

export const approveModule = async () => {
  const address = getAddressFromSigner();
  console.log('approve module: address', address);

  const currencies = await enabledCurrencies();

  // hard coded to make the code example clear
  const generateApprovalModuleData = {
    currency: currencies.enabledModuleCurrencies.map((c: any) => c.address)[0],
    value: '10',
    collectModule: 'LimitedFeeCollectModule',
  };

  const result = await getModuleApprovalData(generateApprovalModuleData);
  console.log('approve module: result', result.data);

  const generateModuleCurrencyApprovalData =
    result.data.generateModuleCurrencyApprovalData;

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
  if (argsBespokeInit()) {
    await approveModule();
  }
})();
