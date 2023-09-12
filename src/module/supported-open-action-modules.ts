import { apolloClient } from '../apollo-client';
import { SupportedOpenActionModulesDocument } from '../graphql/generated';

const getSupportedOpenActionModules = async () => {
  const result = await apolloClient.query({
    query: SupportedOpenActionModulesDocument,
    variables: {
      request: {},
    },
  });

  return result.data.supportedOpenActionModules.items;
};

// This currently does not work due to postgres syntax error
const supportedOpenActionModules = async () => {
  const result = await getSupportedOpenActionModules();

  console.log(`supported open action modules: ${result.length}`);

  return result;
};

(async function () {
  await supportedOpenActionModules();
})();
