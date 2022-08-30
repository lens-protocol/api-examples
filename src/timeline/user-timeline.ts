
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';


import {TimelineDocument } from '../graphql/generated'

const getTimelineRequest = (profileId: string) => {
  return apolloClient.query({
    query: TimelineDocument,
    variables: {
      request: {
        profileId,
        limit: 10,
      },
    },
  });
};

export const timeline = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('timeline: address', address);

  await login(address);

  const result = await getTimelineRequest(profileId);
  console.log('ping: result', result.data);

  return result.data;
};

(async () => {
  await timeline();
})();
