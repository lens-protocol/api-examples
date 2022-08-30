
import { apolloClient } from '../apollo-client';
import { getAddressFromSigner } from '../ethers.service';


import {DefaultProfileDocument } from '../graphql/generated'

const getDefaultProfileRequest = (ethereumAddress: string) => {
  return apolloClient.query({
    query: DefaultProfileDocument,
    variables: {
      request: {
        ethereumAddress,
      },
    },
  });
};

export const getDefaultProfile = async () => {
  const address = getAddressFromSigner();
  console.log('get default profile: address', address);

  const result = await getDefaultProfileRequest(address);
  console.log('profiles: result', result.data);

  return result.data;
};

(async () => {
  await getDefaultProfile();
})();
