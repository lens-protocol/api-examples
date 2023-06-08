import { TypedDataDomain } from '@ethersproject/abstract-signer';
import { ethers, utils, Wallet } from 'ethers';
import { MUMBAI_RPC_URL, PK } from './config';
import { omit } from './helpers';

export const ethersProvider = new ethers.providers.JsonRpcProvider(MUMBAI_RPC_URL);

export const getSigner = () => {
  return new Wallet(PK, ethersProvider);
};

export const getAddressFromSigner = () => {
  return getSigner().address;
};

export const signedTypeData = async (
  domain: TypedDataDomain,
  types: Record<string, any>,
  value: Record<string, any>
) => {
  const signer = getSigner();

  // remove the __typedname from the signature!
  const result = await signer._signTypedData(
    omit(domain, '__typename'),
    omit(types, '__typename'),
    omit(value, '__typename')
  );

  // console.log('typed data - domain', omit(domain, '__typename'));
  // console.log('typed data - types', omit(types, '__typename'));
  // console.log('typed data - value', omit(value, '__typename'));
  // console.log('typed data - signature', result);

  // const whoSigned = utils.verifyTypedData(
  //   omit(domain, '__typename'),
  //   omit(types, '__typename'),
  //   omit(value, '__typename'),
  //   result
  // );
  // console.log('who signed', whoSigned);

  return result;
};

export const splitSignature = (signature: string) => {
  return utils.splitSignature(signature);
};

export const sendTx = (
  transaction: ethers.utils.Deferrable<ethers.providers.TransactionRequest>
) => {
  const signer = getSigner();
  return signer.sendTransaction(transaction);
};

export const signText = (text: string) => {
  return getSigner().signMessage(text);
};
