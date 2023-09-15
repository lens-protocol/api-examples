import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { getAddressFromSigner } from '../ethers.service';
import {
  ApprovedModuleAllowanceAmountDocument,
  ApprovedModuleAllowanceAmountRequest,
  OpenActionModuleType,
} from '../graphql/generated';

const allowanceRequest = async (request: ApprovedModuleAllowanceAmountRequest) => {
  const result = await apolloClient.query({
    query: ApprovedModuleAllowanceAmountDocument,
    variables: {
      request,
    },
  });

  return result.data.approvedModuleAllowanceAmount;
};

export const allowance = async () => {
  const address = getAddressFromSigner();
  console.log('allowance: address', address);

  await login(address);

  const result = await allowanceRequest({
    currencies: ['0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889'],
    openActionModules: [OpenActionModuleType.SimpleCollectOpenActionModule],
  });

  console.log('allowance: result', result);

  return result;
};

(async () => {
  await allowance();
})();
