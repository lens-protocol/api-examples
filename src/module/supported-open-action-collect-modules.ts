import { apolloClient } from '../apollo-client';
import { SupportedOpenActionCollectModulesDocument } from '../graphql/generated';

const getSupportedOpenActionCollectModules = async () => {
  const result = await apolloClient.query({
    query: SupportedOpenActionCollectModulesDocument,
    variables: {
      request: {},
    },
  });

  return result.data.supportedOpenActionCollectModules;
};

// This currently does not work due to postgres syntax error
const supportedOpenActionCollectModules = async () => {
  const result = await getSupportedOpenActionCollectModules();

  console.log('supported open action collect modules', result);

  return result;
};

(async function () {
  await supportedOpenActionCollectModules();
})();
