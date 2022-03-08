import { gql } from '@apollo/client/core';
import { apolloClient } from '../apollo-client';
import { getAddressFromSigner, signText } from '../ethers.service';

const GET_CHALLENGE = `
  query($request: ChallengeRequest!) {
    challenge(request: $request) { text }
  }
`;

export const generateChallenge = (address: string) => {
  return apolloClient.query({
    query: gql(GET_CHALLENGE),
    variables: {
      request: {
        address,
      },
    },
  });
};

const AUTHENTICATION = `
  mutation($request: SignedAuthChallenge!) { 
    authenticate(request: $request) {
      accessToken
      refreshToken
    }
 }
`;

export const authenticate = (address: string, signature: string) => {
  return apolloClient.mutate({
    mutation: gql(AUTHENTICATION),
    variables: {
      request: {
        address,
        signature,
      },
    },
  });
};

export const login = async (address = getAddressFromSigner()) => {
  console.log('login: address', address);

  // we request a challenge from the server
  const challengeResponse = await generateChallenge(address);

  // sign the text with the wallet
  const signature = await signText(challengeResponse.data.challenge.text);

  const accessTokens = await authenticate(address, signature);
  console.log('login: result', accessTokens.data);

  return accessTokens.data;
};

(async () => {
  await login();
})();
