import { EthersContractContextV5 } from 'ethereum-abi-types-generator';
import { BytesLike as Arrayish, BigNumber, BigNumberish, ContractTransaction } from 'ethers';

export type ContractContext = EthersContractContextV5<
  LensTokenHandleRegistry,
  LensTokenHandleRegistryMethodNames,
  LensTokenHandleRegistryEventsContext,
  LensTokenHandleRegistryEvents
>;

export declare type EventFilter = {
  address?: string;
  topics?: Array<string>;
  fromBlock?: string | number;
  toBlock?: string | number;
};

export interface ContractTransactionOverrides {
  /**
   * The maximum units of gas for the transaction to use
   */
  gasLimit?: number;
  /**
   * The price (in wei) per unit of gas
   */
  gasPrice?: BigNumber | string | number | Promise<any>;
  /**
   * The nonce to use in the transaction
   */
  nonce?: number;
  /**
   * The amount to send with the transaction (i.e. msg.value)
   */
  value?: BigNumber | string | number | Promise<any>;
  /**
   * The chain ID (or network ID) to use
   */
  chainId?: number;
}

export interface ContractCallOverrides {
  /**
   * The address to execute the call as
   */
  from?: string;
  /**
   * The maximum units of gas for the transaction to use
   */
  gasLimit?: number;
}
export type LensTokenHandleRegistryEvents = undefined;
export interface LensTokenHandleRegistryEventsContext {}
export type LensTokenHandleRegistryMethodNames =
  | 'new'
  | 'getDefaultHandle'
  | 'link'
  | 'linkWithSig'
  | 'migrationLink'
  | 'nonces'
  | 'resolve'
  | 'unlink'
  | 'unlinkWithSig';
export interface SignatureRequest {
  signer: string;
  v: BigNumberish;
  r: Arrayish;
  s: Arrayish;
  deadline: BigNumberish;
}
export interface LensTokenHandleRegistry {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: constructor
   * @param lensHub Type: address, Indexed: false
   * @param lensHandles Type: address, Indexed: false
   */
  'new'(
    lensHub: string,
    lensHandles: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param profileId Type: uint256, Indexed: false
   */
  getDefaultHandle(profileId: BigNumberish, overrides?: ContractCallOverrides): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param handleId Type: uint256, Indexed: false
   * @param profileId Type: uint256, Indexed: false
   */
  link(
    handleId: BigNumberish,
    profileId: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param handleId Type: uint256, Indexed: false
   * @param profileId Type: uint256, Indexed: false
   * @param signature Type: tuple, Indexed: false
   */
  linkWithSig(
    handleId: BigNumberish,
    profileId: BigNumberish,
    signature: SignatureRequest,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param handleId Type: uint256, Indexed: false
   * @param profileId Type: uint256, Indexed: false
   */
  migrationLink(
    handleId: BigNumberish,
    profileId: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param signer Type: address, Indexed: false
   */
  nonces(signer: string, overrides?: ContractCallOverrides): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param handleId Type: uint256, Indexed: false
   */
  resolve(handleId: BigNumberish, overrides?: ContractCallOverrides): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param handleId Type: uint256, Indexed: false
   * @param profileId Type: uint256, Indexed: false
   */
  unlink(
    handleId: BigNumberish,
    profileId: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param handleId Type: uint256, Indexed: false
   * @param profileId Type: uint256, Indexed: false
   * @param signature Type: tuple, Indexed: false
   */
  unlinkWithSig(
    handleId: BigNumberish,
    profileId: BigNumberish,
    signature: SignatureRequest,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
}
