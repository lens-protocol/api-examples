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
    publicationId: '0x0f-0x01',
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
