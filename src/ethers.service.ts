import {
  TypedDataDomain,
  TypedDataField,
} from '@ethersproject/abstract-signer';
import { ethers, utils, Wallet } from 'ethers';
// @ts-ignore
import omitDeep from 'omit-deep';
import { ETHEREUM_RPC_URL, PK } from './config';

export const ethersProvider = new ethers.providers.JsonRpcProvider(
  ETHEREUM_RPC_URL
);

export const getSigner = () => {
  return new Wallet(PK, ethersProvider);
};

export const getAddressFromSigner = () => {
  return getSigner().address;
};

export const signedTypeData = (
  domain: TypedDataDomain,
  types: Record<string, TypedDataField[]>,
  value: Record<string, any>
) => {
  const signer = getSigner();
  // remove the __typedname from the signature!
  return signer._signTypedData(
    omitDeep(domain, '__typename'),
    omitDeep(types, '__typename'),
    omitDeep(value, '__typename')
  );
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
