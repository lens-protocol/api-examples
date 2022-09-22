import { apolloClient } from '../apollo-client';
import { getAddressFromSigner } from '../ethers.service';
import { DefaultProfileDocument, DefaultProfileRequest } from '../graphql/generated';

const getDefaultProfileRequest = async (request: DefaultProfileRequest) => {
  const result = await apolloClient.query({
    query: DefaultProfileDocument,
    variables: {
      request,
    },
  });

  return result.data.defaultProfile;
};

export const getDefaultProfile = async () => {
  const ethereumAddress = getAddressFromSigner();
  console.log('get default profile: address', ethereumAddress);

  const result = await getDefaultProfileRequest({ ethereumAddress });
  console.log('profiles: result', result);

  return result;
};

(async () => {
  await getDefaultProfile();
})();
