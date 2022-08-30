
import { apolloClient } from '../apollo-client';
import { argsBespokeInit } from '../config';
import { getAddressFromSigner, signText } from '../ethers.service';
import {ChallengeDocument,AuthenticateDocument } from '../graphql/generated'
import { getAuthenticationToken, setAuthenticationToken } from '../state';



export const generateChallenge = (address: string) => {
  return apolloClient.query({
    query: ChallengeDocument,
    variables: {
      request: {
         address,
      },
    }
  });
};

const authenticate = (address: string, signature: string) => {
  return apolloClient.mutate({
    mutation: AuthenticateDocument,
    variables: {
      request: {
        address,
        signature,
      },
    }
   
  });
};

export const login = async (address = getAddressFromSigner()) => {
  if (getAuthenticationToken()) {
    console.log('login: already logged in');
    return;
  }

  console.log('login: address', address);

  // we request a challenge from the server
  const challengeResponse = await generateChallenge(address);

  // sign the text with the wallet
  const signature = await signText(challengeResponse.data.challenge.text);

  const accessTokens = await authenticate(address, signature);
  console.log('login: result', accessTokens.data);
  setAuthenticationToken(accessTokens.data!.authenticate.accessToken);

  return accessTokens.data;
};

(async () => {
  if (argsBespokeInit()) {
    await login();
  }
})();
