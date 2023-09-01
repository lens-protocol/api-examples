import { EthersContractContextV5 } from 'ethereum-abi-types-generator';
import { BytesLike as Arrayish, BigNumber, BigNumberish, ContractTransaction } from 'ethers';

export type ContractContext = EthersContractContextV5<
  LensHub,
  LensHubMethodNames,
  LensHubEventsContext,
  LensHubEvents
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
export type LensHubEvents = 'Approval' | 'ApprovalForAll' | 'Transfer';
export interface LensHubEventsContext {
  Approval(...parameters: any): EventFilter;
  ApprovalForAll(...parameters: any): EventFilter;
  Transfer(...parameters: any): EventFilter;
}
export type LensHubMethodNames =
  | 'new'
  | 'DANGER__disableTokenGuardian'
  | 'act'
  | 'actWithSig'
  | 'approve'
  | 'balanceOf'
  | 'batchMigrateFollowModules'
  | 'batchMigrateFollowers'
  | 'batchMigrateFollows'
  | 'batchMigrateProfiles'
  | 'burn'
  | 'changeDelegatedExecutorsConfig'
  | 'changeDelegatedExecutorsConfig'
  | 'changeDelegatedExecutorsConfigWithSig'
  | 'collect'
  | 'collectWithSig'
  | 'comment'
  | 'commentWithSig'
  | 'createProfile'
  | 'emitCollectNFTTransferEvent'
  | 'emitUnfollowedEvent'
  | 'enableTokenGuardian'
  | 'exists'
  | 'follow'
  | 'followWithSig'
  | 'getActionModuleById'
  | 'getActionModuleWhitelistData'
  | 'getApproved'
  | 'getCollectNFTImpl'
  | 'getContentURI'
  | 'getDelegatedExecutorsConfigNumber'
  | 'getDelegatedExecutorsMaxConfigNumberSet'
  | 'getDelegatedExecutorsPrevConfigNumber'
  | 'getDomainSeparator'
  | 'getFollowNFTImpl'
  | 'getGovernance'
  | 'getProfile'
  | 'getProfileIdByHandleHash'
  | 'getPublication'
  | 'getPublicationType'
  | 'getState'
  | 'getTokenGuardianDisablingTimestamp'
  | 'isApprovedForAll'
  | 'isBlocked'
  | 'isDelegatedExecutorApproved'
  | 'isDelegatedExecutorApproved'
  | 'isFollowModuleWhitelisted'
  | 'isFollowing'
  | 'isProfileCreatorWhitelisted'
  | 'isReferenceModuleWhitelisted'
  | 'mintTimestampOf'
  | 'mirror'
  | 'mirrorWithSig'
  | 'name'
  | 'nonces'
  | 'ownerOf'
  | 'post'
  | 'postWithSig'
  | 'quote'
  | 'quoteWithSig'
  | 'royaltyInfo'
  | 'safeTransferFrom'
  | 'safeTransferFrom'
  | 'setApprovalForAll'
  | 'setBlockStatus'
  | 'setBlockStatusWithSig'
  | 'setEmergencyAdmin'
  | 'setFollowModule'
  | 'setFollowModuleWithSig'
  | 'setGovernance'
  | 'setMigrationAdmins'
  | 'setProfileMetadataURI'
  | 'setProfileMetadataURIWithSig'
  | 'setRoyalty'
  | 'setState'
  | 'supportsInterface'
  | 'symbol'
  | 'tokenDataOf'
  | 'tokenURI'
  | 'totalSupply'
  | 'transferFrom'
  | 'unfollow'
  | 'unfollowWithSig'
  | 'whitelistActionModule'
  | 'whitelistFollowModule'
  | 'whitelistProfileCreator'
  | 'whitelistReferenceModule';
export interface MigrationParamsRequest {
  lensHandlesAddress: string;
  tokenHandleRegistryAddress: string;
  legacyFeeFollowModule: string;
  legacyProfileFollowModule: string;
  newFeeFollowModule: string;
  migrationAdmin: string;
}
export interface ApprovalEventEmittedResponse {
  owner: string;
  approved: string;
  tokenId: BigNumberish;
}
export interface ApprovalForAllEventEmittedResponse {
  owner: string;
  operator: string;
  approved: boolean;
}
export interface TransferEventEmittedResponse {
  from: string;
  to: string;
  tokenId: BigNumberish;
}
export interface PublicationActionParamsRequest {
  publicationActedProfileId: BigNumberish;
  publicationActedId: BigNumberish;
  actorProfileId: BigNumberish;
  referrerProfileIds: BigNumberish[];
  referrerPubIds: BigNumberish[];
  actionModuleAddress: string;
  actionModuleData: Arrayish;
}
export interface SignatureRequest {
  signer: string;
  v: BigNumberish;
  r: Arrayish;
  s: Arrayish;
  deadline: BigNumberish;
}
export interface CollectParamsRequest {
  publicationCollectedProfileId: BigNumberish;
  publicationCollectedId: BigNumberish;
  collectorProfileId: BigNumberish;
  referrerProfileId: BigNumberish;
  referrerPubId: BigNumberish;
  collectModuleData: Arrayish;
}
export interface CommentParamsRequest {
  profileId: BigNumberish;
  contentURI: string;
  pointedProfileId: BigNumberish;
  pointedPubId: BigNumberish;
  referrerProfileIds: BigNumberish[];
  referrerPubIds: BigNumberish[];
  referenceModuleData: Arrayish;
  actionModules: string[];
  actionModulesInitDatas: Arrayish[];
  referenceModule: string;
  referenceModuleInitData: Arrayish;
}
export interface CreateProfileParamsRequest {
  to: string;
  followModule: string;
  followModuleInitData: Arrayish;
}
export interface ActionmodulewhitelistdataResponse {
  id: BigNumber;
  0: BigNumber;
  isWhitelisted: boolean;
  1: boolean;
}
export interface ProfileResponse {
  pubCount: BigNumber;
  0: BigNumber;
  followModule: string;
  1: string;
  followNFT: string;
  2: string;
  __DEPRECATED__handle: string;
  3: string;
  __DEPRECATED__imageURI: string;
  4: string;
  __DEPRECATED__followNFTURI: string;
  5: string;
  metadataURI: string;
  6: string;
}
export interface PublicationResponse {
  pointedProfileId: BigNumber;
  0: BigNumber;
  pointedPubId: BigNumber;
  1: BigNumber;
  contentURI: string;
  2: string;
  referenceModule: string;
  3: string;
  __DEPRECATED__collectModule: string;
  4: string;
  __DEPRECATED__collectNFT: string;
  5: string;
  pubType: number;
  6: number;
  rootProfileId: BigNumber;
  7: BigNumber;
  rootPubId: BigNumber;
  8: BigNumber;
  enabledActionModulesBitmap: BigNumber;
  9: BigNumber;
}
export interface MirrorParamsRequest {
  profileId: BigNumberish;
  pointedProfileId: BigNumberish;
  pointedPubId: BigNumberish;
  referrerProfileIds: BigNumberish[];
  referrerPubIds: BigNumberish[];
  referenceModuleData: Arrayish;
}
export interface PostParamsRequest {
  profileId: BigNumberish;
  contentURI: string;
  actionModules: string[];
  actionModulesInitDatas: Arrayish[];
  referenceModule: string;
  referenceModuleInitData: Arrayish;
}
export interface QuoteParamsRequest {
  profileId: BigNumberish;
  contentURI: string;
  pointedProfileId: BigNumberish;
  pointedPubId: BigNumberish;
  referrerProfileIds: BigNumberish[];
  referrerPubIds: BigNumberish[];
  referenceModuleData: Arrayish;
  actionModules: string[];
  actionModulesInitDatas: Arrayish[];
  referenceModule: string;
  referenceModuleInitData: Arrayish;
}
export interface RoyaltyInfoResponse {
  result0: string;
  0: string;
  result1: BigNumber;
  1: BigNumber;
  length: 2;
}
export interface TokendataResponse {
  owner: string;
  0: string;
  mintTimestamp: BigNumber;
  1: BigNumber;
}
export interface LensHub {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: constructor
   * @param moduleGlobals Type: address, Indexed: false
   * @param followNFTImpl Type: address, Indexed: false
   * @param collectNFTImpl Type: address, Indexed: false
   * @param tokenGuardianCooldown Type: uint256, Indexed: false
   * @param migrationParams Type: tuple, Indexed: false
   */
  'new'(
    moduleGlobals: string,
    followNFTImpl: string,
    collectNFTImpl: string,
    tokenGuardianCooldown: BigNumberish,
    migrationParams: MigrationParamsRequest,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   */
  DANGER__disableTokenGuardian(
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param publicationActionParams Type: tuple, Indexed: false
   */
  act(
    publicationActionParams: PublicationActionParamsRequest,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param publicationActionParams Type: tuple, Indexed: false
   * @param signature Type: tuple, Indexed: false
   */
  actWithSig(
    publicationActionParams: PublicationActionParamsRequest,
    signature: SignatureRequest,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param to Type: address, Indexed: false
   * @param tokenId Type: uint256, Indexed: false
   */
  approve(
    to: string,
    tokenId: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param owner Type: address, Indexed: false
   */
  balanceOf(owner: string, overrides?: ContractCallOverrides): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param profileIds Type: uint256[], Indexed: false
   */
  batchMigrateFollowModules(
    profileIds: BigNumberish[],
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param followerProfileIds Type: uint256[], Indexed: false
   * @param idOfProfileFollowed Type: uint256, Indexed: false
   * @param followTokenIds Type: uint256[], Indexed: false
   */
  batchMigrateFollowers(
    followerProfileIds: BigNumberish[],
    idOfProfileFollowed: BigNumberish,
    followTokenIds: BigNumberish[],
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param followerProfileId Type: uint256, Indexed: false
   * @param idsOfProfileFollowed Type: uint256[], Indexed: false
   * @param followTokenIds Type: uint256[], Indexed: false
   */
  batchMigrateFollows(
    followerProfileId: BigNumberish,
    idsOfProfileFollowed: BigNumberish[],
    followTokenIds: BigNumberish[],
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param profileIds Type: uint256[], Indexed: false
   */
  batchMigrateProfiles(
    profileIds: BigNumberish[],
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param tokenId Type: uint256, Indexed: false
   */
  burn(
    tokenId: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param delegatorProfileId Type: uint256, Indexed: false
   * @param delegatedExecutors Type: address[], Indexed: false
   * @param approvals Type: bool[], Indexed: false
   * @param configNumber Type: uint64, Indexed: false
   * @param switchToGivenConfig Type: bool, Indexed: false
   */
  changeDelegatedExecutorsConfig(
    delegatorProfileId: BigNumberish,
    delegatedExecutors: string[],
    approvals: boolean[],
    configNumber: BigNumberish,
    switchToGivenConfig: boolean,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param delegatorProfileId Type: uint256, Indexed: false
   * @param delegatedExecutors Type: address[], Indexed: false
   * @param approvals Type: bool[], Indexed: false
   */
  changeDelegatedExecutorsConfig(
    delegatorProfileId: BigNumberish,
    delegatedExecutors: string[],
    approvals: boolean[],
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param delegatorProfileId Type: uint256, Indexed: false
   * @param delegatedExecutors Type: address[], Indexed: false
   * @param approvals Type: bool[], Indexed: false
   * @param configNumber Type: uint64, Indexed: false
   * @param switchToGivenConfig Type: bool, Indexed: false
   * @param signature Type: tuple, Indexed: false
   */
  changeDelegatedExecutorsConfigWithSig(
    delegatorProfileId: BigNumberish,
    delegatedExecutors: string[],
    approvals: boolean[],
    configNumber: BigNumberish,
    switchToGivenConfig: boolean,
    signature: SignatureRequest,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param collectParams Type: tuple, Indexed: false
   */
  collect(
    collectParams: CollectParamsRequest,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param collectParams Type: tuple, Indexed: false
   * @param signature Type: tuple, Indexed: false
   */
  collectWithSig(
    collectParams: CollectParamsRequest,
    signature: SignatureRequest,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param commentParams Type: tuple, Indexed: false
   */
  comment(
    commentParams: CommentParamsRequest,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param commentParams Type: tuple, Indexed: false
   * @param signature Type: tuple, Indexed: false
   */
  commentWithSig(
    commentParams: CommentParamsRequest,
    signature: SignatureRequest,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param createProfileParams Type: tuple, Indexed: false
   */
  createProfile(
    createProfileParams: CreateProfileParamsRequest,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param profileId Type: uint256, Indexed: false
   * @param pubId Type: uint256, Indexed: false
   * @param collectNFTId Type: uint256, Indexed: false
   * @param from Type: address, Indexed: false
   * @param to Type: address, Indexed: false
   */
  emitCollectNFTTransferEvent(
    profileId: BigNumberish,
    pubId: BigNumberish,
    collectNFTId: BigNumberish,
    from: string,
    to: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param unfollowerProfileId Type: uint256, Indexed: false
   * @param idOfProfileUnfollowed Type: uint256, Indexed: false
   * @param transactionExecutor Type: address, Indexed: false
   */
  emitUnfollowedEvent(
    unfollowerProfileId: BigNumberish,
    idOfProfileUnfollowed: BigNumberish,
    transactionExecutor: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   */
  enableTokenGuardian(overrides?: ContractTransactionOverrides): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param tokenId Type: uint256, Indexed: false
   */
  exists(tokenId: BigNumberish, overrides?: ContractCallOverrides): Promise<boolean>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param followerProfileId Type: uint256, Indexed: false
   * @param idsOfProfilesToFollow Type: uint256[], Indexed: false
   * @param followTokenIds Type: uint256[], Indexed: false
   * @param datas Type: bytes[], Indexed: false
   */
  follow(
    followerProfileId: BigNumberish,
    idsOfProfilesToFollow: BigNumberish[],
    followTokenIds: BigNumberish[],
    datas: Arrayish[],
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param followerProfileId Type: uint256, Indexed: false
   * @param idsOfProfilesToFollow Type: uint256[], Indexed: false
   * @param followTokenIds Type: uint256[], Indexed: false
   * @param datas Type: bytes[], Indexed: false
   * @param signature Type: tuple, Indexed: false
   */
  followWithSig(
    followerProfileId: BigNumberish,
    idsOfProfilesToFollow: BigNumberish[],
    followTokenIds: BigNumberish[],
    datas: Arrayish[],
    signature: SignatureRequest,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param id Type: uint256, Indexed: false
   */
  getActionModuleById(id: BigNumberish, overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param actionModule Type: address, Indexed: false
   */
  getActionModuleWhitelistData(
    actionModule: string,
    overrides?: ContractCallOverrides
  ): Promise<ActionmodulewhitelistdataResponse>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param tokenId Type: uint256, Indexed: false
   */
  getApproved(tokenId: BigNumberish, overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getCollectNFTImpl(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param profileId Type: uint256, Indexed: false
   * @param pubId Type: uint256, Indexed: false
   */
  getContentURI(
    profileId: BigNumberish,
    pubId: BigNumberish,
    overrides?: ContractCallOverrides
  ): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param delegatorProfileId Type: uint256, Indexed: false
   */
  getDelegatedExecutorsConfigNumber(
    delegatorProfileId: BigNumberish,
    overrides?: ContractCallOverrides
  ): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param delegatorProfileId Type: uint256, Indexed: false
   */
  getDelegatedExecutorsMaxConfigNumberSet(
    delegatorProfileId: BigNumberish,
    overrides?: ContractCallOverrides
  ): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param delegatorProfileId Type: uint256, Indexed: false
   */
  getDelegatedExecutorsPrevConfigNumber(
    delegatorProfileId: BigNumberish,
    overrides?: ContractCallOverrides
  ): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getDomainSeparator(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getFollowNFTImpl(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getGovernance(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param profileId Type: uint256, Indexed: false
   */
  getProfile(profileId: BigNumberish, overrides?: ContractCallOverrides): Promise<ProfileResponse>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param handleHash Type: bytes32, Indexed: false
   */
  getProfileIdByHandleHash(
    handleHash: Arrayish,
    overrides?: ContractCallOverrides
  ): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param profileId Type: uint256, Indexed: false
   * @param pubId Type: uint256, Indexed: false
   */
  getPublication(
    profileId: BigNumberish,
    pubId: BigNumberish,
    overrides?: ContractCallOverrides
  ): Promise<PublicationResponse>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param profileId Type: uint256, Indexed: false
   * @param pubId Type: uint256, Indexed: false
   */
  getPublicationType(
    profileId: BigNumberish,
    pubId: BigNumberish,
    overrides?: ContractCallOverrides
  ): Promise<number>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getState(overrides?: ContractCallOverrides): Promise<number>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param wallet Type: address, Indexed: false
   */
  getTokenGuardianDisablingTimestamp(
    wallet: string,
    overrides?: ContractCallOverrides
  ): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param owner Type: address, Indexed: false
   * @param operator Type: address, Indexed: false
   */
  isApprovedForAll(
    owner: string,
    operator: string,
    overrides?: ContractCallOverrides
  ): Promise<boolean>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param profileId Type: uint256, Indexed: false
   * @param byProfileId Type: uint256, Indexed: false
   */
  isBlocked(
    profileId: BigNumberish,
    byProfileId: BigNumberish,
    overrides?: ContractCallOverrides
  ): Promise<boolean>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param delegatorProfileId Type: uint256, Indexed: false
   * @param delegatedExecutor Type: address, Indexed: false
   */
  isDelegatedExecutorApproved(
    delegatorProfileId: BigNumberish,
    delegatedExecutor: string,
    overrides?: ContractCallOverrides
  ): Promise<boolean>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param delegatorProfileId Type: uint256, Indexed: false
   * @param delegatedExecutor Type: address, Indexed: false
   * @param configNumber Type: uint64, Indexed: false
   */
  isDelegatedExecutorApproved(
    delegatorProfileId: BigNumberish,
    delegatedExecutor: string,
    configNumber: BigNumberish,
    overrides?: ContractCallOverrides
  ): Promise<boolean>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param followModule Type: address, Indexed: false
   */
  isFollowModuleWhitelisted(
    followModule: string,
    overrides?: ContractCallOverrides
  ): Promise<boolean>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param followerProfileId Type: uint256, Indexed: false
   * @param followedProfileId Type: uint256, Indexed: false
   */
  isFollowing(
    followerProfileId: BigNumberish,
    followedProfileId: BigNumberish,
    overrides?: ContractCallOverrides
  ): Promise<boolean>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param profileCreator Type: address, Indexed: false
   */
  isProfileCreatorWhitelisted(
    profileCreator: string,
    overrides?: ContractCallOverrides
  ): Promise<boolean>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param referenceModule Type: address, Indexed: false
   */
  isReferenceModuleWhitelisted(
    referenceModule: string,
    overrides?: ContractCallOverrides
  ): Promise<boolean>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param tokenId Type: uint256, Indexed: false
   */
  mintTimestampOf(tokenId: BigNumberish, overrides?: ContractCallOverrides): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param mirrorParams Type: tuple, Indexed: false
   */
  mirror(
    mirrorParams: MirrorParamsRequest,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param mirrorParams Type: tuple, Indexed: false
   * @param signature Type: tuple, Indexed: false
   */
  mirrorWithSig(
    mirrorParams: MirrorParamsRequest,
    signature: SignatureRequest,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  name(overrides?: ContractCallOverrides): Promise<string>;
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
   * @param tokenId Type: uint256, Indexed: false
   */
  ownerOf(tokenId: BigNumberish, overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param postParams Type: tuple, Indexed: false
   */
  post(
    postParams: PostParamsRequest,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param postParams Type: tuple, Indexed: false
   * @param signature Type: tuple, Indexed: false
   */
  postWithSig(
    postParams: PostParamsRequest,
    signature: SignatureRequest,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param quoteParams Type: tuple, Indexed: false
   */
  quote(
    quoteParams: QuoteParamsRequest,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param quoteParams Type: tuple, Indexed: false
   * @param signature Type: tuple, Indexed: false
   */
  quoteWithSig(
    quoteParams: QuoteParamsRequest,
    signature: SignatureRequest,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param tokenId Type: uint256, Indexed: false
   * @param salePrice Type: uint256, Indexed: false
   */
  royaltyInfo(
    tokenId: BigNumberish,
    salePrice: BigNumberish,
    overrides?: ContractCallOverrides
  ): Promise<RoyaltyInfoResponse>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param from Type: address, Indexed: false
   * @param to Type: address, Indexed: false
   * @param tokenId Type: uint256, Indexed: false
   */
  safeTransferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param from Type: address, Indexed: false
   * @param to Type: address, Indexed: false
   * @param tokenId Type: uint256, Indexed: false
   * @param _data Type: bytes, Indexed: false
   */
  safeTransferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    _data: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param operator Type: address, Indexed: false
   * @param approved Type: bool, Indexed: false
   */
  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param byProfileId Type: uint256, Indexed: false
   * @param idsOfProfilesToSetBlockStatus Type: uint256[], Indexed: false
   * @param blockStatus Type: bool[], Indexed: false
   */
  setBlockStatus(
    byProfileId: BigNumberish,
    idsOfProfilesToSetBlockStatus: BigNumberish[],
    blockStatus: boolean[],
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param byProfileId Type: uint256, Indexed: false
   * @param idsOfProfilesToSetBlockStatus Type: uint256[], Indexed: false
   * @param blockStatus Type: bool[], Indexed: false
   * @param signature Type: tuple, Indexed: false
   */
  setBlockStatusWithSig(
    byProfileId: BigNumberish,
    idsOfProfilesToSetBlockStatus: BigNumberish[],
    blockStatus: boolean[],
    signature: SignatureRequest,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newEmergencyAdmin Type: address, Indexed: false
   */
  setEmergencyAdmin(
    newEmergencyAdmin: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param profileId Type: uint256, Indexed: false
   * @param followModule Type: address, Indexed: false
   * @param followModuleInitData Type: bytes, Indexed: false
   */
  setFollowModule(
    profileId: BigNumberish,
    followModule: string,
    followModuleInitData: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param profileId Type: uint256, Indexed: false
   * @param followModule Type: address, Indexed: false
   * @param followModuleInitData Type: bytes, Indexed: false
   * @param signature Type: tuple, Indexed: false
   */
  setFollowModuleWithSig(
    profileId: BigNumberish,
    followModule: string,
    followModuleInitData: Arrayish,
    signature: SignatureRequest,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newGovernance Type: address, Indexed: false
   */
  setGovernance(
    newGovernance: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param migrationAdmins Type: address[], Indexed: false
   * @param whitelisted Type: bool, Indexed: false
   */
  setMigrationAdmins(
    migrationAdmins: string[],
    whitelisted: boolean,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param profileId Type: uint256, Indexed: false
   * @param metadataURI Type: string, Indexed: false
   */
  setProfileMetadataURI(
    profileId: BigNumberish,
    metadataURI: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param profileId Type: uint256, Indexed: false
   * @param metadataURI Type: string, Indexed: false
   * @param signature Type: tuple, Indexed: false
   */
  setProfileMetadataURIWithSig(
    profileId: BigNumberish,
    metadataURI: string,
    signature: SignatureRequest,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param royaltiesInBasisPoints Type: uint256, Indexed: false
   */
  setRoyalty(
    royaltiesInBasisPoints: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newState Type: uint8, Indexed: false
   */
  setState(
    newState: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param interfaceId Type: bytes4, Indexed: false
   */
  supportsInterface(interfaceId: Arrayish, overrides?: ContractCallOverrides): Promise<boolean>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  symbol(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param tokenId Type: uint256, Indexed: false
   */
  tokenDataOf(tokenId: BigNumberish, overrides?: ContractCallOverrides): Promise<TokendataResponse>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param tokenId Type: uint256, Indexed: false
   */
  tokenURI(tokenId: BigNumberish, overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  totalSupply(overrides?: ContractCallOverrides): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param from Type: address, Indexed: false
   * @param to Type: address, Indexed: false
   * @param tokenId Type: uint256, Indexed: false
   */
  transferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param unfollowerProfileId Type: uint256, Indexed: false
   * @param idsOfProfilesToUnfollow Type: uint256[], Indexed: false
   */
  unfollow(
    unfollowerProfileId: BigNumberish,
    idsOfProfilesToUnfollow: BigNumberish[],
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param unfollowerProfileId Type: uint256, Indexed: false
   * @param idsOfProfilesToUnfollow Type: uint256[], Indexed: false
   * @param signature Type: tuple, Indexed: false
   */
  unfollowWithSig(
    unfollowerProfileId: BigNumberish,
    idsOfProfilesToUnfollow: BigNumberish[],
    signature: SignatureRequest,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param actionModule Type: address, Indexed: false
   * @param whitelist Type: bool, Indexed: false
   */
  whitelistActionModule(
    actionModule: string,
    whitelist: boolean,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param followModule Type: address, Indexed: false
   * @param whitelist Type: bool, Indexed: false
   */
  whitelistFollowModule(
    followModule: string,
    whitelist: boolean,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param profileCreator Type: address, Indexed: false
   * @param whitelist Type: bool, Indexed: false
   */
  whitelistProfileCreator(
    profileCreator: string,
    whitelist: boolean,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param referenceModule Type: address, Indexed: false
   * @param whitelist Type: bool, Indexed: false
   */
  whitelistReferenceModule(
    referenceModule: string,
    whitelist: boolean,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
}
