import { gql } from '@apollo/client/core';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { getAddressFromSigner } from '../ethers.service';
import { prettyJSON } from '../helpers';

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

  const result = await allowanceRequest({
    currencies: [
      '0x3C68CE8504087f89c640D02d133646d98e64ddd9',
      '0x2058A9D7613eEE744279e3856Ef0eAda5FCbaA7e',
    ],
    collectModules: [
      'LimitedFeeCollectModule',
      'FeeCollectModule',
      'LimitedTimedFeeCollectModule',
      'TimedFeeCollectModule',
      'EmptyCollectModule',
      'RevertCollectModule',
    ],
    followModules: ['FeeFollowModule'],
    referenceModules: ['FollowerOnlyReferenceModule'],
  });

  prettyJSON('allowance: result', result.data);

  return result.data;
};

(async () => {
  await allowance();
})();
