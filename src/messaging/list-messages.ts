import { gql } from '@apollo/client/core';
import { Client } from '@xmtp/xmtp-js';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { getAddressFromSigner, getSigner } from '../ethers.service';
import { prettyJSON } from '../helpers';

const GET_PROFILE = `
  query($request: SingleProfileQueryRequest!) {
    profile(request: $request) {
        id
        ownedBy
    }
  }
`;

export interface ProfileRequest {
  profileId?: string;
  handle?: string;
}

const getProfileRequest = (request: ProfileRequest) => {
  return apolloClient.query({
    query: gql(GET_PROFILE),
    variables: {
      request,
    },
  });
};

export const messages = async (profileId: string = '0x4814') => {
  const address = getAddressFromSigner();
  const signer = getSigner();

  await login(address);

  const request = { profileId };

  const profile = await getProfileRequest(request);

  prettyJSON('profile: owner', profile.data.profile.ownedBy);

  const client = await Client.create(signer);
  const convo = await client.conversations.newConversation(profile.data.profile.ownedBy);
  const messages = await convo.messages();

  prettyJSON('conversation: messages', messages.map((msg) => msg.content as string).join('\n'));

  return messages;
};

(async () => {
  await messages();
})();
