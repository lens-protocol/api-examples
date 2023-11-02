import { apolloClient } from '../apollo-client';
import { SupportedOpenActionModulesDocument } from '../graphql/generated';

const getSupportedOpenActionModules = async () => {
  const result = await apolloClient.query({
    query: SupportedOpenActionModulesDocument,
    variables: {
      request: {},
    },
  });

  return result.data.supportedOpenActionModules;
};

// This currently does not work due to postgres syntax error
const supportedOpenActionModules = async () => {
  const result = await getSupportedOpenActionModules();

  console.log('supported open action modules:', result);

  return result;
};

(async function () {
  await supportedOpenActionModules();
})();
