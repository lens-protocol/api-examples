import { BigNumber, utils } from 'ethers';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { ethersProvider, getAddressFromSigner } from '../ethers.service';
import {
  CreateProfileWithHandleDocument,
  CreateProfileWithHandleRequest,
} from '../graphql/generated';
import { waitUntilComplete } from '../indexer/has-transaction-been-indexed';

const createProfileWithHandleRequest = async (request: CreateProfileWithHandleRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateProfileWithHandleDocument,
    variables: {
      request,
    },
  });

  return result.data!.createProfileWithHandle;
};

export const createProfile = async () => {
  const address = getAddressFromSigner();
  console.log('create profile with handle: address', address);

  await login(address);

  const result = await createProfileWithHandleRequest({
    handle: new Date().getTime().toString(),
    to: address,
  });

  console.log('create profile with handle: result', result);

  if (result.__typename !== 'RelaySuccess') {
    console.error(`${result}: failed`, result);
    throw new Error(`${result}: failed`);
  }

  console.log(`${result}: poll until indexed`);
  const indexedResult = await waitUntilComplete({ txId: result.txId });
  console.log(`${result}: has been indexed`, indexedResult);

  console.log(`${result}: complete`);

  console.log('create profile: profile has been indexed', result);

  const txReceipt = await ethersProvider.getTransactionReceipt(result.txHash);

  const logs = txReceipt.logs;

  console.log('create profile: logs', logs);

  const topicId = utils.id(
    'ProfileCreated(uint256,address,address,string,string,address,bytes,string,uint256)'
  );
  console.log('created profile: topicid we care about', topicId);

  const profileCreatedLog = logs.find((l: any) => l.topics[0] === topicId);
  console.log('created profile: profile created log', profileCreatedLog);

  let profileCreatedEventLog = profileCreatedLog!.topics;
  console.log('created profile: profile created event logs', profileCreatedEventLog);

  const profileId = utils.defaultAbiCoder.decode(['uint256'], profileCreatedEventLog[1])[0];

  console.log('created profile: profile id', BigNumber.from(profileId).toHexString());
};

(async () => {
  await createProfile();
})();
