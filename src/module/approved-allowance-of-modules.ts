import { gql } from '@apollo/client/core';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { getAddressFromSigner } from '../ethers.service';
import { prettyJSON } from '../helpers';
import { enabledCurrencies } from './enabled-modules-currencies';

const ALLOWANCE = `
  query($request: ApprovedModuleAllowanceAmountRequest!) {
    approvedModuleAllowanceAmount(request: $request) {
      currency
      module
      contractAddress
      allowance
    }
  }
`;

const allowanceRequest = (allowanceRequest: {
  currencies: string[];
  collectModules: string[];
  followModules: string[];
  referenceModules: string[];
}) => {
  return apolloClient.query({
    query: gql(ALLOWANCE),
    variables: {
      request: allowanceRequest,
    },
  });
};

export const allowance = async () => {
  const address = getAddressFromSigner();
  console.log('allowance: address', address);

  await login(address);

  const currencies = await enabledCurrencies();

  const result = await allowanceRequest({
    currencies: ['0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889'],
    collectModules: [
      'LimitedFeeCollectModule',
      'FeeCollectModule',
      'LimitedTimedFeeCollectModule',
      'TimedFeeCollectModule',
      'FreeCollectModule',
      'RevertCollectModule',
    ],
    followModules: ['FeeFollowModule', 'RevertFollowModule', 'ProfileFollowModule'],
    referenceModules: ['FollowerOnlyReferenceModule'],
  });

  prettyJSON('allowance: result', result.data);

  return result.data;
};

(async () => {
  await allowance();
})();
