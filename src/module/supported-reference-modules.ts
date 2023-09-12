import { apolloClient } from '../apollo-client';
import { SupportedReferenceModulesDocument } from '../graphql/generated';

const getSupportedReferenceModules = async () => {
  const result = await apolloClient.query({
    query: SupportedReferenceModulesDocument,
    variables: {
      request: {},
    },
  });

  return result.data.supportedReferenceModules.items;
};

// This currently does not work due to postgres syntax error
const supportedReferenceModules = async () => {
  const result = await getSupportedReferenceModules();

  console.log(`supported reference modules: ${result.length}`);

  return result;
};

(async function () {
  await supportedReferenceModules();
})();
