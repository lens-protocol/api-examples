import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { FeedRequest, ProfileFeedDocument } from '../graphql/generated';

const getProfileFeedRequest = async (request: FeedRequest) => {
  const result = await apolloClient.query({
    query: ProfileFeedDocument,
    variables: {
      request,
    },
  });

  return result.data.feed;
};

export const profileFeed = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('profile feed: address', address);

  await login(address);

  const result = await getProfileFeedRequest({ profileId, limit: 50 });
  console.log('profile feed: result', result);

  return result;
};

(async () => {
  await profileFeed();
})();
