import { checkDAProof, Environment, EthereumNode } from '@lens-protocol/data-availability-verifier';
import { MUMBAI_RPC_URL } from './config';

const ethereumNode: EthereumNode = {
  environment: Environment.MUMBAI,
  nodeUrl: MUMBAI_RPC_URL,
};

export const checkProofs = async (proofId: string): Promise<boolean> => {
  const result = await checkDAProof(proofId, ethereumNode);
  if (result.isSuccess()) {
    console.log('proof valid', result.successResult!);
    return true;
  }

  // it failed!
  console.error('proof invalid do something', result.failure!);
  return false;
};
