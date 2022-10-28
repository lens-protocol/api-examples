import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { TimelineDocument, TimelineRequest } from '../graphql/generated';

/**
 * THIS WILL BE REMOVED ON NOVEMBER 15TH!
 * @param request The request!
 */

const getTimelineRequest = async (request: TimelineRequest) => {
  const result = await apolloClient.query({
    query: TimelineDocument,
    variables: {
      request,
    },
  });

  return result.data.timeline;
};

export const timeline = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('timeline: address', address);

  await login(address);

  const result = await getTimelineRequest({ profileId });
  console.log('ping: result', result);

  return result;
};

(async () => {
  await timeline();
})();
