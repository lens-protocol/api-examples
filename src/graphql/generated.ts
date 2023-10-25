import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AppId: any;
  BlockchainData: any;
  BroadcastId: any;
  ChainId: any;
  ChallengeId: any;
  ContentEncryptionKey: any;
  CreateHandle: any;
  Cursor: any;
  DateTime: any;
  EncryptableDateTime: any;
  EncryptableMarkdown: any;
  EncryptableString: any;
  EncryptableTxHash: any;
  EncryptableURI: any;
  EncryptedPath: any;
  Ens: any;
  EvmAddress: any;
  Handle: any;
  ImageSizeTransform: any;
  Jwt: any;
  Locale: any;
  Markdown: any;
  MimeType: any;
  MomokaId: any;
  MomokaProof: any;
  NftGalleryId: any;
  NftGalleryName: any;
  Nonce: any;
  OnchainPublicationId: any;
  PoapEventId: any;
  ProfileId: any;
  PublicationId: any;
  Signature: any;
  TokenId: any;
  TxHash: any;
  TxId: any;
  URI: any;
  URL: any;
  UUID: any;
  UnixTimestamp: any;
  Void: any;
};

export type ActOnOpenActionInput = {
  multirecipientCollectOpenAction?: InputMaybe<Scalars['Boolean']>;
  simpleCollectOpenAction?: InputMaybe<Scalars['Boolean']>;
  unknownOpenAction?: InputMaybe<UnknownOpenActionActRedeemInput>;
};

/** The lens manager will only support FREE open action modules, if you want your unknown module allowed to be signless please contact us */
export type ActOnOpenActionLensManagerInput = {
  simpleCollectOpenAction?: InputMaybe<Scalars['Boolean']>;
  unknownOpenAction?: InputMaybe<UnknownOpenActionActRedeemInput>;
};

export type ActOnOpenActionLensManagerRequest = {
  actOn: ActOnOpenActionLensManagerInput;
  for: Scalars['PublicationId'];
  referrers?: InputMaybe<Array<OnchainReferrer>>;
};

export type ActOnOpenActionRequest = {
  actOn: ActOnOpenActionInput;
  for: Scalars['PublicationId'];
  referrers?: InputMaybe<Array<OnchainReferrer>>;
};

export type ActedNotification = {
  __typename?: 'ActedNotification';
  actions: Array<OpenActionProfileActed>;
  id: Scalars['UUID'];
  publication: AnyPublication;
};

/** Condition that checks if the given on-chain contract function returns true. It only supports view functions */
export type AdvancedContractCondition = {
  __typename?: 'AdvancedContractCondition';
  /** The contract ABI. Has to be in human readable single string format containing the signature of the function you want to call. See https://docs.ethers.org/v5/api/utils/abi/fragments/#human-readable-abi for more info */
  abi: Scalars['String'];
  /** The check to perform on the result of the function. In case of boolean outputs, "EQUALS" and "NOT_EQUALS" are supported. For BigNumber outputs, you can use every comparison option */
  comparison: ComparisonOperatorConditionType;
  /** The address and chain ID of the contract to call */
  contract: NetworkAddress;
  /** The name of the function to call. Must be included in the provided abi */
  functionName: Scalars['String'];
  /** ABI encoded function parameters. In order to represent the address of the person trying to decrypt, you *have* to use the string ":userAddress" as this param represents the decrypting user address. If a param is an array or tuple, it will be in stringified format. */
  params: Array<Scalars['String']>;
  /** The value to compare the result of the function against. Can be "true", "false" or a number in string format */
  value: Scalars['String'];
};

export type AlreadyInvitedCheckRequest = {
  for: Scalars['EvmAddress'];
};

export type Amount = {
  __typename?: 'Amount';
  /** The asset */
  asset: Asset;
  rate?: Maybe<FiatAmount>;
  /** Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal. */
  value: Scalars['String'];
};


export type AmountRateArgs = {
  request: RateRequest;
};

export type AmountInput = {
  /** The currency */
  currency: Scalars['EvmAddress'];
  /** Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal. */
  value: Scalars['String'];
};

export type AndCondition = {
  __typename?: 'AndCondition';
  criteria: Array<ThirdTierCondition>;
};

export type AnyPublication = Comment | Mirror | Post | Quote;

export type App = {
  __typename?: 'App';
  id: Scalars['AppId'];
};

export type ApprovedAllowanceAmountResult = {
  __typename?: 'ApprovedAllowanceAmountResult';
  allowance: Amount;
  moduleContract: NetworkAddress;
  moduleName: Scalars['String'];
};

export type ApprovedAuthentication = {
  __typename?: 'ApprovedAuthentication';
  authorizationId: Scalars['UUID'];
  browser?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  device?: Maybe<Scalars['String']>;
  expiresAt: Scalars['DateTime'];
  origin?: Maybe<Scalars['URI']>;
  os?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type ApprovedAuthenticationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
};

export type ApprovedModuleAllowanceAmountRequest = {
  currencies: Array<Scalars['EvmAddress']>;
  followModules?: InputMaybe<Array<FollowModuleType>>;
  openActionModules?: InputMaybe<Array<OpenActionModuleType>>;
  referenceModules?: InputMaybe<Array<ReferenceModuleType>>;
  unknownFollowModules?: InputMaybe<Array<Scalars['EvmAddress']>>;
  unknownOpenActionModules?: InputMaybe<Array<Scalars['EvmAddress']>>;
  unknownReferenceModules?: InputMaybe<Array<Scalars['EvmAddress']>>;
};

export type ArticleMetadataV3 = {
  __typename?: 'ArticleMetadataV3';
  appId?: Maybe<Scalars['AppId']>;
  attachments?: Maybe<Array<PublicationMetadataMedia>>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  content: Scalars['EncryptableMarkdown'];
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  locale: Scalars['Locale'];
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  tags?: Maybe<Array<Scalars['String']>>;
  /** The title of the article. Empty if not set. */
  title: Scalars['String'];
};

export type Asset = Erc20;

export type Audio = {
  __typename?: 'Audio';
  mimeType?: Maybe<Scalars['MimeType']>;
  uri: Scalars['URI'];
};

export type AudioMetadataV3 = {
  __typename?: 'AudioMetadataV3';
  appId?: Maybe<Scalars['AppId']>;
  asset: PublicationMetadataMediaAudio;
  attachments?: Maybe<Array<PublicationMetadataMedia>>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  /** Optional content. Empty if not set. */
  content: Scalars['EncryptableMarkdown'];
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  locale: Scalars['Locale'];
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  tags?: Maybe<Array<Scalars['String']>>;
  /** The title of the audio. Empty if not set. */
  title: Scalars['String'];
};

export type AuthChallengeResult = {
  __typename?: 'AuthChallengeResult';
  id: Scalars['ChallengeId'];
  /** The text that needs to be signed */
  text: Scalars['String'];
};

/** The authentication result */
export type AuthenticationResult = {
  __typename?: 'AuthenticationResult';
  /** The access token */
  accessToken: Scalars['Jwt'];
  /** The refresh token */
  refreshToken: Scalars['Jwt'];
};

export type BlockRequest = {
  profiles: Array<Scalars['ProfileId']>;
};

export type BroadcastMomokaResult = CreateMomokaPublicationResult | RelayError;

export type BroadcastRequest = {
  id: Scalars['BroadcastId'];
  signature: Scalars['Signature'];
};

export type CanDecryptResponse = {
  __typename?: 'CanDecryptResponse';
  extraDetails?: Maybe<Scalars['String']>;
  reasons?: Maybe<Array<DecryptFailReasonType>>;
  result: Scalars['Boolean'];
};

export type ChallengeRequest = {
  /** The profile ID to initiate a challenge - note if you do not pass this in you be logging in as a wallet and wont be able to use all the features */
  for?: InputMaybe<Scalars['ProfileId']>;
  /** The Ethereum address that will sign the challenge */
  signedBy: Scalars['EvmAddress'];
};

export type ChangeProfileManager = {
  action: ChangeProfileManagerActionType;
  address: Scalars['EvmAddress'];
};

export enum ChangeProfileManagerActionType {
  Add = 'ADD',
  Remove = 'REMOVE'
}

export type ChangeProfileManagersRequest = {
  /** if you define this true will enable it and false will disable it within the same tx as any other managers you are changing state for. Leave it blank if you do not want to change its current state */
  approveSignless?: InputMaybe<Scalars['Boolean']>;
  changeManagers?: InputMaybe<Array<ChangeProfileManager>>;
};

export type CheckingInMetadataV3 = {
  __typename?: 'CheckingInMetadataV3';
  address?: Maybe<PhysicalAddress>;
  appId?: Maybe<Scalars['AppId']>;
  attachments?: Maybe<Array<PublicationMetadataMedia>>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  /** Optional content. Empty if not set. */
  content: Scalars['EncryptableMarkdown'];
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  geographic?: Maybe<GeoLocation>;
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  locale: Scalars['Locale'];
  location: Scalars['EncryptableString'];
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export enum ClaimProfileStatusType {
  AlreadyClaimed = 'ALREADY_CLAIMED',
  ClaimFailed = 'CLAIM_FAILED',
  NotClaimed = 'NOT_CLAIMED'
}

/** Claim profile with handle error reason type */
export enum ClaimProfileWithHandleErrorReasonType {
  CanNotFreeText = 'CAN_NOT_FREE_TEXT',
  ClaimNotFound = 'CLAIM_NOT_FOUND',
  ClaimNotLinkedToWallet = 'CLAIM_NOT_LINKED_TO_WALLET',
  ClaimTimeExpired = 'CLAIM_TIME_EXPIRED',
  ContractExecuted = 'CONTRACT_EXECUTED',
  HandleAlreadyClaimed = 'HANDLE_ALREADY_CLAIMED',
  HandleAlreadyExists = 'HANDLE_ALREADY_EXISTS',
  HandleReserved = 'HANDLE_RESERVED'
}

export type ClaimProfileWithHandleErrorResult = {
  __typename?: 'ClaimProfileWithHandleErrorResult';
  reason: ClaimProfileWithHandleErrorReasonType;
};

export type ClaimProfileWithHandleRequest = {
  followModule?: InputMaybe<FollowModuleInput>;
  freeTextHandle?: InputMaybe<Scalars['CreateHandle']>;
  id?: InputMaybe<Scalars['String']>;
};

export type ClaimProfileWithHandleResult = ClaimProfileWithHandleErrorResult | RelaySuccess;

export type ClaimableProfilesResult = {
  __typename?: 'ClaimableProfilesResult';
  canMintProfileWithFreeTextHandle: Scalars['Boolean'];
  reserved: Array<ReservedClaimable>;
};

export type CollectActionModuleInput = {
  multirecipientCollectOpenAction?: InputMaybe<MultirecipientFeeCollectModuleInput>;
  simpleCollectOpenAction?: InputMaybe<SimpleCollectOpenActionModuleInput>;
};

export type CollectCondition = {
  __typename?: 'CollectCondition';
  publicationId: Scalars['PublicationId'];
  thisPublication: Scalars['Boolean'];
};

export enum CollectOpenActionModuleType {
  LegacyAaveFeeCollectModule = 'LegacyAaveFeeCollectModule',
  LegacyErc4626FeeCollectModule = 'LegacyERC4626FeeCollectModule',
  LegacyFeeCollectModule = 'LegacyFeeCollectModule',
  LegacyFreeCollectModule = 'LegacyFreeCollectModule',
  LegacyLimitedFeeCollectModule = 'LegacyLimitedFeeCollectModule',
  LegacyLimitedTimedFeeCollectModule = 'LegacyLimitedTimedFeeCollectModule',
  LegacyMultirecipientFeeCollectModule = 'LegacyMultirecipientFeeCollectModule',
  LegacyRevertCollectModule = 'LegacyRevertCollectModule',
  LegacySimpleCollectModule = 'LegacySimpleCollectModule',
  LegacyTimedFeeCollectModule = 'LegacyTimedFeeCollectModule',
  MultirecipientFeeCollectOpenActionModule = 'MultirecipientFeeCollectOpenActionModule',
  SimpleCollectOpenActionModule = 'SimpleCollectOpenActionModule',
  UnknownOpenActionModule = 'UnknownOpenActionModule'
}

export type Comment = {
  __typename?: 'Comment';
  by: Profile;
  commentOn: PrimaryPublication;
  createdAt: Scalars['DateTime'];
  firstComment?: Maybe<Comment>;
  hashtagsMentioned: Array<Scalars['String']>;
  id: Scalars['PublicationId'];
  isEncrypted: Scalars['Boolean'];
  isHidden: Scalars['Boolean'];
  metadata: PublicationMetadata;
  momoka?: Maybe<MomokaInfo>;
  openActionModules?: Maybe<Array<OpenActionModule>>;
  operations: PublicationOperations;
  profilesMentioned: Array<ProfileMentioned>;
  publishedOn?: Maybe<App>;
  referenceModule?: Maybe<ReferenceModule>;
  root: CommentablePublication;
  stats: PublicationStats;
  txHash?: Maybe<Scalars['TxHash']>;
};


export type CommentStatsArgs = {
  request?: InputMaybe<PublicationStatsInput>;
};

export type CommentNotification = {
  __typename?: 'CommentNotification';
  comment: Comment;
  id: Scalars['UUID'];
};

export enum CommentRankingFilterType {
  All = 'ALL',
  NoneRelevant = 'NONE_RELEVANT',
  Relevant = 'RELEVANT'
}

export type CommentablePublication = Post | Quote;

export enum ComparisonOperatorConditionType {
  Equal = 'EQUAL',
  GreaterThan = 'GREATER_THAN',
  GreaterThanOrEqual = 'GREATER_THAN_OR_EQUAL',
  LessThan = 'LESS_THAN',
  LessThanOrEqual = 'LESS_THAN_OR_EQUAL',
  NotEqual = 'NOT_EQUAL'
}

export type CreateActOnOpenActionBroadcastItemResult = {
  __typename?: 'CreateActOnOpenActionBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateActOnOpenActionEip712TypedData;
};

export type CreateActOnOpenActionEip712TypedData = {
  __typename?: 'CreateActOnOpenActionEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateActOnOpenActionEip712TypedDataTypes;
  /** The values */
  value: CreateActOnOpenActionEip712TypedDataValue;
};

export type CreateActOnOpenActionEip712TypedDataTypes = {
  __typename?: 'CreateActOnOpenActionEIP712TypedDataTypes';
  Act: Array<Eip712TypedDataField>;
};

export type CreateActOnOpenActionEip712TypedDataValue = {
  __typename?: 'CreateActOnOpenActionEIP712TypedDataValue';
  actionModuleAddress: Scalars['EvmAddress'];
  actionModuleData: Scalars['BlockchainData'];
  actorProfileId: Scalars['ProfileId'];
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  publicationActedId: Scalars['OnchainPublicationId'];
  publicationActedProfileId: Scalars['ProfileId'];
  referrerProfileIds: Array<Scalars['ProfileId']>;
  referrerPubIds: Array<Scalars['OnchainPublicationId']>;
};

export type CreateBlockProfilesBroadcastItemResult = {
  __typename?: 'CreateBlockProfilesBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateBlockProfilesEip712TypedData;
};

export type CreateBlockProfilesEip712TypedData = {
  __typename?: 'CreateBlockProfilesEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateBlockProfilesEip712TypedDataTypes;
  /** The values */
  value: CreateBlockProfilesEip712TypedDataValue;
};

export type CreateBlockProfilesEip712TypedDataTypes = {
  __typename?: 'CreateBlockProfilesEIP712TypedDataTypes';
  SetBlockStatus: Array<Eip712TypedDataField>;
};

export type CreateBlockProfilesEip712TypedDataValue = {
  __typename?: 'CreateBlockProfilesEIP712TypedDataValue';
  blockStatus: Array<Scalars['Boolean']>;
  byProfileId: Scalars['ProfileId'];
  deadline: Scalars['UnixTimestamp'];
  idsOfProfilesToSetBlockStatus: Array<Scalars['ProfileId']>;
  nonce: Scalars['Nonce'];
};

export type CreateChangeProfileManagersBroadcastItemResult = {
  __typename?: 'CreateChangeProfileManagersBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateChangeProfileManagersEip712TypedData;
};

export type CreateChangeProfileManagersEip712TypedData = {
  __typename?: 'CreateChangeProfileManagersEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateChangeProfileManagersEip712TypedDataTypes;
  /** The values */
  value: CreateChangeProfileManagersEip712TypedDataValue;
};

export type CreateChangeProfileManagersEip712TypedDataTypes = {
  __typename?: 'CreateChangeProfileManagersEIP712TypedDataTypes';
  ChangeDelegatedExecutorsConfig: Array<Eip712TypedDataField>;
};

export type CreateChangeProfileManagersEip712TypedDataValue = {
  __typename?: 'CreateChangeProfileManagersEIP712TypedDataValue';
  approvals: Array<Scalars['Boolean']>;
  configNumber: Scalars['Int'];
  deadline: Scalars['UnixTimestamp'];
  delegatedExecutors: Array<Scalars['EvmAddress']>;
  delegatorProfileId: Scalars['ProfileId'];
  nonce: Scalars['Nonce'];
  switchToGivenConfig: Scalars['Boolean'];
};

export type CreateFollowBroadcastItemResult = {
  __typename?: 'CreateFollowBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateFollowEip712TypedData;
};

/** The create follow eip 712 typed data */
export type CreateFollowEip712TypedData = {
  __typename?: 'CreateFollowEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateFollowEip712TypedDataTypes;
  /** The values */
  value: CreateFollowEip712TypedDataValue;
};

/** The create follow eip 712 typed data types */
export type CreateFollowEip712TypedDataTypes = {
  __typename?: 'CreateFollowEIP712TypedDataTypes';
  Follow: Array<Eip712TypedDataField>;
};

/** The create follow eip 712 typed data value */
export type CreateFollowEip712TypedDataValue = {
  __typename?: 'CreateFollowEIP712TypedDataValue';
  datas: Array<Scalars['BlockchainData']>;
  deadline: Scalars['UnixTimestamp'];
  followTokenIds: Array<Scalars['TokenId']>;
  followerProfileId: Scalars['ProfileId'];
  idsOfProfilesToFollow: Array<Scalars['ProfileId']>;
  nonce: Scalars['Nonce'];
};

export type CreateLegacyCollectBroadcastItemResult = {
  __typename?: 'CreateLegacyCollectBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateActOnOpenActionEip712TypedData;
};

export type CreateLinkHandleToProfileBroadcastItemResult = {
  __typename?: 'CreateLinkHandleToProfileBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateLinkHandleToProfileEip712TypedData;
};

export type CreateLinkHandleToProfileEip712TypedData = {
  __typename?: 'CreateLinkHandleToProfileEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateLinkHandleToProfileEip712TypedDataTypes;
  /** The values */
  value: CreateLinkHandleToProfileEip712TypedDataValue;
};

export type CreateLinkHandleToProfileEip712TypedDataTypes = {
  __typename?: 'CreateLinkHandleToProfileEIP712TypedDataTypes';
  Link: Array<Eip712TypedDataField>;
};

export type CreateLinkHandleToProfileEip712TypedDataValue = {
  __typename?: 'CreateLinkHandleToProfileEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  handleId: Scalars['TokenId'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
};

export type CreateMomokaCommentBroadcastItemResult = {
  __typename?: 'CreateMomokaCommentBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateMomokaCommentEip712TypedData;
};

export type CreateMomokaCommentEip712TypedData = {
  __typename?: 'CreateMomokaCommentEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateMomokaCommentEip712TypedDataTypes;
  /** The values */
  value: CreateMomokaCommentEip712TypedDataValue;
};

export type CreateMomokaCommentEip712TypedDataTypes = {
  __typename?: 'CreateMomokaCommentEIP712TypedDataTypes';
  Comment: Array<Eip712TypedDataField>;
};

export type CreateMomokaCommentEip712TypedDataValue = {
  __typename?: 'CreateMomokaCommentEIP712TypedDataValue';
  actionModules: Array<Scalars['EvmAddress']>;
  actionModulesInitDatas: Array<Scalars['BlockchainData']>;
  contentURI: Scalars['URI'];
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  pointedProfileId: Scalars['ProfileId'];
  pointedPubId: Scalars['OnchainPublicationId'];
  profileId: Scalars['ProfileId'];
  referenceModule: Scalars['EvmAddress'];
  referenceModuleData: Scalars['BlockchainData'];
  referenceModuleInitData: Scalars['BlockchainData'];
  referrerProfileIds: Array<Scalars['ProfileId']>;
  referrerPubIds: Array<Scalars['OnchainPublicationId']>;
};

export type CreateMomokaMirrorBroadcastItemResult = {
  __typename?: 'CreateMomokaMirrorBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateMomokaMirrorEip712TypedData;
};

export type CreateMomokaMirrorEip712TypedData = {
  __typename?: 'CreateMomokaMirrorEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateMomokaMirrorEip712TypedDataTypes;
  /** The values */
  value: CreateMomokaMirrorEip712TypedDataValue;
};

export type CreateMomokaMirrorEip712TypedDataTypes = {
  __typename?: 'CreateMomokaMirrorEIP712TypedDataTypes';
  Mirror: Array<Eip712TypedDataField>;
};

export type CreateMomokaMirrorEip712TypedDataValue = {
  __typename?: 'CreateMomokaMirrorEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  metadataURI: Scalars['String'];
  nonce: Scalars['Nonce'];
  pointedProfileId: Scalars['ProfileId'];
  pointedPubId: Scalars['OnchainPublicationId'];
  profileId: Scalars['ProfileId'];
  referenceModuleData: Scalars['BlockchainData'];
  referrerProfileIds: Array<Scalars['ProfileId']>;
  referrerPubIds: Array<Scalars['OnchainPublicationId']>;
};

export type CreateMomokaPostBroadcastItemResult = {
  __typename?: 'CreateMomokaPostBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateMomokaPostEip712TypedData;
};

export type CreateMomokaPostEip712TypedData = {
  __typename?: 'CreateMomokaPostEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateMomokaPostEip712TypedDataTypes;
  /** The values */
  value: CreateMomokaPostEip712TypedDataValue;
};

export type CreateMomokaPostEip712TypedDataTypes = {
  __typename?: 'CreateMomokaPostEIP712TypedDataTypes';
  Post: Array<Eip712TypedDataField>;
};

export type CreateMomokaPostEip712TypedDataValue = {
  __typename?: 'CreateMomokaPostEIP712TypedDataValue';
  actionModules: Array<Scalars['EvmAddress']>;
  actionModulesInitDatas: Array<Scalars['BlockchainData']>;
  contentURI: Scalars['URI'];
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
  referenceModule: Scalars['EvmAddress'];
  referenceModuleInitData: Scalars['BlockchainData'];
};

export type CreateMomokaPublicationResult = {
  __typename?: 'CreateMomokaPublicationResult';
  id: Scalars['PublicationId'];
  momokaId: Scalars['MomokaId'];
  proof: Scalars['MomokaProof'];
};

export type CreateMomokaQuoteBroadcastItemResult = {
  __typename?: 'CreateMomokaQuoteBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateMomokaQuoteEip712TypedData;
};

export type CreateMomokaQuoteEip712TypedData = {
  __typename?: 'CreateMomokaQuoteEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateMomokaQuoteEip712TypedDataTypes;
  /** The values */
  value: CreateMomokaQuoteEip712TypedDataValue;
};

export type CreateMomokaQuoteEip712TypedDataTypes = {
  __typename?: 'CreateMomokaQuoteEIP712TypedDataTypes';
  Quote: Array<Eip712TypedDataField>;
};

export type CreateMomokaQuoteEip712TypedDataValue = {
  __typename?: 'CreateMomokaQuoteEIP712TypedDataValue';
  actionModules: Array<Scalars['EvmAddress']>;
  actionModulesInitDatas: Array<Scalars['BlockchainData']>;
  contentURI: Scalars['URI'];
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  pointedProfileId: Scalars['ProfileId'];
  pointedPubId: Scalars['OnchainPublicationId'];
  profileId: Scalars['ProfileId'];
  referenceModule: Scalars['EvmAddress'];
  referenceModuleData: Scalars['BlockchainData'];
  referenceModuleInitData: Scalars['BlockchainData'];
  referrerProfileIds: Array<Scalars['ProfileId']>;
  referrerPubIds: Array<Scalars['OnchainPublicationId']>;
};

export type CreateOnchainCommentBroadcastItemResult = {
  __typename?: 'CreateOnchainCommentBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateOnchainCommentEip712TypedData;
};

export type CreateOnchainCommentEip712TypedData = {
  __typename?: 'CreateOnchainCommentEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateOnchainCommentEip712TypedDataTypes;
  /** The values */
  value: CreateOnchainCommentEip712TypedDataValue;
};

export type CreateOnchainCommentEip712TypedDataTypes = {
  __typename?: 'CreateOnchainCommentEIP712TypedDataTypes';
  Comment: Array<Eip712TypedDataField>;
};

export type CreateOnchainCommentEip712TypedDataValue = {
  __typename?: 'CreateOnchainCommentEIP712TypedDataValue';
  actionModules: Array<Scalars['EvmAddress']>;
  actionModulesInitDatas: Array<Scalars['BlockchainData']>;
  contentURI: Scalars['URI'];
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  pointedProfileId: Scalars['ProfileId'];
  pointedPubId: Scalars['OnchainPublicationId'];
  profileId: Scalars['ProfileId'];
  referenceModule: Scalars['EvmAddress'];
  referenceModuleData: Scalars['BlockchainData'];
  referenceModuleInitData: Scalars['BlockchainData'];
  referrerProfileIds: Array<Scalars['ProfileId']>;
  referrerPubIds: Array<Scalars['OnchainPublicationId']>;
};

export type CreateOnchainMirrorBroadcastItemResult = {
  __typename?: 'CreateOnchainMirrorBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateOnchainMirrorEip712TypedData;
};

export type CreateOnchainMirrorEip712TypedData = {
  __typename?: 'CreateOnchainMirrorEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateOnchainMirrorEip712TypedDataTypes;
  /** The values */
  value: CreateOnchainMirrorEip712TypedDataValue;
};

export type CreateOnchainMirrorEip712TypedDataTypes = {
  __typename?: 'CreateOnchainMirrorEIP712TypedDataTypes';
  Mirror: Array<Eip712TypedDataField>;
};

export type CreateOnchainMirrorEip712TypedDataValue = {
  __typename?: 'CreateOnchainMirrorEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  metadataURI: Scalars['String'];
  nonce: Scalars['Nonce'];
  pointedProfileId: Scalars['ProfileId'];
  pointedPubId: Scalars['OnchainPublicationId'];
  profileId: Scalars['ProfileId'];
  referenceModuleData: Scalars['BlockchainData'];
  referrerProfileIds: Array<Scalars['ProfileId']>;
  referrerPubIds: Array<Scalars['OnchainPublicationId']>;
};

export type CreateOnchainPostBroadcastItemResult = {
  __typename?: 'CreateOnchainPostBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateOnchainPostEip712TypedData;
};

export type CreateOnchainPostEip712TypedData = {
  __typename?: 'CreateOnchainPostEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateOnchainPostEip712TypedDataTypes;
  /** The values */
  value: CreateOnchainPostEip712TypedDataValue;
};

export type CreateOnchainPostEip712TypedDataTypes = {
  __typename?: 'CreateOnchainPostEIP712TypedDataTypes';
  Post: Array<Eip712TypedDataField>;
};

export type CreateOnchainPostEip712TypedDataValue = {
  __typename?: 'CreateOnchainPostEIP712TypedDataValue';
  actionModules: Array<Scalars['EvmAddress']>;
  actionModulesInitDatas: Array<Scalars['BlockchainData']>;
  contentURI: Scalars['URI'];
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
  referenceModule: Scalars['EvmAddress'];
  referenceModuleInitData: Scalars['BlockchainData'];
};

export type CreateOnchainQuoteBroadcastItemResult = {
  __typename?: 'CreateOnchainQuoteBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateOnchainQuoteEip712TypedData;
};

export type CreateOnchainQuoteEip712TypedData = {
  __typename?: 'CreateOnchainQuoteEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateOnchainQuoteEip712TypedDataTypes;
  /** The values */
  value: CreateOnchainQuoteEip712TypedDataValue;
};

export type CreateOnchainQuoteEip712TypedDataTypes = {
  __typename?: 'CreateOnchainQuoteEIP712TypedDataTypes';
  Quote: Array<Eip712TypedDataField>;
};

export type CreateOnchainQuoteEip712TypedDataValue = {
  __typename?: 'CreateOnchainQuoteEIP712TypedDataValue';
  actionModules: Array<Scalars['EvmAddress']>;
  actionModulesInitDatas: Array<Scalars['BlockchainData']>;
  contentURI: Scalars['URI'];
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  pointedProfileId: Scalars['ProfileId'];
  pointedPubId: Scalars['OnchainPublicationId'];
  profileId: Scalars['ProfileId'];
  referenceModule: Scalars['EvmAddress'];
  referenceModuleData: Scalars['BlockchainData'];
  referenceModuleInitData: Scalars['BlockchainData'];
  referrerProfileIds: Array<Scalars['ProfileId']>;
  referrerPubIds: Array<Scalars['OnchainPublicationId']>;
};

export type CreateOnchainSetProfileMetadataBroadcastItemResult = {
  __typename?: 'CreateOnchainSetProfileMetadataBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateOnchainSetProfileMetadataEip712TypedData;
};

export type CreateOnchainSetProfileMetadataEip712TypedData = {
  __typename?: 'CreateOnchainSetProfileMetadataEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateOnchainSetProfileMetadataEip712TypedDataTypes;
  /** The values */
  value: CreateOnchainSetProfileMetadataEip712TypedDataValue;
};

export type CreateOnchainSetProfileMetadataEip712TypedDataTypes = {
  __typename?: 'CreateOnchainSetProfileMetadataEIP712TypedDataTypes';
  SetProfileMetadataURI: Array<Eip712TypedDataField>;
};

export type CreateOnchainSetProfileMetadataEip712TypedDataValue = {
  __typename?: 'CreateOnchainSetProfileMetadataEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  metadataURI: Scalars['URI'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
};

export type CreateProfileRequest = {
  followModule?: InputMaybe<FollowModuleInput>;
  to: Scalars['EvmAddress'];
};

export enum CreateProfileWithHandleErrorReasonType {
  Failed = 'FAILED',
  HandleTaken = 'HANDLE_TAKEN'
}

export type CreateProfileWithHandleErrorResult = {
  __typename?: 'CreateProfileWithHandleErrorResult';
  reason: CreateProfileWithHandleErrorReasonType;
};

export type CreateProfileWithHandleRequest = {
  followModule?: InputMaybe<FollowModuleInput>;
  handle: Scalars['CreateHandle'];
  to: Scalars['EvmAddress'];
};

export type CreateProfileWithHandleResult = CreateProfileWithHandleErrorResult | RelaySuccess;

export type CreateSetFollowModuleBroadcastItemResult = {
  __typename?: 'CreateSetFollowModuleBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateSetFollowModuleEip712TypedData;
};

export type CreateSetFollowModuleEip712TypedData = {
  __typename?: 'CreateSetFollowModuleEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetFollowModuleEip712TypedDataTypes;
  /** The values */
  value: CreateSetFollowModuleEip712TypedDataValue;
};

export type CreateSetFollowModuleEip712TypedDataTypes = {
  __typename?: 'CreateSetFollowModuleEIP712TypedDataTypes';
  SetFollowModule: Array<Eip712TypedDataField>;
};

export type CreateSetFollowModuleEip712TypedDataValue = {
  __typename?: 'CreateSetFollowModuleEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  followModule: Scalars['EvmAddress'];
  followModuleInitData: Scalars['BlockchainData'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
};

export type CreateUnblockProfilesBroadcastItemResult = {
  __typename?: 'CreateUnblockProfilesBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateUnblockProfilesEip712TypedData;
};

export type CreateUnblockProfilesEip712TypedData = {
  __typename?: 'CreateUnblockProfilesEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateUnblockProfilesEip712TypedDataTypes;
  /** The values */
  value: CreateUnblockProfilesEip712TypedDataValue;
};

export type CreateUnblockProfilesEip712TypedDataTypes = {
  __typename?: 'CreateUnblockProfilesEIP712TypedDataTypes';
  SetBlockStatus: Array<Eip712TypedDataField>;
};

export type CreateUnblockProfilesEip712TypedDataValue = {
  __typename?: 'CreateUnblockProfilesEIP712TypedDataValue';
  blockStatus: Array<Scalars['Boolean']>;
  byProfileId: Scalars['ProfileId'];
  deadline: Scalars['UnixTimestamp'];
  idsOfProfilesToSetBlockStatus: Array<Scalars['ProfileId']>;
  nonce: Scalars['Nonce'];
};

export type CreateUnfollowBroadcastItemResult = {
  __typename?: 'CreateUnfollowBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateUnfollowEip712TypedData;
};

export type CreateUnfollowEip712TypedData = {
  __typename?: 'CreateUnfollowEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateUnfollowEip712TypedDataTypes;
  /** The values */
  value: CreateUnfollowEip712TypedDataValue;
};

export type CreateUnfollowEip712TypedDataTypes = {
  __typename?: 'CreateUnfollowEIP712TypedDataTypes';
  Unfollow: Array<Eip712TypedDataField>;
};

export type CreateUnfollowEip712TypedDataValue = {
  __typename?: 'CreateUnfollowEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  idsOfProfilesToUnfollow: Array<Scalars['ProfileId']>;
  nonce: Scalars['Nonce'];
  unfollowerProfileId: Scalars['ProfileId'];
};

export type CreateUnlinkHandleFromProfileBroadcastItemResult = {
  __typename?: 'CreateUnlinkHandleFromProfileBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateUnlinkHandleFromProfileEip712TypedData;
};

export type CreateUnlinkHandleFromProfileEip712TypedData = {
  __typename?: 'CreateUnlinkHandleFromProfileEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateUnlinkHandleFromProfileEip712TypedDataTypes;
  /** The values */
  value: CreateUnlinkHandleFromProfileEip712TypedDataValue;
};

export type CreateUnlinkHandleFromProfileEip712TypedDataTypes = {
  __typename?: 'CreateUnlinkHandleFromProfileEIP712TypedDataTypes';
  Unlink: Array<Eip712TypedDataField>;
};

export type CreateUnlinkHandleFromProfileEip712TypedDataValue = {
  __typename?: 'CreateUnlinkHandleFromProfileEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  handleId: Scalars['TokenId'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
};

export enum CustomFiltersType {
  Gardeners = 'GARDENERS'
}

export enum DecryptFailReasonType {
  CanNotDecrypt = 'CAN_NOT_DECRYPT',
  CollectNotFinalisedOnChain = 'COLLECT_NOT_FINALISED_ON_CHAIN',
  DoesNotFollowProfile = 'DOES_NOT_FOLLOW_PROFILE',
  DoesNotOwnNft = 'DOES_NOT_OWN_NFT',
  DoesNotOwnProfile = 'DOES_NOT_OWN_PROFILE',
  FollowNotFinalisedOnChain = 'FOLLOW_NOT_FINALISED_ON_CHAIN',
  HasNotCollectedPublication = 'HAS_NOT_COLLECTED_PUBLICATION',
  MissingEncryptionParams = 'MISSING_ENCRYPTION_PARAMS',
  NotLoggedIn = 'NOT_LOGGED_IN',
  ProfileDoesNotExist = 'PROFILE_DOES_NOT_EXIST',
  PublicationIsNotGated = 'PUBLICATION_IS_NOT_GATED',
  UnauthorizedAddress = 'UNAUTHORIZED_ADDRESS',
  UnauthorizedBalance = 'UNAUTHORIZED_BALANCE',
  Unsupported = 'UNSUPPORTED'
}

export type DefaultProfileRequest = {
  for: Scalars['EvmAddress'];
};

export type DegreesOfSeparationReferenceModuleInput = {
  commentsRestricted: Scalars['Boolean'];
  degreesOfSeparation: Scalars['Int'];
  mirrorsRestricted: Scalars['Boolean'];
  quotesRestricted: Scalars['Boolean'];
  /** You can set the degree to follow someone elses graph, if you leave blank it use your profile */
  sourceProfileId?: InputMaybe<Scalars['ProfileId']>;
};

export type DegreesOfSeparationReferenceModuleSettings = {
  __typename?: 'DegreesOfSeparationReferenceModuleSettings';
  /** Applied to comments */
  commentsRestricted: Scalars['Boolean'];
  contract: NetworkAddress;
  /** Degrees of separation */
  degreesOfSeparation: Scalars['Int'];
  /** Applied to mirrors */
  mirrorsRestricted: Scalars['Boolean'];
  /** Applied to quotes */
  quotesRestricted: Scalars['Boolean'];
  /** Who the degree of separation is applied to */
  sourceProfileId: Scalars['ProfileId'];
  type: ReferenceModuleType;
};

export type DismissRecommendedProfilesRequest = {
  dismiss: Array<Scalars['ProfileId']>;
};

/** The eip 712 typed data domain */
export type Eip712TypedDataDomain = {
  __typename?: 'EIP712TypedDataDomain';
  /** The chainId */
  chainId: Scalars['ChainId'];
  /** The name of the typed data domain */
  name: Scalars['String'];
  /** The verifying contract */
  verifyingContract: Scalars['EvmAddress'];
  /** The version */
  version: Scalars['String'];
};

/** The eip 712 typed data field */
export type Eip712TypedDataField = {
  __typename?: 'EIP712TypedDataField';
  /** The name of the typed data field */
  name: Scalars['String'];
  /** The type of the typed data field */
  type: Scalars['String'];
};

export type EmbedMetadataV3 = {
  __typename?: 'EmbedMetadataV3';
  appId?: Maybe<Scalars['AppId']>;
  attachments?: Maybe<Array<PublicationMetadataMedia>>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  /** Optional content. Empty if not set. */
  content: Scalars['EncryptableMarkdown'];
  contentWarning?: Maybe<PublicationContentWarningType>;
  embed: Scalars['EncryptableURI'];
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  locale: Scalars['Locale'];
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export type EncryptableAudio = {
  __typename?: 'EncryptableAudio';
  mimeType?: Maybe<Scalars['MimeType']>;
  uri: Scalars['EncryptableURI'];
};

export type EncryptableAudioSet = {
  __typename?: 'EncryptableAudioSet';
  optimized?: Maybe<Audio>;
  raw: EncryptableAudio;
};

export type EncryptableImage = {
  __typename?: 'EncryptableImage';
  /** Height of the image */
  height?: Maybe<Scalars['Int']>;
  /** MIME type of the image */
  mimeType?: Maybe<Scalars['MimeType']>;
  uri: Scalars['EncryptableURI'];
  /** Width of the image */
  width?: Maybe<Scalars['Int']>;
};

export type EncryptableImageSet = {
  __typename?: 'EncryptableImageSet';
  optimized?: Maybe<Image>;
  raw: EncryptableImage;
  transformed?: Maybe<Image>;
};


export type EncryptableImageSetTransformedArgs = {
  request: ImageTransform;
};

export type EncryptableVideo = {
  __typename?: 'EncryptableVideo';
  mimeType?: Maybe<Scalars['MimeType']>;
  uri: Scalars['EncryptableURI'];
};

export type EncryptableVideoSet = {
  __typename?: 'EncryptableVideoSet';
  optimized?: Maybe<Video>;
  raw: EncryptableVideo;
};

export type EnsOnchainIdentity = {
  __typename?: 'EnsOnchainIdentity';
  /** The default ens mapped to this address */
  name?: Maybe<Scalars['Ens']>;
};

export type EoaOwnershipCondition = {
  __typename?: 'EoaOwnershipCondition';
  address: Scalars['EvmAddress'];
};

/** The erc20 type */
export type Erc20 = {
  __typename?: 'Erc20';
  /** The erc20 address */
  contract: NetworkAddress;
  /** Decimal places for the token */
  decimals: Scalars['Int'];
  /** Name of the symbol */
  name: Scalars['String'];
  /** Symbol for the token */
  symbol: Scalars['String'];
};

export type Erc20OwnershipCondition = {
  __typename?: 'Erc20OwnershipCondition';
  amount: Amount;
  condition: ComparisonOperatorConditionType;
};

export type EventMetadataV3 = {
  __typename?: 'EventMetadataV3';
  address?: Maybe<PhysicalAddress>;
  appId?: Maybe<Scalars['AppId']>;
  attachments?: Maybe<Array<PublicationMetadataMedia>>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  endsAt: Scalars['EncryptableDateTime'];
  geographic?: Maybe<GeoLocation>;
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  links?: Maybe<Array<Scalars['EncryptableURI']>>;
  locale: Scalars['Locale'];
  location: Scalars['EncryptableString'];
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  startsAt: Scalars['EncryptableDateTime'];
  tags?: Maybe<Array<Scalars['String']>>;
};

/** Possible sort criteria for exploring profiles */
export enum ExploreProfilesOrderByType {
  CreatedOn = 'CREATED_ON',
  LatestCreated = 'LATEST_CREATED',
  MostCollects = 'MOST_COLLECTS',
  MostComments = 'MOST_COMMENTS',
  MostFollowers = 'MOST_FOLLOWERS',
  MostMirrors = 'MOST_MIRRORS',
  MostPosts = 'MOST_POSTS',
  MostPublication = 'MOST_PUBLICATION'
}

export type ExploreProfilesRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
  /** Order criteria for exploring profiles */
  orderBy: ExploreProfilesOrderByType;
  /** Filtering criteria for exploring profiles */
  where?: InputMaybe<ExploreProfilesWhere>;
};

export type ExploreProfilesWhere = {
  /** Array of custom filters for exploring profiles */
  customFilters?: InputMaybe<Array<CustomFiltersType>>;
  /** Filter profiles created since the specified timestamp */
  since?: InputMaybe<Scalars['UnixTimestamp']>;
};

export type ExplorePublication = Post | Quote;

export type ExplorePublicationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
  orderBy: ExplorePublicationsOrderByType;
  where?: InputMaybe<ExplorePublicationsWhere>;
};

export enum ExplorePublicationType {
  Post = 'POST',
  Quote = 'QUOTE'
}

export enum ExplorePublicationsOrderByType {
  Latest = 'LATEST',
  LensCurated = 'LENS_CURATED',
  TopCollectedOpenAction = 'TOP_COLLECTED_OPEN_ACTION',
  TopCommented = 'TOP_COMMENTED',
  TopMirrored = 'TOP_MIRRORED',
  TopQuoted = 'TOP_QUOTED'
}

export type ExplorePublicationsWhere = {
  customFilters?: InputMaybe<Array<CustomFiltersType>>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  publicationTypes?: InputMaybe<Array<ExplorePublicationType>>;
  since?: InputMaybe<Scalars['UnixTimestamp']>;
};

export type FeeFollowModuleInput = {
  amount: AmountInput;
  recipient: Scalars['EvmAddress'];
};

export type FeeFollowModuleRedeemInput = {
  amount: AmountInput;
};

export type FeeFollowModuleSettings = {
  __typename?: 'FeeFollowModuleSettings';
  /** The amount info */
  amount: Amount;
  contract: NetworkAddress;
  /** The module recipient address */
  recipient: Scalars['EvmAddress'];
  type: FollowModuleType;
};

export enum FeedEventItemType {
  Acted = 'ACTED',
  Collect = 'COLLECT',
  Comment = 'COMMENT',
  Mirror = 'MIRROR',
  Post = 'POST',
  Quote = 'QUOTE',
  Reaction = 'REACTION'
}

export type FeedHighlight = Post | Quote;

export type FeedHighlightsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
  where?: InputMaybe<FeedHighlightsWhere>;
};

export type FeedHighlightsWhere = {
  for?: InputMaybe<Scalars['ProfileId']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
};

export type FeedItem = {
  __typename?: 'FeedItem';
  acted: Array<OpenActionProfileActed>;
  comments: Array<Comment>;
  id: Scalars['String'];
  mirrors: Array<Mirror>;
  reactions: Array<ReactionEvent>;
  root: PrimaryPublication;
};

export type FeedRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  where?: InputMaybe<FeedWhere>;
};

export type FeedWhere = {
  feedEventItemTypes?: InputMaybe<Array<FeedEventItemType>>;
  for?: InputMaybe<Scalars['ProfileId']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
};

export type Fiat = {
  __typename?: 'Fiat';
  decimals: Scalars['Int'];
  name: Scalars['String'];
  symbol: Scalars['String'];
};

export type FiatAmount = {
  __typename?: 'FiatAmount';
  asset: Fiat;
  value: Scalars['String'];
};

export type Follow = {
  followModule?: InputMaybe<FollowModuleRedeemInput>;
  profileId: Scalars['ProfileId'];
};

export type FollowCondition = {
  __typename?: 'FollowCondition';
  follow: Scalars['ProfileId'];
};

export type FollowLensManager = {
  followModule?: InputMaybe<FollowLensManagerModuleRedeemInput>;
  profileId: Scalars['ProfileId'];
};

/** The lens manager will only support FREE follow modules, if you want your unknown module allowed to be signless please contact us */
export type FollowLensManagerModuleRedeemInput = {
  unknownFollowModule?: InputMaybe<UnknownFollowModuleRedeemInput>;
};

export type FollowLensManagerRequest = {
  follow: Array<FollowLensManager>;
};

export type FollowModule = FeeFollowModuleSettings | RevertFollowModuleSettings | UnknownFollowModuleSettings;

export type FollowModuleInput = {
  feeFollowModule?: InputMaybe<FeeFollowModuleInput>;
  freeFollowModule?: InputMaybe<Scalars['Boolean']>;
  revertFollowModule?: InputMaybe<Scalars['Boolean']>;
  unknownFollowModule?: InputMaybe<UnknownFollowModuleInput>;
};

export type FollowModuleRedeemInput = {
  feeFollowModule?: InputMaybe<FeeFollowModuleRedeemInput>;
  unknownFollowModule?: InputMaybe<UnknownFollowModuleRedeemInput>;
};

export enum FollowModuleType {
  FeeFollowModule = 'FeeFollowModule',
  RevertFollowModule = 'RevertFollowModule',
  UnknownFollowModule = 'UnknownFollowModule'
}

export type FollowNotification = {
  __typename?: 'FollowNotification';
  followers: Array<Profile>;
  id: Scalars['UUID'];
};

export type FollowOnlyReferenceModuleSettings = {
  __typename?: 'FollowOnlyReferenceModuleSettings';
  contract: NetworkAddress;
  type: ReferenceModuleType;
};

export type FollowRequest = {
  follow: Array<Follow>;
};

export type FollowRevenueRequest = {
  for: Scalars['ProfileId'];
};

export type FollowRevenueResult = {
  __typename?: 'FollowRevenueResult';
  revenues: Array<RevenueAggregate>;
};

export type FollowStatusBulk = {
  follower: Scalars['ProfileId'];
  profileId: Scalars['ProfileId'];
};

export type FollowStatusBulkRequest = {
  followInfos: Array<FollowStatusBulk>;
};

export type FollowStatusBulkResult = {
  __typename?: 'FollowStatusBulkResult';
  follower: Scalars['ProfileId'];
  profileId: Scalars['ProfileId'];
  status: OptimisticStatusResult;
};

export type FollowersRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
  of: Scalars['ProfileId'];
};

export type FollowingRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  for: Scalars['ProfileId'];
  limit?: InputMaybe<LimitType>;
};

export type FraudReasonInput = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingFraudSubreason;
};

export type GenerateModuleCurrencyApprovalDataRequest = {
  allowance: AmountInput;
  module: ModuleCurrencyApproval;
};

export type GenerateModuleCurrencyApprovalResult = {
  __typename?: 'GenerateModuleCurrencyApprovalResult';
  data: Scalars['BlockchainData'];
  from: Scalars['EvmAddress'];
  to: Scalars['EvmAddress'];
};

export type GeoLocation = {
  __typename?: 'GeoLocation';
  /** `null` when `rawURI` is encrypted */
  latitude?: Maybe<Scalars['Float']>;
  /** `null` when `rawURI` is encrypted */
  longitude?: Maybe<Scalars['Float']>;
  /** The raw Geo URI of the location. If encrypted `latitude` and `longitude` will be `null` */
  rawURI: Scalars['EncryptableURI'];
};

export type GetProfileMetadataArgs = {
  /** The app id to query the profile's metadata */
  appId?: InputMaybe<Scalars['AppId']>;
  /** If true, will fallback to global profile metadata, if there is no metadata set for that specific app id */
  useFallback?: InputMaybe<Scalars['Boolean']>;
};

export type HandleInfo = {
  __typename?: 'HandleInfo';
  /** The full handle - namespace/localname */
  fullHandle: Scalars['Handle'];
  /** The handle nft token id */
  id: Scalars['TokenId'];
  /** If null its not linked to anything */
  linkedTo?: Maybe<HandleLinkedTo>;
  /** The localname */
  localName: Scalars['String'];
  /** The namespace */
  namespace: Scalars['String'];
  ownedBy: Scalars['EvmAddress'];
  /** The suggested format to use on UI for ease but you can innovate and slice and dice as you want */
  suggestedFormatted: SuggestedFormattedHandle;
};

export type HandleLinkedTo = {
  __typename?: 'HandleLinkedTo';
  /** The contract address it is linked to */
  contract: NetworkAddress;
  /** The nft token id it is linked to (this can be the profile Id) */
  nftTokenId: Scalars['TokenId'];
};

export type HidePublicationRequest = {
  for: Scalars['PublicationId'];
};

export type IdKitPhoneVerifyWebhookRequest = {
  sharedSecret: Scalars['String'];
  worldcoin?: InputMaybe<WorldcoinPhoneVerifyWebhookRequest>;
};

export enum IdKitPhoneVerifyWebhookResultStatusType {
  AlreadyVerified = 'ALREADY_VERIFIED',
  Success = 'SUCCESS'
}

export type IllegalReasonInput = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingIllegalSubreason;
};

export type Image = {
  __typename?: 'Image';
  /** Height of the image */
  height?: Maybe<Scalars['Int']>;
  /** MIME type of the image */
  mimeType?: Maybe<Scalars['MimeType']>;
  uri: Scalars['URI'];
  /** Width of the image */
  width?: Maybe<Scalars['Int']>;
};

export type ImageMetadataV3 = {
  __typename?: 'ImageMetadataV3';
  appId?: Maybe<Scalars['AppId']>;
  asset: PublicationMetadataMediaImage;
  attachments?: Maybe<Array<PublicationMetadataMedia>>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  /** Optional content. Empty if not set. */
  content: Scalars['EncryptableMarkdown'];
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  locale: Scalars['Locale'];
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  tags?: Maybe<Array<Scalars['String']>>;
  /** The title of the image. Empty if not set. */
  title: Scalars['String'];
};

export type ImageSet = {
  __typename?: 'ImageSet';
  optimized?: Maybe<Image>;
  raw: Image;
  transformed?: Maybe<Image>;
};


export type ImageSetTransformedArgs = {
  request: ImageTransform;
};

export type ImageTransform = {
  /** Set the transformed image's height */
  height?: InputMaybe<Scalars['ImageSizeTransform']>;
  /** Set if you want to keep the image's original aspect ratio. True by default. If explicitly set to false, the image will stretch based on the width and height values. */
  keepAspectRatio?: InputMaybe<Scalars['Boolean']>;
  /** Set the transformed image's width */
  width?: InputMaybe<Scalars['ImageSizeTransform']>;
};

export type InternalAddCuratedTagRequest = {
  hhh: Scalars['String'];
  secret: Scalars['String'];
  ttt: Scalars['String'];
};

export type InternalAddInvitesRequest = {
  n: Scalars['Int'];
  p: Scalars['ProfileId'];
  secret: Scalars['String'];
};

export type InternalAllowDomainRequest = {
  domain: Scalars['URI'];
  secret: Scalars['String'];
};

export type InternalAllowedDomainsRequest = {
  secret: Scalars['String'];
};

export type InternalClaimRequest = {
  address: Scalars['EvmAddress'];
  freeTextHandle?: InputMaybe<Scalars['Boolean']>;
  handle?: InputMaybe<Scalars['CreateHandle']>;
  overrideAlreadyClaimed: Scalars['Boolean'];
  overrideTradeMark: Scalars['Boolean'];
  secret: Scalars['String'];
};

export type InternalClaimStatusRequest = {
  address: Scalars['EvmAddress'];
  secret: Scalars['String'];
};

export type InternalCuratedHandlesRequest = {
  secret: Scalars['String'];
};

export type InternalCuratedTagsRequest = {
  hhh: Scalars['String'];
  secret: Scalars['String'];
};

export type InternalCuratedUpdateRequest = {
  /** The full handle - namespace/localname */
  handle: Scalars['Handle'];
  remove: Scalars['Boolean'];
  secret: Scalars['String'];
};

export type InternalInvitesRequest = {
  p: Scalars['ProfileId'];
  secret: Scalars['String'];
};

export type InternalNftIndexRequest = {
  n: Array<Nfi>;
  secret: Scalars['String'];
};

export type InternalNftVerifyRequest = {
  n: Array<Nfi>;
  secret: Scalars['String'];
};

export type InternalProfileStatusRequest = {
  hhh: Scalars['String'];
  secret: Scalars['String'];
};

export type InternalRemoveCuratedTagRequest = {
  hhh: Scalars['String'];
  secret: Scalars['String'];
  ttt: Scalars['String'];
};

export type InternalUpdateProfileStatusRequest = {
  dd: Scalars['Boolean'];
  hhh: Scalars['String'];
  secret: Scalars['String'];
  ss: Scalars['Boolean'];
};

export type InviteRequest = {
  invites: Array<Scalars['EvmAddress']>;
};

export type InvitedResult = {
  __typename?: 'InvitedResult';
  by: Scalars['EvmAddress'];
  profileMinted?: Maybe<Profile>;
  when: Scalars['DateTime'];
};

export type KnownCollectOpenActionResult = {
  __typename?: 'KnownCollectOpenActionResult';
  type: CollectOpenActionModuleType;
};

export type KnownSupportedModule = {
  __typename?: 'KnownSupportedModule';
  contract: NetworkAddress;
  moduleInput: Array<ModuleInfo>;
  moduleName: Scalars['String'];
  redeemInput: Array<ModuleInfo>;
  returnDataInput: Array<ModuleInfo>;
};

export type LastLoggedInProfileRequest = {
  for: Scalars['EvmAddress'];
};

export type LegacyAaveFeeCollectModuleSettings = {
  __typename?: 'LegacyAaveFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: Amount;
  /** The maximum number of collects for this publication. */
  collectLimit?: Maybe<Scalars['String']>;
  contract: NetworkAddress;
  /** The end timestamp after which collecting is impossible. */
  endsAt?: Maybe<Scalars['DateTime']>;
  /** True if only followers of publisher may collect the post. */
  followerOnly: Scalars['Boolean'];
  /** Recipient of collect fees. */
  recipient: Scalars['EvmAddress'];
  /** The referral fee associated with this publication. */
  referralFee: Scalars['Float'];
  type: OpenActionModuleType;
};

export type LegacyCollectRequest = {
  on: Scalars['PublicationId'];
  referrer?: InputMaybe<Scalars['PublicationId']>;
};

export type LegacyDegreesOfSeparationReferenceModuleSettings = {
  __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings';
  /** Applied to comments */
  commentsRestricted: Scalars['Boolean'];
  contract: NetworkAddress;
  /** Degrees of separation */
  degreesOfSeparation: Scalars['Int'];
  /** Applied to mirrors */
  mirrorsRestricted: Scalars['Boolean'];
  type: ReferenceModuleType;
};

export type LegacyErc4626FeeCollectModuleSettings = {
  __typename?: 'LegacyERC4626FeeCollectModuleSettings';
  /** The collect module amount info */
  amount: Amount;
  /** The maximum number of collects for this publication. */
  collectLimit?: Maybe<Scalars['String']>;
  contract: NetworkAddress;
  /** The end timestamp after which collecting is impossible. */
  endsAt?: Maybe<Scalars['DateTime']>;
  /** True if only followers of publisher may collect the post. */
  followerOnly: Scalars['Boolean'];
  /** The recipient of the ERC4626 vault shares */
  recipient: Scalars['EvmAddress'];
  /** The referral fee associated with this publication. */
  referralFee: Scalars['Float'];
  type: OpenActionModuleType;
  /** The ERC4626 vault address */
  vault: NetworkAddress;
};

export type LegacyFeeCollectModuleSettings = {
  __typename?: 'LegacyFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: Amount;
  /** The collect nft address - only deployed on first collect */
  collectNft?: Maybe<Scalars['EvmAddress']>;
  contract: NetworkAddress;
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EvmAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
  type: OpenActionModuleType;
};

export type LegacyFollowOnlyReferenceModuleSettings = {
  __typename?: 'LegacyFollowOnlyReferenceModuleSettings';
  contract: NetworkAddress;
  type: ReferenceModuleType;
};

export type LegacyFreeCollectModuleSettings = {
  __typename?: 'LegacyFreeCollectModuleSettings';
  /** The collect nft address - only deployed on first collect */
  collectNft?: Maybe<Scalars['EvmAddress']>;
  contract: NetworkAddress;
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  type: OpenActionModuleType;
};

export type LegacyLimitedFeeCollectModuleSettings = {
  __typename?: 'LegacyLimitedFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: Amount;
  /** The collect module limit. */
  collectLimit?: Maybe<Scalars['String']>;
  /** The collect nft address - only deployed on first collect */
  collectNft?: Maybe<Scalars['EvmAddress']>;
  contract: NetworkAddress;
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EvmAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
  type: OpenActionModuleType;
};

export type LegacyLimitedTimedFeeCollectModuleSettings = {
  __typename?: 'LegacyLimitedTimedFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: Amount;
  /** The collect module limit */
  collectLimit?: Maybe<Scalars['String']>;
  /** The collect nft address - only deployed on first collect */
  collectNft?: Maybe<Scalars['EvmAddress']>;
  contract: NetworkAddress;
  /** The collect module end timestamp */
  endTimestamp: Scalars['DateTime'];
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EvmAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
  type: OpenActionModuleType;
};

export type LegacyMultirecipientFeeCollectModuleSettings = {
  __typename?: 'LegacyMultirecipientFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: Amount;
  /** The maximum number of collects for this publication. */
  collectLimit?: Maybe<Scalars['String']>;
  /** The collect nft address - only deployed on first collect */
  collectNft?: Maybe<Scalars['EvmAddress']>;
  contract: NetworkAddress;
  /** The end timestamp after which collecting is impossible. */
  endsAt?: Maybe<Scalars['DateTime']>;
  /** True if only followers of publisher may collect the post. */
  followerOnly: Scalars['Boolean'];
  /** Recipient of collect fees. */
  recipients: Array<RecipientDataOutput>;
  /** The referral fee associated with this publication. */
  referralFee: Scalars['Float'];
  type: OpenActionModuleType;
};

export type LegacyRevertCollectModuleSettings = {
  __typename?: 'LegacyRevertCollectModuleSettings';
  contract: NetworkAddress;
  type: OpenActionModuleType;
};

export type LegacySimpleCollectModuleSettings = {
  __typename?: 'LegacySimpleCollectModuleSettings';
  /** The collect module amount info. `Amount.value = 0` in case of free collects. */
  amount: Amount;
  /** The maximum number of collects for this publication. */
  collectLimit?: Maybe<Scalars['String']>;
  /** The collect nft address - only deployed on first collect */
  collectNft?: Maybe<Scalars['EvmAddress']>;
  contract: NetworkAddress;
  /** The end timestamp after which collecting is impossible. */
  endsAt?: Maybe<Scalars['DateTime']>;
  /** True if only followers of publisher may collect the post. */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EvmAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
  type: OpenActionModuleType;
};

export type LegacyTimedFeeCollectModuleSettings = {
  __typename?: 'LegacyTimedFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: Amount;
  /** The collect nft address - only deployed on first collect */
  collectNft?: Maybe<Scalars['EvmAddress']>;
  contract: NetworkAddress;
  /** The collect module end timestamp */
  endTimestamp: Scalars['DateTime'];
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EvmAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
  type: OpenActionModuleType;
};

export type LensProfileManagerRelayError = {
  __typename?: 'LensProfileManagerRelayError';
  reason: LensProfileManagerRelayErrorReasonType;
};

export enum LensProfileManagerRelayErrorReasonType {
  AppNotAllowed = 'APP_NOT_ALLOWED',
  Failed = 'FAILED',
  NotSponsored = 'NOT_SPONSORED',
  NoLensManagerEnabled = 'NO_LENS_MANAGER_ENABLED',
  RateLimited = 'RATE_LIMITED',
  RequiresSignature = 'REQUIRES_SIGNATURE'
}

export type LensProfileManagerRelayResult = LensProfileManagerRelayError | RelaySuccess;

export enum LensProtocolVersion {
  V1 = 'V1',
  V2 = 'V2'
}

export enum LensTransactionFailureType {
  MetadataError = 'METADATA_ERROR',
  Reverted = 'REVERTED'
}

export type LensTransactionResult = {
  __typename?: 'LensTransactionResult';
  extraInfo?: Maybe<Scalars['String']>;
  reason?: Maybe<LensTransactionFailureType>;
  status: LensTransactionStatusType;
  txHash: Scalars['TxHash'];
};

export type LensTransactionStatusRequest = {
  /** Transaction hash for retrieving transaction status */
  forTxHash?: InputMaybe<Scalars['TxHash']>;
  /** Transaction ID for retrieving transaction status when using the broadcaster */
  forTxId?: InputMaybe<Scalars['TxId']>;
};

export enum LensTransactionStatusType {
  Complete = 'COMPLETE',
  Failed = 'FAILED',
  OptimisticallyUpdated = 'OPTIMISTICALLY_UPDATED',
  Processing = 'PROCESSING'
}

export enum LimitType {
  Fifty = 'Fifty',
  Ten = 'Ten',
  TwentyFive = 'TwentyFive'
}

export type LinkHandleToProfileRequest = {
  /** The full handle - namespace/localname */
  handle: Scalars['Handle'];
};

export type LinkMetadataV3 = {
  __typename?: 'LinkMetadataV3';
  appId?: Maybe<Scalars['AppId']>;
  attachments?: Maybe<Array<PublicationMetadataMedia>>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  /** Optional content. Empty if not set. */
  content: Scalars['EncryptableMarkdown'];
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  locale: Scalars['Locale'];
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  sharingLink: Scalars['EncryptableURI'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export type LiveStreamMetadataV3 = {
  __typename?: 'LiveStreamMetadataV3';
  appId?: Maybe<Scalars['AppId']>;
  attachments?: Maybe<Array<PublicationMetadataMedia>>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  checkLiveAPI?: Maybe<Scalars['EncryptableURI']>;
  /** Optional content. Empty if not set. */
  content: Scalars['EncryptableMarkdown'];
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  /** Optional end time. Empty if not set. */
  endsAt: Scalars['EncryptableDateTime'];
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  liveURL: Scalars['EncryptableURI'];
  locale: Scalars['Locale'];
  marketplace?: Maybe<MarketplaceMetadata>;
  playbackURL: Scalars['EncryptableURI'];
  rawURI: Scalars['URI'];
  startsAt: Scalars['EncryptableDateTime'];
  tags?: Maybe<Array<Scalars['String']>>;
  /** The title of the live-stream. Empty if not set. */
  title: Scalars['String'];
};

export type MarketplaceMetadata = {
  __typename?: 'MarketplaceMetadata';
  animationUrl?: Maybe<Scalars['URI']>;
  attributes?: Maybe<Array<PublicationMarketplaceMetadataAttribute>>;
  description?: Maybe<Scalars['Markdown']>;
  externalURL?: Maybe<Scalars['URL']>;
  image?: Maybe<ImageSet>;
  name?: Maybe<Scalars['String']>;
};

export enum MarketplaceMetadataAttributeDisplayType {
  Date = 'DATE',
  Number = 'NUMBER',
  String = 'STRING'
}

export type MentionNotification = {
  __typename?: 'MentionNotification';
  id: Scalars['UUID'];
  publication: PrimaryPublication;
};

export type MetadataAttribute = {
  __typename?: 'MetadataAttribute';
  key: Scalars['String'];
  /**
   * The type of the attribute. When:
   * - BOOLEAN: the `value` is `true`|`false`
   * - DATE: the `value` is a valid ISO 8601 date string
   * - NUMBER: the `value` is a valid JS number as string
   * - STRING: the `value` is a string.
   * - JSON: the `value` is a valid JSON serialized as string
   *
   */
  type: MetadataAttributeType;
  /** The value serialized as string. It's consumer responsibility to parse it according to `type`. */
  value: Scalars['String'];
};

export enum MetadataAttributeType {
  Boolean = 'BOOLEAN',
  Date = 'DATE',
  Json = 'JSON',
  Number = 'NUMBER',
  String = 'STRING'
}

export type MintMetadataV3 = {
  __typename?: 'MintMetadataV3';
  appId?: Maybe<Scalars['AppId']>;
  attachments?: Maybe<Array<PublicationMetadataMedia>>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  /** Optional content. Empty if not set. */
  content: Scalars['EncryptableMarkdown'];
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  locale: Scalars['Locale'];
  marketplace?: Maybe<MarketplaceMetadata>;
  mintLink: Scalars['EncryptableURI'];
  rawURI: Scalars['URI'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export type Mirror = {
  __typename?: 'Mirror';
  by: Profile;
  createdAt: Scalars['DateTime'];
  id: Scalars['PublicationId'];
  isHidden: Scalars['Boolean'];
  mirrorOn: MirrorablePublication;
  momoka?: Maybe<MomokaInfo>;
  publishedOn?: Maybe<App>;
  txHash?: Maybe<Scalars['TxHash']>;
};

export type MirrorNotification = {
  __typename?: 'MirrorNotification';
  id: Scalars['UUID'];
  mirrors: Array<ProfileMirrorResult>;
  publication: PrimaryPublication;
};

export type MirrorablePublication = Comment | Post | Quote;

export type ModuleCurrencyApproval = {
  followModule?: InputMaybe<FollowModuleType>;
  openActionModule?: InputMaybe<OpenActionModuleType>;
  referenceModule?: InputMaybe<ReferenceModuleType>;
  unknownFollowModule?: InputMaybe<Scalars['EvmAddress']>;
  unknownOpenActionModule?: InputMaybe<Scalars['EvmAddress']>;
  unknownReferenceModule?: InputMaybe<Scalars['EvmAddress']>;
};

export type ModuleInfo = {
  __typename?: 'ModuleInfo';
  name: Scalars['String'];
  type: Scalars['String'];
};

export type MomokaCommentRequest = {
  commentOn: Scalars['PublicationId'];
  contentURI: Scalars['URI'];
};

export type MomokaCommentTransaction = {
  __typename?: 'MomokaCommentTransaction';
  app?: Maybe<App>;
  commentOn: PrimaryPublication;
  createdAt: Scalars['DateTime'];
  publication: Comment;
  submitter: Scalars['EvmAddress'];
  transactionId: Scalars['String'];
  verificationStatus: MomokaVerificationStatus;
};

export type MomokaInfo = {
  __typename?: 'MomokaInfo';
  proof: Scalars['MomokaProof'];
};

export type MomokaMirrorRequest = {
  /** You can add information like app on a mirror or tracking stuff */
  metadataURI?: InputMaybe<Scalars['URI']>;
  mirrorOn: Scalars['PublicationId'];
};

export type MomokaMirrorTransaction = {
  __typename?: 'MomokaMirrorTransaction';
  app?: Maybe<App>;
  createdAt: Scalars['DateTime'];
  mirrorOn: PrimaryPublication;
  publication: Mirror;
  submitter: Scalars['EvmAddress'];
  transactionId: Scalars['String'];
  verificationStatus: MomokaVerificationStatus;
};

export type MomokaPostRequest = {
  contentURI: Scalars['URI'];
};

export type MomokaPostTransaction = {
  __typename?: 'MomokaPostTransaction';
  app?: Maybe<App>;
  createdAt: Scalars['DateTime'];
  publication: Post;
  submitter: Scalars['EvmAddress'];
  transactionId: Scalars['String'];
  verificationStatus: MomokaVerificationStatus;
};

export type MomokaQuoteRequest = {
  contentURI: Scalars['URI'];
  quoteOn: Scalars['PublicationId'];
};

export type MomokaQuoteTransaction = {
  __typename?: 'MomokaQuoteTransaction';
  app?: Maybe<App>;
  createdAt: Scalars['DateTime'];
  publication: Quote;
  quoteOn: PrimaryPublication;
  submitter: Scalars['EvmAddress'];
  transactionId: Scalars['String'];
  verificationStatus: MomokaVerificationStatus;
};

export type MomokaSubmitterResult = {
  __typename?: 'MomokaSubmitterResult';
  address: Scalars['EvmAddress'];
  name: Scalars['String'];
  totalTransactions: Scalars['Int'];
};

export type MomokaSubmittersResult = {
  __typename?: 'MomokaSubmittersResult';
  items: Array<MomokaSubmitterResult>;
  pageInfo: PaginatedResultInfo;
};

export type MomokaSummaryResult = {
  __typename?: 'MomokaSummaryResult';
  totalTransactions: Scalars['Int'];
};

export type MomokaTransaction = MomokaCommentTransaction | MomokaMirrorTransaction | MomokaPostTransaction | MomokaQuoteTransaction;

export type MomokaTransactionRequest = {
  /** The momoka transaction id or internal publication id */
  for: Scalars['String'];
};

export type MomokaTransactionsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  for?: InputMaybe<Scalars['ProfileId']>;
  limit?: InputMaybe<LimitType>;
};

export type MomokaTransactionsResult = {
  __typename?: 'MomokaTransactionsResult';
  items: Array<MomokaTransaction>;
  pageInfo: PaginatedResultInfo;
};

export enum MomokaValidatorError {
  BlockCantBeReadFromNode = 'BLOCK_CANT_BE_READ_FROM_NODE',
  BlockTooFar = 'BLOCK_TOO_FAR',
  CanNotConnectToBundlr = 'CAN_NOT_CONNECT_TO_BUNDLR',
  ChainSignatureAlreadyUsed = 'CHAIN_SIGNATURE_ALREADY_USED',
  DataCantBeReadFromNode = 'DATA_CANT_BE_READ_FROM_NODE',
  EventMismatch = 'EVENT_MISMATCH',
  GeneratedPublicationIdMismatch = 'GENERATED_PUBLICATION_ID_MISMATCH',
  InvalidEventTimestamp = 'INVALID_EVENT_TIMESTAMP',
  InvalidFormattedTypedData = 'INVALID_FORMATTED_TYPED_DATA',
  InvalidPointerSetNotNeeded = 'INVALID_POINTER_SET_NOT_NEEDED',
  InvalidSignatureSubmitter = 'INVALID_SIGNATURE_SUBMITTER',
  InvalidTxId = 'INVALID_TX_ID',
  InvalidTypedDataDeadlineTimestamp = 'INVALID_TYPED_DATA_DEADLINE_TIMESTAMP',
  NotClosestBlock = 'NOT_CLOSEST_BLOCK',
  NoSignatureSubmitter = 'NO_SIGNATURE_SUBMITTER',
  PointerFailedVerification = 'POINTER_FAILED_VERIFICATION',
  PotentialReorg = 'POTENTIAL_REORG',
  PublicationNonceInvalid = 'PUBLICATION_NONCE_INVALID',
  PublicationNoneDa = 'PUBLICATION_NONE_DA',
  PublicationNoPointer = 'PUBLICATION_NO_POINTER',
  PublicationSignerNotAllowed = 'PUBLICATION_SIGNER_NOT_ALLOWED',
  SimulationFailed = 'SIMULATION_FAILED',
  SimulationNodeCouldNotRun = 'SIMULATION_NODE_COULD_NOT_RUN',
  TimestampProofInvalidDaId = 'TIMESTAMP_PROOF_INVALID_DA_ID',
  TimestampProofInvalidSignature = 'TIMESTAMP_PROOF_INVALID_SIGNATURE',
  TimestampProofInvalidType = 'TIMESTAMP_PROOF_INVALID_TYPE',
  TimestampProofNotSubmitter = 'TIMESTAMP_PROOF_NOT_SUBMITTER',
  Unknown = 'UNKNOWN'
}

export type MomokaVerificationStatus = MomokaVerificationStatusFailure | MomokaVerificationStatusSuccess;

export type MomokaVerificationStatusFailure = {
  __typename?: 'MomokaVerificationStatusFailure';
  status: MomokaValidatorError;
};

export type MomokaVerificationStatusSuccess = {
  __typename?: 'MomokaVerificationStatusSuccess';
  verified: Scalars['Boolean'];
};

export type MultirecipientFeeCollectModuleInput = {
  amount: AmountInput;
  collectLimit?: InputMaybe<Scalars['String']>;
  endsAt?: InputMaybe<Scalars['DateTime']>;
  followerOnly: Scalars['Boolean'];
  recipients: Array<RecipientDataInput>;
  referralFee?: InputMaybe<Scalars['Float']>;
};

export type MultirecipientFeeCollectOpenActionSettings = {
  __typename?: 'MultirecipientFeeCollectOpenActionSettings';
  /** The collect module amount info */
  amount: Amount;
  /** The maximum number of collects for this publication. */
  collectLimit?: Maybe<Scalars['String']>;
  /** The collect nft address - only deployed on first collect */
  collectNft?: Maybe<Scalars['EvmAddress']>;
  contract: NetworkAddress;
  /** The end timestamp after which collecting is impossible. */
  endsAt?: Maybe<Scalars['DateTime']>;
  /** True if only followers of publisher may collect the post. */
  followerOnly: Scalars['Boolean'];
  /** Recipient of collect fees. */
  recipients: Array<RecipientDataOutput>;
  /** The referral fee associated with this publication. */
  referralFee: Scalars['Float'];
  type: OpenActionModuleType;
};

export type Mutation = {
  __typename?: 'Mutation';
  actOnOpenAction: LensProfileManagerRelayResult;
  addProfileInterests?: Maybe<Scalars['Void']>;
  addPublicationBookmark?: Maybe<Scalars['Void']>;
  addPublicationNotInterested?: Maybe<Scalars['Void']>;
  addReaction?: Maybe<Scalars['Void']>;
  authenticate: AuthenticationResult;
  block: LensProfileManagerRelayResult;
  broadcastOnMomoka: BroadcastMomokaResult;
  broadcastOnchain: RelayResult;
  claimProfileWithHandle: ClaimProfileWithHandleResult;
  commentOnMomoka: RelayMomokaResult;
  commentOnchain: LensProfileManagerRelayResult;
  createActOnOpenActionTypedData: CreateActOnOpenActionBroadcastItemResult;
  createBlockProfilesTypedData: CreateBlockProfilesBroadcastItemResult;
  createChangeProfileManagersTypedData: CreateChangeProfileManagersBroadcastItemResult;
  createFollowTypedData: CreateFollowBroadcastItemResult;
  createLegacyCollectTypedData: CreateLegacyCollectBroadcastItemResult;
  createLinkHandleToProfileTypedData: CreateLinkHandleToProfileBroadcastItemResult;
  createMomokaCommentTypedData: CreateMomokaCommentBroadcastItemResult;
  createMomokaMirrorTypedData: CreateMomokaMirrorBroadcastItemResult;
  createMomokaPostTypedData: CreateMomokaPostBroadcastItemResult;
  createMomokaQuoteTypedData: CreateMomokaQuoteBroadcastItemResult;
  createNftGallery: Scalars['NftGalleryId'];
  createOnchainCommentTypedData: CreateOnchainCommentBroadcastItemResult;
  createOnchainMirrorTypedData: CreateOnchainMirrorBroadcastItemResult;
  createOnchainPostTypedData: CreateOnchainPostBroadcastItemResult;
  createOnchainQuoteTypedData: CreateOnchainQuoteBroadcastItemResult;
  createOnchainSetProfileMetadataTypedData: CreateOnchainSetProfileMetadataBroadcastItemResult;
  createProfile: RelaySuccess;
  createProfileWithHandle: CreateProfileWithHandleResult;
  createSetFollowModuleTypedData: CreateSetFollowModuleBroadcastItemResult;
  createUnblockProfilesTypedData: CreateUnblockProfilesBroadcastItemResult;
  createUnfollowTypedData: CreateUnfollowBroadcastItemResult;
  createUnlinkHandleFromProfileTypedData: CreateUnlinkHandleFromProfileBroadcastItemResult;
  deleteNftGallery?: Maybe<Scalars['Void']>;
  dismissRecommendedProfiles?: Maybe<Scalars['Void']>;
  follow: LensProfileManagerRelayResult;
  hidePublication?: Maybe<Scalars['Void']>;
  idKitPhoneVerifyWebhook: IdKitPhoneVerifyWebhookResultStatusType;
  internalAddCuratedTag?: Maybe<Scalars['Void']>;
  internalAddInvites?: Maybe<Scalars['Void']>;
  internalAllowDomain?: Maybe<Scalars['Void']>;
  internalClaim?: Maybe<Scalars['Void']>;
  internalCuratedUpdate?: Maybe<Scalars['Void']>;
  internalNftIndex?: Maybe<Scalars['Void']>;
  internalNftVerify?: Maybe<Scalars['Void']>;
  internalRemoveCuratedTag?: Maybe<Scalars['Void']>;
  internalUpdateProfileStatus?: Maybe<Scalars['Void']>;
  invite?: Maybe<Scalars['Void']>;
  legacyCollect: LensProfileManagerRelayResult;
  linkHandleToProfile: LensProfileManagerRelayResult;
  mirrorOnMomoka: RelayMomokaResult;
  mirrorOnchain: LensProfileManagerRelayResult;
  nftOwnershipChallenge: NftOwnershipChallengeResult;
  postOnMomoka: RelayMomokaResult;
  postOnchain: LensProfileManagerRelayResult;
  quoteOnMomoka: RelayMomokaResult;
  quoteOnchain: LensProfileManagerRelayResult;
  refresh: AuthenticationResult;
  refreshPublicationMetadata: RefreshPublicationMetadataResult;
  removeProfileInterests?: Maybe<Scalars['Void']>;
  removePublicationBookmark?: Maybe<Scalars['Void']>;
  removeReaction?: Maybe<Scalars['Void']>;
  reportPublication?: Maybe<Scalars['Void']>;
  revokeAuthentication?: Maybe<Scalars['Void']>;
  setDefaultProfile?: Maybe<Scalars['Void']>;
  setFollowModule: LensProfileManagerRelayResult;
  setProfileMetadata: LensProfileManagerRelayResult;
  unblock: LensProfileManagerRelayResult;
  undoPublicationNotInterested?: Maybe<Scalars['Void']>;
  unfollow: LensProfileManagerRelayResult;
  unlinkHandleFromProfile: LensProfileManagerRelayResult;
  updateNftGalleryInfo?: Maybe<Scalars['Void']>;
  updateNftGalleryItems?: Maybe<Scalars['Void']>;
  updateNftGalleryOrder?: Maybe<Scalars['Void']>;
  walletAuthenticationToProfileAuthentication: AuthenticationResult;
};


export type MutationActOnOpenActionArgs = {
  request: ActOnOpenActionLensManagerRequest;
};


export type MutationAddProfileInterestsArgs = {
  request: ProfileInterestsRequest;
};


export type MutationAddPublicationBookmarkArgs = {
  request: PublicationBookmarkRequest;
};


export type MutationAddPublicationNotInterestedArgs = {
  request: PublicationNotInterestedRequest;
};


export type MutationAddReactionArgs = {
  request: ReactionRequest;
};


export type MutationAuthenticateArgs = {
  request: SignedAuthChallenge;
};


export type MutationBlockArgs = {
  request: BlockRequest;
};


export type MutationBroadcastOnMomokaArgs = {
  request: BroadcastRequest;
};


export type MutationBroadcastOnchainArgs = {
  request: BroadcastRequest;
};


export type MutationClaimProfileWithHandleArgs = {
  request: ClaimProfileWithHandleRequest;
};


export type MutationCommentOnMomokaArgs = {
  request: MomokaCommentRequest;
};


export type MutationCommentOnchainArgs = {
  request: OnchainCommentRequest;
};


export type MutationCreateActOnOpenActionTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: ActOnOpenActionRequest;
};


export type MutationCreateBlockProfilesTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: BlockRequest;
};


export type MutationCreateChangeProfileManagersTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: ChangeProfileManagersRequest;
};


export type MutationCreateFollowTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: FollowRequest;
};


export type MutationCreateLegacyCollectTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: LegacyCollectRequest;
};


export type MutationCreateLinkHandleToProfileTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: LinkHandleToProfileRequest;
};


export type MutationCreateMomokaCommentTypedDataArgs = {
  request: MomokaCommentRequest;
};


export type MutationCreateMomokaMirrorTypedDataArgs = {
  request: MomokaMirrorRequest;
};


export type MutationCreateMomokaPostTypedDataArgs = {
  request: MomokaPostRequest;
};


export type MutationCreateMomokaQuoteTypedDataArgs = {
  request: MomokaQuoteRequest;
};


export type MutationCreateNftGalleryArgs = {
  request: NftGalleryCreateRequest;
};


export type MutationCreateOnchainCommentTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: OnchainCommentRequest;
};


export type MutationCreateOnchainMirrorTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: OnchainMirrorRequest;
};


export type MutationCreateOnchainPostTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: OnchainPostRequest;
};


export type MutationCreateOnchainQuoteTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: OnchainQuoteRequest;
};


export type MutationCreateOnchainSetProfileMetadataTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: OnchainSetProfileMetadataRequest;
};


export type MutationCreateProfileArgs = {
  request: CreateProfileRequest;
};


export type MutationCreateProfileWithHandleArgs = {
  request: CreateProfileWithHandleRequest;
};


export type MutationCreateSetFollowModuleTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: SetFollowModuleRequest;
};


export type MutationCreateUnblockProfilesTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: UnblockRequest;
};


export type MutationCreateUnfollowTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: UnfollowRequest;
};


export type MutationCreateUnlinkHandleFromProfileTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: UnlinkHandleFromProfileRequest;
};


export type MutationDeleteNftGalleryArgs = {
  request: NftGalleryDeleteRequest;
};


export type MutationDismissRecommendedProfilesArgs = {
  request: DismissRecommendedProfilesRequest;
};


export type MutationFollowArgs = {
  request: FollowLensManagerRequest;
};


export type MutationHidePublicationArgs = {
  request: HidePublicationRequest;
};


export type MutationIdKitPhoneVerifyWebhookArgs = {
  request: IdKitPhoneVerifyWebhookRequest;
};


export type MutationInternalAddCuratedTagArgs = {
  request: InternalAddCuratedTagRequest;
};


export type MutationInternalAddInvitesArgs = {
  request: InternalAddInvitesRequest;
};


export type MutationInternalAllowDomainArgs = {
  request: InternalAllowDomainRequest;
};


export type MutationInternalClaimArgs = {
  request: InternalClaimRequest;
};


export type MutationInternalCuratedUpdateArgs = {
  request: InternalCuratedUpdateRequest;
};


export type MutationInternalNftIndexArgs = {
  request: InternalNftIndexRequest;
};


export type MutationInternalNftVerifyArgs = {
  request: InternalNftVerifyRequest;
};


export type MutationInternalRemoveCuratedTagArgs = {
  request: InternalRemoveCuratedTagRequest;
};


export type MutationInternalUpdateProfileStatusArgs = {
  request: InternalUpdateProfileStatusRequest;
};


export type MutationInviteArgs = {
  request: InviteRequest;
};


export type MutationLegacyCollectArgs = {
  request: LegacyCollectRequest;
};


export type MutationLinkHandleToProfileArgs = {
  request: LinkHandleToProfileRequest;
};


export type MutationMirrorOnMomokaArgs = {
  request: MomokaMirrorRequest;
};


export type MutationMirrorOnchainArgs = {
  request: OnchainMirrorRequest;
};


export type MutationNftOwnershipChallengeArgs = {
  request: NftOwnershipChallengeRequest;
};


export type MutationPostOnMomokaArgs = {
  request: MomokaPostRequest;
};


export type MutationPostOnchainArgs = {
  request: OnchainPostRequest;
};


export type MutationQuoteOnMomokaArgs = {
  request: MomokaQuoteRequest;
};


export type MutationQuoteOnchainArgs = {
  request: OnchainQuoteRequest;
};


export type MutationRefreshArgs = {
  request: RefreshRequest;
};


export type MutationRefreshPublicationMetadataArgs = {
  request: RefreshPublicationMetadataRequest;
};


export type MutationRemoveProfileInterestsArgs = {
  request: ProfileInterestsRequest;
};


export type MutationRemovePublicationBookmarkArgs = {
  request: PublicationBookmarkRequest;
};


export type MutationRemoveReactionArgs = {
  request: ReactionRequest;
};


export type MutationReportPublicationArgs = {
  request: ReportPublicationRequest;
};


export type MutationRevokeAuthenticationArgs = {
  request: RevokeAuthenticationRequest;
};


export type MutationSetDefaultProfileArgs = {
  request: SetDefaultProfileRequest;
};


export type MutationSetFollowModuleArgs = {
  request: SetFollowModuleRequest;
};


export type MutationSetProfileMetadataArgs = {
  request: OnchainSetProfileMetadataRequest;
};


export type MutationUnblockArgs = {
  request: UnblockRequest;
};


export type MutationUndoPublicationNotInterestedArgs = {
  request: PublicationNotInterestedRequest;
};


export type MutationUnfollowArgs = {
  request: UnfollowRequest;
};


export type MutationUnlinkHandleFromProfileArgs = {
  request: UnlinkHandleFromProfileRequest;
};


export type MutationUpdateNftGalleryInfoArgs = {
  request: NftGalleryUpdateInfoRequest;
};


export type MutationUpdateNftGalleryItemsArgs = {
  request: NftGalleryUpdateItemsRequest;
};


export type MutationUpdateNftGalleryOrderArgs = {
  request: NftGalleryUpdateItemOrderRequest;
};


export type MutationWalletAuthenticationToProfileAuthenticationArgs = {
  request: WalletAuthenticationToProfileAuthenticationRequest;
};

export type MutualFollowersRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
  observer: Scalars['ProfileId'];
  viewing: Scalars['ProfileId'];
};

/** Mutual NFT collections request */
export type MutualNftCollectionsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
  /** Profile id of the first user */
  observer: Scalars['ProfileId'];
  /** Profile id of the second user */
  viewing: Scalars['ProfileId'];
};

export type MutualPoapsQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
  observer: Scalars['ProfileId'];
  viewing: Scalars['ProfileId'];
};

export type NetworkAddress = {
  __typename?: 'NetworkAddress';
  address: Scalars['EvmAddress'];
  chainId: Scalars['ChainId'];
};

export type NetworkAddressInput = {
  address: Scalars['EvmAddress'];
  chainId: Scalars['ChainId'];
};

export type Nfi = {
  c: Scalars['EvmAddress'];
  i: Scalars['ChainId'];
};

export type Nft = {
  __typename?: 'Nft';
  collection: NftCollection;
  contentURI: Scalars['URI'];
  contract: NetworkAddress;
  contractType: NftContractType;
  metadata: NftMetadata;
  owner: Owner;
  tokenId: Scalars['TokenId'];
  totalSupply: Scalars['String'];
};

/** Nft Collection type */
export type NftCollection = {
  __typename?: 'NftCollection';
  /** Collection base URI for token metadata */
  baseUri?: Maybe<Scalars['URI']>;
  /** The contract info, address and chain id */
  contract: NetworkAddress;
  /** Collection ERC type */
  contractType: NftContractType;
  /** Collection name */
  name: Scalars['String'];
  /** Collection symbol */
  symbol: Scalars['String'];
  /** Collection verified status */
  verified: Scalars['Boolean'];
};

export enum NftCollectionOwnersOrder {
  FollowersFirst = 'FollowersFirst',
  None = 'None'
}

/** NFT collection owners request */
export type NftCollectionOwnersRequest = {
  /** The profile id to use when ordering by followers */
  by?: InputMaybe<Scalars['ProfileId']>;
  /** The chain id */
  chainId: Scalars['ChainId'];
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** The contract address */
  for: Scalars['EvmAddress'];
  limit?: InputMaybe<LimitType>;
  /** The ordering of Nft collection owners */
  order?: InputMaybe<NftCollectionOwnersOrder>;
};

/** A wrapper object containing an Nft collection, the total number of Lens profiles that own it, and optional field resolvers */
export type NftCollectionWithOwners = {
  __typename?: 'NftCollectionWithOwners';
  /** The Nft collection */
  collection: NftCollection;
  /** The total number of Lens profile owners that have at least 1 NFT from this collection */
  totalOwners: Scalars['Float'];
};

/** NFT collections request */
export type NftCollectionsRequest = {
  /** The chain ids to look for NFTs on. Ethereum and Polygon are supported. If omitted, it will look on both chains by default. */
  chainIds?: InputMaybe<Array<Scalars['ChainId']>>;
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** Exclude Lens Follower NFTs */
  excludeFollowers?: InputMaybe<Scalars['Boolean']>;
  for?: InputMaybe<Scalars['ProfileId']>;
  /** Filter by owner address */
  forAddress?: InputMaybe<Scalars['EvmAddress']>;
  limit?: InputMaybe<LimitType>;
};

export enum NftContractType {
  Erc721 = 'ERC721',
  Erc1155 = 'ERC1155'
}

export type NftGalleriesRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  for: Scalars['ProfileId'];
  limit?: InputMaybe<LimitType>;
};

export type NftGallery = {
  __typename?: 'NftGallery';
  createdAt: Scalars['DateTime'];
  id: Scalars['NftGalleryId'];
  items: Array<Nft>;
  name: Scalars['NftGalleryName'];
  owner: Scalars['ProfileId'];
  updatedAt: Scalars['DateTime'];
};

export type NftGalleryCreateRequest = {
  items: Array<NftInput>;
  name: Scalars['NftGalleryName'];
};

export type NftGalleryDeleteRequest = {
  galleryId: Scalars['NftGalleryId'];
};

export type NftGalleryUpdateInfoRequest = {
  galleryId: Scalars['NftGalleryId'];
  name: Scalars['NftGalleryName'];
};

export type NftGalleryUpdateItemOrderRequest = {
  galleryId: Scalars['NftGalleryId'];
  updates?: InputMaybe<Array<NftUpdateItemOrder>>;
};

export type NftGalleryUpdateItemsRequest = {
  galleryId: Scalars['NftGalleryId'];
  toAdd?: InputMaybe<Array<NftInput>>;
  toRemove?: InputMaybe<Array<NftInput>>;
};

export type NftImage = {
  __typename?: 'NftImage';
  /** The contract address of the NFT collection */
  collection: NetworkAddress;
  /** The image set for the NFT */
  image: ImageSet;
  /** The token ID of the NFT */
  tokenId: Scalars['TokenId'];
  /** Indicates whether the NFT is from a verified collection or not */
  verified: Scalars['Boolean'];
};

export type NftInput = {
  contract: NetworkAddressInput;
  tokenId: Scalars['TokenId'];
};

export type NftMetadata = {
  __typename?: 'NftMetadata';
  animationUrl?: Maybe<Scalars['URI']>;
  attributes?: Maybe<Array<PublicationMarketplaceMetadataAttribute>>;
  description?: Maybe<Scalars['Markdown']>;
  externalURL?: Maybe<Scalars['URL']>;
  image?: Maybe<ImageSet>;
  name?: Maybe<Scalars['String']>;
};

export type NftOwnershipChallengeRequest = {
  for: Scalars['EvmAddress'];
  nfts: Array<NftInput>;
};

export type NftOwnershipChallengeResult = {
  __typename?: 'NftOwnershipChallengeResult';
  info?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type NftOwnershipCondition = {
  __typename?: 'NftOwnershipCondition';
  contract: NetworkAddress;
  contractType: NftContractType;
  tokenIds?: Maybe<Array<Scalars['TokenId']>>;
};

export type NftUpdateItemOrder = {
  contract: NetworkAddressInput;
  newOrder: Scalars['Int'];
  tokenId: Scalars['TokenId'];
};

export type NftsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
  where?: InputMaybe<NftsRequestWhere>;
};

export type NftsRequestWhere = {
  /** Chain IDs to search. Supports Ethereum and Polygon. If omitted, it will search in both chains */
  chainIds?: InputMaybe<Array<Scalars['ChainId']>>;
  excludeCollections?: InputMaybe<Array<NetworkAddressInput>>;
  /** Exclude follower NFTs from the search */
  excludeFollowers?: InputMaybe<Scalars['Boolean']>;
  /** Ethereum address of the owner. If unknown you can also search by profile ID */
  forAddress?: InputMaybe<Scalars['EvmAddress']>;
  /** Profile ID of the owner */
  forProfileId?: InputMaybe<Scalars['ProfileId']>;
  includeCollections?: InputMaybe<Array<NetworkAddressInput>>;
  /** Search query. Has to be part of a collection name */
  query?: InputMaybe<Scalars['String']>;
};

export type Notification = ActedNotification | CommentNotification | FollowNotification | MentionNotification | MirrorNotification | QuoteNotification | ReactionNotification;

export type NotificationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  where?: InputMaybe<NotificationWhere>;
};

export enum NotificationType {
  Acted = 'ACTED',
  Commented = 'COMMENTED',
  Followed = 'FOLLOWED',
  Mentioned = 'MENTIONED',
  Mirrored = 'MIRRORED',
  Quoted = 'QUOTED',
  Reacted = 'REACTED'
}

export type NotificationWhere = {
  customFilters?: InputMaybe<Array<CustomFiltersType>>;
  highSignalFilter?: InputMaybe<Scalars['Boolean']>;
  notificationTypes?: InputMaybe<Array<NotificationType>>;
  publishedOn?: InputMaybe<Array<Scalars['AppId']>>;
};

export type OnchainCommentRequest = {
  commentOn: Scalars['PublicationId'];
  /** If your using an unknown reference modules you need to pass this in. `followerOnlyReferenceModule` and `degreesOfSeparationReferenceModule` is handled automatically for you and if you supply this on publications with those settings it will be ignored */
  commentOnReferenceModuleData?: InputMaybe<Scalars['BlockchainData']>;
  contentURI: Scalars['URI'];
  openActionModules?: InputMaybe<Array<OpenActionModuleInput>>;
  referenceModule?: InputMaybe<ReferenceModuleInput>;
  referrers?: InputMaybe<Array<OnchainReferrer>>;
};

export type OnchainMirrorRequest = {
  /** You can add information like app on a mirror or tracking stuff */
  metadataURI?: InputMaybe<Scalars['URI']>;
  mirrorOn: Scalars['PublicationId'];
  /** If your using an unknown reference modules you need to pass this in. `followerOnlyReferenceModule` and `degreesOfSeparationReferenceModule` is handled automatically for you and if you supply this on publications with those settings it will be ignored */
  mirrorReferenceModuleData?: InputMaybe<Scalars['BlockchainData']>;
  referrers?: InputMaybe<Array<OnchainReferrer>>;
};

export type OnchainPostRequest = {
  contentURI: Scalars['URI'];
  openActionModules?: InputMaybe<Array<OpenActionModuleInput>>;
  referenceModule?: InputMaybe<ReferenceModuleInput>;
};

export type OnchainQuoteRequest = {
  contentURI: Scalars['URI'];
  openActionModules?: InputMaybe<Array<OpenActionModuleInput>>;
  quoteOn: Scalars['PublicationId'];
  /** If your using an unknown reference modules you need to pass this in. `followerOnlyReferenceModule` and `degreesOfSeparationReferenceModule` is handled automatically for you and if you supply this on publications with those settings it will be ignored */
  quoteOnReferenceModuleData?: InputMaybe<Scalars['BlockchainData']>;
  referenceModule?: InputMaybe<ReferenceModuleInput>;
  referrers?: InputMaybe<Array<OnchainReferrer>>;
};

export type OnchainReferrer = {
  profileId?: InputMaybe<Scalars['ProfileId']>;
  publicationId?: InputMaybe<Scalars['PublicationId']>;
};

export type OnchainSetProfileMetadataRequest = {
  metadataURI: Scalars['URI'];
};

export enum OpenActionCategoryType {
  Collect = 'COLLECT'
}

export type OpenActionFilter = {
  address?: InputMaybe<Scalars['EvmAddress']>;
  category?: InputMaybe<OpenActionCategoryType>;
  type?: InputMaybe<OpenActionModuleType>;
};

export type OpenActionModule = LegacyAaveFeeCollectModuleSettings | LegacyErc4626FeeCollectModuleSettings | LegacyFeeCollectModuleSettings | LegacyFreeCollectModuleSettings | LegacyLimitedFeeCollectModuleSettings | LegacyLimitedTimedFeeCollectModuleSettings | LegacyMultirecipientFeeCollectModuleSettings | LegacyRevertCollectModuleSettings | LegacySimpleCollectModuleSettings | LegacyTimedFeeCollectModuleSettings | MultirecipientFeeCollectOpenActionSettings | SimpleCollectOpenActionSettings | UnknownOpenActionModuleSettings;

export type OpenActionModuleInput = {
  collectOpenAction?: InputMaybe<CollectActionModuleInput>;
  unknownOpenAction?: InputMaybe<UnknownOpenActionModuleInput>;
};

export enum OpenActionModuleType {
  LegacyAaveFeeCollectModule = 'LegacyAaveFeeCollectModule',
  LegacyErc4626FeeCollectModule = 'LegacyERC4626FeeCollectModule',
  LegacyFeeCollectModule = 'LegacyFeeCollectModule',
  LegacyFreeCollectModule = 'LegacyFreeCollectModule',
  LegacyLimitedFeeCollectModule = 'LegacyLimitedFeeCollectModule',
  LegacyLimitedTimedFeeCollectModule = 'LegacyLimitedTimedFeeCollectModule',
  LegacyMultirecipientFeeCollectModule = 'LegacyMultirecipientFeeCollectModule',
  LegacyRevertCollectModule = 'LegacyRevertCollectModule',
  LegacySimpleCollectModule = 'LegacySimpleCollectModule',
  LegacyTimedFeeCollectModule = 'LegacyTimedFeeCollectModule',
  MultirecipientFeeCollectOpenActionModule = 'MultirecipientFeeCollectOpenActionModule',
  SimpleCollectOpenActionModule = 'SimpleCollectOpenActionModule',
  UnknownOpenActionModule = 'UnknownOpenActionModule'
}

export type OpenActionProfileActed = {
  __typename?: 'OpenActionProfileActed';
  actedAt: Scalars['DateTime'];
  action: OpenActionResult;
  by: Profile;
};

export type OpenActionResult = KnownCollectOpenActionResult | UnknownOpenActionResult;

export type OptimisticStatusResult = {
  __typename?: 'OptimisticStatusResult';
  isFinalisedOnchain: Scalars['Boolean'];
  value: Scalars['Boolean'];
};

export type OrCondition = {
  __typename?: 'OrCondition';
  criteria: Array<ThirdTierCondition>;
};

export type OwnedHandlesRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** The Ethereum address for which to retrieve owned handles */
  for: Scalars['EvmAddress'];
  limit?: InputMaybe<LimitType>;
};

export type Owner = {
  __typename?: 'Owner';
  address: Scalars['EvmAddress'];
  amount: Scalars['String'];
};

export type PaginatedApprovedAuthenticationResult = {
  __typename?: 'PaginatedApprovedAuthenticationResult';
  items: Array<ApprovedAuthentication>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedCurrenciesResult = {
  __typename?: 'PaginatedCurrenciesResult';
  items: Array<Erc20>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedExplorePublicationResult = {
  __typename?: 'PaginatedExplorePublicationResult';
  items: Array<ExplorePublication>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedFeedHighlightsResult = {
  __typename?: 'PaginatedFeedHighlightsResult';
  items: Array<FeedHighlight>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedFeedResult = {
  __typename?: 'PaginatedFeedResult';
  items: Array<FeedItem>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedHandlesResult = {
  __typename?: 'PaginatedHandlesResult';
  items: Array<HandleInfo>;
  pageInfo: PaginatedResultInfo;
};

/** Nft collections paginated result */
export type PaginatedNftCollectionsResult = {
  __typename?: 'PaginatedNftCollectionsResult';
  items: Array<NftCollection>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedNftGalleriesResult = {
  __typename?: 'PaginatedNftGalleriesResult';
  items: Array<NftGallery>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedNftsResult = {
  __typename?: 'PaginatedNftsResult';
  items: Array<Nft>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedNotificationResult = {
  __typename?: 'PaginatedNotificationResult';
  items: Array<Notification>;
  pageInfo: PaginatedResultInfo;
};

/** Pagination with Offset fields  */
export type PaginatedOffsetRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
};

/** The paginated Poap Events result */
export type PaginatedPoapEventResult = {
  __typename?: 'PaginatedPoapEventResult';
  items: Array<PoapEvent>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated Poap Token Results */
export type PaginatedPoapTokenResult = {
  __typename?: 'PaginatedPoapTokenResult';
  items: Array<PoapToken>;
  pageInfo: PaginatedResultInfo;
};

/** Popular Nft collections paginated result */
export type PaginatedPopularNftCollectionsResult = {
  __typename?: 'PaginatedPopularNftCollectionsResult';
  items: Array<NftCollectionWithOwners>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedProfileActionHistoryResult = {
  __typename?: 'PaginatedProfileActionHistoryResult';
  items: Array<ProfileActionHistory>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated profile managers result */
export type PaginatedProfileManagersResult = {
  __typename?: 'PaginatedProfileManagersResult';
  items: Array<ProfilesManagedResult>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated profile result */
export type PaginatedProfileResult = {
  __typename?: 'PaginatedProfileResult';
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedPublicationPrimaryResult = {
  __typename?: 'PaginatedPublicationPrimaryResult';
  items: Array<PrimaryPublication>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedPublicationsResult = {
  __typename?: 'PaginatedPublicationsResult';
  items: Array<AnyPublication>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedPublicationsTagsResult = {
  __typename?: 'PaginatedPublicationsTagsResult';
  items: Array<TagResult>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated result info */
export type PaginatedResultInfo = {
  __typename?: 'PaginatedResultInfo';
  /** Cursor to query next results */
  next?: Maybe<Scalars['Cursor']>;
  /** Cursor to query the actual results */
  prev?: Maybe<Scalars['Cursor']>;
};

export type PaginatedRevenueFromPublicationsResult = {
  __typename?: 'PaginatedRevenueFromPublicationsResult';
  items: Array<PublicationRevenue>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedSupportedModules = {
  __typename?: 'PaginatedSupportedModules';
  items: Array<SupportedModule>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedWhoReactedResult = {
  __typename?: 'PaginatedWhoReactedResult';
  items: Array<ProfileWhoReactedResult>;
  pageInfo: PaginatedResultInfo;
};

export type PhysicalAddress = {
  __typename?: 'PhysicalAddress';
  /** The country name component. */
  country: Scalars['EncryptableString'];
  /** The full mailing address formatted for display. */
  formatted?: Maybe<Scalars['EncryptableString']>;
  /** The city or locality. */
  locality: Scalars['EncryptableString'];
  /** The zip or postal code. */
  postalCode?: Maybe<Scalars['EncryptableString']>;
  /** The state or region. */
  region?: Maybe<Scalars['EncryptableString']>;
  /** The street address including house number, street name, P.O. Box, apartment or unit number and extended multi-line address information. */
  streetAddress?: Maybe<Scalars['EncryptableString']>;
};

/** The POAP Event result */
export type PoapEvent = {
  __typename?: 'PoapEvent';
  animationUrl?: Maybe<Scalars['URL']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  eventTemplateId?: Maybe<Scalars['Int']>;
  eventUrl?: Maybe<Scalars['URL']>;
  expiryDate?: Maybe<Scalars['DateTime']>;
  fancyId?: Maybe<Scalars['String']>;
  fromAdmin?: Maybe<Scalars['Boolean']>;
  id: Scalars['PoapEventId'];
  imageUrl?: Maybe<Scalars['URL']>;
  name?: Maybe<Scalars['String']>;
  privateEvent?: Maybe<Scalars['Boolean']>;
  startDate?: Maybe<Scalars['DateTime']>;
  virtualEvent?: Maybe<Scalars['Boolean']>;
  year?: Maybe<Scalars['Int']>;
};

export type PoapEventQueryRequest = {
  eventId: Scalars['PoapEventId'];
};

export type PoapHoldersQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  eventId: Scalars['PoapEventId'];
  limit?: InputMaybe<LimitType>;
};

/** The Poap Token Event */
export type PoapToken = {
  __typename?: 'PoapToken';
  created: Scalars['DateTime'];
  event: PoapEvent;
  /** Poap Event Id */
  eventId: Scalars['PoapEventId'];
  /** Which network the token is: L1 (eth) or L2 (Gnosis) */
  layer: PoapTokenLayerType;
  /** migrated to L1 at */
  migrated?: Maybe<Scalars['DateTime']>;
  owner: NetworkAddress;
  tokenId: Scalars['TokenId'];
};

export enum PoapTokenLayerType {
  Layer1 = 'Layer1',
  Layer2 = 'Layer2'
}

export enum PopularNftCollectionsOrder {
  TotalLensProfileOwners = 'TotalLensProfileOwners',
  TotalOwners = 'TotalOwners'
}

/** Popular NFT collections request */
export type PopularNftCollectionsRequest = {
  /** The chain ids to look for NFTs on. Ethereum and Polygon are supported. If omitted, it will look on both chains by default. */
  chainIds?: InputMaybe<Array<Scalars['ChainId']>>;
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** Exclude Lens Follower NFTs */
  excludeFollowers?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<LimitType>;
  /** Include only verified collections */
  onlyVerified?: InputMaybe<Scalars['Boolean']>;
  /** The ordering of Nft collection owners. Defaults to Total Lens Profile owners */
  orderBy?: InputMaybe<PopularNftCollectionsOrder>;
};

export type Post = {
  __typename?: 'Post';
  by: Profile;
  createdAt: Scalars['DateTime'];
  hashtagsMentioned: Array<Scalars['String']>;
  id: Scalars['PublicationId'];
  isEncrypted: Scalars['Boolean'];
  isHidden: Scalars['Boolean'];
  metadata: PublicationMetadata;
  momoka?: Maybe<MomokaInfo>;
  openActionModules?: Maybe<Array<OpenActionModule>>;
  operations: PublicationOperations;
  profilesMentioned: Array<ProfileMentioned>;
  publishedOn?: Maybe<App>;
  referenceModule?: Maybe<ReferenceModule>;
  stats: PublicationStats;
  txHash?: Maybe<Scalars['TxHash']>;
};


export type PostStatsArgs = {
  request?: InputMaybe<PublicationStatsInput>;
};

export type PrfResult = {
  __typename?: 'PrfResult';
  dd: Scalars['Boolean'];
  ss: Scalars['Boolean'];
};

export type PrimaryPublication = Comment | Post | Quote;

/** The Profile */
export type Profile = {
  __typename?: 'Profile';
  /** When the profile was created */
  createdAt: Scalars['DateTime'];
  /** The follow module */
  followModule?: Maybe<FollowModule>;
  /** The profile follow nft address */
  followNftAddress?: Maybe<NetworkAddress>;
  guardian?: Maybe<ProfileGuardianResult>;
  /** The profile handle - a profile may not have one */
  handle?: Maybe<HandleInfo>;
  /** The profile id */
  id: Scalars['ProfileId'];
  interests: Array<Scalars['String']>;
  invitedBy?: Maybe<Profile>;
  /** The number of invites left */
  invitesLeft: Scalars['Int'];
  /** The profile metadata. You can optionally query profile metadata by app id.  */
  metadata?: Maybe<ProfileMetadata>;
  /** The on chain identity */
  onchainIdentity: ProfileOnchainIdentity;
  operations: ProfileOperations;
  /** Who owns the profile */
  ownedBy: NetworkAddress;
  /** If the profile has got signless enabled */
  signless: Scalars['Boolean'];
  /** If lens API will sponsor this persons for gasless experience, note they can have signless on but sponsor false which means it be rejected */
  sponsor: Scalars['Boolean'];
  stats: ProfileStats;
  txHash: Scalars['TxHash'];
};


/** The Profile */
export type ProfileMetadataArgs = {
  request?: InputMaybe<GetProfileMetadataArgs>;
};


/** The Profile */
export type ProfileStatsArgs = {
  request?: InputMaybe<ProfileStatsArg>;
};

/** The Profile */
export type ProfileActionHistory = {
  __typename?: 'ProfileActionHistory';
  actionType: ProfileActionHistoryType;
  actionedOn: Scalars['DateTime'];
  id: Scalars['Float'];
  txHash?: Maybe<Scalars['TxHash']>;
  who: Scalars['EvmAddress'];
};

export type ProfileActionHistoryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
};

/** Profile action history type */
export enum ProfileActionHistoryType {
  Acted = 'ACTED',
  Blocked = 'BLOCKED',
  Collected = 'COLLECTED',
  Comment = 'COMMENT',
  Follow = 'FOLLOW',
  LinkHandle = 'LINK_HANDLE',
  LoggedIn = 'LOGGED_IN',
  Mirror = 'MIRROR',
  Post = 'POST',
  Quote = 'QUOTE',
  RefreshAuthToken = 'REFRESH_AUTH_TOKEN',
  SetProfileMetadata = 'SET_PROFILE_METADATA',
  SetProfileModule = 'SET_PROFILE_MODULE',
  Unblocked = 'UNBLOCKED',
  Unfollow = 'UNFOLLOW',
  UnlinkHandle = 'UNLINK_HANDLE'
}

export type ProfileGuardianResult = {
  __typename?: 'ProfileGuardianResult';
  cooldownEndsOn?: Maybe<Scalars['DateTime']>;
  protected: Scalars['Boolean'];
};

/** Profile interests types */
export enum ProfileInterestTypes {
  ArtEntertainment = 'ART_ENTERTAINMENT',
  ArtEntertainmentAnime = 'ART_ENTERTAINMENT__ANIME',
  ArtEntertainmentArt = 'ART_ENTERTAINMENT__ART',
  ArtEntertainmentBooks = 'ART_ENTERTAINMENT__BOOKS',
  ArtEntertainmentDesign = 'ART_ENTERTAINMENT__DESIGN',
  ArtEntertainmentFashion = 'ART_ENTERTAINMENT__FASHION',
  ArtEntertainmentFilmTv = 'ART_ENTERTAINMENT__FILM_TV',
  ArtEntertainmentMemes = 'ART_ENTERTAINMENT__MEMES',
  ArtEntertainmentMusic = 'ART_ENTERTAINMENT__MUSIC',
  ArtEntertainmentPhotography = 'ART_ENTERTAINMENT__PHOTOGRAPHY',
  Business = 'BUSINESS',
  BusinessCreatorEconomy = 'BUSINESS__CREATOR_ECONOMY',
  BusinessFinance = 'BUSINESS__FINANCE',
  BusinessMarketing = 'BUSINESS__MARKETING',
  Career = 'CAREER',
  Crypto = 'CRYPTO',
  CryptoBitcoin = 'CRYPTO__BITCOIN',
  CryptoDaos = 'CRYPTO__DAOS',
  CryptoDefi = 'CRYPTO__DEFI',
  CryptoEthereum = 'CRYPTO__ETHEREUM',
  CryptoGm = 'CRYPTO__GM',
  CryptoGovernance = 'CRYPTO__GOVERNANCE',
  CryptoL1 = 'CRYPTO__L1',
  CryptoL2 = 'CRYPTO__L2',
  CryptoMetaverse = 'CRYPTO__METAVERSE',
  CryptoNft = 'CRYPTO__NFT',
  CryptoRekt = 'CRYPTO__REKT',
  CryptoScaling = 'CRYPTO__SCALING',
  CryptoWeb3 = 'CRYPTO__WEB3',
  CryptoWeb3Social = 'CRYPTO__WEB3_SOCIAL',
  Education = 'EDUCATION',
  FamilyParenting = 'FAMILY_PARENTING',
  FoodDrink = 'FOOD_DRINK',
  FoodDrinkBeer = 'FOOD_DRINK__BEER',
  FoodDrinkCocktails = 'FOOD_DRINK__COCKTAILS',
  FoodDrinkCooking = 'FOOD_DRINK__COOKING',
  FoodDrinkRestaurants = 'FOOD_DRINK__RESTAURANTS',
  FoodDrinkWine = 'FOOD_DRINK__WINE',
  HealthFitness = 'HEALTH_FITNESS',
  HealthFitnessBiohacking = 'HEALTH_FITNESS__BIOHACKING',
  HealthFitnessExercise = 'HEALTH_FITNESS__EXERCISE',
  HobbiesInterests = 'HOBBIES_INTERESTS',
  HobbiesInterestsArtsCrafts = 'HOBBIES_INTERESTS__ARTS_CRAFTS',
  HobbiesInterestsCars = 'HOBBIES_INTERESTS__CARS',
  HobbiesInterestsCollecting = 'HOBBIES_INTERESTS__COLLECTING',
  HobbiesInterestsGaming = 'HOBBIES_INTERESTS__GAMING',
  HobbiesInterestsSports = 'HOBBIES_INTERESTS__SPORTS',
  HobbiesInterestsTravel = 'HOBBIES_INTERESTS__TRAVEL',
  HomeGarden = 'HOME_GARDEN',
  HomeGardenAnimals = 'HOME_GARDEN__ANIMALS',
  HomeGardenGardening = 'HOME_GARDEN__GARDENING',
  HomeGardenHomeImprovement = 'HOME_GARDEN__HOME_IMPROVEMENT',
  HomeGardenNature = 'HOME_GARDEN__NATURE',
  LawGovernmentPolitics = 'LAW_GOVERNMENT_POLITICS',
  LawGovernmentPoliticsRegulation = 'LAW_GOVERNMENT_POLITICS__REGULATION',
  Lens = 'LENS',
  News = 'NEWS',
  Nsfw = 'NSFW',
  Technology = 'TECHNOLOGY',
  TechnologyAiMl = 'TECHNOLOGY__AI_ML',
  TechnologyBiotech = 'TECHNOLOGY__BIOTECH',
  TechnologyProgramming = 'TECHNOLOGY__PROGRAMMING',
  TechnologyScience = 'TECHNOLOGY__SCIENCE',
  TechnologyTools = 'TECHNOLOGY__TOOLS'
}

export type ProfileInterestsRequest = {
  interests: Array<ProfileInterestTypes>;
};

export type ProfileManagersRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** The profile ID for which to retrieve managers */
  for: Scalars['ProfileId'];
  limit?: InputMaybe<LimitType>;
};

export type ProfileMentioned = {
  __typename?: 'ProfileMentioned';
  profile: Profile;
  snapshotHandleMentioned: HandleInfo;
  stillOwnsHandle: Scalars['Boolean'];
};

export type ProfileMetadata = {
  __typename?: 'ProfileMetadata';
  /** The app that this metadata is displayed on */
  appId?: Maybe<Scalars['AppId']>;
  /** Profile Custom attributes */
  attributes?: Maybe<Array<MetadataAttribute>>;
  /** The bio for the profile */
  bio?: Maybe<Scalars['Markdown']>;
  /** The cover picture for the profile */
  coverPicture?: Maybe<ImageSet>;
  /** The display name for the profile */
  displayName?: Maybe<Scalars['String']>;
  /** The picture for the profile */
  picture?: Maybe<ProfilePicture>;
  /** The raw uri for the which the profile metadata was set as */
  rawURI: Scalars['URI'];
};

export type ProfileMirrorResult = {
  __typename?: 'ProfileMirrorResult';
  mirrorId: Scalars['PublicationId'];
  mirroredAt: Scalars['DateTime'];
  profile: Profile;
};

export type ProfileOnchainIdentity = {
  __typename?: 'ProfileOnchainIdentity';
  /** The ens information */
  ens?: Maybe<EnsOnchainIdentity>;
  /** The POH status */
  proofOfHumanity: Scalars['Boolean'];
  /** The sybil dot org information */
  sybilDotOrg: SybilDotOrgIdentity;
  /** The worldcoin identity */
  worldcoin: WorldcoinIdentity;
};

export type ProfileOperations = {
  __typename?: 'ProfileOperations';
  canBlock: Scalars['Boolean'];
  canFollow: TriStateValue;
  canUnblock: Scalars['Boolean'];
  canUnfollow: Scalars['Boolean'];
  id: Scalars['ProfileId'];
  isBlockedByMe: OptimisticStatusResult;
  isFollowedByMe: OptimisticStatusResult;
  isFollowingMe: OptimisticStatusResult;
};

export type ProfileOwnershipCondition = {
  __typename?: 'ProfileOwnershipCondition';
  profileId: Scalars['ProfileId'];
};

export type ProfilePicture = ImageSet | NftImage;

export type ProfileReactedResult = {
  __typename?: 'ProfileReactedResult';
  profile: Profile;
  reactions: Array<ReactedResult>;
};

/** The reaction details for a publication */
export type ProfileReactionResult = {
  __typename?: 'ProfileReactionResult';
  /** The reaction */
  reaction: PublicationReactionType;
  /** The reaction date */
  reactionAt: Scalars['DateTime'];
};

export type ProfileRecommendationsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** Disable machine learning recommendations (default: false) */
  disableML?: InputMaybe<Scalars['Boolean']>;
  /** Filter based on a specific profile ID */
  for: Scalars['ProfileId'];
  limit?: InputMaybe<LimitType>;
  /** Shuffle the recommendations (default: false) */
  shuffle?: InputMaybe<Scalars['Boolean']>;
};

export type ProfileRequest = {
  /** The handle for profile you want to fetch - namespace/localname */
  forHandle?: InputMaybe<Scalars['Handle']>;
  /** The profile you want to fetch */
  forProfileId?: InputMaybe<Scalars['ProfileId']>;
};

export type ProfileSearchRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
  /** Query for the profile search */
  query: Scalars['String'];
  /** Filtering criteria for profile search */
  where?: InputMaybe<ProfileSearchWhere>;
};

export type ProfileSearchWhere = {
  /** Array of custom filters for profile search */
  customFilters?: InputMaybe<Array<CustomFiltersType>>;
};

/** The Profile Stats */
export type ProfileStats = {
  __typename?: 'ProfileStats';
  comments: Scalars['Int'];
  countOpenActions: Scalars['Int'];
  followers: Scalars['Int'];
  following: Scalars['Int'];
  id: Scalars['ProfileId'];
  mirrors: Scalars['Int'];
  posts: Scalars['Int'];
  publications: Scalars['Int'];
  quotes: Scalars['Int'];
  /** How many times a profile has reacted on something */
  reacted: Scalars['Int'];
  /** How many times other profiles have reacted on something this profile did */
  reactions: Scalars['Int'];
};


/** The Profile Stats */
export type ProfileStatsCountOpenActionsArgs = {
  request?: InputMaybe<ProfileStatsCountOpenActionArgs>;
};


/** The Profile Stats */
export type ProfileStatsReactedArgs = {
  request?: InputMaybe<ProfileStatsReactionArgs>;
};


/** The Profile Stats */
export type ProfileStatsReactionsArgs = {
  request?: InputMaybe<ProfileStatsReactionArgs>;
};

export type ProfileStatsArg = {
  customFilters?: InputMaybe<Array<CustomFiltersType>>;
  forApps?: InputMaybe<Array<Scalars['AppId']>>;
};

export type ProfileStatsCountOpenActionArgs = {
  anyOf?: InputMaybe<Array<OpenActionFilter>>;
};

export type ProfileStatsReactionArgs = {
  type: PublicationReactionType;
};

export type ProfileWhoReactedResult = {
  __typename?: 'ProfileWhoReactedResult';
  profile: Profile;
  reactions: Array<ProfileReactionResult>;
};

export type ProfilesManagedRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** The Ethereum address for which to retrieve managed profiles */
  for: Scalars['EvmAddress'];
  includeOwned?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<LimitType>;
};

export type ProfilesManagedResult = {
  __typename?: 'ProfilesManagedResult';
  address: Scalars['EvmAddress'];
};

export type ProfilesRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
  /** The where clause to use to filter on what you are looking for */
  where: ProfilesRequestWhere;
};

export type ProfilesRequestWhere = {
  /** Pass in an array of handles to get the profile entities */
  handles?: InputMaybe<Array<Scalars['Handle']>>;
  /** Pass in an array of evm address to get the profile entities they own */
  ownedBy?: InputMaybe<Array<Scalars['EvmAddress']>>;
  /** Pass in an array of profile ids to get the profile entities */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  /** Pass the publication id and get a list of the profiles who commented on it */
  whoCommentedOn?: InputMaybe<Scalars['PublicationId']>;
  /** Pass the publication id and get a list of the profiles who mirrored it */
  whoMirroredPublication?: InputMaybe<Scalars['PublicationId']>;
  /** Pass the publication id and get a list of the profiles who quoted it */
  whoQuotedPublication?: InputMaybe<Scalars['PublicationId']>;
};

export type PublicationBookmarkRequest = {
  on: Scalars['PublicationId'];
};

export type PublicationBookmarksRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
  where?: InputMaybe<PublicationBookmarksWhere>;
};

export type PublicationBookmarksWhere = {
  metadata?: InputMaybe<PublicationMetadataFilters>;
};

export type PublicationCommentOn = {
  id: Scalars['PublicationId'];
  ranking?: InputMaybe<PublicationCommentOnRanking>;
};

export type PublicationCommentOnRanking = {
  filter?: InputMaybe<CommentRankingFilterType>;
};

export enum PublicationContentWarningType {
  Nsfw = 'NSFW',
  Sensitive = 'SENSITIVE',
  Spoiler = 'SPOILER'
}

export type PublicationMarketplaceMetadataAttribute = {
  __typename?: 'PublicationMarketplaceMetadataAttribute';
  displayType?: Maybe<MarketplaceMetadataAttributeDisplayType>;
  traitType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type PublicationMetadata = ArticleMetadataV3 | AudioMetadataV3 | CheckingInMetadataV3 | EmbedMetadataV3 | EventMetadataV3 | ImageMetadataV3 | LinkMetadataV3 | LiveStreamMetadataV3 | MintMetadataV3 | SpaceMetadataV3 | StoryMetadataV3 | TextOnlyMetadataV3 | ThreeDMetadataV3 | TransactionMetadataV3 | VideoMetadataV3;

export type PublicationMetadataContentWarningFilter = {
  oneOf: Array<PublicationContentWarningType>;
};

export type PublicationMetadataEncryptionStrategy = PublicationMetadataLitEncryption;

export type PublicationMetadataFilters = {
  contentWarning?: InputMaybe<PublicationMetadataContentWarningFilter>;
  locale?: InputMaybe<Scalars['Locale']>;
  mainContentFocus?: InputMaybe<Array<PublicationMetadataMainFocusType>>;
  publishedOn?: InputMaybe<Array<Scalars['AppId']>>;
  tags?: InputMaybe<PublicationMetadataTagsFilter>;
};

export enum PublicationMetadataLicenseType {
  Cco = 'CCO',
  CcBy = 'CC_BY',
  CcByNc = 'CC_BY_NC',
  CcByNd = 'CC_BY_ND',
  TbnlCDtsaNplLedger = 'TBNL_C_DTSA_NPL_Ledger',
  TbnlCDtsaNplLegal = 'TBNL_C_DTSA_NPL_Legal',
  TbnlCDtsaPlLedger = 'TBNL_C_DTSA_PL_Ledger',
  TbnlCDtsaPlLegal = 'TBNL_C_DTSA_PL_Legal',
  TbnlCDtNplLedger = 'TBNL_C_DT_NPL_Ledger',
  TbnlCDtNplLegal = 'TBNL_C_DT_NPL_Legal',
  TbnlCDtPlLedger = 'TBNL_C_DT_PL_Ledger',
  TbnlCDtPlLegal = 'TBNL_C_DT_PL_Legal',
  TbnlCDNplLedger = 'TBNL_C_D_NPL_Ledger',
  TbnlCDNplLegal = 'TBNL_C_D_NPL_Legal',
  TbnlCDPlLedger = 'TBNL_C_D_PL_Ledger',
  TbnlCDPlLegal = 'TBNL_C_D_PL_Legal',
  TbnlCNdNplLedger = 'TBNL_C_ND_NPL_Ledger',
  TbnlCNdNplLegal = 'TBNL_C_ND_NPL_Legal',
  TbnlCNdPlLedger = 'TBNL_C_ND_PL_Ledger',
  TbnlCNdPlLegal = 'TBNL_C_ND_PL_Legal',
  TbnlNcDtsaNplLedger = 'TBNL_NC_DTSA_NPL_Ledger',
  TbnlNcDtsaNplLegal = 'TBNL_NC_DTSA_NPL_Legal',
  TbnlNcDtsaPlLedger = 'TBNL_NC_DTSA_PL_Ledger',
  TbnlNcDtsaPlLegal = 'TBNL_NC_DTSA_PL_Legal',
  TbnlNcDtNplLedger = 'TBNL_NC_DT_NPL_Ledger',
  TbnlNcDtNplLegal = 'TBNL_NC_DT_NPL_Legal',
  TbnlNcDtPlLedger = 'TBNL_NC_DT_PL_Ledger',
  TbnlNcDtPlLegal = 'TBNL_NC_DT_PL_Legal',
  TbnlNcDNplLedger = 'TBNL_NC_D_NPL_Ledger',
  TbnlNcDNplLegal = 'TBNL_NC_D_NPL_Legal',
  TbnlNcDPlLedger = 'TBNL_NC_D_PL_Ledger',
  TbnlNcDPlLegal = 'TBNL_NC_D_PL_Legal',
  TbnlNcNdNplLedger = 'TBNL_NC_ND_NPL_Ledger',
  TbnlNcNdNplLegal = 'TBNL_NC_ND_NPL_Legal',
  TbnlNcNdPlLedger = 'TBNL_NC_ND_PL_Ledger',
  TbnlNcNdPlLegal = 'TBNL_NC_ND_PL_Legal'
}

export type PublicationMetadataLitEncryption = {
  __typename?: 'PublicationMetadataLitEncryption';
  accessCondition: RootCondition;
  encryptedPaths: Array<Scalars['EncryptedPath']>;
  encryptionKey: Scalars['ContentEncryptionKey'];
};

export enum PublicationMetadataMainFocusType {
  Article = 'ARTICLE',
  Audio = 'AUDIO',
  CheckingIn = 'CHECKING_IN',
  Embed = 'EMBED',
  Event = 'EVENT',
  Image = 'IMAGE',
  Link = 'LINK',
  Livestream = 'LIVESTREAM',
  Mint = 'MINT',
  ShortVideo = 'SHORT_VIDEO',
  Space = 'SPACE',
  Story = 'STORY',
  TextOnly = 'TEXT_ONLY',
  ThreeD = 'THREE_D',
  Transaction = 'TRANSACTION',
  Video = 'VIDEO'
}

export type PublicationMetadataMedia = PublicationMetadataMediaAudio | PublicationMetadataMediaImage | PublicationMetadataMediaVideo;

export type PublicationMetadataMediaAudio = {
  __typename?: 'PublicationMetadataMediaAudio';
  artist?: Maybe<Scalars['EncryptableString']>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  audio: EncryptableAudioSet;
  cover?: Maybe<EncryptableImageSet>;
  credits?: Maybe<Scalars['EncryptableString']>;
  duration?: Maybe<Scalars['Int']>;
  genre?: Maybe<Scalars['EncryptableString']>;
  license?: Maybe<PublicationMetadataLicenseType>;
  lyrics?: Maybe<Scalars['EncryptableString']>;
  recordLabel?: Maybe<Scalars['EncryptableString']>;
};

export type PublicationMetadataMediaImage = {
  __typename?: 'PublicationMetadataMediaImage';
  /** Alternative text for the image */
  altTag?: Maybe<Scalars['EncryptableString']>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  image: EncryptableImageSet;
  license?: Maybe<PublicationMetadataLicenseType>;
};

export type PublicationMetadataMediaVideo = {
  __typename?: 'PublicationMetadataMediaVideo';
  /** Alternative text for the video */
  altTag?: Maybe<Scalars['EncryptableString']>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  cover?: Maybe<EncryptableImageSet>;
  duration?: Maybe<Scalars['Int']>;
  license?: Maybe<PublicationMetadataLicenseType>;
  video: EncryptableVideoSet;
};

export type PublicationMetadataTagsFilter = {
  all?: InputMaybe<Array<Scalars['String']>>;
  oneOf?: InputMaybe<Array<Scalars['String']>>;
};

export enum PublicationMetadataTransactionType {
  Erc20 = 'ERC20',
  Erc721 = 'ERC721',
  Other = 'OTHER'
}

export type PublicationNotInterestedRequest = {
  on: Scalars['PublicationId'];
};

export type PublicationOperations = {
  __typename?: 'PublicationOperations';
  actedOn: Array<OpenActionResult>;
  canAct: TriStateValue;
  canComment: TriStateValue;
  canDecrypt: CanDecryptResponse;
  canMirror: TriStateValue;
  canQuote: TriStateValue;
  hasActed: OptimisticStatusResult;
  hasBookmarked: Scalars['Boolean'];
  hasMirrored: Scalars['Boolean'];
  hasQuoted: Scalars['Boolean'];
  hasReacted: Scalars['Boolean'];
  hasReported: Scalars['Boolean'];
  id: Scalars['PublicationId'];
  isNotInterested: Scalars['Boolean'];
};


export type PublicationOperationsActedOnArgs = {
  request?: InputMaybe<PublicationOperationsActedArgs>;
};


export type PublicationOperationsCanActArgs = {
  request?: InputMaybe<PublicationOperationsActedArgs>;
};


export type PublicationOperationsHasActedArgs = {
  request?: InputMaybe<PublicationOperationsActedArgs>;
};


export type PublicationOperationsHasReactedArgs = {
  request?: InputMaybe<PublicationOperationsReactionArgs>;
};

export type PublicationOperationsActedArgs = {
  filter?: InputMaybe<OpenActionFilter>;
};

export type PublicationOperationsReactionArgs = {
  type?: InputMaybe<PublicationReactionType>;
};

export enum PublicationReactionType {
  Downvote = 'DOWNVOTE',
  Upvote = 'UPVOTE'
}

export enum PublicationReportingFraudSubreason {
  Impersonation = 'IMPERSONATION',
  Scam = 'SCAM'
}

export enum PublicationReportingIllegalSubreason {
  AnimalAbuse = 'ANIMAL_ABUSE',
  DirectThreat = 'DIRECT_THREAT',
  HumanAbuse = 'HUMAN_ABUSE',
  ThreatIndividual = 'THREAT_INDIVIDUAL',
  Violence = 'VIOLENCE'
}

export enum PublicationReportingReason {
  Fraud = 'FRAUD',
  Illegal = 'ILLEGAL',
  Sensitive = 'SENSITIVE',
  Spam = 'SPAM'
}

export enum PublicationReportingSensitiveSubreason {
  Nsfw = 'NSFW',
  Offensive = 'OFFENSIVE'
}

export enum PublicationReportingSpamSubreason {
  FakeEngagement = 'FAKE_ENGAGEMENT',
  LowSignal = 'LOW_SIGNAL',
  ManipulationAlgo = 'MANIPULATION_ALGO',
  Misleading = 'MISLEADING',
  MisuseHashtags = 'MISUSE_HASHTAGS',
  Repetitive = 'REPETITIVE',
  SomethingElse = 'SOMETHING_ELSE',
  Unrelated = 'UNRELATED'
}

export type PublicationRequest = {
  forId?: InputMaybe<Scalars['PublicationId']>;
  forTxHash?: InputMaybe<Scalars['TxHash']>;
};

export type PublicationRevenue = {
  __typename?: 'PublicationRevenue';
  publication: AnyPublication;
  revenue: Array<RevenueAggregate>;
};

export type PublicationSearchRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
  query: Scalars['String'];
  where?: InputMaybe<PublicationSearchWhere>;
};

export type PublicationSearchWhere = {
  customFilters?: InputMaybe<Array<CustomFiltersType>>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  publicationTypes?: InputMaybe<Array<SearchPublicationType>>;
};

export type PublicationStats = {
  __typename?: 'PublicationStats';
  bookmarks: Scalars['Int'];
  comments: Scalars['Int'];
  countOpenActions: Scalars['Int'];
  id: Scalars['PublicationId'];
  mirrors: Scalars['Int'];
  quotes: Scalars['Int'];
  reactions: Scalars['Int'];
};


export type PublicationStatsCountOpenActionsArgs = {
  request?: InputMaybe<PublicationStatsCountOpenActionArgs>;
};


export type PublicationStatsReactionsArgs = {
  request?: InputMaybe<PublicationStatsReactionArgs>;
};

export type PublicationStatsCountOpenActionArgs = {
  anyOf?: InputMaybe<Array<OpenActionFilter>>;
};

export type PublicationStatsInput = {
  customFilters?: InputMaybe<Array<CustomFiltersType>>;
  /** Filter the returned stats on apps and 1 of the following filters: tags, contentWarning, mainContentFocus, locale */
  metadata?: InputMaybe<PublicationMetadataFilters>;
};

export type PublicationStatsReactionArgs = {
  type: PublicationReactionType;
};

export enum PublicationType {
  Comment = 'COMMENT',
  Mirror = 'MIRROR',
  Post = 'POST',
  Quote = 'QUOTE'
}

export type PublicationValidateMetadataResult = {
  __typename?: 'PublicationValidateMetadataResult';
  reason?: Maybe<Scalars['String']>;
  valid: Scalars['Boolean'];
};

export type PublicationsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
  where: PublicationsWhere;
};

export type PublicationsTagsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
  orderBy?: InputMaybe<TagSortCriteriaType>;
  where?: InputMaybe<PublicationsTagsWhere>;
};

export type PublicationsTagsWhere = {
  publishedOn?: InputMaybe<Array<Scalars['AppId']>>;
};

export type PublicationsWhere = {
  actedBy?: InputMaybe<Scalars['ProfileId']>;
  commentOn?: InputMaybe<PublicationCommentOn>;
  customFilters?: InputMaybe<Array<CustomFiltersType>>;
  from?: InputMaybe<Array<Scalars['ProfileId']>>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  mirrorOn?: InputMaybe<Scalars['PublicationId']>;
  publicationIds?: InputMaybe<Array<Scalars['PublicationId']>>;
  publicationTypes?: InputMaybe<Array<PublicationType>>;
  quoteOn?: InputMaybe<Scalars['PublicationId']>;
  withOpenActions?: InputMaybe<Array<OpenActionFilter>>;
};

export type Query = {
  __typename?: 'Query';
  approvedAuthentications: PaginatedApprovedAuthenticationResult;
  approvedModuleAllowanceAmount: Array<ApprovedAllowanceAmountResult>;
  challenge: AuthChallengeResult;
  claimableProfiles: ClaimableProfilesResult;
  claimableStatus: ClaimProfileStatusType;
  /** Get all enabled currencies */
  currencies: PaginatedCurrenciesResult;
  currentSession: ApprovedAuthentication;
  /** Get the default profile for a given EvmAddress. If no default is explicitly set, you will get the oldest profile owned by the address. */
  defaultProfile?: Maybe<Profile>;
  exploreProfiles: PaginatedProfileResult;
  explorePublications: PaginatedExplorePublicationResult;
  feed: PaginatedFeedResult;
  feedHighlights: PaginatedFeedHighlightsResult;
  followRevenues: FollowRevenueResult;
  followStatusBulk: Array<FollowStatusBulkResult>;
  followers: PaginatedProfileResult;
  following: PaginatedProfileResult;
  generateModuleCurrencyApprovalData: GenerateModuleCurrencyApprovalResult;
  internalAllowedDomains: Array<Scalars['URI']>;
  internalClaimStatus?: Maybe<Scalars['Void']>;
  internalCuratedHandles: Array<Scalars['String']>;
  internalCuratedTags: Array<Scalars['String']>;
  internalInvites: Scalars['Int'];
  internalProfileStatus: PrfResult;
  invitedProfiles: Array<InvitedResult>;
  lastLoggedInProfile?: Maybe<Profile>;
  lensAPIOwnedEOAs: Array<Scalars['EvmAddress']>;
  lensProtocolVersion: LensProtocolVersion;
  lensTransactionStatus?: Maybe<LensTransactionResult>;
  momokaSubmitters: MomokaSubmittersResult;
  momokaSummary: MomokaSummaryResult;
  momokaTransaction?: Maybe<MomokaTransaction>;
  momokaTransactions: MomokaTransactionsResult;
  /** Returns a paged list of profiles that are followed by both the observer and the viewing profile */
  mutualFollowers: PaginatedProfileResult;
  /** Get the NFT collections that the given two profiles own at least one NFT of. */
  mutualNftCollections: PaginatedNftCollectionsResult;
  mutualPoaps: PaginatedPoapEventResult;
  /** Get the Lens Profiles that own NFTs from a given collection. */
  nftCollectionOwners: PaginatedProfileResult;
  /** Get the NFT collections that the given wallet or profileId owns at least one NFT of. Only supports Ethereum and Polygon NFTs. Note excludeFollowers is set to true by default, so the result will not include Lens Follower NFTsunless explicitly requested. */
  nftCollections: PaginatedNftCollectionsResult;
  nftGalleries: PaginatedNftGalleriesResult;
  nfts: PaginatedNftsResult;
  notifications: PaginatedNotificationResult;
  ownedHandles: PaginatedHandlesResult;
  ping: Scalars['String'];
  poapEvent?: Maybe<PoapEvent>;
  poapHolders: PaginatedProfileResult;
  poaps: PaginatedPoapTokenResult;
  /** Get the most popular NFT collections. Popularity is based on how many Lens Profiles own NFTs from a given collection. */
  popularNftCollections: PaginatedPopularNftCollectionsResult;
  profile?: Maybe<Profile>;
  profileActionHistory: PaginatedProfileActionHistoryResult;
  profileAlreadyInvited: Scalars['Boolean'];
  profileInterestsOptions: Array<Scalars['String']>;
  profileManagers: PaginatedProfileManagersResult;
  profileRecommendations: PaginatedProfileResult;
  profiles: PaginatedProfileResult;
  profilesManaged: PaginatedProfileResult;
  publication?: Maybe<AnyPublication>;
  publicationBookmarks: PaginatedPublicationsResult;
  publications: PaginatedPublicationsResult;
  publicationsTags: PaginatedPublicationsTagsResult;
  relayQueues: Array<RelayQueueResult>;
  revenueFromPublication?: Maybe<PublicationRevenue>;
  revenueFromPublications: PaginatedRevenueFromPublicationsResult;
  searchProfiles: PaginatedProfileResult;
  searchPublications: PaginatedPublicationPrimaryResult;
  supportedFollowModules: PaginatedSupportedModules;
  supportedOpenActionCollectModules: PaginatedSupportedModules;
  supportedOpenActionModules: PaginatedSupportedModules;
  supportedReferenceModules: PaginatedSupportedModules;
  txIdToTxHash?: Maybe<Scalars['TxHash']>;
  userSigNonces: UserSigNonces;
  validatePublicationMetadata: PublicationValidateMetadataResult;
  verify: Scalars['Boolean'];
  whoActedOnPublication: PaginatedProfileResult;
  /** The list of profiles that the logged in profile has blocked */
  whoHaveBlocked: PaginatedProfileResult;
  whoReactedPublication: PaginatedWhoReactedResult;
};


export type QueryApprovedAuthenticationsArgs = {
  request: ApprovedAuthenticationRequest;
};


export type QueryApprovedModuleAllowanceAmountArgs = {
  request: ApprovedModuleAllowanceAmountRequest;
};


export type QueryChallengeArgs = {
  request: ChallengeRequest;
};


export type QueryCurrenciesArgs = {
  request: PaginatedOffsetRequest;
};


export type QueryDefaultProfileArgs = {
  request: DefaultProfileRequest;
};


export type QueryExploreProfilesArgs = {
  request: ExploreProfilesRequest;
};


export type QueryExplorePublicationsArgs = {
  request: ExplorePublicationRequest;
};


export type QueryFeedArgs = {
  request: FeedRequest;
};


export type QueryFeedHighlightsArgs = {
  request: FeedHighlightsRequest;
};


export type QueryFollowRevenuesArgs = {
  request: FollowRevenueRequest;
};


export type QueryFollowStatusBulkArgs = {
  request: FollowStatusBulkRequest;
};


export type QueryFollowersArgs = {
  request: FollowersRequest;
};


export type QueryFollowingArgs = {
  request: FollowingRequest;
};


export type QueryGenerateModuleCurrencyApprovalDataArgs = {
  request: GenerateModuleCurrencyApprovalDataRequest;
};


export type QueryInternalAllowedDomainsArgs = {
  request: InternalAllowedDomainsRequest;
};


export type QueryInternalClaimStatusArgs = {
  request: InternalClaimStatusRequest;
};


export type QueryInternalCuratedHandlesArgs = {
  request: InternalCuratedHandlesRequest;
};


export type QueryInternalCuratedTagsArgs = {
  request: InternalCuratedTagsRequest;
};


export type QueryInternalInvitesArgs = {
  request: InternalInvitesRequest;
};


export type QueryInternalProfileStatusArgs = {
  request: InternalProfileStatusRequest;
};


export type QueryLastLoggedInProfileArgs = {
  request: LastLoggedInProfileRequest;
};


export type QueryLensTransactionStatusArgs = {
  request: LensTransactionStatusRequest;
};


export type QueryMomokaTransactionArgs = {
  request: MomokaTransactionRequest;
};


export type QueryMomokaTransactionsArgs = {
  request: MomokaTransactionsRequest;
};


export type QueryMutualFollowersArgs = {
  request: MutualFollowersRequest;
};


export type QueryMutualNftCollectionsArgs = {
  request: MutualNftCollectionsRequest;
};


export type QueryMutualPoapsArgs = {
  request: MutualPoapsQueryRequest;
};


export type QueryNftCollectionOwnersArgs = {
  request: NftCollectionOwnersRequest;
};


export type QueryNftCollectionsArgs = {
  request: NftCollectionsRequest;
};


export type QueryNftGalleriesArgs = {
  request: NftGalleriesRequest;
};


export type QueryNftsArgs = {
  request: NftsRequest;
};


export type QueryNotificationsArgs = {
  request?: InputMaybe<NotificationRequest>;
};


export type QueryOwnedHandlesArgs = {
  request: OwnedHandlesRequest;
};


export type QueryPoapEventArgs = {
  request: PoapEventQueryRequest;
};


export type QueryPoapHoldersArgs = {
  request: PoapHoldersQueryRequest;
};


export type QueryPoapsArgs = {
  request: UserPoapsQueryRequest;
};


export type QueryPopularNftCollectionsArgs = {
  request: PopularNftCollectionsRequest;
};


export type QueryProfileArgs = {
  request: ProfileRequest;
};


export type QueryProfileActionHistoryArgs = {
  request: ProfileActionHistoryRequest;
};


export type QueryProfileAlreadyInvitedArgs = {
  request: AlreadyInvitedCheckRequest;
};


export type QueryProfileManagersArgs = {
  request: ProfileManagersRequest;
};


export type QueryProfileRecommendationsArgs = {
  request: ProfileRecommendationsRequest;
};


export type QueryProfilesArgs = {
  request: ProfilesRequest;
};


export type QueryProfilesManagedArgs = {
  request: ProfilesManagedRequest;
};


export type QueryPublicationArgs = {
  request: PublicationRequest;
};


export type QueryPublicationBookmarksArgs = {
  request?: InputMaybe<PublicationBookmarksRequest>;
};


export type QueryPublicationsArgs = {
  request: PublicationsRequest;
};


export type QueryPublicationsTagsArgs = {
  request?: InputMaybe<PublicationsTagsRequest>;
};


export type QueryRevenueFromPublicationArgs = {
  request: RevenueFromPublicationRequest;
};


export type QueryRevenueFromPublicationsArgs = {
  request: RevenueFromPublicationsRequest;
};


export type QuerySearchProfilesArgs = {
  request: ProfileSearchRequest;
};


export type QuerySearchPublicationsArgs = {
  request: PublicationSearchRequest;
};


export type QuerySupportedFollowModulesArgs = {
  request: SupportedModulesRequest;
};


export type QuerySupportedOpenActionCollectModulesArgs = {
  request: SupportedModulesRequest;
};


export type QuerySupportedOpenActionModulesArgs = {
  request: SupportedModulesRequest;
};


export type QuerySupportedReferenceModulesArgs = {
  request: SupportedModulesRequest;
};


export type QueryTxIdToTxHashArgs = {
  for: Scalars['TxId'];
};


export type QueryValidatePublicationMetadataArgs = {
  request: ValidatePublicationMetadataRequest;
};


export type QueryVerifyArgs = {
  request: VerifyRequest;
};


export type QueryWhoActedOnPublicationArgs = {
  request: WhoActedOnPublicationRequest;
};


export type QueryWhoHaveBlockedArgs = {
  request: WhoHaveBlockedRequest;
};


export type QueryWhoReactedPublicationArgs = {
  request: WhoReactedPublicationRequest;
};

export type Quote = {
  __typename?: 'Quote';
  by: Profile;
  createdAt: Scalars['DateTime'];
  hashtagsMentioned: Array<Scalars['String']>;
  id: Scalars['PublicationId'];
  isEncrypted: Scalars['Boolean'];
  isHidden: Scalars['Boolean'];
  metadata: PublicationMetadata;
  momoka?: Maybe<MomokaInfo>;
  openActionModules?: Maybe<Array<OpenActionModule>>;
  operations: PublicationOperations;
  profilesMentioned: Array<ProfileMentioned>;
  publishedOn?: Maybe<App>;
  quoteOn: PrimaryPublication;
  referenceModule?: Maybe<ReferenceModule>;
  stats: PublicationStats;
  txHash?: Maybe<Scalars['TxHash']>;
};


export type QuoteStatsArgs = {
  request?: InputMaybe<PublicationStatsInput>;
};

export type QuoteNotification = {
  __typename?: 'QuoteNotification';
  id: Scalars['UUID'];
  quote: Quote;
};

export type RateRequest = {
  for: SupportedFiatType;
};

export type ReactedResult = {
  __typename?: 'ReactedResult';
  reactedAt: Scalars['DateTime'];
  reaction: PublicationReactionType;
};

export type ReactionEvent = {
  __typename?: 'ReactionEvent';
  by: Profile;
  createdAt: Scalars['DateTime'];
  reaction: PublicationReactionType;
};

export type ReactionNotification = {
  __typename?: 'ReactionNotification';
  id: Scalars['UUID'];
  publication: PrimaryPublication;
  reactions: Array<ProfileReactedResult>;
};

export type ReactionRequest = {
  for: Scalars['PublicationId'];
  reaction: PublicationReactionType;
};

export type RecipientDataInput = {
  /** Recipient of collect fees. */
  recipient: Scalars['EvmAddress'];
  /** Split %, should be between 0.01 and 100. Up to 2 decimal points supported. All % should add up to 100 */
  split: Scalars['Float'];
};

export type RecipientDataOutput = {
  __typename?: 'RecipientDataOutput';
  /** Recipient of collect fees. */
  recipient: Scalars['EvmAddress'];
  /** Split %, should be between 0.01 and 100. Up to 2 decimal points supported. All % should add up to 100 */
  split: Scalars['Float'];
};

export type ReferenceModule = DegreesOfSeparationReferenceModuleSettings | FollowOnlyReferenceModuleSettings | LegacyDegreesOfSeparationReferenceModuleSettings | LegacyFollowOnlyReferenceModuleSettings | UnknownReferenceModuleSettings;

export type ReferenceModuleInput = {
  degreesOfSeparationReferenceModule?: InputMaybe<DegreesOfSeparationReferenceModuleInput>;
  followerOnlyReferenceModule?: InputMaybe<Scalars['Boolean']>;
  unknownReferenceModule?: InputMaybe<UnknownReferenceModuleInput>;
};

export enum ReferenceModuleType {
  DegreesOfSeparationReferenceModule = 'DegreesOfSeparationReferenceModule',
  FollowerOnlyReferenceModule = 'FollowerOnlyReferenceModule',
  LegacyDegreesOfSeparationReferenceModule = 'LegacyDegreesOfSeparationReferenceModule',
  LegacyFollowerOnlyReferenceModule = 'LegacyFollowerOnlyReferenceModule',
  UnknownReferenceModule = 'UnknownReferenceModule'
}

export type RefreshPublicationMetadataRequest = {
  for: Scalars['PublicationId'];
};

export type RefreshPublicationMetadataResult = {
  __typename?: 'RefreshPublicationMetadataResult';
  result: RefreshPublicationMetadataResultType;
};

export enum RefreshPublicationMetadataResultType {
  AlreadyPending = 'ALREADY_PENDING',
  Queued = 'QUEUED',
  ValidPublicationNotFound = 'VALID_PUBLICATION_NOT_FOUND'
}

/** The refresh request */
export type RefreshRequest = {
  /** The refresh token */
  refreshToken: Scalars['Jwt'];
};

export type RelayError = {
  __typename?: 'RelayError';
  reason: RelayErrorReasonType;
};

export enum RelayErrorReasonType {
  AppNotAllowed = 'APP_NOT_ALLOWED',
  Expired = 'EXPIRED',
  Failed = 'FAILED',
  NotSponsored = 'NOT_SPONSORED',
  RateLimited = 'RATE_LIMITED',
  WrongWalletSigned = 'WRONG_WALLET_SIGNED'
}

export type RelayMomokaResult = CreateMomokaPublicationResult | LensProfileManagerRelayError;

export type RelayQueueResult = {
  __typename?: 'RelayQueueResult';
  key: RelayRoleKey;
  queue: Scalars['Int'];
  relay: NetworkAddress;
};

export type RelayResult = RelayError | RelaySuccess;

export enum RelayRoleKey {
  CreateProfile = 'CREATE_PROFILE',
  LensManager_1 = 'LENS_MANAGER_1',
  LensManager_2 = 'LENS_MANAGER_2',
  LensManager_3 = 'LENS_MANAGER_3',
  LensManager_4 = 'LENS_MANAGER_4',
  LensManager_5 = 'LENS_MANAGER_5',
  LensManager_6 = 'LENS_MANAGER_6',
  LensManager_7 = 'LENS_MANAGER_7',
  LensManager_8 = 'LENS_MANAGER_8',
  LensManager_9 = 'LENS_MANAGER_9',
  LensManager_10 = 'LENS_MANAGER_10',
  LensManager_11 = 'LENS_MANAGER_11',
  LensManager_12 = 'LENS_MANAGER_12',
  LensManager_13 = 'LENS_MANAGER_13',
  LensManager_14 = 'LENS_MANAGER_14',
  LensManager_15 = 'LENS_MANAGER_15',
  LensManager_16 = 'LENS_MANAGER_16',
  LensManager_17 = 'LENS_MANAGER_17',
  LensManager_18 = 'LENS_MANAGER_18',
  LensManager_19 = 'LENS_MANAGER_19',
  LensManager_20 = 'LENS_MANAGER_20',
  WithSig_1 = 'WITH_SIG_1',
  WithSig_2 = 'WITH_SIG_2',
  WithSig_3 = 'WITH_SIG_3',
  WithSig_4 = 'WITH_SIG_4',
  WithSig_5 = 'WITH_SIG_5',
  WithSig_6 = 'WITH_SIG_6',
  WithSig_7 = 'WITH_SIG_7',
  WithSig_8 = 'WITH_SIG_8',
  WithSig_9 = 'WITH_SIG_9',
  WithSig_10 = 'WITH_SIG_10'
}

export type RelaySuccess = {
  __typename?: 'RelaySuccess';
  txHash?: Maybe<Scalars['TxHash']>;
  txId: Scalars['TxId'];
};

export type ReportPublicationRequest = {
  additionalComments?: InputMaybe<Scalars['String']>;
  for: Scalars['PublicationId'];
  reason: ReportingReasonInput;
};

export type ReportingReasonInput = {
  fraudReason?: InputMaybe<FraudReasonInput>;
  illegalReason?: InputMaybe<IllegalReasonInput>;
  sensitiveReason?: InputMaybe<SensitiveReasonInput>;
  spamReason?: InputMaybe<SpamReasonInput>;
};

export type ReservedClaimable = {
  __typename?: 'ReservedClaimable';
  expiry: Scalars['DateTime'];
  id: Scalars['String'];
  source: Scalars['AppId'];
  /** The full handle - namespace/localname */
  withHandle: Scalars['Handle'];
};

export type RevenueAggregate = {
  __typename?: 'RevenueAggregate';
  total: Amount;
};

export type RevenueFromPublicationRequest = {
  for: Scalars['PublicationId'];
  /** Will return revenue for publications made on any of the provided app ids. Will include all apps if omitted */
  publishedOn?: InputMaybe<Array<Scalars['AppId']>>;
};

export type RevenueFromPublicationsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** The profile to get revenue for */
  for: Scalars['ProfileId'];
  limit?: InputMaybe<LimitType>;
  /** Will return revenue for publications made on any of the provided app ids. Will include all apps if omitted */
  publishedOn?: InputMaybe<Array<Scalars['AppId']>>;
};

export type RevertFollowModuleSettings = {
  __typename?: 'RevertFollowModuleSettings';
  contract: NetworkAddress;
  type: FollowModuleType;
};

export type RevokeAuthenticationRequest = {
  /** The token authorization id wish to revoke */
  authorizationId: Scalars['UUID'];
};

export type RootCondition = {
  __typename?: 'RootCondition';
  criteria: Array<SecondTierCondition>;
};

export enum SearchPublicationType {
  Comment = 'COMMENT',
  Post = 'POST',
  Quote = 'QUOTE'
}

export type SecondTierCondition = AdvancedContractCondition | AndCondition | CollectCondition | EoaOwnershipCondition | Erc20OwnershipCondition | FollowCondition | NftOwnershipCondition | OrCondition | ProfileOwnershipCondition;

export type SensitiveReasonInput = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingSensitiveSubreason;
};

export type SetDefaultProfileRequest = {
  profileId: Scalars['ProfileId'];
};

export type SetFollowModuleRequest = {
  followModule: FollowModuleInput;
};

/** The signed auth challenge */
export type SignedAuthChallenge = {
  id: Scalars['ChallengeId'];
  /** The signature */
  signature: Scalars['Signature'];
};

export type SimpleCollectOpenActionModuleInput = {
  amount?: InputMaybe<AmountInput>;
  collectLimit?: InputMaybe<Scalars['String']>;
  endsAt?: InputMaybe<Scalars['DateTime']>;
  followerOnly: Scalars['Boolean'];
  recipient?: InputMaybe<Scalars['EvmAddress']>;
  referralFee?: InputMaybe<Scalars['Float']>;
};

export type SimpleCollectOpenActionSettings = {
  __typename?: 'SimpleCollectOpenActionSettings';
  /** The collect module amount info. `Amount.value = 0` in case of free collects. */
  amount: Amount;
  /** The maximum number of collects for this publication. */
  collectLimit?: Maybe<Scalars['String']>;
  /** The collect nft address - only deployed on first collect */
  collectNft?: Maybe<Scalars['EvmAddress']>;
  contract: NetworkAddress;
  /** The end timestamp after which collecting is impossible. */
  endsAt?: Maybe<Scalars['DateTime']>;
  /** True if only followers of publisher may collect the post. */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EvmAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
  type: OpenActionModuleType;
};

export type SpaceMetadataV3 = {
  __typename?: 'SpaceMetadataV3';
  appId?: Maybe<Scalars['AppId']>;
  attachments?: Maybe<Array<PublicationMetadataMedia>>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  /** Optional content. Empty if not set. */
  content: Scalars['EncryptableMarkdown'];
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  link: Scalars['EncryptableURI'];
  locale: Scalars['Locale'];
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  startsAt: Scalars['EncryptableDateTime'];
  tags?: Maybe<Array<Scalars['String']>>;
  title: Scalars['String'];
};

export type SpamReasonInput = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingSpamSubreason;
};

export type StoryMetadataV3 = {
  __typename?: 'StoryMetadataV3';
  appId?: Maybe<Scalars['AppId']>;
  asset: PublicationMetadataMedia;
  attributes?: Maybe<Array<MetadataAttribute>>;
  /** Optional content. Empty if not set. */
  content: Scalars['EncryptableMarkdown'];
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  locale: Scalars['Locale'];
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export type Subscription = {
  __typename?: 'Subscription';
  authorizationRecordRevoked?: Maybe<Scalars['Void']>;
  newMomokaTransaction: MomokaTransaction;
  newNotification?: Maybe<Notification>;
  newPublicationStats: PublicationStats;
  userSigNonces: UserSigNonces;
};


export type SubscriptionAuthorizationRecordRevokedArgs = {
  authorizationId: Scalars['UUID'];
};


export type SubscriptionNewNotificationArgs = {
  for: Scalars['ProfileId'];
};


export type SubscriptionNewPublicationStatsArgs = {
  for: Scalars['PublicationId'];
};


export type SubscriptionUserSigNoncesArgs = {
  address: Scalars['EvmAddress'];
};

export type SuggestedFormattedHandle = {
  __typename?: 'SuggestedFormattedHandle';
  /** The full formatted handle - namespace/@localname */
  full: Scalars['String'];
  /** The formatted handle - @localname */
  localName: Scalars['String'];
};

export enum SupportedFiatType {
  Eur = 'EUR',
  Gbp = 'GBP',
  Usd = 'USD'
}

export type SupportedModule = KnownSupportedModule | UnknownSupportedModule;

export type SupportedModulesRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  includeUnknown?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<LimitType>;
};

export type SybilDotOrgIdentity = {
  __typename?: 'SybilDotOrgIdentity';
  source?: Maybe<SybilDotOrgIdentitySource>;
  /** The sybil dot org status */
  verified: Scalars['Boolean'];
};

export type SybilDotOrgIdentitySource = {
  __typename?: 'SybilDotOrgIdentitySource';
  twitter: SybilDotOrgTwitterIdentity;
};

export type SybilDotOrgTwitterIdentity = {
  __typename?: 'SybilDotOrgTwitterIdentity';
  handle?: Maybe<Scalars['String']>;
};

export type TagResult = {
  __typename?: 'TagResult';
  tag: Scalars['String'];
  total: Scalars['Int'];
};

export enum TagSortCriteriaType {
  Alphabetical = 'ALPHABETICAL',
  MostPopular = 'MOST_POPULAR'
}

export type TextOnlyMetadataV3 = {
  __typename?: 'TextOnlyMetadataV3';
  appId?: Maybe<Scalars['AppId']>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  content: Scalars['EncryptableMarkdown'];
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  locale: Scalars['Locale'];
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export type ThirdTierCondition = AdvancedContractCondition | CollectCondition | EoaOwnershipCondition | Erc20OwnershipCondition | FollowCondition | NftOwnershipCondition | ProfileOwnershipCondition;

export type ThreeDMetadataV3 = {
  __typename?: 'ThreeDMetadataV3';
  appId?: Maybe<Scalars['AppId']>;
  assets: Array<ThreeDMetadataV3Asset>;
  attachments?: Maybe<Array<PublicationMetadataMedia>>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  /** Optional content. Empty if not set. */
  content: Scalars['EncryptableMarkdown'];
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  locale: Scalars['Locale'];
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export type ThreeDMetadataV3Asset = {
  __typename?: 'ThreeDMetadataV3Asset';
  format: Scalars['String'];
  license?: Maybe<PublicationMetadataLicenseType>;
  playerURL: Scalars['EncryptableURI'];
  uri: Scalars['EncryptableURI'];
  zipPath?: Maybe<Scalars['String']>;
};

export type TransactionMetadataV3 = {
  __typename?: 'TransactionMetadataV3';
  appId?: Maybe<Scalars['AppId']>;
  attachments?: Maybe<Array<PublicationMetadataMedia>>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  chainId: Scalars['ChainId'];
  /** Optional content. Empty if not set. */
  content: Scalars['EncryptableMarkdown'];
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  locale: Scalars['Locale'];
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  tags?: Maybe<Array<Scalars['String']>>;
  txHash: Scalars['EncryptableTxHash'];
  type: PublicationMetadataTransactionType;
};

export enum TriStateValue {
  No = 'NO',
  Unknown = 'UNKNOWN',
  Yes = 'YES'
}

export type TypedDataOptions = {
  /** If you wish to override the nonce for the sig if you want to do some clever stuff in the client */
  overrideSigNonce: Scalars['Nonce'];
};

export type UnblockRequest = {
  profiles: Array<Scalars['ProfileId']>;
};

export type UnfollowRequest = {
  unfollow: Array<Scalars['ProfileId']>;
};

export type UnknownFollowModuleInput = {
  address: Scalars['EvmAddress'];
  data: Scalars['BlockchainData'];
};

export type UnknownFollowModuleRedeemInput = {
  address: Scalars['EvmAddress'];
  data: Scalars['BlockchainData'];
};

export type UnknownFollowModuleSettings = {
  __typename?: 'UnknownFollowModuleSettings';
  contract: NetworkAddress;
  /** The data used to setup the module which you can decode with your known ABI  */
  followModuleReturnData?: Maybe<Scalars['BlockchainData']>;
  type: FollowModuleType;
};

export type UnknownOpenActionActRedeemInput = {
  address: Scalars['EvmAddress'];
  data: Scalars['BlockchainData'];
};

export type UnknownOpenActionModuleInput = {
  address: Scalars['EvmAddress'];
  data: Scalars['BlockchainData'];
};

export type UnknownOpenActionModuleSettings = {
  __typename?: 'UnknownOpenActionModuleSettings';
  /** The collect nft address - only deployed on first collect and if its a collectable open action */
  collectNft?: Maybe<Scalars['EvmAddress']>;
  contract: NetworkAddress;
  /** The data used to setup the module which you can decode with your known ABI  */
  openActionModuleReturnData?: Maybe<Scalars['BlockchainData']>;
  type: OpenActionModuleType;
};

export type UnknownOpenActionResult = {
  __typename?: 'UnknownOpenActionResult';
  address: Scalars['EvmAddress'];
  category?: Maybe<OpenActionCategoryType>;
  initReturnData?: Maybe<Scalars['BlockchainData']>;
};

export type UnknownReferenceModuleInput = {
  address: Scalars['EvmAddress'];
  data: Scalars['BlockchainData'];
};

export type UnknownReferenceModuleSettings = {
  __typename?: 'UnknownReferenceModuleSettings';
  contract: NetworkAddress;
  /** The data used to setup the module which you can decode with your known ABI  */
  referenceModuleReturnData?: Maybe<Scalars['BlockchainData']>;
  type: ReferenceModuleType;
};

export type UnknownSupportedModule = {
  __typename?: 'UnknownSupportedModule';
  contract: NetworkAddress;
  moduleName: Scalars['String'];
};

export type UnlinkHandleFromProfileRequest = {
  /** The full handle - namespace/localname */
  handle: Scalars['Handle'];
};

export type UserPoapsQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  for: Scalars['ProfileId'];
  limit?: InputMaybe<LimitType>;
};

export type UserSigNonces = {
  __typename?: 'UserSigNonces';
  lensHubOnchainSigNonce: Scalars['Nonce'];
  lensPublicActProxyOnchainSigNonce: Scalars['Nonce'];
  lensTokenHandleRegistryOnchainSigNonce: Scalars['Nonce'];
};

export type ValidatePublicationMetadataRequest = {
  json?: InputMaybe<Scalars['String']>;
  rawURI?: InputMaybe<Scalars['URI']>;
};

export type VerifyRequest = {
  /** The access token to verify */
  accessToken: Scalars['Jwt'];
};

export type Video = {
  __typename?: 'Video';
  mimeType?: Maybe<Scalars['MimeType']>;
  uri: Scalars['URI'];
};

export type VideoMetadataV3 = {
  __typename?: 'VideoMetadataV3';
  appId?: Maybe<Scalars['AppId']>;
  asset: PublicationMetadataMediaVideo;
  attachments?: Maybe<Array<PublicationMetadataMedia>>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  /** Optional content. Empty if not set. */
  content: Scalars['EncryptableMarkdown'];
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  isShortVideo: Scalars['Boolean'];
  locale: Scalars['Locale'];
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  tags?: Maybe<Array<Scalars['String']>>;
  /** The title of the video. Empty if not set. */
  title: Scalars['String'];
};

export type WalletAuthenticationToProfileAuthenticationRequest = {
  /** This can convert a wallet token to a profile token if you now onboarded */
  profileId: Scalars['ProfileId'];
};

export type WhoActedOnPublicationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
  on: Scalars['PublicationId'];
  where?: InputMaybe<WhoActedOnPublicationWhere>;
};

export type WhoActedOnPublicationWhere = {
  anyOf: Array<OpenActionFilter>;
};

export type WhoHaveBlockedRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
};

export type WhoReactedPublicationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  for: Scalars['PublicationId'];
  limit?: InputMaybe<LimitType>;
  where?: InputMaybe<WhoReactedPublicationWhere>;
};

export type WhoReactedPublicationWhere = {
  anyOf?: InputMaybe<Array<PublicationReactionType>>;
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
};

export type WorldcoinIdentity = {
  __typename?: 'WorldcoinIdentity';
  /** If the profile has verified as a user */
  isHuman: Scalars['Boolean'];
};

export enum WorldcoinPhoneVerifyType {
  Orb = 'ORB',
  Phone = 'PHONE'
}

export type WorldcoinPhoneVerifyWebhookRequest = {
  nullifierHash: Scalars['String'];
  signal: Scalars['EvmAddress'];
  signalType: WorldcoinPhoneVerifyType;
};

export type AuthenticateMutationVariables = Exact<{
  request: SignedAuthChallenge;
}>;


export type AuthenticateMutation = { __typename?: 'Mutation', authenticate: { __typename?: 'AuthenticationResult', accessToken: any, refreshToken: any } };

export type ChallengeQueryVariables = Exact<{
  request: ChallengeRequest;
}>;


export type ChallengeQuery = { __typename?: 'Query', challenge: { __typename?: 'AuthChallengeResult', id: any, text: string } };

export type RefreshMutationVariables = Exact<{
  request: RefreshRequest;
}>;


export type RefreshMutation = { __typename?: 'Mutation', refresh: { __typename?: 'AuthenticationResult', accessToken: any, refreshToken: any } };

export type RevokeAuthenticationMutationVariables = Exact<{
  authorizationId: Scalars['UUID'];
}>;


export type RevokeAuthenticationMutation = { __typename?: 'Mutation', revokeAuthentication?: any | null };

export type VerifyQueryVariables = Exact<{
  request: VerifyRequest;
}>;


export type VerifyQuery = { __typename?: 'Query', verify: boolean };

export type AddPublicationBookmarkMutationVariables = Exact<{
  request: PublicationBookmarkRequest;
}>;


export type AddPublicationBookmarkMutation = { __typename?: 'Mutation', addPublicationBookmark?: any | null };

export type PublicationBookmarksQueryVariables = Exact<{
  request: PublicationBookmarksRequest;
}>;


export type PublicationBookmarksQuery = { __typename?: 'Query', publicationBookmarks: { __typename?: 'PaginatedPublicationsResult', items: Array<{ __typename?: 'Comment', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, root: { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, commentOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, firstComment?: { __typename?: 'Comment', id: any } | null, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | { __typename?: 'Mirror', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, mirrorOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any } } | { __typename?: 'Post', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | { __typename?: 'Quote', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, quoteOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type RemovePublicationBookmarkMutationVariables = Exact<{
  request: PublicationBookmarkRequest;
}>;


export type RemovePublicationBookmarkMutation = { __typename?: 'Mutation', removePublicationBookmark?: any | null };

export type BroadcastOnchainMutationVariables = Exact<{
  request: BroadcastRequest;
}>;


export type BroadcastOnchainMutation = { __typename?: 'Mutation', broadcastOnchain: { __typename: 'RelayError', reason: RelayErrorReasonType } | { __typename: 'RelaySuccess', txHash?: any | null, txId: any } };

export type BroadcastOnMomokaMutationVariables = Exact<{
  request: BroadcastRequest;
}>;


export type BroadcastOnMomokaMutation = { __typename?: 'Mutation', broadcastOnMomoka: { __typename?: 'CreateMomokaPublicationResult', id: any, proof: any, momokaId: any } | { __typename: 'RelayError', reason: RelayErrorReasonType } };

export type UserSigNoncesQueryVariables = Exact<{ [key: string]: never; }>;


export type UserSigNoncesQuery = { __typename?: 'Query', userSigNonces: { __typename?: 'UserSigNonces', lensHubOnchainSigNonce: any, lensTokenHandleRegistryOnchainSigNonce: any } };

export type ClaimableProfilesQueryVariables = Exact<{ [key: string]: never; }>;


export type ClaimableProfilesQuery = { __typename?: 'Query', claimableProfiles: { __typename?: 'ClaimableProfilesResult', canMintProfileWithFreeTextHandle: boolean, reserved: Array<{ __typename?: 'ReservedClaimable', id: string, withHandle: any, source: any, expiry: any }> } };

export type ClaimableStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type ClaimableStatusQuery = { __typename?: 'Query', claimableStatus: ClaimProfileStatusType };

export type NetworkAddressFieldsFragment = { __typename?: 'NetworkAddress', address: any, chainId: any };

export type Erc20FieldsFragment = { __typename?: 'Erc20', name: string, symbol: string, decimals: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } };

export type AmountFieldsFragment = { __typename?: 'Amount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } };

export type CurrenciesQueryVariables = Exact<{
  request: PaginatedOffsetRequest;
}>;


export type CurrenciesQuery = { __typename?: 'Query', currencies: { __typename?: 'PaginatedCurrenciesResult', items: Array<{ __typename?: 'Erc20', name: string }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type ExploreProfilesQueryVariables = Exact<{
  request: ExploreProfilesRequest;
}>;


export type ExploreProfilesQuery = { __typename?: 'Query', exploreProfiles: { __typename?: 'PaginatedProfileResult', items: Array<{ __typename?: 'Profile', id: any, signless: boolean, sponsor: boolean, txHash: any, createdAt: any, interests: Array<string>, invitesLeft: number, ownedBy: { __typename?: 'NetworkAddress', address: any, chainId: any }, stats: { __typename?: 'ProfileStats', id: any, followers: number, following: number, comments: number, posts: number, mirrors: number, quotes: number, publications: number, reactions: number, countOpenActions: number }, operations: { __typename?: 'ProfileOperations', id: any, canBlock: boolean, canUnblock: boolean, canFollow: TriStateValue, canUnfollow: boolean, isBlockedByMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, isFollowedByMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, isFollowingMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean } }, guardian?: { __typename?: 'ProfileGuardianResult', protected: boolean, cooldownEndsOn?: any | null } | null, invitedBy?: { __typename?: 'Profile', id: any } | null, onchainIdentity: { __typename?: 'ProfileOnchainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnchainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source?: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } | null }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } }, followNftAddress?: { __typename?: 'NetworkAddress', address: any, chainId: any } | null, metadata?: { __typename?: 'ProfileMetadata', bio?: any | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | null, followModule?: { __typename?: 'FeeFollowModuleSettings', recipient: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any }, amount: { __typename?: 'Amount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } } } | { __typename?: 'RevertFollowModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'UnknownFollowModuleSettings', followModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type ExplorePublicationsQueryVariables = Exact<{
  request: ExplorePublicationRequest;
}>;


export type ExplorePublicationsQuery = { __typename?: 'Query', explorePublications: { __typename?: 'PaginatedExplorePublicationResult', items: Array<{ __typename?: 'Post', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | { __typename?: 'Quote', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, quoteOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type FeedHighlightsQueryVariables = Exact<{
  request: FeedHighlightsRequest;
}>;


export type FeedHighlightsQuery = { __typename?: 'Query', feedHighlights: { __typename?: 'PaginatedFeedHighlightsResult', items: Array<{ __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type FeedQueryVariables = Exact<{
  request: FeedRequest;
}>;


export type FeedQuery = { __typename?: 'Query', feed: { __typename?: 'PaginatedFeedResult', items: Array<{ __typename?: 'FeedItem', id: string, root: { __typename: 'Comment', id: any } | { __typename: 'Post', id: any } | { __typename: 'Quote', id: any }, mirrors: Array<{ __typename: 'Mirror', id: any }>, acted: Array<{ __typename?: 'OpenActionProfileActed', actedAt: any, by: { __typename?: 'Profile', id: any }, action: { __typename: 'KnownCollectOpenActionResult' } | { __typename: 'UnknownOpenActionResult' } }>, reactions: Array<{ __typename?: 'ReactionEvent', reaction: PublicationReactionType, createdAt: any, by: { __typename?: 'Profile', id: any } }>, comments: Array<{ __typename: 'Comment', id: any }> }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type FollowStatusBulkQueryVariables = Exact<{
  request: FollowStatusBulkRequest;
}>;


export type FollowStatusBulkQuery = { __typename?: 'Query', followStatusBulk: Array<{ __typename?: 'FollowStatusBulkResult', follower: any, profileId: any, status: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean } }> };

export type CreateFollowTypedDataMutationVariables = Exact<{
  request: FollowRequest;
}>;


export type CreateFollowTypedDataMutation = { __typename?: 'Mutation', createFollowTypedData: { __typename?: 'CreateFollowBroadcastItemResult', expiresAt: any, id: any, typedData: { __typename?: 'CreateFollowEIP712TypedData', domain: { __typename?: 'EIP712TypedDataDomain', name: string, chainId: any, version: string, verifyingContract: any }, types: { __typename?: 'CreateFollowEIP712TypedDataTypes', Follow: Array<{ __typename?: 'EIP712TypedDataField', name: string, type: string }> }, value: { __typename?: 'CreateFollowEIP712TypedDataValue', nonce: any, deadline: any, followerProfileId: any, idsOfProfilesToFollow: Array<any>, followTokenIds: Array<any>, datas: Array<any> } } } };

export type FollowMutationVariables = Exact<{
  request: FollowLensManagerRequest;
}>;


export type FollowMutation = { __typename?: 'Mutation', follow: { __typename?: 'LensProfileManagerRelayError', reason: LensProfileManagerRelayErrorReasonType } | { __typename?: 'RelaySuccess', txHash?: any | null, txId: any } };

export type FollowersQueryVariables = Exact<{
  request: FollowersRequest;
}>;


export type FollowersQuery = { __typename?: 'Query', followers: { __typename?: 'PaginatedProfileResult', items: Array<{ __typename?: 'Profile', id: any, signless: boolean, sponsor: boolean, txHash: any, createdAt: any, interests: Array<string>, invitesLeft: number, ownedBy: { __typename?: 'NetworkAddress', address: any, chainId: any }, stats: { __typename?: 'ProfileStats', id: any, followers: number, following: number, comments: number, posts: number, mirrors: number, quotes: number, publications: number, reactions: number, countOpenActions: number }, operations: { __typename?: 'ProfileOperations', id: any, canBlock: boolean, canUnblock: boolean, canFollow: TriStateValue, canUnfollow: boolean, isBlockedByMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, isFollowedByMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, isFollowingMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean } }, guardian?: { __typename?: 'ProfileGuardianResult', protected: boolean, cooldownEndsOn?: any | null } | null, invitedBy?: { __typename?: 'Profile', id: any } | null, onchainIdentity: { __typename?: 'ProfileOnchainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnchainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source?: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } | null }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } }, followNftAddress?: { __typename?: 'NetworkAddress', address: any, chainId: any } | null, metadata?: { __typename?: 'ProfileMetadata', bio?: any | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | null, followModule?: { __typename?: 'FeeFollowModuleSettings', recipient: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any }, amount: { __typename?: 'Amount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } } } | { __typename?: 'RevertFollowModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'UnknownFollowModuleSettings', followModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type FollowingQueryVariables = Exact<{
  request: FollowingRequest;
}>;


export type FollowingQuery = { __typename?: 'Query', following: { __typename?: 'PaginatedProfileResult', items: Array<{ __typename?: 'Profile', id: any, signless: boolean, sponsor: boolean, txHash: any, createdAt: any, interests: Array<string>, invitesLeft: number, ownedBy: { __typename?: 'NetworkAddress', address: any, chainId: any }, stats: { __typename?: 'ProfileStats', id: any, followers: number, following: number, comments: number, posts: number, mirrors: number, quotes: number, publications: number, reactions: number, countOpenActions: number }, operations: { __typename?: 'ProfileOperations', id: any, canBlock: boolean, canUnblock: boolean, canFollow: TriStateValue, canUnfollow: boolean, isBlockedByMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, isFollowedByMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, isFollowingMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean } }, guardian?: { __typename?: 'ProfileGuardianResult', protected: boolean, cooldownEndsOn?: any | null } | null, invitedBy?: { __typename?: 'Profile', id: any } | null, onchainIdentity: { __typename?: 'ProfileOnchainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnchainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source?: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } | null }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } }, followNftAddress?: { __typename?: 'NetworkAddress', address: any, chainId: any } | null, metadata?: { __typename?: 'ProfileMetadata', bio?: any | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | null, followModule?: { __typename?: 'FeeFollowModuleSettings', recipient: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any }, amount: { __typename?: 'Amount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } } } | { __typename?: 'RevertFollowModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'UnknownFollowModuleSettings', followModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', next?: any | null, prev?: any | null } } };

export type IsFollowedByMeQueryVariables = Exact<{
  request: ProfileRequest;
}>;


export type IsFollowedByMeQuery = { __typename?: 'Query', profile?: { __typename?: 'Profile', operations: { __typename?: 'ProfileOperations', isFollowedByMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean } } } | null };

export type IsFollowingMeQueryVariables = Exact<{
  request: ProfileRequest;
}>;


export type IsFollowingMeQuery = { __typename?: 'Query', profile?: { __typename?: 'Profile', operations: { __typename?: 'ProfileOperations', isFollowingMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean } } } | null };

export type MutualFollowersQueryVariables = Exact<{
  request: MutualFollowersRequest;
}>;


export type MutualFollowersQuery = { __typename?: 'Query', mutualFollowers: { __typename?: 'PaginatedProfileResult', items: Array<{ __typename?: 'Profile', id: any }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type CreateUnfollowTypedDataMutationVariables = Exact<{
  request: UnfollowRequest;
}>;


export type CreateUnfollowTypedDataMutation = { __typename?: 'Mutation', createUnfollowTypedData: { __typename?: 'CreateUnfollowBroadcastItemResult', expiresAt: any, id: any, typedData: { __typename?: 'CreateUnfollowEIP712TypedData', types: { __typename?: 'CreateUnfollowEIP712TypedDataTypes', Unfollow: Array<{ __typename?: 'EIP712TypedDataField', name: string, type: string }> }, domain: { __typename?: 'EIP712TypedDataDomain', name: string, chainId: any, version: string, verifyingContract: any }, value: { __typename?: 'CreateUnfollowEIP712TypedDataValue', nonce: any, deadline: any, unfollowerProfileId: any, idsOfProfilesToUnfollow: Array<any> } } } };

export type UnfollowMutationVariables = Exact<{
  request: UnfollowRequest;
}>;


export type UnfollowMutation = { __typename?: 'Mutation', unfollow: { __typename?: 'LensProfileManagerRelayError', reason: LensProfileManagerRelayErrorReasonType } | { __typename?: 'RelaySuccess', txHash?: any | null, txId: any } };

export type CreateLinkHandleToProfileTypedDataMutationVariables = Exact<{
  request: LinkHandleToProfileRequest;
}>;


export type CreateLinkHandleToProfileTypedDataMutation = { __typename?: 'Mutation', createLinkHandleToProfileTypedData: { __typename?: 'CreateLinkHandleToProfileBroadcastItemResult', id: any, expiresAt: any, typedData: { __typename?: 'CreateLinkHandleToProfileEIP712TypedData', types: { __typename?: 'CreateLinkHandleToProfileEIP712TypedDataTypes', Link: Array<{ __typename?: 'EIP712TypedDataField', name: string, type: string }> }, domain: { __typename?: 'EIP712TypedDataDomain', name: string, chainId: any, version: string, verifyingContract: any }, value: { __typename?: 'CreateLinkHandleToProfileEIP712TypedDataValue', nonce: any, deadline: any, profileId: any, handleId: any } } } };

export type LinkHandleToProfileMutationVariables = Exact<{
  request: LinkHandleToProfileRequest;
}>;


export type LinkHandleToProfileMutation = { __typename?: 'Mutation', linkHandleToProfile: { __typename?: 'LensProfileManagerRelayError', reason: LensProfileManagerRelayErrorReasonType } | { __typename?: 'RelaySuccess', txHash?: any | null, txId: any } };

export type OwnedHandlesQueryVariables = Exact<{
  request: OwnedHandlesRequest;
}>;


export type OwnedHandlesQuery = { __typename?: 'Query', ownedHandles: { __typename?: 'PaginatedHandlesResult', items: Array<{ __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type CreateUnlinkHandleFromProfileTypedDataMutationVariables = Exact<{
  request: UnlinkHandleFromProfileRequest;
}>;


export type CreateUnlinkHandleFromProfileTypedDataMutation = { __typename?: 'Mutation', createUnlinkHandleFromProfileTypedData: { __typename?: 'CreateUnlinkHandleFromProfileBroadcastItemResult', id: any, expiresAt: any, typedData: { __typename?: 'CreateUnlinkHandleFromProfileEIP712TypedData', types: { __typename?: 'CreateUnlinkHandleFromProfileEIP712TypedDataTypes', Unlink: Array<{ __typename?: 'EIP712TypedDataField', name: string, type: string }> }, domain: { __typename?: 'EIP712TypedDataDomain', name: string, chainId: any, version: string, verifyingContract: any }, value: { __typename?: 'CreateUnlinkHandleFromProfileEIP712TypedDataValue', nonce: any, deadline: any, profileId: any, handleId: any } } } };

export type UnlinkHandleFromProfileMutationVariables = Exact<{
  request: UnlinkHandleFromProfileRequest;
}>;


export type UnlinkHandleFromProfileMutation = { __typename?: 'Mutation', unlinkHandleFromProfile: { __typename?: 'LensProfileManagerRelayError', reason: LensProfileManagerRelayErrorReasonType } | { __typename?: 'RelaySuccess', txHash?: any | null, txId: any } };

export type PingQueryVariables = Exact<{ [key: string]: never; }>;


export type PingQuery = { __typename?: 'Query', ping: string };

export type TxIdToTxHashQueryVariables = Exact<{
  for: Scalars['TxId'];
}>;


export type TxIdToTxHashQuery = { __typename?: 'Query', txIdToTxHash?: any | null };

export type GenerateModuleCurrencyApprovalDataQueryVariables = Exact<{
  request: GenerateModuleCurrencyApprovalDataRequest;
}>;


export type GenerateModuleCurrencyApprovalDataQuery = { __typename?: 'Query', generateModuleCurrencyApprovalData: { __typename?: 'GenerateModuleCurrencyApprovalResult', to: any, from: any, data: any } };

export type ApprovedModuleAllowanceAmountQueryVariables = Exact<{
  request: ApprovedModuleAllowanceAmountRequest;
}>;


export type ApprovedModuleAllowanceAmountQuery = { __typename?: 'Query', approvedModuleAllowanceAmount: Array<{ __typename?: 'ApprovedAllowanceAmountResult', moduleName: string, allowance: { __typename?: 'Amount', value: string, asset: { __typename?: 'Erc20', decimals: number, symbol: string, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } }, moduleContract: { __typename?: 'NetworkAddress', address: any, chainId: any } }> };

export type EnabledCurrenciesQueryVariables = Exact<{
  request: PaginatedOffsetRequest;
}>;


export type EnabledCurrenciesQuery = { __typename?: 'Query', currencies: { __typename?: 'PaginatedCurrenciesResult', items: Array<{ __typename?: 'Erc20', name: string, symbol: string, decimals: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

type ReferenceModuleFields_DegreesOfSeparationReferenceModuleSettings_Fragment = { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } };

type ReferenceModuleFields_FollowOnlyReferenceModuleSettings_Fragment = { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } };

type ReferenceModuleFields_LegacyDegreesOfSeparationReferenceModuleSettings_Fragment = { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' };

type ReferenceModuleFields_LegacyFollowOnlyReferenceModuleSettings_Fragment = { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' };

type ReferenceModuleFields_UnknownReferenceModuleSettings_Fragment = { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } };

export type ReferenceModuleFieldsFragment = ReferenceModuleFields_DegreesOfSeparationReferenceModuleSettings_Fragment | ReferenceModuleFields_FollowOnlyReferenceModuleSettings_Fragment | ReferenceModuleFields_LegacyDegreesOfSeparationReferenceModuleSettings_Fragment | ReferenceModuleFields_LegacyFollowOnlyReferenceModuleSettings_Fragment | ReferenceModuleFields_UnknownReferenceModuleSettings_Fragment;

export type CreateSetFollowModuleTypedDataMutationVariables = Exact<{
  request: SetFollowModuleRequest;
}>;


export type CreateSetFollowModuleTypedDataMutation = { __typename?: 'Mutation', createSetFollowModuleTypedData: { __typename?: 'CreateSetFollowModuleBroadcastItemResult', id: any, expiresAt: any, typedData: { __typename?: 'CreateSetFollowModuleEIP712TypedData', types: { __typename?: 'CreateSetFollowModuleEIP712TypedDataTypes', SetFollowModule: Array<{ __typename?: 'EIP712TypedDataField', name: string, type: string }> }, domain: { __typename?: 'EIP712TypedDataDomain', name: string, chainId: any, version: string, verifyingContract: any }, value: { __typename?: 'CreateSetFollowModuleEIP712TypedDataValue', nonce: any, deadline: any, profileId: any, followModule: any, followModuleInitData: any } } } };

export type SetFollowModuleMutationVariables = Exact<{
  request: SetFollowModuleRequest;
}>;


export type SetFollowModuleMutation = { __typename?: 'Mutation', setFollowModule: { __typename?: 'LensProfileManagerRelayError', reason: LensProfileManagerRelayErrorReasonType } | { __typename?: 'RelaySuccess', txHash?: any | null, txId: any } };

export type SupportedFollowModulesQueryVariables = Exact<{
  request: SupportedModulesRequest;
}>;


export type SupportedFollowModulesQuery = { __typename?: 'Query', supportedFollowModules: { __typename?: 'PaginatedSupportedModules', items: Array<{ __typename?: 'KnownSupportedModule', contract: { __typename?: 'NetworkAddress', address: any } } | { __typename?: 'UnknownSupportedModule', contract: { __typename?: 'NetworkAddress', address: any } }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type SupportedOpenActionCollectModulesQueryVariables = Exact<{
  request: SupportedModulesRequest;
}>;


export type SupportedOpenActionCollectModulesQuery = { __typename?: 'Query', supportedOpenActionCollectModules: { __typename?: 'PaginatedSupportedModules', items: Array<{ __typename?: 'KnownSupportedModule', contract: { __typename?: 'NetworkAddress', address: any } } | { __typename?: 'UnknownSupportedModule', contract: { __typename?: 'NetworkAddress', address: any } }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type SupportedOpenActionModulesQueryVariables = Exact<{
  request: SupportedModulesRequest;
}>;


export type SupportedOpenActionModulesQuery = { __typename?: 'Query', supportedOpenActionModules: { __typename?: 'PaginatedSupportedModules', items: Array<{ __typename?: 'KnownSupportedModule', contract: { __typename?: 'NetworkAddress', address: any } } | { __typename?: 'UnknownSupportedModule', contract: { __typename?: 'NetworkAddress', address: any } }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type SupportedReferenceModulesQueryVariables = Exact<{
  request: SupportedModulesRequest;
}>;


export type SupportedReferenceModulesQuery = { __typename?: 'Query', supportedReferenceModules: { __typename?: 'PaginatedSupportedModules', items: Array<{ __typename?: 'KnownSupportedModule', contract: { __typename?: 'NetworkAddress', address: any } } | { __typename?: 'UnknownSupportedModule', contract: { __typename?: 'NetworkAddress', address: any } }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type MomokaSubmittersQueryVariables = Exact<{ [key: string]: never; }>;


export type MomokaSubmittersQuery = { __typename?: 'Query', momokaSubmitters: { __typename?: 'MomokaSubmittersResult', items: Array<{ __typename?: 'MomokaSubmitterResult', address: any }> } };

export type MomokaSummaryQueryVariables = Exact<{ [key: string]: never; }>;


export type MomokaSummaryQuery = { __typename?: 'Query', momokaSummary: { __typename?: 'MomokaSummaryResult', totalTransactions: number } };

export type MomokaTransactionQueryVariables = Exact<{
  request: MomokaTransactionRequest;
}>;


export type MomokaTransactionQuery = { __typename?: 'Query', momokaTransaction?: { __typename?: 'MomokaCommentTransaction', publication: { __typename?: 'Comment', id: any }, commentOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any } } | { __typename?: 'MomokaMirrorTransaction', publication: { __typename?: 'Mirror', id: any }, mirrorOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any } } | { __typename?: 'MomokaPostTransaction', publication: { __typename?: 'Post', id: any } } | { __typename?: 'MomokaQuoteTransaction', publication: { __typename?: 'Quote', id: any }, quoteOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any } } | null };

export type MomokaTransactionsQueryVariables = Exact<{
  request: MomokaTransactionsRequest;
}>;


export type MomokaTransactionsQuery = { __typename?: 'Query', momokaTransactions: { __typename?: 'MomokaTransactionsResult', items: Array<{ __typename?: 'MomokaCommentTransaction', publication: { __typename?: 'Comment', id: any }, commentOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any } } | { __typename?: 'MomokaMirrorTransaction', publication: { __typename?: 'Mirror', id: any }, mirrorOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any } } | { __typename?: 'MomokaPostTransaction', publication: { __typename?: 'Post', id: any } } | { __typename?: 'MomokaQuoteTransaction', publication: { __typename?: 'Quote', id: any }, quoteOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any } }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type NftMetadataAttributeFieldsFragment = { __typename?: 'PublicationMarketplaceMetadataAttribute', displayType?: MarketplaceMetadataAttributeDisplayType | null, traitType?: string | null, value?: string | null };

export type NftMetadataFieldsFragment = { __typename?: 'NftMetadata', name?: string | null, description?: any | null, animationUrl?: any | null, externalURL?: any | null, attributes?: Array<{ __typename?: 'PublicationMarketplaceMetadataAttribute', displayType?: MarketplaceMetadataAttributeDisplayType | null, traitType?: string | null, value?: string | null }> | null, image?: { __typename?: 'ImageSet', raw: { __typename?: 'Image', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null, width?: number | null, height?: number | null } | null } | null };

export type NftCollectionFieldsFragment = { __typename?: 'NftCollection', name: string, symbol: string, contractType: NftContractType, baseUri?: any | null, verified: boolean, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } };

export type NftOwnerFieldsFragment = { __typename?: 'Owner', address: any, amount: string };

export type NftFieldsFragment = { __typename?: 'Nft', tokenId: any, contentURI: any, contractType: NftContractType, totalSupply: string, collection: { __typename?: 'NftCollection', name: string, symbol: string }, contract: { __typename?: 'NetworkAddress', address: any, chainId: any }, metadata: { __typename?: 'NftMetadata', name?: string | null, description?: any | null, animationUrl?: any | null, externalURL?: any | null, attributes?: Array<{ __typename?: 'PublicationMarketplaceMetadataAttribute', displayType?: MarketplaceMetadataAttributeDisplayType | null, traitType?: string | null, value?: string | null }> | null, image?: { __typename?: 'ImageSet', raw: { __typename?: 'Image', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null, width?: number | null, height?: number | null } | null } | null }, owner: { __typename?: 'Owner', address: any, amount: string } };

export type NftGalleryFieldsFragment = { __typename?: 'NftGallery', name: any, owner: any, id: any, createdAt: any, updatedAt: any, items: Array<{ __typename?: 'Nft', tokenId: any, contentURI: any, contractType: NftContractType, totalSupply: string, collection: { __typename?: 'NftCollection', name: string, symbol: string }, contract: { __typename?: 'NetworkAddress', address: any, chainId: any }, metadata: { __typename?: 'NftMetadata', name?: string | null, description?: any | null, animationUrl?: any | null, externalURL?: any | null, attributes?: Array<{ __typename?: 'PublicationMarketplaceMetadataAttribute', displayType?: MarketplaceMetadataAttributeDisplayType | null, traitType?: string | null, value?: string | null }> | null, image?: { __typename?: 'ImageSet', raw: { __typename?: 'Image', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null, width?: number | null, height?: number | null } | null } | null }, owner: { __typename?: 'Owner', address: any, amount: string } }> };

export type NftsQueryVariables = Exact<{
  request: NftsRequest;
}>;


export type NftsQuery = { __typename?: 'Query', nfts: { __typename?: 'PaginatedNftsResult', items: Array<{ __typename?: 'Nft', tokenId: any, contentURI: any, contractType: NftContractType, totalSupply: string, collection: { __typename?: 'NftCollection', name: string, symbol: string }, contract: { __typename?: 'NetworkAddress', address: any, chainId: any }, metadata: { __typename?: 'NftMetadata', name?: string | null, description?: any | null, animationUrl?: any | null, externalURL?: any | null, attributes?: Array<{ __typename?: 'PublicationMarketplaceMetadataAttribute', displayType?: MarketplaceMetadataAttributeDisplayType | null, traitType?: string | null, value?: string | null }> | null, image?: { __typename?: 'ImageSet', raw: { __typename?: 'Image', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null, width?: number | null, height?: number | null } | null } | null }, owner: { __typename?: 'Owner', address: any, amount: string } }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type MutualNftCollectionsQueryVariables = Exact<{
  request: MutualNftCollectionsRequest;
}>;


export type MutualNftCollectionsQuery = { __typename?: 'Query', mutualNftCollections: { __typename?: 'PaginatedNftCollectionsResult', items: Array<{ __typename?: 'NftCollection', name: string, symbol: string, contractType: NftContractType, baseUri?: any | null, verified: boolean, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type NftCollectionOwnersQueryVariables = Exact<{
  request: NftCollectionOwnersRequest;
}>;


export type NftCollectionOwnersQuery = { __typename?: 'Query', nftCollectionOwners: { __typename?: 'PaginatedProfileResult', items: Array<{ __typename?: 'Profile', id: any, signless: boolean, sponsor: boolean, txHash: any, createdAt: any, interests: Array<string>, invitesLeft: number, ownedBy: { __typename?: 'NetworkAddress', address: any, chainId: any }, stats: { __typename?: 'ProfileStats', id: any, followers: number, following: number, comments: number, posts: number, mirrors: number, quotes: number, publications: number, reactions: number, countOpenActions: number }, operations: { __typename?: 'ProfileOperations', id: any, canBlock: boolean, canUnblock: boolean, canFollow: TriStateValue, canUnfollow: boolean, isBlockedByMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, isFollowedByMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, isFollowingMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean } }, guardian?: { __typename?: 'ProfileGuardianResult', protected: boolean, cooldownEndsOn?: any | null } | null, invitedBy?: { __typename?: 'Profile', id: any } | null, onchainIdentity: { __typename?: 'ProfileOnchainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnchainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source?: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } | null }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } }, followNftAddress?: { __typename?: 'NetworkAddress', address: any, chainId: any } | null, metadata?: { __typename?: 'ProfileMetadata', bio?: any | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | null, followModule?: { __typename?: 'FeeFollowModuleSettings', recipient: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any }, amount: { __typename?: 'Amount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } } } | { __typename?: 'RevertFollowModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'UnknownFollowModuleSettings', followModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type NftCollectionsQueryVariables = Exact<{
  request: NftCollectionsRequest;
}>;


export type NftCollectionsQuery = { __typename?: 'Query', nftCollections: { __typename?: 'PaginatedNftCollectionsResult', items: Array<{ __typename?: 'NftCollection', name: string, symbol: string, contractType: NftContractType, baseUri?: any | null, verified: boolean, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type PopularNftCollectionsQueryVariables = Exact<{
  request: PopularNftCollectionsRequest;
}>;


export type PopularNftCollectionsQuery = { __typename?: 'Query', popularNftCollections: { __typename?: 'PaginatedPopularNftCollectionsResult', items: Array<{ __typename?: 'NftCollectionWithOwners', totalOwners: number, collection: { __typename?: 'NftCollection', name: string, symbol: string, contractType: NftContractType, baseUri?: any | null, verified: boolean, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type NftGalleriesQueryVariables = Exact<{
  request: NftGalleriesRequest;
}>;


export type NftGalleriesQuery = { __typename?: 'Query', nftGalleries: { __typename?: 'PaginatedNftGalleriesResult', items: Array<{ __typename?: 'NftGallery', name: any, owner: any, id: any, createdAt: any, updatedAt: any, items: Array<{ __typename?: 'Nft', tokenId: any, contentURI: any, contractType: NftContractType, totalSupply: string, collection: { __typename?: 'NftCollection', name: string, symbol: string }, contract: { __typename?: 'NetworkAddress', address: any, chainId: any }, metadata: { __typename?: 'NftMetadata', name?: string | null, description?: any | null, animationUrl?: any | null, externalURL?: any | null, attributes?: Array<{ __typename?: 'PublicationMarketplaceMetadataAttribute', displayType?: MarketplaceMetadataAttributeDisplayType | null, traitType?: string | null, value?: string | null }> | null, image?: { __typename?: 'ImageSet', raw: { __typename?: 'Image', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null, width?: number | null, height?: number | null } | null } | null }, owner: { __typename?: 'Owner', address: any, amount: string } }> }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type CreateNftGalleryMutationVariables = Exact<{
  request: NftGalleryCreateRequest;
}>;


export type CreateNftGalleryMutation = { __typename?: 'Mutation', createNftGallery: any };

export type UpdateNftGalleryInfoMutationVariables = Exact<{
  request: NftGalleryUpdateInfoRequest;
}>;


export type UpdateNftGalleryInfoMutation = { __typename?: 'Mutation', updateNftGalleryInfo?: any | null };

export type UpdateNftGalleryOrderMutationVariables = Exact<{
  request: NftGalleryUpdateItemOrderRequest;
}>;


export type UpdateNftGalleryOrderMutation = { __typename?: 'Mutation', updateNftGalleryOrder?: any | null };

export type UpdateNftGalleryItemsMutationVariables = Exact<{
  request: NftGalleryUpdateItemsRequest;
}>;


export type UpdateNftGalleryItemsMutation = { __typename?: 'Mutation', updateNftGalleryItems?: any | null };

export type DeleteNftGalleryMutationVariables = Exact<{
  request: NftGalleryDeleteRequest;
}>;


export type DeleteNftGalleryMutation = { __typename?: 'Mutation', deleteNftGallery?: any | null };

export type AddPublicationNotInterestedMutationVariables = Exact<{
  request: PublicationNotInterestedRequest;
}>;


export type AddPublicationNotInterestedMutation = { __typename?: 'Mutation', addPublicationNotInterested?: any | null };

export type UndoPublicationNotInterestedMutationVariables = Exact<{
  request: PublicationNotInterestedRequest;
}>;


export type UndoPublicationNotInterestedMutation = { __typename?: 'Mutation', undoPublicationNotInterested?: any | null };

type NotificationFields_ActedNotification_Fragment = { __typename?: 'ActedNotification', id: any, actions: Array<{ __typename?: 'OpenActionProfileActed', actedAt: any, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, action: { __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any } }>, publication: { __typename?: 'Comment', id: any, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null } } | { __typename?: 'Mirror', id: any } | { __typename?: 'Post', id: any, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null } } | { __typename?: 'Quote' } };

type NotificationFields_CommentNotification_Fragment = { __typename?: 'CommentNotification', id: any, comment: { __typename?: 'Comment', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, root: { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, commentOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, firstComment?: { __typename?: 'Comment', id: any } | null, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } };

type NotificationFields_FollowNotification_Fragment = { __typename?: 'FollowNotification', id: any, followers: Array<{ __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }> };

type NotificationFields_MentionNotification_Fragment = { __typename?: 'MentionNotification', id: any, publication: { __typename?: 'Comment', id: any, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null } } | { __typename?: 'Post', id: any, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null } } | { __typename?: 'Quote', id: any, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null } } };

type NotificationFields_MirrorNotification_Fragment = { __typename?: 'MirrorNotification', id: any, mirrors: Array<{ __typename?: 'ProfileMirrorResult', mirrorId: any, mirroredAt: any, profile: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null } }>, publication: { __typename?: 'Comment', id: any, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null } } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null } } };

type NotificationFields_QuoteNotification_Fragment = { __typename?: 'QuoteNotification', id: any, quote: { __typename?: 'Quote', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, quoteOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } };

type NotificationFields_ReactionNotification_Fragment = { __typename?: 'ReactionNotification', id: any, publication: { __typename?: 'Comment', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, root: { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, commentOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, firstComment?: { __typename?: 'Comment', id: any } | null, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | { __typename?: 'Post', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | { __typename?: 'Quote', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, quoteOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null }, reactions: Array<{ __typename?: 'ProfileReactedResult', profile: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, reactions: Array<{ __typename?: 'ReactedResult', reactedAt: any, reaction: PublicationReactionType }> }> };

export type NotificationFieldsFragment = NotificationFields_ActedNotification_Fragment | NotificationFields_CommentNotification_Fragment | NotificationFields_FollowNotification_Fragment | NotificationFields_MentionNotification_Fragment | NotificationFields_MirrorNotification_Fragment | NotificationFields_QuoteNotification_Fragment | NotificationFields_ReactionNotification_Fragment;

export type NotificationsSubscriptionSubscriptionVariables = Exact<{
  for: Scalars['ProfileId'];
}>;


export type NotificationsSubscriptionSubscription = { __typename?: 'Subscription', newNotification?: { __typename?: 'ActedNotification', id: any, actions: Array<{ __typename?: 'OpenActionProfileActed', actedAt: any, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, action: { __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any } }>, publication: { __typename?: 'Comment', id: any, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null } } | { __typename?: 'Mirror', id: any } | { __typename?: 'Post', id: any, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null } } | { __typename?: 'Quote' } } | { __typename?: 'CommentNotification', id: any, comment: { __typename?: 'Comment', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, root: { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, commentOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, firstComment?: { __typename?: 'Comment', id: any } | null, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } } | { __typename?: 'FollowNotification', id: any, followers: Array<{ __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }> } | { __typename?: 'MentionNotification', id: any, publication: { __typename?: 'Comment', id: any, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null } } | { __typename?: 'Post', id: any, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null } } | { __typename?: 'Quote', id: any, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null } } } | { __typename?: 'MirrorNotification', id: any, mirrors: Array<{ __typename?: 'ProfileMirrorResult', mirrorId: any, mirroredAt: any, profile: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null } }>, publication: { __typename?: 'Comment', id: any, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null } } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null } } } | { __typename?: 'QuoteNotification', id: any, quote: { __typename?: 'Quote', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, quoteOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } } | { __typename?: 'ReactionNotification', id: any, publication: { __typename?: 'Comment', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, root: { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, commentOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, firstComment?: { __typename?: 'Comment', id: any } | null, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | { __typename?: 'Post', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | { __typename?: 'Quote', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, quoteOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null }, reactions: Array<{ __typename?: 'ProfileReactedResult', profile: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, reactions: Array<{ __typename?: 'ReactedResult', reactedAt: any, reaction: PublicationReactionType }> }> } | null };

export type NotificationsQueryVariables = Exact<{
  request: NotificationRequest;
}>;


export type NotificationsQuery = { __typename?: 'Query', notifications: { __typename?: 'PaginatedNotificationResult', items: Array<{ __typename?: 'ActedNotification', id: any, actions: Array<{ __typename?: 'OpenActionProfileActed', actedAt: any, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, action: { __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any } }>, publication: { __typename?: 'Comment', id: any, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null } } | { __typename?: 'Mirror', id: any } | { __typename?: 'Post', id: any, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null } } | { __typename?: 'Quote' } } | { __typename?: 'CommentNotification', id: any, comment: { __typename?: 'Comment', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, root: { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, commentOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, firstComment?: { __typename?: 'Comment', id: any } | null, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } } | { __typename?: 'FollowNotification', id: any, followers: Array<{ __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }> } | { __typename?: 'MentionNotification', id: any, publication: { __typename?: 'Comment', id: any, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null } } | { __typename?: 'Post', id: any, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null } } | { __typename?: 'Quote', id: any, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null } } } | { __typename?: 'MirrorNotification', id: any, mirrors: Array<{ __typename?: 'ProfileMirrorResult', mirrorId: any, mirroredAt: any, profile: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null } }>, publication: { __typename?: 'Comment', id: any, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null } } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null } } } | { __typename?: 'QuoteNotification', id: any, quote: { __typename?: 'Quote', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, quoteOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } } | { __typename?: 'ReactionNotification', id: any, publication: { __typename?: 'Comment', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, root: { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, commentOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, firstComment?: { __typename?: 'Comment', id: any } | null, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | { __typename?: 'Post', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | { __typename?: 'Quote', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, quoteOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null }, reactions: Array<{ __typename?: 'ProfileReactedResult', profile: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, reactions: Array<{ __typename?: 'ReactedResult', reactedAt: any, reaction: PublicationReactionType }> }> }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type CreateActOnOpenActionTypedDataMutationVariables = Exact<{
  request: ActOnOpenActionRequest;
}>;


export type CreateActOnOpenActionTypedDataMutation = { __typename?: 'Mutation', createActOnOpenActionTypedData: { __typename?: 'CreateActOnOpenActionBroadcastItemResult', expiresAt: any, id: any, typedData: { __typename?: 'CreateActOnOpenActionEIP712TypedData', types: { __typename?: 'CreateActOnOpenActionEIP712TypedDataTypes', Act: Array<{ __typename?: 'EIP712TypedDataField', name: string, type: string }> }, domain: { __typename?: 'EIP712TypedDataDomain', name: string, chainId: any, version: string, verifyingContract: any }, value: { __typename?: 'CreateActOnOpenActionEIP712TypedDataValue', nonce: any, deadline: any, publicationActedProfileId: any, publicationActedId: any, actorProfileId: any, referrerProfileIds: Array<any>, referrerPubIds: Array<any>, actionModuleAddress: any, actionModuleData: any } } } };

export type ActOnOpenActionMutationVariables = Exact<{
  request: ActOnOpenActionLensManagerRequest;
}>;


export type ActOnOpenActionMutation = { __typename?: 'Mutation', actOnOpenAction: { __typename?: 'LensProfileManagerRelayError', reason: LensProfileManagerRelayErrorReasonType } | { __typename?: 'RelaySuccess', txHash?: any | null, txId: any } };

export type PoapEventQueryVariables = Exact<{
  request: PoapEventQueryRequest;
}>;


export type PoapEventQuery = { __typename?: 'Query', poapEvent?: { __typename?: 'PoapEvent', id: any } | null };

export type PoapHoldersQueryVariables = Exact<{
  request: PoapHoldersQueryRequest;
}>;


export type PoapHoldersQuery = { __typename?: 'Query', poapHolders: { __typename?: 'PaginatedProfileResult', items: Array<{ __typename?: 'Profile', id: any }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type MutualPoapsQueryVariables = Exact<{
  request: MutualPoapsQueryRequest;
}>;


export type MutualPoapsQuery = { __typename?: 'Query', mutualPoaps: { __typename?: 'PaginatedPoapEventResult', items: Array<{ __typename?: 'PoapEvent', id: any }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type CreateChangeProfileManagersTypedDataMutationVariables = Exact<{
  request: ChangeProfileManagersRequest;
}>;


export type CreateChangeProfileManagersTypedDataMutation = { __typename?: 'Mutation', createChangeProfileManagersTypedData: { __typename?: 'CreateChangeProfileManagersBroadcastItemResult', expiresAt: any, id: any, typedData: { __typename?: 'CreateChangeProfileManagersEIP712TypedData', domain: { __typename?: 'EIP712TypedDataDomain', name: string, chainId: any, version: string, verifyingContract: any }, types: { __typename?: 'CreateChangeProfileManagersEIP712TypedDataTypes', ChangeDelegatedExecutorsConfig: Array<{ __typename?: 'EIP712TypedDataField', name: string, type: string }> }, value: { __typename?: 'CreateChangeProfileManagersEIP712TypedDataValue', nonce: any, deadline: any, delegatorProfileId: any, delegatedExecutors: Array<any>, approvals: Array<boolean>, configNumber: number, switchToGivenConfig: boolean } } } };

export type ProfileManagersQueryVariables = Exact<{
  request: ProfileManagersRequest;
}>;


export type ProfileManagersQuery = { __typename?: 'Query', profileManagers: { __typename?: 'PaginatedProfileManagersResult', items: Array<{ __typename?: 'ProfilesManagedResult', address: any }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type AddProfileInterestsMutationVariables = Exact<{
  request: ProfileInterestsRequest;
}>;


export type AddProfileInterestsMutation = { __typename?: 'Mutation', addProfileInterests?: any | null };

export type CreateBlockProfilesTypedDataMutationVariables = Exact<{
  request: BlockRequest;
}>;


export type CreateBlockProfilesTypedDataMutation = { __typename?: 'Mutation', createBlockProfilesTypedData: { __typename?: 'CreateBlockProfilesBroadcastItemResult', id: any, expiresAt: any, typedData: { __typename?: 'CreateBlockProfilesEIP712TypedData', value: { __typename?: 'CreateBlockProfilesEIP712TypedDataValue', nonce: any, deadline: any, byProfileId: any, idsOfProfilesToSetBlockStatus: Array<any>, blockStatus: Array<boolean> }, domain: { __typename?: 'EIP712TypedDataDomain', name: string, chainId: any, version: string, verifyingContract: any }, types: { __typename?: 'CreateBlockProfilesEIP712TypedDataTypes', SetBlockStatus: Array<{ __typename?: 'EIP712TypedDataField', name: string, type: string }> } } } };

export type BlockMutationVariables = Exact<{
  request: BlockRequest;
}>;


export type BlockMutation = { __typename?: 'Mutation', block: { __typename?: 'LensProfileManagerRelayError', reason: LensProfileManagerRelayErrorReasonType } | { __typename?: 'RelaySuccess', txHash?: any | null, txId: any } };

export type CreateProfileWithHandleMutationVariables = Exact<{
  request: CreateProfileWithHandleRequest;
}>;


export type CreateProfileWithHandleMutation = { __typename?: 'Mutation', createProfileWithHandle: { __typename?: 'CreateProfileWithHandleErrorResult', reason: CreateProfileWithHandleErrorReasonType } | { __typename?: 'RelaySuccess', txHash?: any | null, txId: any } };

export type SetDefaultProfileMutationVariables = Exact<{
  request: SetDefaultProfileRequest;
}>;


export type SetDefaultProfileMutation = { __typename?: 'Mutation', setDefaultProfile?: any | null };

export type GetDefaultProfileQueryVariables = Exact<{
  request: DefaultProfileRequest;
}>;


export type GetDefaultProfileQuery = { __typename?: 'Query', defaultProfile?: { __typename?: 'Profile', id: any, signless: boolean, sponsor: boolean, txHash: any, createdAt: any, interests: Array<string>, invitesLeft: number, ownedBy: { __typename?: 'NetworkAddress', address: any, chainId: any }, stats: { __typename?: 'ProfileStats', id: any, followers: number, following: number, comments: number, posts: number, mirrors: number, quotes: number, publications: number, reactions: number, countOpenActions: number }, operations: { __typename?: 'ProfileOperations', id: any, canBlock: boolean, canUnblock: boolean, canFollow: TriStateValue, canUnfollow: boolean, isBlockedByMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, isFollowedByMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, isFollowingMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean } }, guardian?: { __typename?: 'ProfileGuardianResult', protected: boolean, cooldownEndsOn?: any | null } | null, invitedBy?: { __typename?: 'Profile', id: any } | null, onchainIdentity: { __typename?: 'ProfileOnchainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnchainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source?: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } | null }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } }, followNftAddress?: { __typename?: 'NetworkAddress', address: any, chainId: any } | null, metadata?: { __typename?: 'ProfileMetadata', bio?: any | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | null, followModule?: { __typename?: 'FeeFollowModuleSettings', recipient: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any }, amount: { __typename?: 'Amount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } } } | { __typename?: 'RevertFollowModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'UnknownFollowModuleSettings', followModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null } | null };

export type DismissRecommendedProfilesMutationVariables = Exact<{
  request: DismissRecommendedProfilesRequest;
}>;


export type DismissRecommendedProfilesMutation = { __typename?: 'Mutation', dismissRecommendedProfiles?: any | null };

type FollowModuleFields_FeeFollowModuleSettings_Fragment = { __typename?: 'FeeFollowModuleSettings', recipient: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any }, amount: { __typename?: 'Amount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } } };

type FollowModuleFields_RevertFollowModuleSettings_Fragment = { __typename?: 'RevertFollowModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } };

type FollowModuleFields_UnknownFollowModuleSettings_Fragment = { __typename?: 'UnknownFollowModuleSettings', followModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } };

export type FollowModuleFieldsFragment = FollowModuleFields_FeeFollowModuleSettings_Fragment | FollowModuleFields_RevertFollowModuleSettings_Fragment | FollowModuleFields_UnknownFollowModuleSettings_Fragment;

export type GetInvitedProfilesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetInvitedProfilesQuery = { __typename?: 'Query', invitedProfiles: Array<{ __typename?: 'InvitedResult', by: any, when: any, profileMinted?: { __typename?: 'Profile', createdAt: any } | null }> };

export type ProfileQueryVariables = Exact<{
  request: ProfileRequest;
}>;


export type ProfileQuery = { __typename?: 'Query', profile?: { __typename?: 'Profile', id: any, signless: boolean, sponsor: boolean, txHash: any, createdAt: any, interests: Array<string>, invitesLeft: number, ownedBy: { __typename?: 'NetworkAddress', address: any, chainId: any }, stats: { __typename?: 'ProfileStats', id: any, followers: number, following: number, comments: number, posts: number, mirrors: number, quotes: number, publications: number, reactions: number, countOpenActions: number }, operations: { __typename?: 'ProfileOperations', id: any, canBlock: boolean, canUnblock: boolean, canFollow: TriStateValue, canUnfollow: boolean, isBlockedByMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, isFollowedByMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, isFollowingMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean } }, guardian?: { __typename?: 'ProfileGuardianResult', protected: boolean, cooldownEndsOn?: any | null } | null, invitedBy?: { __typename?: 'Profile', id: any } | null, onchainIdentity: { __typename?: 'ProfileOnchainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnchainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source?: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } | null }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } }, followNftAddress?: { __typename?: 'NetworkAddress', address: any, chainId: any } | null, metadata?: { __typename?: 'ProfileMetadata', bio?: any | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | null, followModule?: { __typename?: 'FeeFollowModuleSettings', recipient: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any }, amount: { __typename?: 'Amount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } } } | { __typename?: 'RevertFollowModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'UnknownFollowModuleSettings', followModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null } | null };

export type ProfilesQueryVariables = Exact<{
  request: ProfilesRequest;
}>;


export type ProfilesQuery = { __typename?: 'Query', profiles: { __typename?: 'PaginatedProfileResult', items: Array<{ __typename?: 'Profile', id: any, signless: boolean, sponsor: boolean, txHash: any, createdAt: any, interests: Array<string>, invitesLeft: number, ownedBy: { __typename?: 'NetworkAddress', address: any, chainId: any }, stats: { __typename?: 'ProfileStats', id: any, followers: number, following: number, comments: number, posts: number, mirrors: number, quotes: number, publications: number, reactions: number, countOpenActions: number }, operations: { __typename?: 'ProfileOperations', id: any, canBlock: boolean, canUnblock: boolean, canFollow: TriStateValue, canUnfollow: boolean, isBlockedByMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, isFollowedByMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, isFollowingMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean } }, guardian?: { __typename?: 'ProfileGuardianResult', protected: boolean, cooldownEndsOn?: any | null } | null, invitedBy?: { __typename?: 'Profile', id: any } | null, onchainIdentity: { __typename?: 'ProfileOnchainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnchainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source?: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } | null }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } }, followNftAddress?: { __typename?: 'NetworkAddress', address: any, chainId: any } | null, metadata?: { __typename?: 'ProfileMetadata', bio?: any | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | null, followModule?: { __typename?: 'FeeFollowModuleSettings', recipient: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any }, amount: { __typename?: 'Amount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } } } | { __typename?: 'RevertFollowModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'UnknownFollowModuleSettings', followModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', next?: any | null, prev?: any | null } } };

export type ProfileActionHistoryQueryVariables = Exact<{
  request: ProfileActionHistoryRequest;
}>;


export type ProfileActionHistoryQuery = { __typename?: 'Query', profileActionHistory: { __typename?: 'PaginatedProfileActionHistoryResult', items: Array<{ __typename?: 'ProfileActionHistory', id: number }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type ProfileAlreadyInvitedQueryVariables = Exact<{
  request: AlreadyInvitedCheckRequest;
}>;


export type ProfileAlreadyInvitedQuery = { __typename?: 'Query', profileAlreadyInvited: boolean };

export type HandleInfoFragment = { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null };

export type ProfileFieldsFragment = { __typename?: 'Profile', id: any, signless: boolean, sponsor: boolean, txHash: any, createdAt: any, interests: Array<string>, invitesLeft: number, ownedBy: { __typename?: 'NetworkAddress', address: any, chainId: any }, stats: { __typename?: 'ProfileStats', id: any, followers: number, following: number, comments: number, posts: number, mirrors: number, quotes: number, publications: number, reactions: number, countOpenActions: number }, operations: { __typename?: 'ProfileOperations', id: any, canBlock: boolean, canUnblock: boolean, canFollow: TriStateValue, canUnfollow: boolean, isBlockedByMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, isFollowedByMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, isFollowingMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean } }, guardian?: { __typename?: 'ProfileGuardianResult', protected: boolean, cooldownEndsOn?: any | null } | null, invitedBy?: { __typename?: 'Profile', id: any } | null, onchainIdentity: { __typename?: 'ProfileOnchainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnchainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source?: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } | null }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } }, followNftAddress?: { __typename?: 'NetworkAddress', address: any, chainId: any } | null, metadata?: { __typename?: 'ProfileMetadata', bio?: any | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | null, followModule?: { __typename?: 'FeeFollowModuleSettings', recipient: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any }, amount: { __typename?: 'Amount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } } } | { __typename?: 'RevertFollowModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'UnknownFollowModuleSettings', followModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null };

export type ProfileRecommendationsQueryVariables = Exact<{
  request: ProfileRecommendationsRequest;
}>;


export type ProfileRecommendationsQuery = { __typename?: 'Query', profileRecommendations: { __typename?: 'PaginatedProfileResult', items: Array<{ __typename?: 'Profile', id: any, signless: boolean, sponsor: boolean, txHash: any, createdAt: any, interests: Array<string>, invitesLeft: number, ownedBy: { __typename?: 'NetworkAddress', address: any, chainId: any }, stats: { __typename?: 'ProfileStats', id: any, followers: number, following: number, comments: number, posts: number, mirrors: number, quotes: number, publications: number, reactions: number, countOpenActions: number }, operations: { __typename?: 'ProfileOperations', id: any, canBlock: boolean, canUnblock: boolean, canFollow: TriStateValue, canUnfollow: boolean, isBlockedByMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, isFollowedByMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, isFollowingMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean } }, guardian?: { __typename?: 'ProfileGuardianResult', protected: boolean, cooldownEndsOn?: any | null } | null, invitedBy?: { __typename?: 'Profile', id: any } | null, onchainIdentity: { __typename?: 'ProfileOnchainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnchainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source?: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } | null }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } }, followNftAddress?: { __typename?: 'NetworkAddress', address: any, chainId: any } | null, metadata?: { __typename?: 'ProfileMetadata', bio?: any | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | null, followModule?: { __typename?: 'FeeFollowModuleSettings', recipient: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any }, amount: { __typename?: 'Amount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } } } | { __typename?: 'RevertFollowModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'UnknownFollowModuleSettings', followModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type ProfilesManagedQueryVariables = Exact<{
  request: ProfilesManagedRequest;
}>;


export type ProfilesManagedQuery = { __typename?: 'Query', profilesManaged: { __typename?: 'PaginatedProfileResult', items: Array<{ __typename?: 'Profile', id: any, signless: boolean, sponsor: boolean, txHash: any, createdAt: any, interests: Array<string>, invitesLeft: number, ownedBy: { __typename?: 'NetworkAddress', address: any, chainId: any }, stats: { __typename?: 'ProfileStats', id: any, followers: number, following: number, comments: number, posts: number, mirrors: number, quotes: number, publications: number, reactions: number, countOpenActions: number }, operations: { __typename?: 'ProfileOperations', id: any, canBlock: boolean, canUnblock: boolean, canFollow: TriStateValue, canUnfollow: boolean, isBlockedByMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, isFollowedByMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, isFollowingMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean } }, guardian?: { __typename?: 'ProfileGuardianResult', protected: boolean, cooldownEndsOn?: any | null } | null, invitedBy?: { __typename?: 'Profile', id: any } | null, onchainIdentity: { __typename?: 'ProfileOnchainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnchainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source?: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } | null }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } }, followNftAddress?: { __typename?: 'NetworkAddress', address: any, chainId: any } | null, metadata?: { __typename?: 'ProfileMetadata', bio?: any | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | null, followModule?: { __typename?: 'FeeFollowModuleSettings', recipient: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any }, amount: { __typename?: 'Amount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } } } | { __typename?: 'RevertFollowModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'UnknownFollowModuleSettings', followModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type RemoveProfileInterestsMutationVariables = Exact<{
  request: ProfileInterestsRequest;
}>;


export type RemoveProfileInterestsMutation = { __typename?: 'Mutation', removeProfileInterests?: any | null };

export type CreateOnchainSetProfileMetadataTypedDataMutationVariables = Exact<{
  request: OnchainSetProfileMetadataRequest;
}>;


export type CreateOnchainSetProfileMetadataTypedDataMutation = { __typename?: 'Mutation', createOnchainSetProfileMetadataTypedData: { __typename?: 'CreateOnchainSetProfileMetadataBroadcastItemResult', expiresAt: any, id: any, typedData: { __typename?: 'CreateOnchainSetProfileMetadataEIP712TypedData', domain: { __typename?: 'EIP712TypedDataDomain', name: string, chainId: any, version: string, verifyingContract: any }, types: { __typename?: 'CreateOnchainSetProfileMetadataEIP712TypedDataTypes', SetProfileMetadataURI: Array<{ __typename?: 'EIP712TypedDataField', name: string, type: string }> }, value: { __typename?: 'CreateOnchainSetProfileMetadataEIP712TypedDataValue', nonce: any, deadline: any, profileId: any, metadataURI: any } } } };

export type SetProfileMetadataMutationVariables = Exact<{
  request: OnchainSetProfileMetadataRequest;
}>;


export type SetProfileMetadataMutation = { __typename?: 'Mutation', setProfileMetadata: { __typename?: 'LensProfileManagerRelayError', reason: LensProfileManagerRelayErrorReasonType } | { __typename?: 'RelaySuccess', txHash?: any | null, txId: any } };

export type CreateUnblockProfilesTypedDataMutationVariables = Exact<{
  request: UnblockRequest;
}>;


export type CreateUnblockProfilesTypedDataMutation = { __typename?: 'Mutation', createUnblockProfilesTypedData: { __typename?: 'CreateUnblockProfilesBroadcastItemResult', id: any, expiresAt: any, typedData: { __typename?: 'CreateUnblockProfilesEIP712TypedData', types: { __typename?: 'CreateUnblockProfilesEIP712TypedDataTypes', SetBlockStatus: Array<{ __typename?: 'EIP712TypedDataField', name: string, type: string }> }, domain: { __typename?: 'EIP712TypedDataDomain', name: string, chainId: any, version: string, verifyingContract: any }, value: { __typename?: 'CreateUnblockProfilesEIP712TypedDataValue', nonce: any, deadline: any, byProfileId: any, idsOfProfilesToSetBlockStatus: Array<any>, blockStatus: Array<boolean> } } } };

export type UnblockMutationVariables = Exact<{
  request: UnblockRequest;
}>;


export type UnblockMutation = { __typename?: 'Mutation', unblock: { __typename?: 'LensProfileManagerRelayError', reason: LensProfileManagerRelayErrorReasonType } | { __typename?: 'RelaySuccess', txHash?: any | null, txId: any } };

export type WhoHaveBlockedQueryVariables = Exact<{
  request: WhoHaveBlockedRequest;
}>;


export type WhoHaveBlockedQuery = { __typename?: 'Query', whoHaveBlocked: { __typename?: 'PaginatedProfileResult', items: Array<{ __typename?: 'Profile', id: any, signless: boolean, sponsor: boolean, txHash: any, createdAt: any, interests: Array<string>, invitesLeft: number, ownedBy: { __typename?: 'NetworkAddress', address: any, chainId: any }, stats: { __typename?: 'ProfileStats', id: any, followers: number, following: number, comments: number, posts: number, mirrors: number, quotes: number, publications: number, reactions: number, countOpenActions: number }, operations: { __typename?: 'ProfileOperations', id: any, canBlock: boolean, canUnblock: boolean, canFollow: TriStateValue, canUnfollow: boolean, isBlockedByMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, isFollowedByMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, isFollowingMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean } }, guardian?: { __typename?: 'ProfileGuardianResult', protected: boolean, cooldownEndsOn?: any | null } | null, invitedBy?: { __typename?: 'Profile', id: any } | null, onchainIdentity: { __typename?: 'ProfileOnchainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnchainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source?: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } | null }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } }, followNftAddress?: { __typename?: 'NetworkAddress', address: any, chainId: any } | null, metadata?: { __typename?: 'ProfileMetadata', bio?: any | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | null, followModule?: { __typename?: 'FeeFollowModuleSettings', recipient: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any }, amount: { __typename?: 'Amount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } } } | { __typename?: 'RevertFollowModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'UnknownFollowModuleSettings', followModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type CanDecryptPublicationQueryVariables = Exact<{
  request: PublicationRequest;
}>;


export type CanDecryptPublicationQuery = { __typename?: 'Query', publication?: { __typename?: 'Comment', operations: { __typename?: 'PublicationOperations', canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } } } | { __typename?: 'Mirror' } | { __typename?: 'Post', operations: { __typename?: 'PublicationOperations', canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } } } | { __typename?: 'Quote', operations: { __typename?: 'PublicationOperations', canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } } } | null };

export type PublicationQueryVariables = Exact<{
  request: PublicationRequest;
}>;


export type PublicationQuery = { __typename?: 'Query', publication?: { __typename?: 'Comment', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, root: { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, commentOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, firstComment?: { __typename?: 'Comment', id: any } | null, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | { __typename?: 'Mirror', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, mirrorOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any } } | { __typename?: 'Post', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | { __typename?: 'Quote', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, quoteOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null };

export type PublicationsQueryVariables = Exact<{
  request: PublicationsRequest;
}>;


export type PublicationsQuery = { __typename?: 'Query', publications: { __typename?: 'PaginatedPublicationsResult', items: Array<{ __typename?: 'Comment', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, root: { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, commentOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, firstComment?: { __typename?: 'Comment', id: any } | null, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | { __typename?: 'Mirror', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, mirrorOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any } } | { __typename?: 'Post', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | { __typename?: 'Quote', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, quoteOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type HidePublicationMutationVariables = Exact<{
  request: HidePublicationRequest;
}>;


export type HidePublicationMutation = { __typename?: 'Mutation', hidePublication?: any | null };

export type CreateLegacyCollectTypedDataMutationVariables = Exact<{
  request: LegacyCollectRequest;
}>;


export type CreateLegacyCollectTypedDataMutation = { __typename?: 'Mutation', createLegacyCollectTypedData: { __typename?: 'CreateLegacyCollectBroadcastItemResult', expiresAt: any, id: any, typedData: { __typename?: 'CreateActOnOpenActionEIP712TypedData', domain: { __typename?: 'EIP712TypedDataDomain', chainId: any, name: string, verifyingContract: any, version: string }, types: { __typename?: 'CreateActOnOpenActionEIP712TypedDataTypes', Act: Array<{ __typename?: 'EIP712TypedDataField', name: string, type: string }> }, value: { __typename?: 'CreateActOnOpenActionEIP712TypedDataValue', actionModuleAddress: any, actionModuleData: any, actorProfileId: any, deadline: any, nonce: any, publicationActedId: any, publicationActedProfileId: any, referrerProfileIds: Array<any>, referrerPubIds: Array<any> } } } };

export type LegacyCollectMutationVariables = Exact<{
  request: LegacyCollectRequest;
}>;


export type LegacyCollectMutation = { __typename?: 'Mutation', legacyCollect: { __typename?: 'LensProfileManagerRelayError', reason: LensProfileManagerRelayErrorReasonType } | { __typename?: 'RelaySuccess', txHash?: any | null, txId: any } };

export type ImageSetFieldsFragment = { __typename?: 'ImageSet', raw: { __typename?: 'Image', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null, width?: number | null, height?: number | null } | null };

export type MetadataAttributeFieldsFragment = { __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string };

export type AudioFieldsFragment = { __typename?: 'Audio', uri: any, mimeType?: any | null };

export type ImageFieldsFragment = { __typename?: 'Image', uri: any, mimeType?: any | null };

export type VideoFieldsFragment = { __typename?: 'Video', uri: any, mimeType?: any | null };

export type EncryptableAudioFieldsFragment = { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null };

export type EncryptableImageFieldsFragment = { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null };

export type EncryptableVideoFieldsFragment = { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null };

export type EncryptableAudioSetFieldsFragment = { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null };

export type EncryptableImageSetFieldsFragment = { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null };

export type EncryptableVideoSetFieldsFragment = { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null };

export type PublicationMetadataMediaAudioFieldsFragment = { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null };

export type PublicationMetadataMediaImageFieldsFragment = { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null };

export type PublicationMetadataMediaVideoFieldsFragment = { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null };

export type ArticleMetadataV3FieldsFragment = { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null };

export type AudioMetadataV3FieldsFragment = { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } };

export type CheckingInMetadataV3FieldsFragment = { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null };

export type EmbedMetadataV3FieldsFragment = { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null };

export type EventMetadataV3FieldsFragment = { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null };

export type ImageMetadataV3FieldsFragment = { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } };

export type LinkMetadataV3FieldsFragment = { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null };

export type LiveStreamMetadataV3FieldsFragment = { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null };

export type MintMetadataV3FieldsFragment = { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null };

export type SpaceMetadataV3FieldsFragment = { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null };

export type StoryMetadataV3FieldsFragment = { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } };

export type TextOnlyMetadataV3FieldsFragment = { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null };

export type ThreeDMetadataV3FieldsFragment = { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null };

export type TransactionMetadataV3FieldsFragment = { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null };

export type VideoMetadataV3FieldsFragment = { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } };

type AnyPublicationMetadataFields_ArticleMetadataV3_Fragment = { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null };

type AnyPublicationMetadataFields_AudioMetadataV3_Fragment = { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } };

type AnyPublicationMetadataFields_CheckingInMetadataV3_Fragment = { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null };

type AnyPublicationMetadataFields_EmbedMetadataV3_Fragment = { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null };

type AnyPublicationMetadataFields_EventMetadataV3_Fragment = { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null };

type AnyPublicationMetadataFields_ImageMetadataV3_Fragment = { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } };

type AnyPublicationMetadataFields_LinkMetadataV3_Fragment = { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null };

type AnyPublicationMetadataFields_LiveStreamMetadataV3_Fragment = { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null };

type AnyPublicationMetadataFields_MintMetadataV3_Fragment = { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null };

type AnyPublicationMetadataFields_SpaceMetadataV3_Fragment = { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null };

type AnyPublicationMetadataFields_StoryMetadataV3_Fragment = { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } };

type AnyPublicationMetadataFields_TextOnlyMetadataV3_Fragment = { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null };

type AnyPublicationMetadataFields_ThreeDMetadataV3_Fragment = { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null };

type AnyPublicationMetadataFields_TransactionMetadataV3_Fragment = { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null };

type AnyPublicationMetadataFields_VideoMetadataV3_Fragment = { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } };

export type AnyPublicationMetadataFieldsFragment = AnyPublicationMetadataFields_ArticleMetadataV3_Fragment | AnyPublicationMetadataFields_AudioMetadataV3_Fragment | AnyPublicationMetadataFields_CheckingInMetadataV3_Fragment | AnyPublicationMetadataFields_EmbedMetadataV3_Fragment | AnyPublicationMetadataFields_EventMetadataV3_Fragment | AnyPublicationMetadataFields_ImageMetadataV3_Fragment | AnyPublicationMetadataFields_LinkMetadataV3_Fragment | AnyPublicationMetadataFields_LiveStreamMetadataV3_Fragment | AnyPublicationMetadataFields_MintMetadataV3_Fragment | AnyPublicationMetadataFields_SpaceMetadataV3_Fragment | AnyPublicationMetadataFields_StoryMetadataV3_Fragment | AnyPublicationMetadataFields_TextOnlyMetadataV3_Fragment | AnyPublicationMetadataFields_ThreeDMetadataV3_Fragment | AnyPublicationMetadataFields_TransactionMetadataV3_Fragment | AnyPublicationMetadataFields_VideoMetadataV3_Fragment;

export type CreateMomokaPostTypedDataMutationVariables = Exact<{
  request: MomokaPostRequest;
}>;


export type CreateMomokaPostTypedDataMutation = { __typename?: 'Mutation', createMomokaPostTypedData: { __typename?: 'CreateMomokaPostBroadcastItemResult', id: any, expiresAt: any, typedData: { __typename?: 'CreateMomokaPostEIP712TypedData', types: { __typename?: 'CreateMomokaPostEIP712TypedDataTypes', Post: Array<{ __typename?: 'EIP712TypedDataField', name: string, type: string }> }, domain: { __typename?: 'EIP712TypedDataDomain', name: string, chainId: any, version: string, verifyingContract: any }, value: { __typename?: 'CreateMomokaPostEIP712TypedDataValue', nonce: any, deadline: any, profileId: any, contentURI: any, actionModules: Array<any>, actionModulesInitDatas: Array<any>, referenceModule: any, referenceModuleInitData: any } } } };

export type PostOnMomokaMutationVariables = Exact<{
  request: MomokaPostRequest;
}>;


export type PostOnMomokaMutation = { __typename?: 'Mutation', postOnMomoka: { __typename?: 'CreateMomokaPublicationResult', id: any, proof: any, momokaId: any } | { __typename?: 'LensProfileManagerRelayError', reason: LensProfileManagerRelayErrorReasonType } };

export type CreateMomokaCommentTypedDataMutationVariables = Exact<{
  request: MomokaCommentRequest;
}>;


export type CreateMomokaCommentTypedDataMutation = { __typename?: 'Mutation', createMomokaCommentTypedData: { __typename?: 'CreateMomokaCommentBroadcastItemResult', id: any, expiresAt: any, typedData: { __typename?: 'CreateMomokaCommentEIP712TypedData', types: { __typename?: 'CreateMomokaCommentEIP712TypedDataTypes', Comment: Array<{ __typename?: 'EIP712TypedDataField', name: string, type: string }> }, domain: { __typename?: 'EIP712TypedDataDomain', name: string, chainId: any, version: string, verifyingContract: any }, value: { __typename?: 'CreateMomokaCommentEIP712TypedDataValue', actionModules: Array<any>, actionModulesInitDatas: Array<any>, contentURI: any, deadline: any, nonce: any, pointedProfileId: any, pointedPubId: any, profileId: any, referenceModule: any, referenceModuleData: any, referenceModuleInitData: any, referrerProfileIds: Array<any>, referrerPubIds: Array<any> } } } };

export type CommentOnMomokaMutationVariables = Exact<{
  request: MomokaCommentRequest;
}>;


export type CommentOnMomokaMutation = { __typename?: 'Mutation', commentOnMomoka: { __typename?: 'CreateMomokaPublicationResult', id: any, proof: any, momokaId: any } | { __typename?: 'LensProfileManagerRelayError', reason: LensProfileManagerRelayErrorReasonType } };

export type CreateMomokaQuoteTypedDataMutationVariables = Exact<{
  request: MomokaQuoteRequest;
}>;


export type CreateMomokaQuoteTypedDataMutation = { __typename?: 'Mutation', createMomokaQuoteTypedData: { __typename?: 'CreateMomokaQuoteBroadcastItemResult', id: any, expiresAt: any, typedData: { __typename?: 'CreateMomokaQuoteEIP712TypedData', types: { __typename?: 'CreateMomokaQuoteEIP712TypedDataTypes', Quote: Array<{ __typename?: 'EIP712TypedDataField', name: string, type: string }> }, domain: { __typename?: 'EIP712TypedDataDomain', name: string, chainId: any, version: string, verifyingContract: any }, value: { __typename?: 'CreateMomokaQuoteEIP712TypedDataValue', nonce: any, deadline: any, profileId: any, contentURI: any, pointedProfileId: any, pointedPubId: any, referrerProfileIds: Array<any>, referrerPubIds: Array<any>, actionModules: Array<any>, actionModulesInitDatas: Array<any>, referenceModule: any, referenceModuleData: any, referenceModuleInitData: any } } } };

export type QuoteOnMomokaMutationVariables = Exact<{
  request: MomokaQuoteRequest;
}>;


export type QuoteOnMomokaMutation = { __typename?: 'Mutation', quoteOnMomoka: { __typename?: 'CreateMomokaPublicationResult', id: any, proof: any, momokaId: any } | { __typename?: 'LensProfileManagerRelayError', reason: LensProfileManagerRelayErrorReasonType } };

export type CreateMomokaMirrorTypedDataMutationVariables = Exact<{
  request: MomokaMirrorRequest;
}>;


export type CreateMomokaMirrorTypedDataMutation = { __typename?: 'Mutation', createMomokaMirrorTypedData: { __typename?: 'CreateMomokaMirrorBroadcastItemResult', id: any, expiresAt: any, typedData: { __typename?: 'CreateMomokaMirrorEIP712TypedData', types: { __typename?: 'CreateMomokaMirrorEIP712TypedDataTypes', Mirror: Array<{ __typename?: 'EIP712TypedDataField', name: string, type: string }> }, domain: { __typename?: 'EIP712TypedDataDomain', name: string, chainId: any, version: string, verifyingContract: any }, value: { __typename?: 'CreateMomokaMirrorEIP712TypedDataValue', nonce: any, metadataURI: string, deadline: any, profileId: any, pointedProfileId: any, pointedPubId: any, referrerProfileIds: Array<any>, referrerPubIds: Array<any>, referenceModuleData: any } } } };

export type MirrorOnMomokaMutationVariables = Exact<{
  request: MomokaMirrorRequest;
}>;


export type MirrorOnMomokaMutation = { __typename?: 'Mutation', mirrorOnMomoka: { __typename?: 'CreateMomokaPublicationResult', id: any, proof: any, momokaId: any } | { __typename?: 'LensProfileManagerRelayError', reason: LensProfileManagerRelayErrorReasonType } };

export type NewMomokaTransactionSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewMomokaTransactionSubscription = { __typename?: 'Subscription', newMomokaTransaction: { __typename?: 'MomokaCommentTransaction', publication: { __typename?: 'Comment', id: any }, commentOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any } } | { __typename?: 'MomokaMirrorTransaction', publication: { __typename?: 'Mirror', id: any }, mirrorOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any } } | { __typename?: 'MomokaPostTransaction', publication: { __typename?: 'Post', id: any } } | { __typename?: 'MomokaQuoteTransaction', publication: { __typename?: 'Quote', id: any }, quoteOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any } } };

export type NewPublicationStatsSubscriptionVariables = Exact<{
  for: Scalars['PublicationId'];
}>;


export type NewPublicationStatsSubscription = { __typename?: 'Subscription', newPublicationStats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number, bookmarks: number, id: any, upvotes: number, downvotes: number } };

export type CreateOnchainPostTypedDataMutationVariables = Exact<{
  request: OnchainPostRequest;
}>;


export type CreateOnchainPostTypedDataMutation = { __typename?: 'Mutation', createOnchainPostTypedData: { __typename?: 'CreateOnchainPostBroadcastItemResult', id: any, expiresAt: any, typedData: { __typename?: 'CreateOnchainPostEIP712TypedData', types: { __typename?: 'CreateOnchainPostEIP712TypedDataTypes', Post: Array<{ __typename?: 'EIP712TypedDataField', name: string, type: string }> }, domain: { __typename?: 'EIP712TypedDataDomain', name: string, chainId: any, version: string, verifyingContract: any }, value: { __typename?: 'CreateOnchainPostEIP712TypedDataValue', nonce: any, deadline: any, profileId: any, contentURI: any, actionModules: Array<any>, actionModulesInitDatas: Array<any>, referenceModule: any, referenceModuleInitData: any } } } };

export type PostOnchainMutationVariables = Exact<{
  request: OnchainPostRequest;
}>;


export type PostOnchainMutation = { __typename?: 'Mutation', postOnchain: { __typename?: 'LensProfileManagerRelayError', reason: LensProfileManagerRelayErrorReasonType } | { __typename?: 'RelaySuccess', txHash?: any | null, txId: any } };

export type CreateOnchainQuoteTypedDataMutationVariables = Exact<{
  request: OnchainQuoteRequest;
}>;


export type CreateOnchainQuoteTypedDataMutation = { __typename?: 'Mutation', createOnchainQuoteTypedData: { __typename?: 'CreateOnchainQuoteBroadcastItemResult', id: any, expiresAt: any, typedData: { __typename?: 'CreateOnchainQuoteEIP712TypedData', types: { __typename?: 'CreateOnchainQuoteEIP712TypedDataTypes', Quote: Array<{ __typename?: 'EIP712TypedDataField', name: string, type: string }> }, domain: { __typename?: 'EIP712TypedDataDomain', name: string, chainId: any, version: string, verifyingContract: any }, value: { __typename?: 'CreateOnchainQuoteEIP712TypedDataValue', nonce: any, deadline: any, profileId: any, contentURI: any, pointedProfileId: any, pointedPubId: any, referrerProfileIds: Array<any>, referrerPubIds: Array<any>, referenceModuleData: any, actionModules: Array<any>, actionModulesInitDatas: Array<any>, referenceModule: any, referenceModuleInitData: any } } } };

export type QuoteOnchainMutationVariables = Exact<{
  request: OnchainQuoteRequest;
}>;


export type QuoteOnchainMutation = { __typename?: 'Mutation', quoteOnchain: { __typename?: 'LensProfileManagerRelayError', reason: LensProfileManagerRelayErrorReasonType } | { __typename?: 'RelaySuccess', txHash?: any | null, txId: any } };

export type CreateOnchainCommentTypedDataMutationVariables = Exact<{
  request: OnchainCommentRequest;
}>;


export type CreateOnchainCommentTypedDataMutation = { __typename?: 'Mutation', createOnchainCommentTypedData: { __typename?: 'CreateOnchainCommentBroadcastItemResult', id: any, expiresAt: any, typedData: { __typename?: 'CreateOnchainCommentEIP712TypedData', types: { __typename?: 'CreateOnchainCommentEIP712TypedDataTypes', Comment: Array<{ __typename?: 'EIP712TypedDataField', name: string, type: string }> }, domain: { __typename?: 'EIP712TypedDataDomain', name: string, chainId: any, version: string, verifyingContract: any }, value: { __typename?: 'CreateOnchainCommentEIP712TypedDataValue', nonce: any, deadline: any, profileId: any, contentURI: any, pointedProfileId: any, pointedPubId: any, referrerProfileIds: Array<any>, referrerPubIds: Array<any>, referenceModuleData: any, actionModules: Array<any>, actionModulesInitDatas: Array<any>, referenceModule: any, referenceModuleInitData: any } } } };

export type CommentOnchainMutationVariables = Exact<{
  request: OnchainCommentRequest;
}>;


export type CommentOnchainMutation = { __typename?: 'Mutation', commentOnchain: { __typename?: 'LensProfileManagerRelayError', reason: LensProfileManagerRelayErrorReasonType } | { __typename?: 'RelaySuccess', txHash?: any | null, txId: any } };

export type CreateOnchainMirrorTypedDataMutationVariables = Exact<{
  request: OnchainMirrorRequest;
}>;


export type CreateOnchainMirrorTypedDataMutation = { __typename?: 'Mutation', createOnchainMirrorTypedData: { __typename?: 'CreateOnchainMirrorBroadcastItemResult', id: any, expiresAt: any, typedData: { __typename?: 'CreateOnchainMirrorEIP712TypedData', domain: { __typename?: 'EIP712TypedDataDomain', name: string, chainId: any, version: string, verifyingContract: any }, types: { __typename?: 'CreateOnchainMirrorEIP712TypedDataTypes', Mirror: Array<{ __typename?: 'EIP712TypedDataField', name: string, type: string }> }, value: { __typename?: 'CreateOnchainMirrorEIP712TypedDataValue', nonce: any, metadataURI: string, deadline: any, profileId: any, pointedProfileId: any, pointedPubId: any, referrerProfileIds: Array<any>, referrerPubIds: Array<any>, referenceModuleData: any } } } };

export type MirrorOnchainMutationVariables = Exact<{
  request: OnchainMirrorRequest;
}>;


export type MirrorOnchainMutation = { __typename?: 'Mutation', mirrorOnchain: { __typename?: 'LensProfileManagerRelayError', reason: LensProfileManagerRelayErrorReasonType } | { __typename?: 'RelaySuccess', txHash?: any | null, txId: any } };

type PrimaryPublicationFields_Comment_Fragment = { __typename?: 'Comment', id: any };

type PrimaryPublicationFields_Post_Fragment = { __typename?: 'Post', id: any };

type PrimaryPublicationFields_Quote_Fragment = { __typename?: 'Quote', id: any };

export type PrimaryPublicationFieldsFragment = PrimaryPublicationFields_Comment_Fragment | PrimaryPublicationFields_Post_Fragment | PrimaryPublicationFields_Quote_Fragment;

export type PublicationOperationFieldsFragment = { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } };

export type PostFieldsFragment = { __typename?: 'Post', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null };

export type QuoteFieldsFragment = { __typename?: 'Quote', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, quoteOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null };

export type MirrorFieldsFragment = { __typename?: 'Mirror', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, mirrorOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any } };

export type CommentFieldsFragment = { __typename?: 'Comment', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, root: { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, commentOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, firstComment?: { __typename?: 'Comment', id: any } | null, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null };

export type RefreshPublicationMetadataMutationVariables = Exact<{
  request: RefreshPublicationMetadataRequest;
}>;


export type RefreshPublicationMetadataMutation = { __typename?: 'Mutation', refreshPublicationMetadata: { __typename?: 'RefreshPublicationMetadataResult', result: RefreshPublicationMetadataResultType } };

export type PublicationsTagsQueryVariables = Exact<{
  request: PublicationsTagsRequest;
}>;


export type PublicationsTagsQuery = { __typename?: 'Query', publicationsTags: { __typename?: 'PaginatedPublicationsTagsResult', items: Array<{ __typename?: 'TagResult', tag: string, total: number }>, pageInfo: { __typename?: 'PaginatedResultInfo', next?: any | null, prev?: any | null } } };

export type ValidatePublicationMetadataQueryVariables = Exact<{
  request: ValidatePublicationMetadataRequest;
}>;


export type ValidatePublicationMetadataQuery = { __typename?: 'Query', validatePublicationMetadata: { __typename?: 'PublicationValidateMetadataResult', reason?: string | null, valid: boolean } };

export type WhoActedOnPublicationQueryVariables = Exact<{
  request: WhoActedOnPublicationRequest;
}>;


export type WhoActedOnPublicationQuery = { __typename?: 'Query', whoActedOnPublication: { __typename?: 'PaginatedProfileResult', items: Array<{ __typename?: 'Profile', id: any, signless: boolean, sponsor: boolean, txHash: any, createdAt: any, interests: Array<string>, invitesLeft: number, ownedBy: { __typename?: 'NetworkAddress', address: any, chainId: any }, stats: { __typename?: 'ProfileStats', id: any, followers: number, following: number, comments: number, posts: number, mirrors: number, quotes: number, publications: number, reactions: number, countOpenActions: number }, operations: { __typename?: 'ProfileOperations', id: any, canBlock: boolean, canUnblock: boolean, canFollow: TriStateValue, canUnfollow: boolean, isBlockedByMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, isFollowedByMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, isFollowingMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean } }, guardian?: { __typename?: 'ProfileGuardianResult', protected: boolean, cooldownEndsOn?: any | null } | null, invitedBy?: { __typename?: 'Profile', id: any } | null, onchainIdentity: { __typename?: 'ProfileOnchainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnchainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source?: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } | null }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } }, followNftAddress?: { __typename?: 'NetworkAddress', address: any, chainId: any } | null, metadata?: { __typename?: 'ProfileMetadata', bio?: any | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | null, followModule?: { __typename?: 'FeeFollowModuleSettings', recipient: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any }, amount: { __typename?: 'Amount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } } } | { __typename?: 'RevertFollowModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'UnknownFollowModuleSettings', followModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type AddReactionMutationVariables = Exact<{
  request: ReactionRequest;
}>;


export type AddReactionMutation = { __typename?: 'Mutation', addReaction?: any | null };

export type RemoveReactionMutationVariables = Exact<{
  request: ReactionRequest;
}>;


export type RemoveReactionMutation = { __typename?: 'Mutation', removeReaction?: any | null };

export type WhoReactedPublicationQueryVariables = Exact<{
  request: WhoReactedPublicationRequest;
}>;


export type WhoReactedPublicationQuery = { __typename?: 'Query', whoReactedPublication: { __typename?: 'PaginatedWhoReactedResult', items: Array<{ __typename?: 'ProfileWhoReactedResult', profile: { __typename?: 'Profile', id: any, signless: boolean, sponsor: boolean, txHash: any, createdAt: any, interests: Array<string>, invitesLeft: number, ownedBy: { __typename?: 'NetworkAddress', address: any, chainId: any }, stats: { __typename?: 'ProfileStats', id: any, followers: number, following: number, comments: number, posts: number, mirrors: number, quotes: number, publications: number, reactions: number, countOpenActions: number }, operations: { __typename?: 'ProfileOperations', id: any, canBlock: boolean, canUnblock: boolean, canFollow: TriStateValue, canUnfollow: boolean, isBlockedByMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, isFollowedByMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, isFollowingMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean } }, guardian?: { __typename?: 'ProfileGuardianResult', protected: boolean, cooldownEndsOn?: any | null } | null, invitedBy?: { __typename?: 'Profile', id: any } | null, onchainIdentity: { __typename?: 'ProfileOnchainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnchainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source?: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } | null }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } }, followNftAddress?: { __typename?: 'NetworkAddress', address: any, chainId: any } | null, metadata?: { __typename?: 'ProfileMetadata', bio?: any | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | null, followModule?: { __typename?: 'FeeFollowModuleSettings', recipient: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any }, amount: { __typename?: 'Amount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } } } | { __typename?: 'RevertFollowModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'UnknownFollowModuleSettings', followModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, reactions: Array<{ __typename?: 'ProfileReactionResult', reaction: PublicationReactionType, reactionAt: any }> }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type ReportPublicationMutationVariables = Exact<{
  request: ReportPublicationRequest;
}>;


export type ReportPublicationMutation = { __typename?: 'Mutation', reportPublication?: any | null };

export type FollowRevenuesQueryVariables = Exact<{
  request: FollowRevenueRequest;
}>;


export type FollowRevenuesQuery = { __typename?: 'Query', followRevenues: { __typename?: 'FollowRevenueResult', revenues: Array<{ __typename?: 'RevenueAggregate', total: { __typename?: 'Amount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } } }> } };

export type RevenueFromPublicationQueryVariables = Exact<{
  request: RevenueFromPublicationRequest;
}>;


export type RevenueFromPublicationQuery = { __typename?: 'Query', revenueFromPublication?: { __typename?: 'PublicationRevenue', publication: { __typename?: 'Comment', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, root: { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, commentOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, firstComment?: { __typename?: 'Comment', id: any } | null, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | { __typename?: 'Mirror', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, mirrorOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any } } | { __typename?: 'Post', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | { __typename?: 'Quote', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, quoteOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null }, revenue: Array<{ __typename?: 'RevenueAggregate', total: { __typename?: 'Amount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } } }> } | null };

export type RevenueFromPublicationsQueryVariables = Exact<{
  request: RevenueFromPublicationsRequest;
}>;


export type RevenueFromPublicationsQuery = { __typename?: 'Query', revenueFromPublications: { __typename?: 'PaginatedRevenueFromPublicationsResult', items: Array<{ __typename?: 'PublicationRevenue', publication: { __typename?: 'Comment', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, root: { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, commentOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, firstComment?: { __typename?: 'Comment', id: any } | null, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | { __typename?: 'Mirror', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, mirrorOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any } } | { __typename?: 'Post', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | { __typename?: 'Quote', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, quoteOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null }, revenue: Array<{ __typename?: 'RevenueAggregate', total: { __typename?: 'Amount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } } }> }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type SearchProfilesQueryVariables = Exact<{
  request: ProfileSearchRequest;
}>;


export type SearchProfilesQuery = { __typename?: 'Query', searchProfiles: { __typename?: 'PaginatedProfileResult', items: Array<{ __typename?: 'Profile', id: any, signless: boolean, sponsor: boolean, txHash: any, createdAt: any, interests: Array<string>, invitesLeft: number, ownedBy: { __typename?: 'NetworkAddress', address: any, chainId: any }, stats: { __typename?: 'ProfileStats', id: any, followers: number, following: number, comments: number, posts: number, mirrors: number, quotes: number, publications: number, reactions: number, countOpenActions: number }, operations: { __typename?: 'ProfileOperations', id: any, canBlock: boolean, canUnblock: boolean, canFollow: TriStateValue, canUnfollow: boolean, isBlockedByMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, isFollowedByMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, isFollowingMe: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean } }, guardian?: { __typename?: 'ProfileGuardianResult', protected: boolean, cooldownEndsOn?: any | null } | null, invitedBy?: { __typename?: 'Profile', id: any } | null, onchainIdentity: { __typename?: 'ProfileOnchainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnchainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source?: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } | null }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } }, followNftAddress?: { __typename?: 'NetworkAddress', address: any, chainId: any } | null, metadata?: { __typename?: 'ProfileMetadata', bio?: any | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | null, followModule?: { __typename?: 'FeeFollowModuleSettings', recipient: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any }, amount: { __typename?: 'Amount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } } } | { __typename?: 'RevertFollowModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'UnknownFollowModuleSettings', followModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type SearchPublicationsQueryVariables = Exact<{
  request: PublicationSearchRequest;
}>;


export type SearchPublicationsQuery = { __typename?: 'Query', searchPublications: { __typename?: 'PaginatedPublicationPrimaryResult', items: Array<{ __typename?: 'Comment', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, root: { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, commentOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, firstComment?: { __typename?: 'Comment', id: any } | null, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | { __typename?: 'Post', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | { __typename?: 'Quote', id: any, isHidden: boolean, txHash?: any | null, createdAt: any, publishedOn?: { __typename?: 'App', id: any } | null, momoka?: { __typename?: 'MomokaInfo', proof: any } | null, by: { __typename?: 'Profile', id: any, handle?: { __typename: 'HandleInfo', id: any, fullHandle: any, namespace: string, localName: string, ownedBy: any, suggestedFormatted: { __typename?: 'SuggestedFormattedHandle', full: string, localName: string }, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null } | null }, stats: { __typename?: 'PublicationStats', comments: number, mirrors: number, quotes: number }, operations: { __typename?: 'PublicationOperations', isNotInterested: boolean, hasBookmarked: boolean, hasReported: boolean, canAct: TriStateValue, hasReacted: boolean, canComment: TriStateValue, canMirror: TriStateValue, hasMirrored: boolean, hasActed: { __typename?: 'OptimisticStatusResult', value: boolean, isFinalisedOnchain: boolean }, actedOn: Array<{ __typename?: 'KnownCollectOpenActionResult', type: CollectOpenActionModuleType } | { __typename?: 'UnknownOpenActionResult', address: any, category?: OpenActionCategoryType | null, initReturnData?: any | null }>, canDecrypt: { __typename?: 'CanDecryptResponse', result: boolean, reasons?: Array<DecryptFailReasonType> | null, extraDetails?: string | null } }, quoteOn: { __typename?: 'Comment', id: any } | { __typename?: 'Post', id: any } | { __typename?: 'Quote', id: any }, metadata: { __typename?: 'ArticleMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'AudioMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'CheckingInMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EmbedMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'EventMetadataV3', contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ImageMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'LinkMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'LiveStreamMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, startsAt: any, endsAt: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'MintMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'SpaceMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'StoryMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaAudio', duration?: number | null, license?: PublicationMetadataLicenseType | null, credits?: any | null, artist?: any | null, genre?: any | null, recordLabel?: any | null, lyrics?: any | null, audio: { __typename?: 'EncryptableAudioSet', raw: { __typename?: 'EncryptableAudio', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Audio', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaImage', license?: PublicationMetadataLicenseType | null, altTag?: any | null, image: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null }, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } } | { __typename?: 'TextOnlyMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'ThreeDMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'TransactionMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } | { __typename?: 'VideoMetadataV3', content: any, contentWarning?: PublicationContentWarningType | null, tags?: Array<string> | null, locale: any, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null, asset: { __typename?: 'PublicationMetadataMediaVideo', duration?: number | null, license?: PublicationMetadataLicenseType | null, altTag?: any | null, video: { __typename?: 'EncryptableVideoSet', raw: { __typename?: 'EncryptableVideo', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Video', uri: any, mimeType?: any | null } | null }, cover?: { __typename?: 'EncryptableImageSet', raw: { __typename?: 'EncryptableImage', uri: any, mimeType?: any | null }, optimized?: { __typename?: 'Image', uri: any, mimeType?: any | null } | null } | null, attributes?: Array<{ __typename: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> | null } }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', commentsRestricted: boolean, mirrorsRestricted: boolean, quotesRestricted: boolean, degreesOfSeparation: number, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'FollowOnlyReferenceModuleSettings', contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | { __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings' } | { __typename?: 'LegacyFollowOnlyReferenceModuleSettings' } | { __typename?: 'UnknownReferenceModuleSettings', referenceModuleReturnData?: any | null, contract: { __typename?: 'NetworkAddress', address: any, chainId: any } } | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null } } };

export type LensTransactionStatusQueryVariables = Exact<{
  request: LensTransactionStatusRequest;
}>;


export type LensTransactionStatusQuery = { __typename?: 'Query', lensTransactionStatus?: { __typename: 'LensTransactionResult', status: LensTransactionStatusType, txHash: any, reason?: LensTransactionFailureType | null, extraInfo?: string | null } | null };

export const NetworkAddressFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NetworkAddressFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NetworkAddress"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}}]}}]} as unknown as DocumentNode<NetworkAddressFieldsFragment, unknown>;
export const NftCollectionFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NftCollectionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NftCollection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NetworkAddressFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contractType"}},{"kind":"Field","name":{"kind":"Name","value":"baseUri"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}}]}}]} as unknown as DocumentNode<NftCollectionFieldsFragment, unknown>;
export const NftMetadataAttributeFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NftMetadataAttributeFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicationMarketplaceMetadataAttribute"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayType"}},{"kind":"Field","name":{"kind":"Name","value":"traitType"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]} as unknown as DocumentNode<NftMetadataAttributeFieldsFragment, unknown>;
export const ImageSetFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageSetFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageSet"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"optimized"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]} as unknown as DocumentNode<ImageSetFieldsFragment, unknown>;
export const NftMetadataFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NftMetadataFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NftMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"animationUrl"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NftMetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"externalURL"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageSetFields"}}]}}]}}]} as unknown as DocumentNode<NftMetadataFieldsFragment, unknown>;
export const NftOwnerFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NftOwnerFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Owner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]} as unknown as DocumentNode<NftOwnerFieldsFragment, unknown>;
export const NftFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NftFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Nft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"contentURI"}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NetworkAddressFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contractType"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NftMetadataFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NftOwnerFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalSupply"}}]}}]} as unknown as DocumentNode<NftFieldsFragment, unknown>;
export const NftGalleryFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NftGalleryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NftGallery"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NftFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<NftGalleryFieldsFragment, unknown>;
export const HandleInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HandleInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HandleInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullHandle"}},{"kind":"Field","name":{"kind":"Name","value":"namespace"}},{"kind":"Field","name":{"kind":"Name","value":"localName"}},{"kind":"Field","name":{"kind":"Name","value":"suggestedFormatted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"full"}},{"kind":"Field","name":{"kind":"Name","value":"localName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"linkedTo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NetworkAddressFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nftTokenId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ownedBy"}}]}}]} as unknown as DocumentNode<HandleInfoFragment, unknown>;
export const PublicationOperationFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PublicationOperationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicationOperations"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isNotInterested"}},{"kind":"Field","name":{"kind":"Name","value":"hasBookmarked"}},{"kind":"Field","name":{"kind":"Name","value":"hasReported"}},{"kind":"Field","name":{"kind":"Name","value":"canAct"}},{"kind":"Field","name":{"kind":"Name","value":"hasActed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"isFinalisedOnchain"}}]}},{"kind":"Field","name":{"kind":"Name","value":"actedOn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"KnownCollectOpenActionResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UnknownOpenActionResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"initReturnData"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"hasReacted"}},{"kind":"Field","name":{"kind":"Name","value":"canComment"}},{"kind":"Field","name":{"kind":"Name","value":"canMirror"}},{"kind":"Field","name":{"kind":"Name","value":"hasMirrored"}},{"kind":"Field","name":{"kind":"Name","value":"canDecrypt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}},{"kind":"Field","name":{"kind":"Name","value":"extraDetails"}}]}}]}}]} as unknown as DocumentNode<PublicationOperationFieldsFragment, unknown>;
export const MetadataAttributeFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MetadataAttributeFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MetadataAttribute"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]} as unknown as DocumentNode<MetadataAttributeFieldsFragment, unknown>;
export const ArticleMetadataV3FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleMetadataV3Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleMetadataV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"contentWarning"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}}]}}]} as unknown as DocumentNode<ArticleMetadataV3FieldsFragment, unknown>;
export const EncryptableAudioFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EncryptableAudioFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EncryptableAudio"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]} as unknown as DocumentNode<EncryptableAudioFieldsFragment, unknown>;
export const AudioFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AudioFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Audio"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]} as unknown as DocumentNode<AudioFieldsFragment, unknown>;
export const EncryptableAudioSetFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EncryptableAudioSetFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EncryptableAudioSet"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EncryptableAudioFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"optimized"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AudioFields"}}]}}]}}]} as unknown as DocumentNode<EncryptableAudioSetFieldsFragment, unknown>;
export const EncryptableImageFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EncryptableImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EncryptableImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]} as unknown as DocumentNode<EncryptableImageFieldsFragment, unknown>;
export const ImageFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]} as unknown as DocumentNode<ImageFieldsFragment, unknown>;
export const EncryptableImageSetFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EncryptableImageSetFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EncryptableImageSet"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EncryptableImageFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"optimized"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageFields"}}]}}]}}]} as unknown as DocumentNode<EncryptableImageSetFieldsFragment, unknown>;
export const PublicationMetadataMediaAudioFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PublicationMetadataMediaAudioFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicationMetadataMediaAudio"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"audio"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EncryptableAudioSetFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EncryptableImageSetFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"license"}},{"kind":"Field","name":{"kind":"Name","value":"credits"}},{"kind":"Field","name":{"kind":"Name","value":"artist"}},{"kind":"Field","name":{"kind":"Name","value":"genre"}},{"kind":"Field","name":{"kind":"Name","value":"recordLabel"}},{"kind":"Field","name":{"kind":"Name","value":"lyrics"}}]}}]} as unknown as DocumentNode<PublicationMetadataMediaAudioFieldsFragment, unknown>;
export const AudioMetadataV3FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AudioMetadataV3Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AudioMetadataV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PublicationMetadataMediaAudioFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"contentWarning"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}}]}}]} as unknown as DocumentNode<AudioMetadataV3FieldsFragment, unknown>;
export const CheckingInMetadataV3FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CheckingInMetadataV3Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CheckingInMetadataV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentWarning"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}}]}}]} as unknown as DocumentNode<CheckingInMetadataV3FieldsFragment, unknown>;
export const EmbedMetadataV3FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EmbedMetadataV3Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmbedMetadataV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"contentWarning"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}}]}}]} as unknown as DocumentNode<EmbedMetadataV3FieldsFragment, unknown>;
export const EventMetadataV3FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EventMetadataV3Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EventMetadataV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentWarning"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"startsAt"}},{"kind":"Field","name":{"kind":"Name","value":"endsAt"}}]}}]} as unknown as DocumentNode<EventMetadataV3FieldsFragment, unknown>;
export const PublicationMetadataMediaImageFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PublicationMetadataMediaImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicationMetadataMediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EncryptableImageSetFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"license"}},{"kind":"Field","name":{"kind":"Name","value":"altTag"}}]}}]} as unknown as DocumentNode<PublicationMetadataMediaImageFieldsFragment, unknown>;
export const ImageMetadataV3FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageMetadataV3Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageMetadataV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PublicationMetadataMediaImageFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"contentWarning"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}}]}}]} as unknown as DocumentNode<ImageMetadataV3FieldsFragment, unknown>;
export const LinkMetadataV3FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkMetadataV3Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkMetadataV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"contentWarning"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}}]}}]} as unknown as DocumentNode<LinkMetadataV3FieldsFragment, unknown>;
export const LiveStreamMetadataV3FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LiveStreamMetadataV3Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LiveStreamMetadataV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"contentWarning"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"startsAt"}},{"kind":"Field","name":{"kind":"Name","value":"endsAt"}}]}}]} as unknown as DocumentNode<LiveStreamMetadataV3FieldsFragment, unknown>;
export const MintMetadataV3FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MintMetadataV3Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MintMetadataV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"contentWarning"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}}]}}]} as unknown as DocumentNode<MintMetadataV3FieldsFragment, unknown>;
export const SpaceMetadataV3FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SpaceMetadataV3Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SpaceMetadataV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"contentWarning"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}}]}}]} as unknown as DocumentNode<SpaceMetadataV3FieldsFragment, unknown>;
export const EncryptableVideoFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EncryptableVideoFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EncryptableVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]} as unknown as DocumentNode<EncryptableVideoFieldsFragment, unknown>;
export const VideoFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Video"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]} as unknown as DocumentNode<VideoFieldsFragment, unknown>;
export const EncryptableVideoSetFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EncryptableVideoSetFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EncryptableVideoSet"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EncryptableVideoFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"optimized"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoFields"}}]}}]}}]} as unknown as DocumentNode<EncryptableVideoSetFieldsFragment, unknown>;
export const PublicationMetadataMediaVideoFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PublicationMetadataMediaVideoFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicationMetadataMediaVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EncryptableVideoSetFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EncryptableImageSetFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"license"}},{"kind":"Field","name":{"kind":"Name","value":"altTag"}}]}}]} as unknown as DocumentNode<PublicationMetadataMediaVideoFieldsFragment, unknown>;
export const StoryMetadataV3FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StoryMetadataV3Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StoryMetadataV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicationMetadataMediaAudio"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PublicationMetadataMediaAudioFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicationMetadataMediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PublicationMetadataMediaImageFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicationMetadataMediaVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PublicationMetadataMediaVideoFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"contentWarning"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}}]}}]} as unknown as DocumentNode<StoryMetadataV3FieldsFragment, unknown>;
export const TextOnlyMetadataV3FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextOnlyMetadataV3Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextOnlyMetadataV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"contentWarning"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}}]}}]} as unknown as DocumentNode<TextOnlyMetadataV3FieldsFragment, unknown>;
export const ThreeDMetadataV3FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreeDMetadataV3Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreeDMetadataV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"contentWarning"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}}]}}]} as unknown as DocumentNode<ThreeDMetadataV3FieldsFragment, unknown>;
export const TransactionMetadataV3FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TransactionMetadataV3Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TransactionMetadataV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"contentWarning"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}}]}}]} as unknown as DocumentNode<TransactionMetadataV3FieldsFragment, unknown>;
export const VideoMetadataV3FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoMetadataV3Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoMetadataV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PublicationMetadataMediaVideoFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"contentWarning"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}}]}}]} as unknown as DocumentNode<VideoMetadataV3FieldsFragment, unknown>;
export const AnyPublicationMetadataFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AnyPublicationMetadataFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicationMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleMetadataV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArticleMetadataV3Fields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AudioMetadataV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AudioMetadataV3Fields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CheckingInMetadataV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CheckingInMetadataV3Fields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmbedMetadataV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmbedMetadataV3Fields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EventMetadataV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EventMetadataV3Fields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageMetadataV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMetadataV3Fields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkMetadataV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkMetadataV3Fields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LiveStreamMetadataV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LiveStreamMetadataV3Fields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MintMetadataV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MintMetadataV3Fields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SpaceMetadataV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SpaceMetadataV3Fields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StoryMetadataV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StoryMetadataV3Fields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextOnlyMetadataV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOnlyMetadataV3Fields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreeDMetadataV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreeDMetadataV3Fields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TransactionMetadataV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TransactionMetadataV3Fields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoMetadataV3"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoMetadataV3Fields"}}]}}]}}]} as unknown as DocumentNode<AnyPublicationMetadataFieldsFragment, unknown>;
export const ReferenceModuleFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceModuleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ReferenceModule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FollowOnlyReferenceModuleSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NetworkAddressFields"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UnknownReferenceModuleSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NetworkAddressFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"referenceModuleReturnData"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DegreesOfSeparationReferenceModuleSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NetworkAddressFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commentsRestricted"}},{"kind":"Field","name":{"kind":"Name","value":"mirrorsRestricted"}},{"kind":"Field","name":{"kind":"Name","value":"quotesRestricted"}},{"kind":"Field","name":{"kind":"Name","value":"degreesOfSeparation"}}]}}]}}]} as unknown as DocumentNode<ReferenceModuleFieldsFragment, unknown>;
export const PostFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publishedOn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isHidden"}},{"kind":"Field","name":{"kind":"Name","value":"momoka"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"proof"}}]}},{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"by"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"handle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HandleInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"}},{"kind":"Field","name":{"kind":"Name","value":"mirrors"}},{"kind":"Field","name":{"kind":"Name","value":"quotes"}}]}},{"kind":"Field","name":{"kind":"Name","value":"operations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PublicationOperationFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AnyPublicationMetadataFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"referenceModule"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceModuleFields"}}]}}]}}]} as unknown as DocumentNode<PostFieldsFragment, unknown>;
export const PrimaryPublicationFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PrimaryPublicationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PrimaryPublication"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<PrimaryPublicationFieldsFragment, unknown>;
export const CommentFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publishedOn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isHidden"}},{"kind":"Field","name":{"kind":"Name","value":"momoka"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"proof"}}]}},{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"by"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"handle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HandleInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"}},{"kind":"Field","name":{"kind":"Name","value":"mirrors"}},{"kind":"Field","name":{"kind":"Name","value":"quotes"}}]}},{"kind":"Field","name":{"kind":"Name","value":"operations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PublicationOperationFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AnyPublicationMetadataFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"root"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PrimaryPublicationFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commentOn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PrimaryPublicationFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"firstComment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PrimaryPublicationFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"referenceModule"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceModuleFields"}}]}}]}}]} as unknown as DocumentNode<CommentFieldsFragment, unknown>;
export const QuoteFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publishedOn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isHidden"}},{"kind":"Field","name":{"kind":"Name","value":"momoka"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"proof"}}]}},{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"by"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"handle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HandleInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"}},{"kind":"Field","name":{"kind":"Name","value":"mirrors"}},{"kind":"Field","name":{"kind":"Name","value":"quotes"}}]}},{"kind":"Field","name":{"kind":"Name","value":"operations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PublicationOperationFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quoteOn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PrimaryPublicationFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AnyPublicationMetadataFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"referenceModule"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceModuleFields"}}]}}]}}]} as unknown as DocumentNode<QuoteFieldsFragment, unknown>;
export const NotificationFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NotificationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Notification"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ReactionNotification"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"reactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"handle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HandleInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"reactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reactedAt"}},{"kind":"Field","name":{"kind":"Name","value":"reaction"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CommentNotification"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"comment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentFields"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MirrorNotification"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mirrors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mirrorId"}},{"kind":"Field","name":{"kind":"Name","value":"mirroredAt"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"handle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HandleInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"publication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"by"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"handle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HandleInfo"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"by"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"handle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HandleInfo"}}]}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuoteNotification"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quote"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFields"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ActedNotification"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"actions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"by"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"handle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HandleInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"action"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"KnownCollectOpenActionResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UnknownOpenActionResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"actedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"by"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"handle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HandleInfo"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"by"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"handle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HandleInfo"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mirror"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FollowNotification"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"followers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"handle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HandleInfo"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MentionNotification"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"by"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"handle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HandleInfo"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"by"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"handle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HandleInfo"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"by"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"handle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HandleInfo"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<NotificationFieldsFragment, unknown>;
export const Erc20FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Erc20Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Erc20"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NetworkAddressFields"}}]}}]}}]}}]} as unknown as DocumentNode<Erc20FieldsFragment, unknown>;
export const AmountFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AmountFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Amount"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Erc20Fields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]} as unknown as DocumentNode<AmountFieldsFragment, unknown>;
export const FollowModuleFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FollowModuleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FollowModule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FeeFollowModuleSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NetworkAddressFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AmountFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"recipient"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RevertFollowModuleSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NetworkAddressFields"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UnknownFollowModuleSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NetworkAddressFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"followModuleReturnData"}}]}}]}}]} as unknown as DocumentNode<FollowModuleFieldsFragment, unknown>;
export const ProfileFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Profile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ownedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NetworkAddressFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"signless"}},{"kind":"Field","name":{"kind":"Name","value":"sponsor"}},{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"followers"}},{"kind":"Field","name":{"kind":"Name","value":"following"}},{"kind":"Field","name":{"kind":"Name","value":"comments"}},{"kind":"Field","name":{"kind":"Name","value":"posts"}},{"kind":"Field","name":{"kind":"Name","value":"mirrors"}},{"kind":"Field","name":{"kind":"Name","value":"quotes"}},{"kind":"Field","name":{"kind":"Name","value":"publications"}},{"kind":"Field","name":{"kind":"Name","value":"reactions"}},{"kind":"Field","name":{"kind":"Name","value":"countOpenActions"}}]}},{"kind":"Field","name":{"kind":"Name","value":"operations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isBlockedByMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"isFinalisedOnchain"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isFollowedByMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"isFinalisedOnchain"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isFollowingMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"isFinalisedOnchain"}}]}},{"kind":"Field","name":{"kind":"Name","value":"canBlock"}},{"kind":"Field","name":{"kind":"Name","value":"canUnblock"}},{"kind":"Field","name":{"kind":"Name","value":"canFollow"}},{"kind":"Field","name":{"kind":"Name","value":"canUnfollow"}}]}},{"kind":"Field","name":{"kind":"Name","value":"interests"}},{"kind":"Field","name":{"kind":"Name","value":"guardian"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"protected"}},{"kind":"Field","name":{"kind":"Name","value":"cooldownEndsOn"}}]}},{"kind":"Field","name":{"kind":"Name","value":"invitedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"invitesLeft"}},{"kind":"Field","name":{"kind":"Name","value":"onchainIdentity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"proofOfHumanity"}},{"kind":"Field","name":{"kind":"Name","value":"ens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sybilDotOrg"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"source"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"handle"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"worldcoin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isHuman"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"followNftAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"followModule"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FollowModuleFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"handle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HandleInfo"}}]}}]}}]} as unknown as DocumentNode<ProfileFieldsFragment, unknown>;
export const MirrorFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MirrorFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mirror"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publishedOn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isHidden"}},{"kind":"Field","name":{"kind":"Name","value":"momoka"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"proof"}}]}},{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"mirrorOn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PrimaryPublicationFields"}}]}}]}}]} as unknown as DocumentNode<MirrorFieldsFragment, unknown>;
export const AuthenticateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Authenticate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignedAuthChallenge"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<AuthenticateMutation, AuthenticateMutationVariables>;
export const ChallengeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Challenge"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChallengeRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"challenge"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]} as unknown as DocumentNode<ChallengeQuery, ChallengeQueryVariables>;
export const RefreshDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Refresh"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RefreshRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refresh"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<RefreshMutation, RefreshMutationVariables>;
export const RevokeAuthenticationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RevokeAuthentication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"revokeAuthentication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"authorizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorizationId"}}}]}}]}]}}]} as unknown as DocumentNode<RevokeAuthenticationMutation, RevokeAuthenticationMutationVariables>;
export const VerifyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Verify"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VerifyRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verify"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}]}]}}]} as unknown as DocumentNode<VerifyQuery, VerifyQueryVariables>;
export const AddPublicationBookmarkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddPublicationBookmark"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PublicationBookmarkRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addPublicationBookmark"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}]}]}}]} as unknown as DocumentNode<AddPublicationBookmarkMutation, AddPublicationBookmarkMutationVariables>;
export const PublicationBookmarksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PublicationBookmarks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PublicationBookmarksRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicationBookmarks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mirror"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MirrorFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}},...PostFieldsFragmentDoc.definitions,...HandleInfoFragmentDoc.definitions,...NetworkAddressFieldsFragmentDoc.definitions,...PublicationOperationFieldsFragmentDoc.definitions,...AnyPublicationMetadataFieldsFragmentDoc.definitions,...ArticleMetadataV3FieldsFragmentDoc.definitions,...MetadataAttributeFieldsFragmentDoc.definitions,...AudioMetadataV3FieldsFragmentDoc.definitions,...PublicationMetadataMediaAudioFieldsFragmentDoc.definitions,...EncryptableAudioSetFieldsFragmentDoc.definitions,...EncryptableAudioFieldsFragmentDoc.definitions,...AudioFieldsFragmentDoc.definitions,...EncryptableImageSetFieldsFragmentDoc.definitions,...EncryptableImageFieldsFragmentDoc.definitions,...ImageFieldsFragmentDoc.definitions,...CheckingInMetadataV3FieldsFragmentDoc.definitions,...EmbedMetadataV3FieldsFragmentDoc.definitions,...EventMetadataV3FieldsFragmentDoc.definitions,...ImageMetadataV3FieldsFragmentDoc.definitions,...PublicationMetadataMediaImageFieldsFragmentDoc.definitions,...LinkMetadataV3FieldsFragmentDoc.definitions,...LiveStreamMetadataV3FieldsFragmentDoc.definitions,...MintMetadataV3FieldsFragmentDoc.definitions,...SpaceMetadataV3FieldsFragmentDoc.definitions,...StoryMetadataV3FieldsFragmentDoc.definitions,...PublicationMetadataMediaVideoFieldsFragmentDoc.definitions,...EncryptableVideoSetFieldsFragmentDoc.definitions,...EncryptableVideoFieldsFragmentDoc.definitions,...VideoFieldsFragmentDoc.definitions,...TextOnlyMetadataV3FieldsFragmentDoc.definitions,...ThreeDMetadataV3FieldsFragmentDoc.definitions,...TransactionMetadataV3FieldsFragmentDoc.definitions,...VideoMetadataV3FieldsFragmentDoc.definitions,...ReferenceModuleFieldsFragmentDoc.definitions,...CommentFieldsFragmentDoc.definitions,...PrimaryPublicationFieldsFragmentDoc.definitions,...MirrorFieldsFragmentDoc.definitions,...QuoteFieldsFragmentDoc.definitions]} as unknown as DocumentNode<PublicationBookmarksQuery, PublicationBookmarksQueryVariables>;
export const RemovePublicationBookmarkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemovePublicationBookmark"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PublicationBookmarkRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removePublicationBookmark"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}]}]}}]} as unknown as DocumentNode<RemovePublicationBookmarkMutation, RemovePublicationBookmarkMutationVariables>;
export const BroadcastOnchainDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"BroadcastOnchain"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BroadcastRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"broadcastOnchain"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RelaySuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"txId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RelayError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}}]}}]} as unknown as DocumentNode<BroadcastOnchainMutation, BroadcastOnchainMutationVariables>;
export const BroadcastOnMomokaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"BroadcastOnMomoka"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BroadcastRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"broadcastOnMomoka"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CreateMomokaPublicationResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"proof"}},{"kind":"Field","name":{"kind":"Name","value":"momokaId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RelayError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}}]}}]} as unknown as DocumentNode<BroadcastOnMomokaMutation, BroadcastOnMomokaMutationVariables>;
export const UserSigNoncesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserSigNonces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userSigNonces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lensHubOnchainSigNonce"}},{"kind":"Field","name":{"kind":"Name","value":"lensTokenHandleRegistryOnchainSigNonce"}}]}}]}}]} as unknown as DocumentNode<UserSigNoncesQuery, UserSigNoncesQueryVariables>;
export const ClaimableProfilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ClaimableProfiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"claimableProfiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reserved"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"withHandle"}},{"kind":"Field","name":{"kind":"Name","value":"source"}},{"kind":"Field","name":{"kind":"Name","value":"expiry"}}]}},{"kind":"Field","name":{"kind":"Name","value":"canMintProfileWithFreeTextHandle"}}]}}]}}]} as unknown as DocumentNode<ClaimableProfilesQuery, ClaimableProfilesQueryVariables>;
export const ClaimableStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ClaimableStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"claimableStatus"}}]}}]} as unknown as DocumentNode<ClaimableStatusQuery, ClaimableStatusQueryVariables>;
export const CurrenciesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Currencies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginatedOffsetRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currencies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}}]} as unknown as DocumentNode<CurrenciesQuery, CurrenciesQueryVariables>;
export const ExploreProfilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExploreProfiles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ExploreProfilesRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exploreProfiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}},...ProfileFieldsFragmentDoc.definitions,...NetworkAddressFieldsFragmentDoc.definitions,...MetadataAttributeFieldsFragmentDoc.definitions,...FollowModuleFieldsFragmentDoc.definitions,...AmountFieldsFragmentDoc.definitions,...Erc20FieldsFragmentDoc.definitions,...HandleInfoFragmentDoc.definitions]} as unknown as DocumentNode<ExploreProfilesQuery, ExploreProfilesQueryVariables>;
export const ExplorePublicationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExplorePublications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ExplorePublicationRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"explorePublications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}},...PostFieldsFragmentDoc.definitions,...HandleInfoFragmentDoc.definitions,...NetworkAddressFieldsFragmentDoc.definitions,...PublicationOperationFieldsFragmentDoc.definitions,...AnyPublicationMetadataFieldsFragmentDoc.definitions,...ArticleMetadataV3FieldsFragmentDoc.definitions,...MetadataAttributeFieldsFragmentDoc.definitions,...AudioMetadataV3FieldsFragmentDoc.definitions,...PublicationMetadataMediaAudioFieldsFragmentDoc.definitions,...EncryptableAudioSetFieldsFragmentDoc.definitions,...EncryptableAudioFieldsFragmentDoc.definitions,...AudioFieldsFragmentDoc.definitions,...EncryptableImageSetFieldsFragmentDoc.definitions,...EncryptableImageFieldsFragmentDoc.definitions,...ImageFieldsFragmentDoc.definitions,...CheckingInMetadataV3FieldsFragmentDoc.definitions,...EmbedMetadataV3FieldsFragmentDoc.definitions,...EventMetadataV3FieldsFragmentDoc.definitions,...ImageMetadataV3FieldsFragmentDoc.definitions,...PublicationMetadataMediaImageFieldsFragmentDoc.definitions,...LinkMetadataV3FieldsFragmentDoc.definitions,...LiveStreamMetadataV3FieldsFragmentDoc.definitions,...MintMetadataV3FieldsFragmentDoc.definitions,...SpaceMetadataV3FieldsFragmentDoc.definitions,...StoryMetadataV3FieldsFragmentDoc.definitions,...PublicationMetadataMediaVideoFieldsFragmentDoc.definitions,...EncryptableVideoSetFieldsFragmentDoc.definitions,...EncryptableVideoFieldsFragmentDoc.definitions,...VideoFieldsFragmentDoc.definitions,...TextOnlyMetadataV3FieldsFragmentDoc.definitions,...ThreeDMetadataV3FieldsFragmentDoc.definitions,...TransactionMetadataV3FieldsFragmentDoc.definitions,...VideoMetadataV3FieldsFragmentDoc.definitions,...ReferenceModuleFieldsFragmentDoc.definitions,...QuoteFieldsFragmentDoc.definitions,...PrimaryPublicationFieldsFragmentDoc.definitions]} as unknown as DocumentNode<ExplorePublicationsQuery, ExplorePublicationsQueryVariables>;
export const FeedHighlightsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FeedHighlights"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FeedHighlightsRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"feedHighlights"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}}]} as unknown as DocumentNode<FeedHighlightsQuery, FeedHighlightsQueryVariables>;
export const FeedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Feed"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FeedRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"feed"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"root"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"mirrors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"acted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"by"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"action"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"actedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"by"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reaction"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}}]} as unknown as DocumentNode<FeedQuery, FeedQueryVariables>;
export const FollowStatusBulkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FollowStatusBulk"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FollowStatusBulkRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"followStatusBulk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"follower"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"isFinalisedOnchain"}}]}}]}}]}}]} as unknown as DocumentNode<FollowStatusBulkQuery, FollowStatusBulkQueryVariables>;
export const CreateFollowTypedDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFollowTypedData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FollowRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFollowTypedData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"typedData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"domain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"verifyingContract"}}]}},{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Follow"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonce"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"followerProfileId"}},{"kind":"Field","name":{"kind":"Name","value":"idsOfProfilesToFollow"}},{"kind":"Field","name":{"kind":"Name","value":"followTokenIds"}},{"kind":"Field","name":{"kind":"Name","value":"datas"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateFollowTypedDataMutation, CreateFollowTypedDataMutationVariables>;
export const FollowDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Follow"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FollowLensManagerRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"follow"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RelaySuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"txId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LensProfileManagerRelayError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}}]}}]} as unknown as DocumentNode<FollowMutation, FollowMutationVariables>;
export const FollowersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Followers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FollowersRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"followers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}},...ProfileFieldsFragmentDoc.definitions,...NetworkAddressFieldsFragmentDoc.definitions,...MetadataAttributeFieldsFragmentDoc.definitions,...FollowModuleFieldsFragmentDoc.definitions,...AmountFieldsFragmentDoc.definitions,...Erc20FieldsFragmentDoc.definitions,...HandleInfoFragmentDoc.definitions]} as unknown as DocumentNode<FollowersQuery, FollowersQueryVariables>;
export const FollowingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Following"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FollowingRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"following"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"next"}},{"kind":"Field","name":{"kind":"Name","value":"prev"}}]}}]}}]}},...ProfileFieldsFragmentDoc.definitions,...NetworkAddressFieldsFragmentDoc.definitions,...MetadataAttributeFieldsFragmentDoc.definitions,...FollowModuleFieldsFragmentDoc.definitions,...AmountFieldsFragmentDoc.definitions,...Erc20FieldsFragmentDoc.definitions,...HandleInfoFragmentDoc.definitions]} as unknown as DocumentNode<FollowingQuery, FollowingQueryVariables>;
export const IsFollowedByMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"IsFollowedByMe"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"operations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isFollowedByMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"isFinalisedOnchain"}}]}}]}}]}}]}}]} as unknown as DocumentNode<IsFollowedByMeQuery, IsFollowedByMeQueryVariables>;
export const IsFollowingMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"IsFollowingMe"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"operations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isFollowingMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"isFinalisedOnchain"}}]}}]}}]}}]}}]} as unknown as DocumentNode<IsFollowingMeQuery, IsFollowingMeQueryVariables>;
export const MutualFollowersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MutualFollowers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MutualFollowersRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutualFollowers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}}]} as unknown as DocumentNode<MutualFollowersQuery, MutualFollowersQueryVariables>;
export const CreateUnfollowTypedDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUnfollowTypedData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UnfollowRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUnfollowTypedData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"typedData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Unfollow"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"domain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"verifyingContract"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonce"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"unfollowerProfileId"}},{"kind":"Field","name":{"kind":"Name","value":"idsOfProfilesToUnfollow"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateUnfollowTypedDataMutation, CreateUnfollowTypedDataMutationVariables>;
export const UnfollowDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Unfollow"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UnfollowRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unfollow"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RelaySuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"txId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LensProfileManagerRelayError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}}]}}]} as unknown as DocumentNode<UnfollowMutation, UnfollowMutationVariables>;
export const CreateLinkHandleToProfileTypedDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateLinkHandleToProfileTypedData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LinkHandleToProfileRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createLinkHandleToProfileTypedData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"typedData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"domain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"verifyingContract"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonce"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"handleId"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateLinkHandleToProfileTypedDataMutation, CreateLinkHandleToProfileTypedDataMutationVariables>;
export const LinkHandleToProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LinkHandleToProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LinkHandleToProfileRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkHandleToProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RelaySuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"txId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LensProfileManagerRelayError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}}]}}]} as unknown as DocumentNode<LinkHandleToProfileMutation, LinkHandleToProfileMutationVariables>;
export const OwnedHandlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"OwnedHandles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OwnedHandlesRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ownedHandles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HandleInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}},...HandleInfoFragmentDoc.definitions,...NetworkAddressFieldsFragmentDoc.definitions]} as unknown as DocumentNode<OwnedHandlesQuery, OwnedHandlesQueryVariables>;
export const CreateUnlinkHandleFromProfileTypedDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUnlinkHandleFromProfileTypedData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UnlinkHandleFromProfileRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUnlinkHandleFromProfileTypedData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"typedData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Unlink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"domain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"verifyingContract"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonce"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"handleId"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateUnlinkHandleFromProfileTypedDataMutation, CreateUnlinkHandleFromProfileTypedDataMutationVariables>;
export const UnlinkHandleFromProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnlinkHandleFromProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UnlinkHandleFromProfileRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unlinkHandleFromProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RelaySuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"txId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LensProfileManagerRelayError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}}]}}]} as unknown as DocumentNode<UnlinkHandleFromProfileMutation, UnlinkHandleFromProfileMutationVariables>;
export const PingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ping"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ping"}}]}}]} as unknown as DocumentNode<PingQuery, PingQueryVariables>;
export const TxIdToTxHashDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TxIdToTxHash"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"for"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TxId"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txIdToTxHash"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"for"},"value":{"kind":"Variable","name":{"kind":"Name","value":"for"}}}]}]}}]} as unknown as DocumentNode<TxIdToTxHashQuery, TxIdToTxHashQueryVariables>;
export const GenerateModuleCurrencyApprovalDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"generateModuleCurrencyApprovalData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GenerateModuleCurrencyApprovalDataRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateModuleCurrencyApprovalData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}}]}}]} as unknown as DocumentNode<GenerateModuleCurrencyApprovalDataQuery, GenerateModuleCurrencyApprovalDataQueryVariables>;
export const ApprovedModuleAllowanceAmountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"approvedModuleAllowanceAmount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ApprovedModuleAllowanceAmountRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"approvedModuleAllowanceAmount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allowance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Erc20"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"moduleContract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"moduleName"}}]}}]}}]} as unknown as DocumentNode<ApprovedModuleAllowanceAmountQuery, ApprovedModuleAllowanceAmountQueryVariables>;
export const EnabledCurrenciesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EnabledCurrencies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginatedOffsetRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currencies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}}]} as unknown as DocumentNode<EnabledCurrenciesQuery, EnabledCurrenciesQueryVariables>;
export const CreateSetFollowModuleTypedDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSetFollowModuleTypedData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SetFollowModuleRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSetFollowModuleTypedData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"typedData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SetFollowModule"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"domain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"verifyingContract"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonce"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"followModule"}},{"kind":"Field","name":{"kind":"Name","value":"followModuleInitData"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateSetFollowModuleTypedDataMutation, CreateSetFollowModuleTypedDataMutationVariables>;
export const SetFollowModuleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetFollowModule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SetFollowModuleRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setFollowModule"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RelaySuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"txId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LensProfileManagerRelayError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}}]}}]} as unknown as DocumentNode<SetFollowModuleMutation, SetFollowModuleMutationVariables>;
export const SupportedFollowModulesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SupportedFollowModules"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SupportedModulesRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"supportedFollowModules"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"KnownSupportedModule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UnknownSupportedModule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}}]} as unknown as DocumentNode<SupportedFollowModulesQuery, SupportedFollowModulesQueryVariables>;
export const SupportedOpenActionCollectModulesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SupportedOpenActionCollectModules"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SupportedModulesRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"supportedOpenActionCollectModules"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"KnownSupportedModule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UnknownSupportedModule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}}]} as unknown as DocumentNode<SupportedOpenActionCollectModulesQuery, SupportedOpenActionCollectModulesQueryVariables>;
export const SupportedOpenActionModulesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SupportedOpenActionModules"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SupportedModulesRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"supportedOpenActionModules"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"KnownSupportedModule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UnknownSupportedModule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}}]} as unknown as DocumentNode<SupportedOpenActionModulesQuery, SupportedOpenActionModulesQueryVariables>;
export const SupportedReferenceModulesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SupportedReferenceModules"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SupportedModulesRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"supportedReferenceModules"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"KnownSupportedModule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UnknownSupportedModule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}}]} as unknown as DocumentNode<SupportedReferenceModulesQuery, SupportedReferenceModulesQueryVariables>;
export const MomokaSubmittersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MomokaSubmitters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"momokaSubmitters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]} as unknown as DocumentNode<MomokaSubmittersQuery, MomokaSubmittersQueryVariables>;
export const MomokaSummaryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MomokaSummary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"momokaSummary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalTransactions"}}]}}]}}]} as unknown as DocumentNode<MomokaSummaryQuery, MomokaSummaryQueryVariables>;
export const MomokaTransactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MomokaTransaction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MomokaTransactionRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"momokaTransaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MomokaPostTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MomokaCommentTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commentOn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PrimaryPublicationFields"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MomokaMirrorTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mirrorOn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PrimaryPublicationFields"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MomokaQuoteTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quoteOn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PrimaryPublicationFields"}}]}}]}}]}}]}},...PrimaryPublicationFieldsFragmentDoc.definitions]} as unknown as DocumentNode<MomokaTransactionQuery, MomokaTransactionQueryVariables>;
export const MomokaTransactionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MomokaTransactions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MomokaTransactionsRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"momokaTransactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MomokaPostTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MomokaCommentTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commentOn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PrimaryPublicationFields"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MomokaMirrorTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mirrorOn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PrimaryPublicationFields"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MomokaQuoteTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quoteOn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PrimaryPublicationFields"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}},...PrimaryPublicationFieldsFragmentDoc.definitions]} as unknown as DocumentNode<MomokaTransactionsQuery, MomokaTransactionsQueryVariables>;
export const NftsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Nfts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NftsRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nfts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NftFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}},...NftFieldsFragmentDoc.definitions,...NetworkAddressFieldsFragmentDoc.definitions,...NftMetadataFieldsFragmentDoc.definitions,...NftMetadataAttributeFieldsFragmentDoc.definitions,...ImageSetFieldsFragmentDoc.definitions,...NftOwnerFieldsFragmentDoc.definitions]} as unknown as DocumentNode<NftsQuery, NftsQueryVariables>;
export const MutualNftCollectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MutualNftCollections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MutualNftCollectionsRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutualNftCollections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NftCollectionFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}},...NftCollectionFieldsFragmentDoc.definitions,...NetworkAddressFieldsFragmentDoc.definitions]} as unknown as DocumentNode<MutualNftCollectionsQuery, MutualNftCollectionsQueryVariables>;
export const NftCollectionOwnersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NftCollectionOwners"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NftCollectionOwnersRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nftCollectionOwners"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}},...ProfileFieldsFragmentDoc.definitions,...NetworkAddressFieldsFragmentDoc.definitions,...MetadataAttributeFieldsFragmentDoc.definitions,...FollowModuleFieldsFragmentDoc.definitions,...AmountFieldsFragmentDoc.definitions,...Erc20FieldsFragmentDoc.definitions,...HandleInfoFragmentDoc.definitions]} as unknown as DocumentNode<NftCollectionOwnersQuery, NftCollectionOwnersQueryVariables>;
export const NftCollectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NftCollections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NftCollectionsRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nftCollections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NftCollectionFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}},...NftCollectionFieldsFragmentDoc.definitions,...NetworkAddressFieldsFragmentDoc.definitions]} as unknown as DocumentNode<NftCollectionsQuery, NftCollectionsQueryVariables>;
export const PopularNftCollectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PopularNftCollections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PopularNftCollectionsRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"popularNftCollections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NftCollectionFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalOwners"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}},...NftCollectionFieldsFragmentDoc.definitions,...NetworkAddressFieldsFragmentDoc.definitions]} as unknown as DocumentNode<PopularNftCollectionsQuery, PopularNftCollectionsQueryVariables>;
export const NftGalleriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NftGalleries"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NftGalleriesRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nftGalleries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NftGalleryFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}},...NftGalleryFieldsFragmentDoc.definitions,...NftFieldsFragmentDoc.definitions,...NetworkAddressFieldsFragmentDoc.definitions,...NftMetadataFieldsFragmentDoc.definitions,...NftMetadataAttributeFieldsFragmentDoc.definitions,...ImageSetFieldsFragmentDoc.definitions,...NftOwnerFieldsFragmentDoc.definitions]} as unknown as DocumentNode<NftGalleriesQuery, NftGalleriesQueryVariables>;
export const CreateNftGalleryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateNftGallery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NftGalleryCreateRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createNftGallery"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}]}]}}]} as unknown as DocumentNode<CreateNftGalleryMutation, CreateNftGalleryMutationVariables>;
export const UpdateNftGalleryInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateNftGalleryInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NftGalleryUpdateInfoRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateNftGalleryInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}]}]}}]} as unknown as DocumentNode<UpdateNftGalleryInfoMutation, UpdateNftGalleryInfoMutationVariables>;
export const UpdateNftGalleryOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateNftGalleryOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NftGalleryUpdateItemOrderRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateNftGalleryOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}]}]}}]} as unknown as DocumentNode<UpdateNftGalleryOrderMutation, UpdateNftGalleryOrderMutationVariables>;
export const UpdateNftGalleryItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateNftGalleryItems"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NftGalleryUpdateItemsRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateNftGalleryItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}]}]}}]} as unknown as DocumentNode<UpdateNftGalleryItemsMutation, UpdateNftGalleryItemsMutationVariables>;
export const DeleteNftGalleryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteNftGallery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NftGalleryDeleteRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteNftGallery"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}]}]}}]} as unknown as DocumentNode<DeleteNftGalleryMutation, DeleteNftGalleryMutationVariables>;
export const AddPublicationNotInterestedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddPublicationNotInterested"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PublicationNotInterestedRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addPublicationNotInterested"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}]}]}}]} as unknown as DocumentNode<AddPublicationNotInterestedMutation, AddPublicationNotInterestedMutationVariables>;
export const UndoPublicationNotInterestedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UndoPublicationNotInterested"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PublicationNotInterestedRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"undoPublicationNotInterested"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}]}]}}]} as unknown as DocumentNode<UndoPublicationNotInterestedMutation, UndoPublicationNotInterestedMutationVariables>;
export const NotificationsSubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"NotificationsSubscription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"for"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileId"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newNotification"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"for"},"value":{"kind":"Variable","name":{"kind":"Name","value":"for"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NotificationFields"}}]}}]}},...NotificationFieldsFragmentDoc.definitions,...PostFieldsFragmentDoc.definitions,...HandleInfoFragmentDoc.definitions,...NetworkAddressFieldsFragmentDoc.definitions,...PublicationOperationFieldsFragmentDoc.definitions,...AnyPublicationMetadataFieldsFragmentDoc.definitions,...ArticleMetadataV3FieldsFragmentDoc.definitions,...MetadataAttributeFieldsFragmentDoc.definitions,...AudioMetadataV3FieldsFragmentDoc.definitions,...PublicationMetadataMediaAudioFieldsFragmentDoc.definitions,...EncryptableAudioSetFieldsFragmentDoc.definitions,...EncryptableAudioFieldsFragmentDoc.definitions,...AudioFieldsFragmentDoc.definitions,...EncryptableImageSetFieldsFragmentDoc.definitions,...EncryptableImageFieldsFragmentDoc.definitions,...ImageFieldsFragmentDoc.definitions,...CheckingInMetadataV3FieldsFragmentDoc.definitions,...EmbedMetadataV3FieldsFragmentDoc.definitions,...EventMetadataV3FieldsFragmentDoc.definitions,...ImageMetadataV3FieldsFragmentDoc.definitions,...PublicationMetadataMediaImageFieldsFragmentDoc.definitions,...LinkMetadataV3FieldsFragmentDoc.definitions,...LiveStreamMetadataV3FieldsFragmentDoc.definitions,...MintMetadataV3FieldsFragmentDoc.definitions,...SpaceMetadataV3FieldsFragmentDoc.definitions,...StoryMetadataV3FieldsFragmentDoc.definitions,...PublicationMetadataMediaVideoFieldsFragmentDoc.definitions,...EncryptableVideoSetFieldsFragmentDoc.definitions,...EncryptableVideoFieldsFragmentDoc.definitions,...VideoFieldsFragmentDoc.definitions,...TextOnlyMetadataV3FieldsFragmentDoc.definitions,...ThreeDMetadataV3FieldsFragmentDoc.definitions,...TransactionMetadataV3FieldsFragmentDoc.definitions,...VideoMetadataV3FieldsFragmentDoc.definitions,...ReferenceModuleFieldsFragmentDoc.definitions,...CommentFieldsFragmentDoc.definitions,...PrimaryPublicationFieldsFragmentDoc.definitions,...QuoteFieldsFragmentDoc.definitions]} as unknown as DocumentNode<NotificationsSubscriptionSubscription, NotificationsSubscriptionSubscriptionVariables>;
export const NotificationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Notifications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NotificationRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NotificationFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}},...NotificationFieldsFragmentDoc.definitions,...PostFieldsFragmentDoc.definitions,...HandleInfoFragmentDoc.definitions,...NetworkAddressFieldsFragmentDoc.definitions,...PublicationOperationFieldsFragmentDoc.definitions,...AnyPublicationMetadataFieldsFragmentDoc.definitions,...ArticleMetadataV3FieldsFragmentDoc.definitions,...MetadataAttributeFieldsFragmentDoc.definitions,...AudioMetadataV3FieldsFragmentDoc.definitions,...PublicationMetadataMediaAudioFieldsFragmentDoc.definitions,...EncryptableAudioSetFieldsFragmentDoc.definitions,...EncryptableAudioFieldsFragmentDoc.definitions,...AudioFieldsFragmentDoc.definitions,...EncryptableImageSetFieldsFragmentDoc.definitions,...EncryptableImageFieldsFragmentDoc.definitions,...ImageFieldsFragmentDoc.definitions,...CheckingInMetadataV3FieldsFragmentDoc.definitions,...EmbedMetadataV3FieldsFragmentDoc.definitions,...EventMetadataV3FieldsFragmentDoc.definitions,...ImageMetadataV3FieldsFragmentDoc.definitions,...PublicationMetadataMediaImageFieldsFragmentDoc.definitions,...LinkMetadataV3FieldsFragmentDoc.definitions,...LiveStreamMetadataV3FieldsFragmentDoc.definitions,...MintMetadataV3FieldsFragmentDoc.definitions,...SpaceMetadataV3FieldsFragmentDoc.definitions,...StoryMetadataV3FieldsFragmentDoc.definitions,...PublicationMetadataMediaVideoFieldsFragmentDoc.definitions,...EncryptableVideoSetFieldsFragmentDoc.definitions,...EncryptableVideoFieldsFragmentDoc.definitions,...VideoFieldsFragmentDoc.definitions,...TextOnlyMetadataV3FieldsFragmentDoc.definitions,...ThreeDMetadataV3FieldsFragmentDoc.definitions,...TransactionMetadataV3FieldsFragmentDoc.definitions,...VideoMetadataV3FieldsFragmentDoc.definitions,...ReferenceModuleFieldsFragmentDoc.definitions,...CommentFieldsFragmentDoc.definitions,...PrimaryPublicationFieldsFragmentDoc.definitions,...QuoteFieldsFragmentDoc.definitions]} as unknown as DocumentNode<NotificationsQuery, NotificationsQueryVariables>;
export const CreateActOnOpenActionTypedDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateActOnOpenActionTypedData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ActOnOpenActionRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createActOnOpenActionTypedData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"typedData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Act"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"domain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"verifyingContract"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonce"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"publicationActedProfileId"}},{"kind":"Field","name":{"kind":"Name","value":"publicationActedId"}},{"kind":"Field","name":{"kind":"Name","value":"actorProfileId"}},{"kind":"Field","name":{"kind":"Name","value":"referrerProfileIds"}},{"kind":"Field","name":{"kind":"Name","value":"referrerPubIds"}},{"kind":"Field","name":{"kind":"Name","value":"actionModuleAddress"}},{"kind":"Field","name":{"kind":"Name","value":"actionModuleData"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateActOnOpenActionTypedDataMutation, CreateActOnOpenActionTypedDataMutationVariables>;
export const ActOnOpenActionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ActOnOpenAction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ActOnOpenActionLensManagerRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actOnOpenAction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RelaySuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"txId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LensProfileManagerRelayError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}}]}}]} as unknown as DocumentNode<ActOnOpenActionMutation, ActOnOpenActionMutationVariables>;
export const PoapEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PoapEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PoapEventQueryRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"poapEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<PoapEventQuery, PoapEventQueryVariables>;
export const PoapHoldersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PoapHolders"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PoapHoldersQueryRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"poapHolders"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}}]} as unknown as DocumentNode<PoapHoldersQuery, PoapHoldersQueryVariables>;
export const MutualPoapsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MutualPoaps"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MutualPoapsQueryRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutualPoaps"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}}]} as unknown as DocumentNode<MutualPoapsQuery, MutualPoapsQueryVariables>;
export const CreateChangeProfileManagersTypedDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateChangeProfileManagersTypedData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChangeProfileManagersRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createChangeProfileManagersTypedData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"typedData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"domain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"verifyingContract"}}]}},{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ChangeDelegatedExecutorsConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonce"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"delegatorProfileId"}},{"kind":"Field","name":{"kind":"Name","value":"delegatedExecutors"}},{"kind":"Field","name":{"kind":"Name","value":"approvals"}},{"kind":"Field","name":{"kind":"Name","value":"configNumber"}},{"kind":"Field","name":{"kind":"Name","value":"switchToGivenConfig"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateChangeProfileManagersTypedDataMutation, CreateChangeProfileManagersTypedDataMutationVariables>;
export const ProfileManagersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProfileManagers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileManagersRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profileManagers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}}]} as unknown as DocumentNode<ProfileManagersQuery, ProfileManagersQueryVariables>;
export const AddProfileInterestsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddProfileInterests"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileInterestsRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addProfileInterests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}]}]}}]} as unknown as DocumentNode<AddProfileInterestsMutation, AddProfileInterestsMutationVariables>;
export const CreateBlockProfilesTypedDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateBlockProfilesTypedData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BlockRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBlockProfilesTypedData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"typedData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonce"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"byProfileId"}},{"kind":"Field","name":{"kind":"Name","value":"idsOfProfilesToSetBlockStatus"}},{"kind":"Field","name":{"kind":"Name","value":"blockStatus"}}]}},{"kind":"Field","name":{"kind":"Name","value":"domain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"verifyingContract"}}]}},{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SetBlockStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateBlockProfilesTypedDataMutation, CreateBlockProfilesTypedDataMutationVariables>;
export const BlockDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Block"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BlockRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RelaySuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"txId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LensProfileManagerRelayError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}}]}}]} as unknown as DocumentNode<BlockMutation, BlockMutationVariables>;
export const CreateProfileWithHandleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProfileWithHandle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProfileWithHandleRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProfileWithHandle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RelaySuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"txId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProfileWithHandleErrorResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}}]}}]} as unknown as DocumentNode<CreateProfileWithHandleMutation, CreateProfileWithHandleMutationVariables>;
export const SetDefaultProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetDefaultProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SetDefaultProfileRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setDefaultProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}]}]}}]} as unknown as DocumentNode<SetDefaultProfileMutation, SetDefaultProfileMutationVariables>;
export const GetDefaultProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDefaultProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DefaultProfileRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"defaultProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileFields"}}]}}]}},...ProfileFieldsFragmentDoc.definitions,...NetworkAddressFieldsFragmentDoc.definitions,...MetadataAttributeFieldsFragmentDoc.definitions,...FollowModuleFieldsFragmentDoc.definitions,...AmountFieldsFragmentDoc.definitions,...Erc20FieldsFragmentDoc.definitions,...HandleInfoFragmentDoc.definitions]} as unknown as DocumentNode<GetDefaultProfileQuery, GetDefaultProfileQueryVariables>;
export const DismissRecommendedProfilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DismissRecommendedProfiles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DismissRecommendedProfilesRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dismissRecommendedProfiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}]}]}}]} as unknown as DocumentNode<DismissRecommendedProfilesMutation, DismissRecommendedProfilesMutationVariables>;
export const GetInvitedProfilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetInvitedProfiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"invitedProfiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"by"}},{"kind":"Field","name":{"kind":"Name","value":"profileMinted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"when"}}]}}]}}]} as unknown as DocumentNode<GetInvitedProfilesQuery, GetInvitedProfilesQueryVariables>;
export const ProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Profile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileFields"}}]}}]}},...ProfileFieldsFragmentDoc.definitions,...NetworkAddressFieldsFragmentDoc.definitions,...MetadataAttributeFieldsFragmentDoc.definitions,...FollowModuleFieldsFragmentDoc.definitions,...AmountFieldsFragmentDoc.definitions,...Erc20FieldsFragmentDoc.definitions,...HandleInfoFragmentDoc.definitions]} as unknown as DocumentNode<ProfileQuery, ProfileQueryVariables>;
export const ProfilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Profiles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProfilesRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"next"}},{"kind":"Field","name":{"kind":"Name","value":"prev"}}]}}]}}]}},...ProfileFieldsFragmentDoc.definitions,...NetworkAddressFieldsFragmentDoc.definitions,...MetadataAttributeFieldsFragmentDoc.definitions,...FollowModuleFieldsFragmentDoc.definitions,...AmountFieldsFragmentDoc.definitions,...Erc20FieldsFragmentDoc.definitions,...HandleInfoFragmentDoc.definitions]} as unknown as DocumentNode<ProfilesQuery, ProfilesQueryVariables>;
export const ProfileActionHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProfileActionHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileActionHistoryRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profileActionHistory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}}]} as unknown as DocumentNode<ProfileActionHistoryQuery, ProfileActionHistoryQueryVariables>;
export const ProfileAlreadyInvitedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProfileAlreadyInvited"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AlreadyInvitedCheckRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profileAlreadyInvited"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}]}]}}]} as unknown as DocumentNode<ProfileAlreadyInvitedQuery, ProfileAlreadyInvitedQueryVariables>;
export const ProfileRecommendationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProfileRecommendations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileRecommendationsRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profileRecommendations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}},...ProfileFieldsFragmentDoc.definitions,...NetworkAddressFieldsFragmentDoc.definitions,...MetadataAttributeFieldsFragmentDoc.definitions,...FollowModuleFieldsFragmentDoc.definitions,...AmountFieldsFragmentDoc.definitions,...Erc20FieldsFragmentDoc.definitions,...HandleInfoFragmentDoc.definitions]} as unknown as DocumentNode<ProfileRecommendationsQuery, ProfileRecommendationsQueryVariables>;
export const ProfilesManagedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProfilesManaged"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProfilesManagedRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profilesManaged"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}},...ProfileFieldsFragmentDoc.definitions,...NetworkAddressFieldsFragmentDoc.definitions,...MetadataAttributeFieldsFragmentDoc.definitions,...FollowModuleFieldsFragmentDoc.definitions,...AmountFieldsFragmentDoc.definitions,...Erc20FieldsFragmentDoc.definitions,...HandleInfoFragmentDoc.definitions]} as unknown as DocumentNode<ProfilesManagedQuery, ProfilesManagedQueryVariables>;
export const RemoveProfileInterestsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveProfileInterests"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileInterestsRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeProfileInterests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}]}]}}]} as unknown as DocumentNode<RemoveProfileInterestsMutation, RemoveProfileInterestsMutationVariables>;
export const CreateOnchainSetProfileMetadataTypedDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOnchainSetProfileMetadataTypedData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OnchainSetProfileMetadataRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOnchainSetProfileMetadataTypedData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"typedData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"domain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"verifyingContract"}}]}},{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SetProfileMetadataURI"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonce"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"metadataURI"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateOnchainSetProfileMetadataTypedDataMutation, CreateOnchainSetProfileMetadataTypedDataMutationVariables>;
export const SetProfileMetadataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetProfileMetadata"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OnchainSetProfileMetadataRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setProfileMetadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RelaySuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"txId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LensProfileManagerRelayError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}}]}}]} as unknown as DocumentNode<SetProfileMetadataMutation, SetProfileMetadataMutationVariables>;
export const CreateUnblockProfilesTypedDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUnblockProfilesTypedData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UnblockRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUnblockProfilesTypedData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"typedData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SetBlockStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"domain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"verifyingContract"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonce"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"byProfileId"}},{"kind":"Field","name":{"kind":"Name","value":"idsOfProfilesToSetBlockStatus"}},{"kind":"Field","name":{"kind":"Name","value":"blockStatus"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateUnblockProfilesTypedDataMutation, CreateUnblockProfilesTypedDataMutationVariables>;
export const UnblockDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Unblock"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UnblockRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unblock"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RelaySuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"txId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LensProfileManagerRelayError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}}]}}]} as unknown as DocumentNode<UnblockMutation, UnblockMutationVariables>;
export const WhoHaveBlockedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WhoHaveBlocked"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WhoHaveBlockedRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"whoHaveBlocked"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}},...ProfileFieldsFragmentDoc.definitions,...NetworkAddressFieldsFragmentDoc.definitions,...MetadataAttributeFieldsFragmentDoc.definitions,...FollowModuleFieldsFragmentDoc.definitions,...AmountFieldsFragmentDoc.definitions,...Erc20FieldsFragmentDoc.definitions,...HandleInfoFragmentDoc.definitions]} as unknown as DocumentNode<WhoHaveBlockedQuery, WhoHaveBlockedQueryVariables>;
export const CanDecryptPublicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CanDecryptPublication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PublicationRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"operations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"canDecrypt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}},{"kind":"Field","name":{"kind":"Name","value":"extraDetails"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"operations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"canDecrypt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}},{"kind":"Field","name":{"kind":"Name","value":"extraDetails"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"operations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"canDecrypt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}},{"kind":"Field","name":{"kind":"Name","value":"extraDetails"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CanDecryptPublicationQuery, CanDecryptPublicationQueryVariables>;
export const PublicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Publication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PublicationRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mirror"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MirrorFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFields"}}]}}]}}]}},...PostFieldsFragmentDoc.definitions,...HandleInfoFragmentDoc.definitions,...NetworkAddressFieldsFragmentDoc.definitions,...PublicationOperationFieldsFragmentDoc.definitions,...AnyPublicationMetadataFieldsFragmentDoc.definitions,...ArticleMetadataV3FieldsFragmentDoc.definitions,...MetadataAttributeFieldsFragmentDoc.definitions,...AudioMetadataV3FieldsFragmentDoc.definitions,...PublicationMetadataMediaAudioFieldsFragmentDoc.definitions,...EncryptableAudioSetFieldsFragmentDoc.definitions,...EncryptableAudioFieldsFragmentDoc.definitions,...AudioFieldsFragmentDoc.definitions,...EncryptableImageSetFieldsFragmentDoc.definitions,...EncryptableImageFieldsFragmentDoc.definitions,...ImageFieldsFragmentDoc.definitions,...CheckingInMetadataV3FieldsFragmentDoc.definitions,...EmbedMetadataV3FieldsFragmentDoc.definitions,...EventMetadataV3FieldsFragmentDoc.definitions,...ImageMetadataV3FieldsFragmentDoc.definitions,...PublicationMetadataMediaImageFieldsFragmentDoc.definitions,...LinkMetadataV3FieldsFragmentDoc.definitions,...LiveStreamMetadataV3FieldsFragmentDoc.definitions,...MintMetadataV3FieldsFragmentDoc.definitions,...SpaceMetadataV3FieldsFragmentDoc.definitions,...StoryMetadataV3FieldsFragmentDoc.definitions,...PublicationMetadataMediaVideoFieldsFragmentDoc.definitions,...EncryptableVideoSetFieldsFragmentDoc.definitions,...EncryptableVideoFieldsFragmentDoc.definitions,...VideoFieldsFragmentDoc.definitions,...TextOnlyMetadataV3FieldsFragmentDoc.definitions,...ThreeDMetadataV3FieldsFragmentDoc.definitions,...TransactionMetadataV3FieldsFragmentDoc.definitions,...VideoMetadataV3FieldsFragmentDoc.definitions,...ReferenceModuleFieldsFragmentDoc.definitions,...CommentFieldsFragmentDoc.definitions,...PrimaryPublicationFieldsFragmentDoc.definitions,...MirrorFieldsFragmentDoc.definitions,...QuoteFieldsFragmentDoc.definitions]} as unknown as DocumentNode<PublicationQuery, PublicationQueryVariables>;
export const PublicationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Publications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PublicationsRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mirror"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MirrorFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}},...PostFieldsFragmentDoc.definitions,...HandleInfoFragmentDoc.definitions,...NetworkAddressFieldsFragmentDoc.definitions,...PublicationOperationFieldsFragmentDoc.definitions,...AnyPublicationMetadataFieldsFragmentDoc.definitions,...ArticleMetadataV3FieldsFragmentDoc.definitions,...MetadataAttributeFieldsFragmentDoc.definitions,...AudioMetadataV3FieldsFragmentDoc.definitions,...PublicationMetadataMediaAudioFieldsFragmentDoc.definitions,...EncryptableAudioSetFieldsFragmentDoc.definitions,...EncryptableAudioFieldsFragmentDoc.definitions,...AudioFieldsFragmentDoc.definitions,...EncryptableImageSetFieldsFragmentDoc.definitions,...EncryptableImageFieldsFragmentDoc.definitions,...ImageFieldsFragmentDoc.definitions,...CheckingInMetadataV3FieldsFragmentDoc.definitions,...EmbedMetadataV3FieldsFragmentDoc.definitions,...EventMetadataV3FieldsFragmentDoc.definitions,...ImageMetadataV3FieldsFragmentDoc.definitions,...PublicationMetadataMediaImageFieldsFragmentDoc.definitions,...LinkMetadataV3FieldsFragmentDoc.definitions,...LiveStreamMetadataV3FieldsFragmentDoc.definitions,...MintMetadataV3FieldsFragmentDoc.definitions,...SpaceMetadataV3FieldsFragmentDoc.definitions,...StoryMetadataV3FieldsFragmentDoc.definitions,...PublicationMetadataMediaVideoFieldsFragmentDoc.definitions,...EncryptableVideoSetFieldsFragmentDoc.definitions,...EncryptableVideoFieldsFragmentDoc.definitions,...VideoFieldsFragmentDoc.definitions,...TextOnlyMetadataV3FieldsFragmentDoc.definitions,...ThreeDMetadataV3FieldsFragmentDoc.definitions,...TransactionMetadataV3FieldsFragmentDoc.definitions,...VideoMetadataV3FieldsFragmentDoc.definitions,...ReferenceModuleFieldsFragmentDoc.definitions,...CommentFieldsFragmentDoc.definitions,...PrimaryPublicationFieldsFragmentDoc.definitions,...MirrorFieldsFragmentDoc.definitions,...QuoteFieldsFragmentDoc.definitions]} as unknown as DocumentNode<PublicationsQuery, PublicationsQueryVariables>;
export const HidePublicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"HidePublication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"HidePublicationRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hidePublication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}]}]}}]} as unknown as DocumentNode<HidePublicationMutation, HidePublicationMutationVariables>;
export const CreateLegacyCollectTypedDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateLegacyCollectTypedData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LegacyCollectRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createLegacyCollectTypedData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"typedData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"domain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"verifyingContract"}},{"kind":"Field","name":{"kind":"Name","value":"version"}}]}},{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Act"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actionModuleAddress"}},{"kind":"Field","name":{"kind":"Name","value":"actionModuleData"}},{"kind":"Field","name":{"kind":"Name","value":"actorProfileId"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"nonce"}},{"kind":"Field","name":{"kind":"Name","value":"publicationActedId"}},{"kind":"Field","name":{"kind":"Name","value":"publicationActedProfileId"}},{"kind":"Field","name":{"kind":"Name","value":"referrerProfileIds"}},{"kind":"Field","name":{"kind":"Name","value":"referrerPubIds"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateLegacyCollectTypedDataMutation, CreateLegacyCollectTypedDataMutationVariables>;
export const LegacyCollectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LegacyCollect"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LegacyCollectRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"legacyCollect"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RelaySuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"txId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LensProfileManagerRelayError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}}]}}]} as unknown as DocumentNode<LegacyCollectMutation, LegacyCollectMutationVariables>;
export const CreateMomokaPostTypedDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateMomokaPostTypedData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MomokaPostRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMomokaPostTypedData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"typedData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"domain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"verifyingContract"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonce"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"contentURI"}},{"kind":"Field","name":{"kind":"Name","value":"actionModules"}},{"kind":"Field","name":{"kind":"Name","value":"actionModulesInitDatas"}},{"kind":"Field","name":{"kind":"Name","value":"referenceModule"}},{"kind":"Field","name":{"kind":"Name","value":"referenceModuleInitData"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateMomokaPostTypedDataMutation, CreateMomokaPostTypedDataMutationVariables>;
export const PostOnMomokaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PostOnMomoka"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MomokaPostRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postOnMomoka"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CreateMomokaPublicationResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"proof"}},{"kind":"Field","name":{"kind":"Name","value":"momokaId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LensProfileManagerRelayError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}}]}}]} as unknown as DocumentNode<PostOnMomokaMutation, PostOnMomokaMutationVariables>;
export const CreateMomokaCommentTypedDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateMomokaCommentTypedData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MomokaCommentRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMomokaCommentTypedData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"typedData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Comment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"domain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"verifyingContract"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actionModules"}},{"kind":"Field","name":{"kind":"Name","value":"actionModulesInitDatas"}},{"kind":"Field","name":{"kind":"Name","value":"contentURI"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"nonce"}},{"kind":"Field","name":{"kind":"Name","value":"pointedProfileId"}},{"kind":"Field","name":{"kind":"Name","value":"pointedPubId"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"referenceModule"}},{"kind":"Field","name":{"kind":"Name","value":"referenceModuleData"}},{"kind":"Field","name":{"kind":"Name","value":"referenceModuleInitData"}},{"kind":"Field","name":{"kind":"Name","value":"referrerProfileIds"}},{"kind":"Field","name":{"kind":"Name","value":"referrerPubIds"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateMomokaCommentTypedDataMutation, CreateMomokaCommentTypedDataMutationVariables>;
export const CommentOnMomokaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CommentOnMomoka"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MomokaCommentRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commentOnMomoka"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CreateMomokaPublicationResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"proof"}},{"kind":"Field","name":{"kind":"Name","value":"momokaId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LensProfileManagerRelayError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}}]}}]} as unknown as DocumentNode<CommentOnMomokaMutation, CommentOnMomokaMutationVariables>;
export const CreateMomokaQuoteTypedDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateMomokaQuoteTypedData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MomokaQuoteRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMomokaQuoteTypedData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"typedData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Quote"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"domain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"verifyingContract"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonce"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"contentURI"}},{"kind":"Field","name":{"kind":"Name","value":"pointedProfileId"}},{"kind":"Field","name":{"kind":"Name","value":"pointedPubId"}},{"kind":"Field","name":{"kind":"Name","value":"referrerProfileIds"}},{"kind":"Field","name":{"kind":"Name","value":"referrerPubIds"}},{"kind":"Field","name":{"kind":"Name","value":"actionModules"}},{"kind":"Field","name":{"kind":"Name","value":"actionModulesInitDatas"}},{"kind":"Field","name":{"kind":"Name","value":"referenceModule"}},{"kind":"Field","name":{"kind":"Name","value":"referenceModuleData"}},{"kind":"Field","name":{"kind":"Name","value":"referenceModuleInitData"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateMomokaQuoteTypedDataMutation, CreateMomokaQuoteTypedDataMutationVariables>;
export const QuoteOnMomokaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"QuoteOnMomoka"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MomokaQuoteRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quoteOnMomoka"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CreateMomokaPublicationResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"proof"}},{"kind":"Field","name":{"kind":"Name","value":"momokaId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LensProfileManagerRelayError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}}]}}]} as unknown as DocumentNode<QuoteOnMomokaMutation, QuoteOnMomokaMutationVariables>;
export const CreateMomokaMirrorTypedDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateMomokaMirrorTypedData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MomokaMirrorRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMomokaMirrorTypedData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"typedData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Mirror"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"domain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"verifyingContract"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonce"}},{"kind":"Field","name":{"kind":"Name","value":"metadataURI"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"pointedProfileId"}},{"kind":"Field","name":{"kind":"Name","value":"pointedPubId"}},{"kind":"Field","name":{"kind":"Name","value":"referrerProfileIds"}},{"kind":"Field","name":{"kind":"Name","value":"referrerPubIds"}},{"kind":"Field","name":{"kind":"Name","value":"referenceModuleData"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateMomokaMirrorTypedDataMutation, CreateMomokaMirrorTypedDataMutationVariables>;
export const MirrorOnMomokaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MirrorOnMomoka"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MomokaMirrorRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mirrorOnMomoka"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CreateMomokaPublicationResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"proof"}},{"kind":"Field","name":{"kind":"Name","value":"momokaId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LensProfileManagerRelayError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}}]}}]} as unknown as DocumentNode<MirrorOnMomokaMutation, MirrorOnMomokaMutationVariables>;
export const NewMomokaTransactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"NewMomokaTransaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newMomokaTransaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MomokaPostTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MomokaCommentTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commentOn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PrimaryPublicationFields"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MomokaMirrorTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mirrorOn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PrimaryPublicationFields"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MomokaQuoteTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quoteOn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PrimaryPublicationFields"}}]}}]}}]}}]}},...PrimaryPublicationFieldsFragmentDoc.definitions]} as unknown as DocumentNode<NewMomokaTransactionSubscription, NewMomokaTransactionSubscriptionVariables>;
export const NewPublicationStatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"NewPublicationStats"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"for"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PublicationId"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newPublicationStats"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"for"},"value":{"kind":"Variable","name":{"kind":"Name","value":"for"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"}},{"kind":"Field","name":{"kind":"Name","value":"mirrors"}},{"kind":"Field","name":{"kind":"Name","value":"quotes"}},{"kind":"Field","alias":{"kind":"Name","value":"upvotes"},"name":{"kind":"Name","value":"reactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"EnumValue","value":"UPVOTE"}}]}}]},{"kind":"Field","alias":{"kind":"Name","value":"downvotes"},"name":{"kind":"Name","value":"reactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"EnumValue","value":"DOWNVOTE"}}]}}]},{"kind":"Field","name":{"kind":"Name","value":"bookmarks"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<NewPublicationStatsSubscription, NewPublicationStatsSubscriptionVariables>;
export const CreateOnchainPostTypedDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOnchainPostTypedData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OnchainPostRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOnchainPostTypedData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"typedData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"domain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"verifyingContract"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonce"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"contentURI"}},{"kind":"Field","name":{"kind":"Name","value":"actionModules"}},{"kind":"Field","name":{"kind":"Name","value":"actionModulesInitDatas"}},{"kind":"Field","name":{"kind":"Name","value":"referenceModule"}},{"kind":"Field","name":{"kind":"Name","value":"referenceModuleInitData"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateOnchainPostTypedDataMutation, CreateOnchainPostTypedDataMutationVariables>;
export const PostOnchainDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PostOnchain"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OnchainPostRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postOnchain"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RelaySuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"txId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LensProfileManagerRelayError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}}]}}]} as unknown as DocumentNode<PostOnchainMutation, PostOnchainMutationVariables>;
export const CreateOnchainQuoteTypedDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOnchainQuoteTypedData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OnchainQuoteRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOnchainQuoteTypedData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"typedData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Quote"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"domain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"verifyingContract"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonce"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"contentURI"}},{"kind":"Field","name":{"kind":"Name","value":"pointedProfileId"}},{"kind":"Field","name":{"kind":"Name","value":"pointedPubId"}},{"kind":"Field","name":{"kind":"Name","value":"referrerProfileIds"}},{"kind":"Field","name":{"kind":"Name","value":"referrerPubIds"}},{"kind":"Field","name":{"kind":"Name","value":"referenceModuleData"}},{"kind":"Field","name":{"kind":"Name","value":"actionModules"}},{"kind":"Field","name":{"kind":"Name","value":"actionModulesInitDatas"}},{"kind":"Field","name":{"kind":"Name","value":"referenceModule"}},{"kind":"Field","name":{"kind":"Name","value":"referenceModuleInitData"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateOnchainQuoteTypedDataMutation, CreateOnchainQuoteTypedDataMutationVariables>;
export const QuoteOnchainDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"QuoteOnchain"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OnchainQuoteRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quoteOnchain"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RelaySuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"txId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LensProfileManagerRelayError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}}]}}]} as unknown as DocumentNode<QuoteOnchainMutation, QuoteOnchainMutationVariables>;
export const CreateOnchainCommentTypedDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOnchainCommentTypedData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OnchainCommentRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOnchainCommentTypedData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"typedData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Comment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"domain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"verifyingContract"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonce"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"contentURI"}},{"kind":"Field","name":{"kind":"Name","value":"pointedProfileId"}},{"kind":"Field","name":{"kind":"Name","value":"pointedPubId"}},{"kind":"Field","name":{"kind":"Name","value":"referrerProfileIds"}},{"kind":"Field","name":{"kind":"Name","value":"referrerPubIds"}},{"kind":"Field","name":{"kind":"Name","value":"referenceModuleData"}},{"kind":"Field","name":{"kind":"Name","value":"actionModules"}},{"kind":"Field","name":{"kind":"Name","value":"actionModulesInitDatas"}},{"kind":"Field","name":{"kind":"Name","value":"referenceModule"}},{"kind":"Field","name":{"kind":"Name","value":"referenceModuleInitData"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateOnchainCommentTypedDataMutation, CreateOnchainCommentTypedDataMutationVariables>;
export const CommentOnchainDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CommentOnchain"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OnchainCommentRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commentOnchain"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RelaySuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"txId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LensProfileManagerRelayError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}}]}}]} as unknown as DocumentNode<CommentOnchainMutation, CommentOnchainMutationVariables>;
export const CreateOnchainMirrorTypedDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOnchainMirrorTypedData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OnchainMirrorRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOnchainMirrorTypedData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"typedData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"domain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"verifyingContract"}}]}},{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Mirror"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonce"}},{"kind":"Field","name":{"kind":"Name","value":"metadataURI"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"metadataURI"}},{"kind":"Field","name":{"kind":"Name","value":"pointedProfileId"}},{"kind":"Field","name":{"kind":"Name","value":"pointedPubId"}},{"kind":"Field","name":{"kind":"Name","value":"referrerProfileIds"}},{"kind":"Field","name":{"kind":"Name","value":"referrerPubIds"}},{"kind":"Field","name":{"kind":"Name","value":"referenceModuleData"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateOnchainMirrorTypedDataMutation, CreateOnchainMirrorTypedDataMutationVariables>;
export const MirrorOnchainDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MirrorOnchain"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OnchainMirrorRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mirrorOnchain"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RelaySuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"txId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LensProfileManagerRelayError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}}]}}]} as unknown as DocumentNode<MirrorOnchainMutation, MirrorOnchainMutationVariables>;
export const RefreshPublicationMetadataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RefreshPublicationMetadata"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RefreshPublicationMetadataRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshPublicationMetadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]} as unknown as DocumentNode<RefreshPublicationMetadataMutation, RefreshPublicationMetadataMutationVariables>;
export const PublicationsTagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PublicationsTags"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PublicationsTagsRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicationsTags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"next"}},{"kind":"Field","name":{"kind":"Name","value":"prev"}}]}}]}}]}}]} as unknown as DocumentNode<PublicationsTagsQuery, PublicationsTagsQueryVariables>;
export const ValidatePublicationMetadataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ValidatePublicationMetadata"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ValidatePublicationMetadataRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"validatePublicationMetadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reason"}},{"kind":"Field","name":{"kind":"Name","value":"valid"}}]}}]}}]} as unknown as DocumentNode<ValidatePublicationMetadataQuery, ValidatePublicationMetadataQueryVariables>;
export const WhoActedOnPublicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WhoActedOnPublication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WhoActedOnPublicationRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"whoActedOnPublication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}},...ProfileFieldsFragmentDoc.definitions,...NetworkAddressFieldsFragmentDoc.definitions,...MetadataAttributeFieldsFragmentDoc.definitions,...FollowModuleFieldsFragmentDoc.definitions,...AmountFieldsFragmentDoc.definitions,...Erc20FieldsFragmentDoc.definitions,...HandleInfoFragmentDoc.definitions]} as unknown as DocumentNode<WhoActedOnPublicationQuery, WhoActedOnPublicationQueryVariables>;
export const AddReactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddReaction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ReactionRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addReaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}]}]}}]} as unknown as DocumentNode<AddReactionMutation, AddReactionMutationVariables>;
export const RemoveReactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveReaction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ReactionRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeReaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}]}]}}]} as unknown as DocumentNode<RemoveReactionMutation, RemoveReactionMutationVariables>;
export const WhoReactedPublicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WhoReactedPublication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WhoReactedPublicationRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"whoReactedPublication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reaction"}},{"kind":"Field","name":{"kind":"Name","value":"reactionAt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}},...ProfileFieldsFragmentDoc.definitions,...NetworkAddressFieldsFragmentDoc.definitions,...MetadataAttributeFieldsFragmentDoc.definitions,...FollowModuleFieldsFragmentDoc.definitions,...AmountFieldsFragmentDoc.definitions,...Erc20FieldsFragmentDoc.definitions,...HandleInfoFragmentDoc.definitions]} as unknown as DocumentNode<WhoReactedPublicationQuery, WhoReactedPublicationQueryVariables>;
export const ReportPublicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ReportPublication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ReportPublicationRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reportPublication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}]}]}}]} as unknown as DocumentNode<ReportPublicationMutation, ReportPublicationMutationVariables>;
export const FollowRevenuesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FollowRevenues"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FollowRevenueRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"followRevenues"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"revenues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AmountFields"}}]}}]}}]}}]}},...AmountFieldsFragmentDoc.definitions,...Erc20FieldsFragmentDoc.definitions,...NetworkAddressFieldsFragmentDoc.definitions]} as unknown as DocumentNode<FollowRevenuesQuery, FollowRevenuesQueryVariables>;
export const RevenueFromPublicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RevenueFromPublication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RevenueFromPublicationRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"revenueFromPublication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mirror"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MirrorFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revenue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AmountFields"}}]}}]}}]}}]}},...PostFieldsFragmentDoc.definitions,...HandleInfoFragmentDoc.definitions,...NetworkAddressFieldsFragmentDoc.definitions,...PublicationOperationFieldsFragmentDoc.definitions,...AnyPublicationMetadataFieldsFragmentDoc.definitions,...ArticleMetadataV3FieldsFragmentDoc.definitions,...MetadataAttributeFieldsFragmentDoc.definitions,...AudioMetadataV3FieldsFragmentDoc.definitions,...PublicationMetadataMediaAudioFieldsFragmentDoc.definitions,...EncryptableAudioSetFieldsFragmentDoc.definitions,...EncryptableAudioFieldsFragmentDoc.definitions,...AudioFieldsFragmentDoc.definitions,...EncryptableImageSetFieldsFragmentDoc.definitions,...EncryptableImageFieldsFragmentDoc.definitions,...ImageFieldsFragmentDoc.definitions,...CheckingInMetadataV3FieldsFragmentDoc.definitions,...EmbedMetadataV3FieldsFragmentDoc.definitions,...EventMetadataV3FieldsFragmentDoc.definitions,...ImageMetadataV3FieldsFragmentDoc.definitions,...PublicationMetadataMediaImageFieldsFragmentDoc.definitions,...LinkMetadataV3FieldsFragmentDoc.definitions,...LiveStreamMetadataV3FieldsFragmentDoc.definitions,...MintMetadataV3FieldsFragmentDoc.definitions,...SpaceMetadataV3FieldsFragmentDoc.definitions,...StoryMetadataV3FieldsFragmentDoc.definitions,...PublicationMetadataMediaVideoFieldsFragmentDoc.definitions,...EncryptableVideoSetFieldsFragmentDoc.definitions,...EncryptableVideoFieldsFragmentDoc.definitions,...VideoFieldsFragmentDoc.definitions,...TextOnlyMetadataV3FieldsFragmentDoc.definitions,...ThreeDMetadataV3FieldsFragmentDoc.definitions,...TransactionMetadataV3FieldsFragmentDoc.definitions,...VideoMetadataV3FieldsFragmentDoc.definitions,...ReferenceModuleFieldsFragmentDoc.definitions,...CommentFieldsFragmentDoc.definitions,...PrimaryPublicationFieldsFragmentDoc.definitions,...MirrorFieldsFragmentDoc.definitions,...QuoteFieldsFragmentDoc.definitions,...AmountFieldsFragmentDoc.definitions,...Erc20FieldsFragmentDoc.definitions]} as unknown as DocumentNode<RevenueFromPublicationQuery, RevenueFromPublicationQueryVariables>;
export const RevenueFromPublicationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RevenueFromPublications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RevenueFromPublicationsRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"revenueFromPublications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mirror"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MirrorFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revenue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AmountFields"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}},...PostFieldsFragmentDoc.definitions,...HandleInfoFragmentDoc.definitions,...NetworkAddressFieldsFragmentDoc.definitions,...PublicationOperationFieldsFragmentDoc.definitions,...AnyPublicationMetadataFieldsFragmentDoc.definitions,...ArticleMetadataV3FieldsFragmentDoc.definitions,...MetadataAttributeFieldsFragmentDoc.definitions,...AudioMetadataV3FieldsFragmentDoc.definitions,...PublicationMetadataMediaAudioFieldsFragmentDoc.definitions,...EncryptableAudioSetFieldsFragmentDoc.definitions,...EncryptableAudioFieldsFragmentDoc.definitions,...AudioFieldsFragmentDoc.definitions,...EncryptableImageSetFieldsFragmentDoc.definitions,...EncryptableImageFieldsFragmentDoc.definitions,...ImageFieldsFragmentDoc.definitions,...CheckingInMetadataV3FieldsFragmentDoc.definitions,...EmbedMetadataV3FieldsFragmentDoc.definitions,...EventMetadataV3FieldsFragmentDoc.definitions,...ImageMetadataV3FieldsFragmentDoc.definitions,...PublicationMetadataMediaImageFieldsFragmentDoc.definitions,...LinkMetadataV3FieldsFragmentDoc.definitions,...LiveStreamMetadataV3FieldsFragmentDoc.definitions,...MintMetadataV3FieldsFragmentDoc.definitions,...SpaceMetadataV3FieldsFragmentDoc.definitions,...StoryMetadataV3FieldsFragmentDoc.definitions,...PublicationMetadataMediaVideoFieldsFragmentDoc.definitions,...EncryptableVideoSetFieldsFragmentDoc.definitions,...EncryptableVideoFieldsFragmentDoc.definitions,...VideoFieldsFragmentDoc.definitions,...TextOnlyMetadataV3FieldsFragmentDoc.definitions,...ThreeDMetadataV3FieldsFragmentDoc.definitions,...TransactionMetadataV3FieldsFragmentDoc.definitions,...VideoMetadataV3FieldsFragmentDoc.definitions,...ReferenceModuleFieldsFragmentDoc.definitions,...CommentFieldsFragmentDoc.definitions,...PrimaryPublicationFieldsFragmentDoc.definitions,...MirrorFieldsFragmentDoc.definitions,...QuoteFieldsFragmentDoc.definitions,...AmountFieldsFragmentDoc.definitions,...Erc20FieldsFragmentDoc.definitions]} as unknown as DocumentNode<RevenueFromPublicationsQuery, RevenueFromPublicationsQueryVariables>;
export const SearchProfilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchProfiles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileSearchRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchProfiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}},...ProfileFieldsFragmentDoc.definitions,...NetworkAddressFieldsFragmentDoc.definitions,...MetadataAttributeFieldsFragmentDoc.definitions,...FollowModuleFieldsFragmentDoc.definitions,...AmountFieldsFragmentDoc.definitions,...Erc20FieldsFragmentDoc.definitions,...HandleInfoFragmentDoc.definitions]} as unknown as DocumentNode<SearchProfilesQuery, SearchProfilesQueryVariables>;
export const SearchPublicationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchPublications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PublicationSearchRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchPublications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}},...PostFieldsFragmentDoc.definitions,...HandleInfoFragmentDoc.definitions,...NetworkAddressFieldsFragmentDoc.definitions,...PublicationOperationFieldsFragmentDoc.definitions,...AnyPublicationMetadataFieldsFragmentDoc.definitions,...ArticleMetadataV3FieldsFragmentDoc.definitions,...MetadataAttributeFieldsFragmentDoc.definitions,...AudioMetadataV3FieldsFragmentDoc.definitions,...PublicationMetadataMediaAudioFieldsFragmentDoc.definitions,...EncryptableAudioSetFieldsFragmentDoc.definitions,...EncryptableAudioFieldsFragmentDoc.definitions,...AudioFieldsFragmentDoc.definitions,...EncryptableImageSetFieldsFragmentDoc.definitions,...EncryptableImageFieldsFragmentDoc.definitions,...ImageFieldsFragmentDoc.definitions,...CheckingInMetadataV3FieldsFragmentDoc.definitions,...EmbedMetadataV3FieldsFragmentDoc.definitions,...EventMetadataV3FieldsFragmentDoc.definitions,...ImageMetadataV3FieldsFragmentDoc.definitions,...PublicationMetadataMediaImageFieldsFragmentDoc.definitions,...LinkMetadataV3FieldsFragmentDoc.definitions,...LiveStreamMetadataV3FieldsFragmentDoc.definitions,...MintMetadataV3FieldsFragmentDoc.definitions,...SpaceMetadataV3FieldsFragmentDoc.definitions,...StoryMetadataV3FieldsFragmentDoc.definitions,...PublicationMetadataMediaVideoFieldsFragmentDoc.definitions,...EncryptableVideoSetFieldsFragmentDoc.definitions,...EncryptableVideoFieldsFragmentDoc.definitions,...VideoFieldsFragmentDoc.definitions,...TextOnlyMetadataV3FieldsFragmentDoc.definitions,...ThreeDMetadataV3FieldsFragmentDoc.definitions,...TransactionMetadataV3FieldsFragmentDoc.definitions,...VideoMetadataV3FieldsFragmentDoc.definitions,...ReferenceModuleFieldsFragmentDoc.definitions,...CommentFieldsFragmentDoc.definitions,...PrimaryPublicationFieldsFragmentDoc.definitions,...QuoteFieldsFragmentDoc.definitions]} as unknown as DocumentNode<SearchPublicationsQuery, SearchPublicationsQueryVariables>;
export const LensTransactionStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LensTransactionStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LensTransactionStatusRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lensTransactionStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}},{"kind":"Field","name":{"kind":"Name","value":"extraInfo"}}]}}]}}]} as unknown as DocumentNode<LensTransactionStatusQuery, LensTransactionStatusQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "AnyPublication": [
      "Comment",
      "Mirror",
      "Post",
      "Quote"
    ],
    "Asset": [
      "Erc20"
    ],
    "BroadcastMomokaResult": [
      "CreateMomokaPublicationResult",
      "RelayError"
    ],
    "ClaimProfileWithHandleResult": [
      "ClaimProfileWithHandleErrorResult",
      "RelaySuccess"
    ],
    "CommentablePublication": [
      "Post",
      "Quote"
    ],
    "CreateProfileWithHandleResult": [
      "CreateProfileWithHandleErrorResult",
      "RelaySuccess"
    ],
    "ExplorePublication": [
      "Post",
      "Quote"
    ],
    "FeedHighlight": [
      "Post",
      "Quote"
    ],
    "FollowModule": [
      "FeeFollowModuleSettings",
      "RevertFollowModuleSettings",
      "UnknownFollowModuleSettings"
    ],
    "LensProfileManagerRelayResult": [
      "LensProfileManagerRelayError",
      "RelaySuccess"
    ],
    "MirrorablePublication": [
      "Comment",
      "Post",
      "Quote"
    ],
    "MomokaTransaction": [
      "MomokaCommentTransaction",
      "MomokaMirrorTransaction",
      "MomokaPostTransaction",
      "MomokaQuoteTransaction"
    ],
    "MomokaVerificationStatus": [
      "MomokaVerificationStatusFailure",
      "MomokaVerificationStatusSuccess"
    ],
    "Notification": [
      "ActedNotification",
      "CommentNotification",
      "FollowNotification",
      "MentionNotification",
      "MirrorNotification",
      "QuoteNotification",
      "ReactionNotification"
    ],
    "OpenActionModule": [
      "LegacyAaveFeeCollectModuleSettings",
      "LegacyERC4626FeeCollectModuleSettings",
      "LegacyFeeCollectModuleSettings",
      "LegacyFreeCollectModuleSettings",
      "LegacyLimitedFeeCollectModuleSettings",
      "LegacyLimitedTimedFeeCollectModuleSettings",
      "LegacyMultirecipientFeeCollectModuleSettings",
      "LegacyRevertCollectModuleSettings",
      "LegacySimpleCollectModuleSettings",
      "LegacyTimedFeeCollectModuleSettings",
      "MultirecipientFeeCollectOpenActionSettings",
      "SimpleCollectOpenActionSettings",
      "UnknownOpenActionModuleSettings"
    ],
    "OpenActionResult": [
      "KnownCollectOpenActionResult",
      "UnknownOpenActionResult"
    ],
    "PrimaryPublication": [
      "Comment",
      "Post",
      "Quote"
    ],
    "ProfilePicture": [
      "ImageSet",
      "NftImage"
    ],
    "PublicationMetadata": [
      "ArticleMetadataV3",
      "AudioMetadataV3",
      "CheckingInMetadataV3",
      "EmbedMetadataV3",
      "EventMetadataV3",
      "ImageMetadataV3",
      "LinkMetadataV3",
      "LiveStreamMetadataV3",
      "MintMetadataV3",
      "SpaceMetadataV3",
      "StoryMetadataV3",
      "TextOnlyMetadataV3",
      "ThreeDMetadataV3",
      "TransactionMetadataV3",
      "VideoMetadataV3"
    ],
    "PublicationMetadataEncryptionStrategy": [
      "PublicationMetadataLitEncryption"
    ],
    "PublicationMetadataMedia": [
      "PublicationMetadataMediaAudio",
      "PublicationMetadataMediaImage",
      "PublicationMetadataMediaVideo"
    ],
    "ReferenceModule": [
      "DegreesOfSeparationReferenceModuleSettings",
      "FollowOnlyReferenceModuleSettings",
      "LegacyDegreesOfSeparationReferenceModuleSettings",
      "LegacyFollowOnlyReferenceModuleSettings",
      "UnknownReferenceModuleSettings"
    ],
    "RelayMomokaResult": [
      "CreateMomokaPublicationResult",
      "LensProfileManagerRelayError"
    ],
    "RelayResult": [
      "RelayError",
      "RelaySuccess"
    ],
    "SecondTierCondition": [
      "AdvancedContractCondition",
      "AndCondition",
      "CollectCondition",
      "EoaOwnershipCondition",
      "Erc20OwnershipCondition",
      "FollowCondition",
      "NftOwnershipCondition",
      "OrCondition",
      "ProfileOwnershipCondition"
    ],
    "SupportedModule": [
      "KnownSupportedModule",
      "UnknownSupportedModule"
    ],
    "ThirdTierCondition": [
      "AdvancedContractCondition",
      "CollectCondition",
      "EoaOwnershipCondition",
      "Erc20OwnershipCondition",
      "FollowCondition",
      "NftOwnershipCondition",
      "ProfileOwnershipCondition"
    ]
  }
};
      export default result;
    