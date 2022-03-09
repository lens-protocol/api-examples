import { gql } from '@apollo/client/core';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { argsBespokeInit } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { prettyJSON } from '../helpers';

const ENABLED_MODULES = `
  query {
    enabledModules {
      collectModules {
        moduleName
        contractAddress
        inputParams {
          name
          type
        }
        redeemParams {
          name
          type
        }
        returnDataParms {
          name
          type
        }
      }
      followModules {
        moduleName
        contractAddress
        inputParams {
          name
          type
        }
        redeemParams {
          name
          type
        }
        returnDataParms {
          name
          type
        }
      }
      referenceModules {
        moduleName
        contractAddress
        inputParams {
          name
          type
        }
        redeemParams {
          name
          type
        }
        returnDataParms {
          name
          type
        }
      }
    }
	}
`;

const enabledModulesRequest = () => {
  return apolloClient.query({
    query: gql(ENABLED_MODULES),
  });
};

export const enabledModules = async () => {
  const address = getAddressFromSigner();
  console.log('enabled modules: address', address);

  await login(address);

  const result = await enabledModulesRequest();

  prettyJSON('enabled modules: result', result.data);

  return result.data;
};

(async () => {
  if (argsBespokeInit()) {
    await enabledModules();
  }
})();
