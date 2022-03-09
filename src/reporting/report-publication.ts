import { gql } from '@apollo/client/core';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { getAddressFromSigner } from '../ethers.service';

const REPORT_PUBLICATION = `
  mutation($request: ReportPublicationRequest!) { 
   reportPublication(request: $request)
 }
`;

// TODO sort types
const reportPublicationRequest = (reportPublicationParams: any) => {
  return apolloClient.mutate({
    mutation: gql(REPORT_PUBLICATION),
    variables: {
      request: reportPublicationParams,
    },
  });
};

export const reportPublication = async () => {
  const address = getAddressFromSigner();
  console.log('report publication: address', address);

  await login(address);

  await reportPublicationRequest({
    publicationId: '0x032f1a-0x07',
    reason: {
      sensitiveReason: {
        reason: 'SENSITIVE',
        subreason: 'OFFENSIVE',
      },
    },
    additionalComments: 'Testing report!',
  });

  console.log('report publication: sucess');
};

(async () => {
  await reportPublication();
})();
