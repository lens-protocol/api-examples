import { BigNumber, utils } from 'ethers';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { PROFILE_ID } from '../config';
import { getAddressFromSigner, signedTypeData, splitSignature } from '../ethers.service';
import { CreateMirrorRequest, CreateMirrorTypedDataDocument } from '../graphql/generated';
import { pollUntilIndexed } from '../indexer/has-transaction-been-indexed';
import { lensHub } from '../lens-hub';

const createMirrorTypedData = async (request: CreateMirrorRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateMirrorTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data!.createMirrorTypedData;
};

export const createMirror = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('create mirror: address', address);

  await login(address);

  // hard coded to make the code example clear
  const createMirrorRequest = {
    profileId,
    // remember it has to be indexed and follow metadata standards to be traceable!
    publicationId: '0x0f-0x01',
    referenceModule: {
      followerOnlyReferenceModule: false,
    },
  };

  const result = await createMirrorTypedData(createMirrorRequest);
  console.log('create mirror: createMirrorTypedData', result);

  const typedData = result.typedData;
  console.log('create mirror: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('create mirror: signature', signature);

  const { v, r, s } = splitSignature(signature);

  const tx = await lensHub.mirrorWithSig({
    profileId: typedData.value.profileId,
    profileIdPointed: typedData.value.profileIdPointed,
    pubIdPointed: typedData.value.pubIdPointed,
    referenceModuleData: typedData.value.referenceModuleData,
    referenceModule: typedData.value.referenceModule,
    referenceModuleInitData: typedData.value.referenceModuleInitData,
    sig: {
      v,
      r,
      s,
      deadline: typedData.value.deadline,
    },
  });
  console.log('create mirror: tx hash', tx.hash);

  console.log('create mirror: poll until indexed');
  const indexedResult = await pollUntilIndexed(tx.hash);

  console.log('create mirror: profile has been indexed', result);

  const logs = indexedResult.txReceipt!.logs;

  console.log('create mirror: logs', logs);

  const topicId = utils.id(
    'MirrorCreated(uint256,uint256,uint256,uint256,bytes,address,bytes,uint256)'
  );
  console.log('topicid we care about', topicId);

  const profileCreatedLog = logs.find((l: any) => l.topics[0] === topicId);
  console.log('create mirror: created log', profileCreatedLog);

  let profileCreatedEventLog = profileCreatedLog!.topics;
  console.log('create mirror: created event logs', profileCreatedEventLog);

  const publicationId = utils.defaultAbiCoder.decode(['uint256'], profileCreatedEventLog[2])[0];

  console.log(
    'create mirror: contract publication id',
    BigNumber.from(publicationId).toHexString()
  );
  console.log(
    'create mirror: internal publication id',
    profileId + '-' + BigNumber.from(publicationId).toHexString()
  );

  return result;
};

(async () => {
  await createMirror();
})();
