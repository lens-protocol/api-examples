import { gql } from '@apollo/client/core';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { getAddressFromSigner } from '../ethers.service';
import { prettyJSON } from '../helpers';
import { pollUntilIndexed } from '../indexer/has-transaction-been-indexed';

const CREATE_PROFILE = `
  mutation($request: CreateProfileRequest!) { 
    createProfile(request: $request) {
      ... on RelayerResult {
        txHash
      }
      ... on RelayError {
        reason
      }
			__typename
    }
 }
`;

const createProfileRequest = (createProfileRequest: {
  handle: string;
  profilePictureUri?: string;
  followNFTURI?: string;
}) => {
  return apolloClient.mutate({
    mutation: gql(CREATE_PROFILE),
    variables: {
      request: createProfileRequest,
    },
  });
};

export const createProfile = async () => {
  const address = getAddressFromSigner();
  console.log('create profile: address', address);

  await login(address);

  const result = await createProfileRequest({
    handle: new Date().getTime().toString(),
  });

  prettyJSON('create profile: result', result.data);

  console.log('poll until indexed');
  await pollUntilIndexed(result.data.createProfile.txHash);

  console.log('profile has been indexed');

  return result.data;
};

(async () => {
  await createProfile();
})();
