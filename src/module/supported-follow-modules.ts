import { apolloClient } from '../apollo-client';
import { SupportedFollowModulesDocument, SupportedModulesRequest } from '../graphql/generated';

const getSupportedFollowModules = async () => {
  const result = await apolloClient.query({
    query: SupportedFollowModulesDocument,
    variables: {
      request: {},
    },
  });

  return result.data.supportedFollowModules.items;
};

// This currently does not work due to postgres syntax error
const supportedFollowModules = async () => {
  const result = await getSupportedFollowModules();

  console.log(`supported follow modules: ${result.length}`);

  return result;
};

(async function () {
  await supportedFollowModules();
})();
