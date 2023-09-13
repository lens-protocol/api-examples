import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { getAddressFromSigner } from '../ethers.service';
import { IsFollowedByMeDocument, ProfileRequest } from '../graphql/generated';
import { knownProfileId } from '../known-common-input-constants';

const isFollowedByMe = async (request: ProfileRequest) => {
  const result = await apolloClient.query({
    query: IsFollowedByMeDocument,
    variables: {
      request,
    },
  });

  return result.data.profile;
};

export const doesFollow = async () => {
  const address = getAddressFromSigner();
  console.log('profiles: address', address);

  await login(address);

  const result = await isFollowedByMe({
    profileId: knownProfileId,
  });
  console.log('does follow: result', result);

  return result;
};

(async () => {
  await doesFollow();
})();
