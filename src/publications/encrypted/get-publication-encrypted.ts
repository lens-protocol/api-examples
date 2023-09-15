// TODO! NOT COMPLETE
// import { LensEnvironment, LensGatedSDK } from '@lens-protocol/sdk-gated';
// import {
//   PostCanDecryptArgs,
//   PublicationEncryptedDocument,
//   PublicationQueryRequest,
// } from '../../../graphql-v1/generated';
// import { apolloClient } from '../../apollo-client';
// import { ethersProvider, getSigner } from '../../ethers.service';
// import { knownPostId, knownProfileId } from '../../known-common-input-constants';

// const getPublicationRequest = async (
//   request: PublicationQueryRequest,
//   canDecryptArgs: PostCanDecryptArgs
// ) => {
//   const result = await apolloClient.query({
//     query: PublicationEncryptedDocument,
//     variables: {
//       request,
//       profileId: canDecryptArgs.profileId,
//     },
//   });

//   return result.data.publication;
// };

// export const getGatedPublication = async () => {
//   const result = await getPublicationRequest(
//     { publicationId: knownPostId },
//     { profileId: knownProfileId }
//   );

//   if (!result) {
//     console.error('publication not found, exiting...');
//     return;
//   }

//   console.log('publication: gated', result);
//   if (!result.canDecrypt.result) {
//     console.log('You cannot decrypt this publication, exiting...');
//     return;
//   }

//   // instantiate SDK and connect to Lit Network
//   const sdk = await LensGatedSDK.create({
//     provider: ethersProvider,
//     signer: getSigner(),
//     env: LensEnvironment.Mumbai,
//   });

//   const { decrypted: metadata } = await sdk.gated.decryptMetadata(result.metadata as any);

//   const decrypted = {
//     ...result,
//     metadata,
//   };
//   console.log('publication: decrypted', decrypted);
// };

// (async () => {
//   await getGatedPublication();
// })();
