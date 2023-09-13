import { apolloClient } from '../apollo-client';
import { ProfileManagersDocument } from '../graphql/generated';

(async function () {
  const ADDRESS = '0x54be3a794282c030b15e43ae2bb182e14c409c5e';

  const result = await apolloClient.query({
    query: ProfileManagersDocument,
    variables: {
      request: {
        for: ADDRESS,
      },
    },
  });

  console.log(`profile managers result (${ADDRESS}): ${result.data.profileManagers.items}`);
})();
