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
  EncryptedValue: any;
  Ens: any;
  EvmAddress: any;
  Handle: any;
  ImageSizeTransform: any;
  IpfsCid: any;
  Jwt: any;
  LimitScalar: any;
  Locale: any;
  Markdown: any;
  MimeType: any;
  MomokaId: any;
  MomokaProof: any;
  NftGalleryId: any;
  NftGalleryName: any;
  Nonce: any;
  OnchainPublicationId: any;
  ProfileId: any;
  PublicationId: any;
  Signature: any;
  TokenId: any;
  TxHash: any;
  TxId: any;
  URI: any;
  URL: any;
  UnixTimestamp: any;
  Void: any;
};

export type AccessCondition =
  | AndCondition
  | CollectCondition
  | EoaOwnershipCondition
  | Erc20OwnershipCondition
  | FollowCondition
  | NftOwnershipCondition
  | OrCondition
  | ProfileOwnershipCondition;

export type AchRequest = {
  address: Scalars['EvmAddress'];
  freeTextHandle: Scalars['Boolean'];
  handle: Scalars['CreateHandle'];
  overrideAlreadyClaimed: Scalars['Boolean'];
  overrideTradeMark: Scalars['Boolean'];
  secret: Scalars['String'];
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
  for?: InputMaybe<Scalars['PublicationId']>;
  referrers?: InputMaybe<Array<OnchainReferrer>>;
};

export type ActOnOpenActionRequest = {
  actOn: ActOnOpenActionInput;
  for?: InputMaybe<Scalars['PublicationId']>;
  referrers?: InputMaybe<Array<OnchainReferrer>>;
};

export type ActedNotification = {
  __typename?: 'ActedNotification';
  actions: Array<ProfileActedResult>;
  id: Scalars['String'];
  publication: AnyPublication;
};

export type AlreadyInvitedCheckRequest = {
  address: Scalars['EvmAddress'];
};

export type Amount = {
  __typename?: 'Amount';
  /** The asset */
  asset: Asset;
  rate: FiatAmount;
  /** Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal. */
  value: Scalars['String'];
};

export type AmountRateArgs = {
  request: Scalars['String'];
};

export type AmountInput = {
  /** The currency */
  currency: Scalars['EvmAddress'];
  /** Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal. */
  value: Scalars['String'];
};

export type AndCondition = {
  __typename?: 'AndCondition';
  criteria: Array<AccessCondition>;
};

export type AnyPublication = Comment | Mirror | Post | Quote;

export type App = {
  __typename?: 'App';
  id: Scalars['AppId'];
};

export type ApprovedAllowanceAmountResult = {
  __typename?: 'ApprovedAllowanceAmountResult';
  allowance: Scalars['String'];
  currency: Scalars['EvmAddress'];
  moduleContract: NetworkAddress;
  moduleName: Scalars['String'];
};

export type ApprovedModuleAllowanceAmountRequest = {
  currencies?: InputMaybe<Array<Scalars['EvmAddress']>>;
  followModules?: InputMaybe<Array<FollowModuleType>>;
  openActionModules?: InputMaybe<Array<OpenActionModuleType>>;
  referenceModules?: InputMaybe<Array<ReferenceModuleType>>;
  unknownFollowModules?: InputMaybe<Array<Scalars['EvmAddress']>>;
  unknownOpenActionModules?: InputMaybe<Array<Scalars['EvmAddress']>>;
  unknownReferenceModules?: InputMaybe<Array<Scalars['EvmAddress']>>;
};

export type ArticleMetadataV1 = {
  __typename?: 'ArticleMetadataV1';
  appId?: Maybe<Scalars['AppId']>;
  attachments?: Maybe<Array<PublicationMetadataAttachment>>;
  attributes?: Maybe<Array<PublicationMetadataV3Attribute>>;
  content: Scalars['Markdown'];
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  globalReach: Scalars['Boolean'];
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  locale?: Maybe<Scalars['Locale']>;
  mainContentFocus: PublicationArticleMetadataV1MainFocusType;
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  tags?: Maybe<Array<Scalars['String']>>;
  title?: Maybe<Scalars['String']>;
};

export type Asset = Erc20;

export type Audio = {
  __typename?: 'Audio';
  mimeType?: Maybe<AudioMimeType>;
  url: Scalars['URI'];
};

export enum AudioMimeType {
  Mp3 = 'MP3',
}

export type AudioSet = {
  __typename?: 'AudioSet';
  audio: Audio;
  rawURI: Scalars['URI'];
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
  /** The profile ID to initiate a challenge */
  address: Scalars['EvmAddress'];
  /** The profile ID to initiate a challenge */
  profileId: Scalars['ProfileId'];
};

export type ChangeProfileManager = {
  action: ChangeProfileManagerActionType;
  address: Scalars['EvmAddress'];
};

export enum ChangeProfileManagerActionType {
  Add = 'ADD',
  Remove = 'REMOVE',
}

export type ChangeProfileManagersRequest = {
  approveLensManager: Scalars['Boolean'];
  changeManagers?: InputMaybe<Array<ChangeProfileManager>>;
};

export type CheckingInMetadataV1 = {
  __typename?: 'CheckingInMetadataV1';
  appId?: Maybe<Scalars['AppId']>;
  attachments?: Maybe<Array<PublicationMetadataAttachment>>;
  attributes?: Maybe<Array<PublicationMetadataV3Attribute>>;
  content?: Maybe<Scalars['Markdown']>;
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  geographic?: Maybe<GeoLocation>;
  globalReach: Scalars['Boolean'];
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  locale?: Maybe<Scalars['Locale']>;
  location: Scalars['String'];
  mainContentFocus: PublicationCheckingInMetadataV1MainFocusType;
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export type ClaimProfileRequest = {
  followModule?: InputMaybe<FollowModuleInput>;
  freeTextHandle?: InputMaybe<Scalars['CreateHandle']>;
  id: Scalars['String'];
};

export enum ClaimProfileStatusType {
  AlreadyClaimed = 'ALREADY_CLAIMED',
  ClaimFailed = 'CLAIM_FAILED',
  NotClaimed = 'NOT_CLAIMED',
}

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
  publicationId?: Maybe<Scalars['PublicationId']>;
  thisPublication?: Maybe<Scalars['Boolean']>;
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
  UnknownOpenActionModule = 'UnknownOpenActionModule',
}

export type CollectOpenActionResult = {
  __typename?: 'CollectOpenActionResult';
  type: CollectOpenActionModuleType;
};

export type CollectedEvent = {
  __typename?: 'CollectedEvent';
  by: Profile;
  timestamp: Scalars['DateTime'];
};

export type Comment = {
  __typename?: 'Comment';
  by: Profile;
  commentOn: PrimaryPublication;
  createdAt: Scalars['DateTime'];
  firstComment?: Maybe<Comment>;
  id: Scalars['PublicationId'];
  isGated: Scalars['Boolean'];
  isHidden: Scalars['Boolean'];
  metadata: PublicationMetadata;
  momoka?: Maybe<MomokaInfo>;
  openActionModules?: Maybe<Array<OpenActionModule>>;
  operations: PublicationOperations;
  publishedOn?: Maybe<App>;
  referenceModule?: Maybe<ReferenceModule>;
  root: Post;
  stats: PublicationStats;
  txHash: Scalars['TxHash'];
};

export type CommentStatsArgs = {
  request: PublicationStatsInput;
};

export type CommentNotification = {
  __typename?: 'CommentNotification';
  comment: Comment;
  id: Scalars['String'];
};

export enum CommentRankingFilterType {
  NoneRelevant = 'NONE_RELEVANT',
  Relevant = 'RELEVANT',
}

export enum ComparisonOperatorConditionType {
  Equal = 'EQUAL',
  GreaterThan = 'GREATER_THAN',
  GreaterThanOrEqual = 'GREATER_THAN_OR_EQUAL',
  LessThan = 'LESS_THAN',
  LessThanOrEqual = 'LESS_THAN_OR_EQUAL',
  NotEqual = 'NOT_EQUAL',
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

export type CreateHandleLinkToProfileBroadcastItemResult = {
  __typename?: 'CreateHandleLinkToProfileBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateHandleLinkToProfileEip712TypedData;
};

export type CreateHandleLinkToProfileEip712TypedData = {
  __typename?: 'CreateHandleLinkToProfileEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateHandleLinkToProfileEip712TypedDataTypes;
  /** The values */
  value: CreateHandleLinkToProfileEip712TypedDataValue;
};

export type CreateHandleLinkToProfileEip712TypedDataTypes = {
  __typename?: 'CreateHandleLinkToProfileEIP712TypedDataTypes';
  Link: Array<Eip712TypedDataField>;
};

export type CreateHandleLinkToProfileEip712TypedDataValue = {
  __typename?: 'CreateHandleLinkToProfileEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  handleId: Scalars['TokenId'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
};

export type CreateHandleUnlinkFromProfileBroadcastItemResult = {
  __typename?: 'CreateHandleUnlinkFromProfileBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateHandleUnlinkFromProfileEip712TypedData;
};

export type CreateHandleUnlinkFromProfileEip712TypedData = {
  __typename?: 'CreateHandleUnlinkFromProfileEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateHandleUnlinkFromProfileEip712TypedDataTypes;
  /** The values */
  value: CreateHandleUnlinkFromProfileEip712TypedDataValue;
};

export type CreateHandleUnlinkFromProfileEip712TypedDataTypes = {
  __typename?: 'CreateHandleUnlinkFromProfileEIP712TypedDataTypes';
  Unlink: Array<Eip712TypedDataField>;
};

export type CreateHandleUnlinkFromProfileEip712TypedDataValue = {
  __typename?: 'CreateHandleUnlinkFromProfileEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  handleId: Scalars['TokenId'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
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

export enum CreateProfileWithHandleErrorReasonType {
  Failed = 'FAILED',
  HandleTaken = 'HANDLE_TAKEN',
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

export type CurRequest = {
  secret: Scalars['String'];
};

export enum CustomFiltersType {
  Gardeners = 'GARDENERS',
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
}

export type DegreesOfSeparationReferenceModuleInput = {
  commentsRestricted: Scalars['Boolean'];
  degreesOfSeparation: Scalars['Int'];
  mirrorsRestricted: Scalars['Boolean'];
  quotesRestricted: Scalars['Boolean'];
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

export type ElectedMirror = {
  __typename?: 'ElectedMirror';
  by: Profile;
  mirrorId: Scalars['PublicationId'];
  timestamp: Scalars['DateTime'];
};

export type EmbedMetadataV1 = {
  __typename?: 'EmbedMetadataV1';
  appId?: Maybe<Scalars['AppId']>;
  attachments?: Maybe<Array<PublicationMetadataAttachment>>;
  attributes?: Maybe<Array<PublicationMetadataV3Attribute>>;
  content?: Maybe<Scalars['Markdown']>;
  contentWarning?: Maybe<PublicationContentWarningType>;
  embed: Scalars['URL'];
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  globalReach: Scalars['Boolean'];
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  locale?: Maybe<Scalars['Locale']>;
  mainContentFocus: PublicationEmbedMetadataV1MainFocusType;
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export type EncryptedMedia = {
  __typename?: 'EncryptedMedia';
  altTag?: Maybe<Scalars['EncryptedValue']>;
  cover?: Maybe<Scalars['EncryptedValue']>;
  mimeType?: Maybe<Scalars['MimeType']>;
  uri: Scalars['URI'];
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
  contract: NetworkAddress;
};

export type EventMetadataV1 = {
  __typename?: 'EventMetadataV1';
  appId?: Maybe<Scalars['AppId']>;
  attachments?: Maybe<Array<PublicationMetadataAttachment>>;
  attributes?: Maybe<Array<PublicationMetadataV3Attribute>>;
  content?: Maybe<Scalars['Markdown']>;
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  endsAt: Scalars['DateTime'];
  geographic?: Maybe<GeoLocation>;
  globalReach: Scalars['Boolean'];
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  links?: Maybe<Array<Scalars['URL']>>;
  locale?: Maybe<Scalars['Locale']>;
  location: Scalars['String'];
  mainContentFocus: PublicationEventMetadataV1MainFocusType;
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  startsAt: Scalars['DateTime'];
  tags?: Maybe<Array<Scalars['String']>>;
};

/** Possible sort criteria for exploring profiles */
export enum ExploreProfileOrderBy {
  CreatedOn = 'CREATED_ON',
  LatestCreated = 'LATEST_CREATED',
  MostCollects = 'MOST_COLLECTS',
  MostComments = 'MOST_COMMENTS',
  MostFollowers = 'MOST_FOLLOWERS',
  MostMirrors = 'MOST_MIRRORS',
  MostPosts = 'MOST_POSTS',
  MostPublication = 'MOST_PUBLICATION',
}

export type ExploreProfilesRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** Order criteria for exploring profiles */
  orderBy: ExploreProfileOrderBy;
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
  limit?: InputMaybe<Scalars['LimitScalar']>;
  orderBy: ExplorePublicationsOrderByType;
  where?: InputMaybe<ExplorePublicationsWhere>;
};

export enum ExplorePublicationType {
  Comment = 'COMMENT',
  Post = 'POST',
  Quote = 'QUOTE',
}

export enum ExplorePublicationsOrderByType {
  Latest = 'LATEST',
  LensCurated = 'LENS_CURATED',
  TopCollectedOpenAction = 'TOP_COLLECTED_OPEN_ACTION',
  TopCommented = 'TOP_COMMENTED',
  TopMirrored = 'TOP_MIRRORED',
  TopQuoted = 'TOP_QUOTED',
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

export type FeeFollowModuleSettings = {
  __typename?: 'FeeFollowModuleSettings';
  /** The amount info */
  amount: Amount;
  contract: NetworkAddress;
  /** The module recipient address */
  recipient: Scalars['EvmAddress'];
};

export enum FeedEventItemType {
  CollectComment = 'COLLECT_COMMENT',
  CollectPost = 'COLLECT_POST',
  Comment = 'COMMENT',
  Mirror = 'MIRROR',
  Post = 'POST',
  Quote = 'QUOTE',
  ReactionComment = 'REACTION_COMMENT',
  ReactionPost = 'REACTION_POST',
}

export type FeedHighlight = Post | Quote;

export type FeedHighlightWhere = {
  metadata: PublicationMetadataFilters;
};

export type FeedHighlightsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  where?: InputMaybe<FeedHighlightWhere>;
};

export type FeedItem = {
  __typename?: 'FeedItem';
  collects: Array<CollectedEvent>;
  comments: Array<Comment>;
  electedMirror?: Maybe<ElectedMirror>;
  id: Scalars['String'];
  mirrors: Array<MirrorEvent>;
  quotes: Array<Quote>;
  reactions: Array<ReactionEvent>;
  root: PrimaryPublication;
};

export type FeedRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  where?: InputMaybe<FeedWhere>;
};

export type FeedWhere = {
  feedEventItemTypes?: InputMaybe<Array<FeedEventItemType>>;
  for: Scalars['ProfileId'];
  metadata: PublicationMetadataFilters;
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

export type FollowModule =
  | FeeFollowModuleSettings
  | RevertFollowModuleSettings
  | UnknownFollowModuleSettings;

export type FollowModuleInput = {
  feeFollowModule?: InputMaybe<FeeFollowModuleInput>;
  freeFollowModule?: InputMaybe<Scalars['Boolean']>;
  revertFollowModule?: InputMaybe<Scalars['Boolean']>;
  unknownFollowModule?: InputMaybe<UnknownFollowModuleInput>;
};

export type FollowModuleRedeemInput = {
  feeFollowModule?: InputMaybe<Scalars['Boolean']>;
  unknownFollowModule?: InputMaybe<UnknownFollowModuleRedeemInput>;
};

export enum FollowModuleType {
  FeeFollowModule = 'FeeFollowModule',
  RevertFollowModule = 'RevertFollowModule',
  UnknownFollowModule = 'UnknownFollowModule',
}

export type FollowNotification = {
  __typename?: 'FollowNotification';
  followers: Array<Profile>;
  id: Scalars['String'];
};

export type FollowOnlyReferenceModuleSettings = {
  __typename?: 'FollowOnlyReferenceModuleSettings';
  contract: NetworkAddress;
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

export type FollowersRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  of: Scalars['ProfileId'];
};

export type FollowingRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  for: Scalars['ProfileId'];
  limit?: InputMaybe<Scalars['LimitScalar']>;
};

export type FraudReasonInput = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingFraudSubreason;
};

export type FutureProofNotification = {
  __typename?: 'FutureProofNotification';
  id?: Maybe<Scalars['String']>;
};

export type FutureProofPublicationEncryptionStrategy = {
  __typename?: 'FutureProofPublicationEncryptionStrategy';
  id?: Maybe<Scalars['String']>;
};

export type FutureProofPublicationMetadata = {
  __typename?: 'FutureProofPublicationMetadata';
  id: Scalars['String'];
};

export type Gasless = {
  __typename?: 'Gasless';
  enabled: Scalars['Boolean'];
  relay?: Maybe<NetworkAddress>;
};

export type GciRequest = {
  hhh: Scalars['String'];
  secret: Scalars['String'];
  ttt: Scalars['String'];
};

export type GcrRequest = {
  hhh: Scalars['String'];
  secret: Scalars['String'];
  ttt: Scalars['String'];
};

export type GctRequest = {
  secret: Scalars['String'];
};

export type GddRequest = {
  domain: Scalars['URL'];
  secret: Scalars['String'];
};

export type GdmRequest = {
  secret: Scalars['String'];
};

export type GenerateModuleCurrencyApprovalDataRequest = {
  currency: Scalars['EvmAddress'];
  followModule?: InputMaybe<FollowModuleType>;
  openActionModule?: InputMaybe<OpenActionModuleType>;
  referenceModule?: InputMaybe<ReferenceModuleType>;
  unknownFollowModule?: InputMaybe<Scalars['EvmAddress']>;
  unknownOpenActionModule?: InputMaybe<Scalars['EvmAddress']>;
  unknownReferenceModule?: InputMaybe<Scalars['EvmAddress']>;
  value: Scalars['String'];
};

export type GenerateModuleCurrencyApprovalResult = {
  __typename?: 'GenerateModuleCurrencyApprovalResult';
  data: Scalars['BlockchainData'];
  from: Scalars['EvmAddress'];
  to: Scalars['EvmAddress'];
};

export type GeoLocation = {
  __typename?: 'GeoLocation';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type HandleLinkToProfileRequest = {
  handleId: Scalars['TokenId'];
};

export type HandleResult = {
  __typename?: 'HandleResult';
  handle: Scalars['Handle'];
};

export type HandleUnlinkFromProfileRequest = {
  handleId: Scalars['TokenId'];
};

export type HelRequest = {
  handle: Scalars['Handle'];
  remove: Scalars['Boolean'];
  secret: Scalars['String'];
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
  Success = 'SUCCESS',
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
  mimeType?: Maybe<ImageMimeType>;
  url: Scalars['URI'];
  /** Width of the image */
  width?: Maybe<Scalars['Int']>;
};

export enum ImageMimeType {
  Png = 'PNG',
}

export type ImageSet = {
  __typename?: 'ImageSet';
  /** Alternative text for the image */
  altTag?: Maybe<Scalars['String']>;
  image: Image;
  rawURI: Scalars['URI'];
  transformed: Image;
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

export type InRequest = {
  address: Scalars['EvmAddress'];
  numInvites: Scalars['Int'];
  secret: Scalars['String'];
};

export type InTotalRequest = {
  address: Scalars['EvmAddress'];
  secret: Scalars['String'];
};

export type InternalPinRequest = {
  items: Array<Scalars['URL']>;
  secret: Scalars['String'];
};

export type InternalPinResult = {
  __typename?: 'InternalPinResult';
  ipfs: Scalars['IpfsCid'];
  referenceItem: Scalars['URL'];
};

export type InviteRequest = {
  invites: Array<Scalars['EvmAddress']>;
  secret: Scalars['String'];
};

export type InvitedResult = {
  __typename?: 'InvitedResult';
  invited: Scalars['EvmAddress'];
  profileMinted?: Maybe<Profile>;
  when: Scalars['DateTime'];
};

export type LegacyAaveFeeCollectModuleSettings = {
  __typename?: 'LegacyAaveFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: Amount;
  /** The maximum number of collects for this publication. Omit for no limit. */
  collectLimit?: Maybe<Scalars['String']>;
  contract: NetworkAddress;
  /** The end timestamp after which collecting is impossible. No expiry if missing. */
  endTimestamp?: Maybe<Scalars['DateTime']>;
  /** True if only followers of publisher may collect the post. */
  followerOnly: Scalars['Boolean'];
  /** Recipient of collect fees. */
  recipient: Scalars['EvmAddress'];
  /** The referral fee associated with this publication. */
  referralFee: Scalars['Float'];
};

export type LegacyCollectRequest = {
  on: Scalars['PublicationId'];
};

export type LegacyErc4626FeeCollectModuleSettings = {
  __typename?: 'LegacyERC4626FeeCollectModuleSettings';
  /** The collect module amount info */
  amount: Amount;
  /** The maximum number of collects for this publication. 0 for no limit. */
  collectLimit?: Maybe<Scalars['String']>;
  contract: NetworkAddress;
  /** The end timestamp after which collecting is impossible. 0 for no expiry. */
  endTimestamp?: Maybe<Scalars['DateTime']>;
  /** True if only followers of publisher may collect the post. */
  followerOnly: Scalars['Boolean'];
  /** The recipient of the ERC4626 vault shares */
  recipient: Scalars['EvmAddress'];
  /** The referral fee associated with this publication. */
  referralFee: Scalars['Float'];
  /** The ERC4626 vault address */
  vault: NetworkAddress;
};

export type LegacyFeeCollectModuleSettings = {
  __typename?: 'LegacyFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: Amount;
  contract: NetworkAddress;
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EvmAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
};

export type LegacyFreeCollectModuleSettings = {
  __typename?: 'LegacyFreeCollectModuleSettings';
  contract: NetworkAddress;
  /** Follower only */
  followerOnly: Scalars['Boolean'];
};

export type LegacyLimitedFeeCollectModuleSettings = {
  __typename?: 'LegacyLimitedFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: Amount;
  /** The collect module limit */
  collectLimit: Scalars['String'];
  contract: NetworkAddress;
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EvmAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
};

export type LegacyLimitedTimedFeeCollectModuleSettings = {
  __typename?: 'LegacyLimitedTimedFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: Amount;
  /** The collect module limit */
  collectLimit: Scalars['String'];
  contract: NetworkAddress;
  /** The collect module end timestamp */
  endTimestamp: Scalars['DateTime'];
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EvmAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
};

export type LegacyMultirecipientFeeCollectModuleSettings = {
  __typename?: 'LegacyMultirecipientFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: Amount;
  /** The maximum number of collects for this publication. 0 for no limit. */
  collectLimit?: Maybe<Scalars['String']>;
  contract: NetworkAddress;
  /** The end timestamp after which collecting is impossible. 0 for no expiry. */
  endTimestamp?: Maybe<Scalars['DateTime']>;
  /** True if only followers of publisher may collect the post. */
  followerOnly: Scalars['Boolean'];
  /** Recipient of collect fees. */
  recipients: Array<RecipientDataOutput>;
  /** The referral fee associated with this publication. */
  referralFee: Scalars['Float'];
};

export enum LegacyPublicationMetadataVersions {
  V1 = 'V1',
  V2 = 'V2',
}

export type LegacyRevertCollectModuleSettings = {
  __typename?: 'LegacyRevertCollectModuleSettings';
  contract: NetworkAddress;
};

export type LegacySimpleCollectModuleSettings = {
  __typename?: 'LegacySimpleCollectModuleSettings';
  /** The collect module amount info */
  amount?: Maybe<Amount>;
  /** The maximum number of collects for this publication. 0 for no limit. */
  collectLimit?: Maybe<Scalars['String']>;
  contract: NetworkAddress;
  /** The end timestamp after which collecting is impossible. 0 for no expiry. */
  endTimestamp?: Maybe<Scalars['DateTime']>;
  /** True if only followers of publisher may collect the post. */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EvmAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
};

export type LegacyTimedFeeCollectModuleSettings = {
  __typename?: 'LegacyTimedFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: Amount;
  contract: NetworkAddress;
  /** The collect module end timestamp */
  endTimestamp: Scalars['DateTime'];
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EvmAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
};

export type LensMetadataTransaction = {
  __typename?: 'LensMetadataTransaction';
  extraInfo?: Maybe<Scalars['String']>;
  metadataFailedReason?: Maybe<LensMetadataTransactionFailureType>;
  status: LensTransactionStatusType;
};

export enum LensMetadataTransactionFailureType {
  MetadataError = 'METADATA_ERROR',
  Reverted = 'REVERTED',
}

export type LensProfileManagerRelayError = {
  __typename?: 'LensProfileManagerRelayError';
  reason: LensProfileManagerRelayErrorReasonType;
};

export enum LensProfileManagerRelayErrorReasonType {
  AppGaslessNotAllowed = 'APP_GASLESS_NOT_ALLOWED',
  Failed = 'FAILED',
  NoLensManagerEnabled = 'NO_LENS_MANAGER_ENABLED',
  RateLimited = 'RATE_LIMITED',
  RequiresSignature = 'REQUIRES_SIGNATURE',
}

export type LensProfileManagerRelayResult = LensProfileManagerRelayError | RelaySuccess;

export type LensTransaction = {
  __typename?: 'LensTransaction';
  extraInfo?: Maybe<Scalars['String']>;
  reason?: Maybe<LensTransactionFailureType>;
  status: LensTransactionStatusType;
  txHash: Scalars['TxHash'];
};

export enum LensTransactionFailureType {
  Reverted = 'REVERTED',
}

export type LensTransactionResult = LensMetadataTransaction | LensTransaction;

export type LensTransactionStatusRequest = {
  /** Transaction hash for retrieving transaction status */
  txHash?: InputMaybe<Scalars['TxHash']>;
  /** Transaction ID for retrieving transaction status when using the broadcaster */
  txId?: InputMaybe<Scalars['TxId']>;
};

export enum LensTransactionStatusType {
  Complete = 'COMPLETE',
  Failed = 'FAILED',
  OptimisticallyUpdated = 'OPTIMISTICALLY_UPDATED',
  Progressing = 'PROGRESSING',
}

export type LinkMetadataV1 = {
  __typename?: 'LinkMetadataV1';
  appId?: Maybe<Scalars['AppId']>;
  attachments?: Maybe<Array<PublicationMetadataAttachment>>;
  attributes?: Maybe<Array<PublicationMetadataV3Attribute>>;
  content?: Maybe<Scalars['Markdown']>;
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  globalReach: Scalars['Boolean'];
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  locale?: Maybe<Scalars['Locale']>;
  mainContentFocus: PublicationLinkMetadataV1MainFocusType;
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  sharingLink: Scalars['URL'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export type LiveStreamMetadataV1 = {
  __typename?: 'LiveStreamMetadataV1';
  appId?: Maybe<Scalars['AppId']>;
  attachments?: Maybe<Array<PublicationMetadataAttachment>>;
  attributes?: Maybe<Array<PublicationMetadataV3Attribute>>;
  checkLiveAPI?: Maybe<Scalars['URL']>;
  content?: Maybe<Scalars['Markdown']>;
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  endsAt?: Maybe<Scalars['DateTime']>;
  globalReach: Scalars['Boolean'];
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  liveURL: Scalars['URL'];
  locale?: Maybe<Scalars['Locale']>;
  mainContentFocus: PublicationLiveStreamMetadataV1MainFocusType;
  marketplace?: Maybe<MarketplaceMetadata>;
  playbackURL: Scalars['URL'];
  rawURI: Scalars['URI'];
  startsAt: Scalars['DateTime'];
  tags?: Maybe<Array<Scalars['String']>>;
  title?: Maybe<Scalars['String']>;
};

export type MarketplaceMetadata = {
  __typename?: 'MarketplaceMetadata';
  animationUrl?: Maybe<Scalars['URI']>;
  attributes?: Maybe<Array<PublicationMarketplaceMetadataAttribute>>;
  description?: Maybe<Scalars['Markdown']>;
  externalURL?: Maybe<Scalars['URL']>;
  image?: Maybe<Scalars['URI']>;
  name: Scalars['String'];
};

export type MediaSet = AudioSet | ImageSet | VideoSet;

export type MentionNotification = {
  __typename?: 'MentionNotification';
  id: Scalars['String'];
  publication: PrimaryPublication;
};

export type MintMetadataV1 = {
  __typename?: 'MintMetadataV1';
  appId?: Maybe<Scalars['AppId']>;
  attachments?: Maybe<Array<PublicationMetadataAttachment>>;
  attributes?: Maybe<Array<PublicationMetadataV3Attribute>>;
  content?: Maybe<Scalars['Markdown']>;
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  globalReach: Scalars['Boolean'];
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  locale?: Maybe<Scalars['Locale']>;
  mainContentFocus: PublicationMintMetadataV1MainFocusType;
  marketplace?: Maybe<MarketplaceMetadata>;
  mintLink: Scalars['URL'];
  rawURI: Scalars['URI'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export type Mirror = {
  __typename?: 'Mirror';
  by: Profile;
  createdAt: Scalars['DateTime'];
  id: Scalars['PublicationId'];
  isGated: Scalars['Boolean'];
  isHidden: Scalars['Boolean'];
  mirrorOf: MirrorablePublication;
  momoka?: Maybe<MomokaInfo>;
  publishedOn?: Maybe<App>;
  txHash: Scalars['TxHash'];
};

export type MirrorEvent = {
  __typename?: 'MirrorEvent';
  by: Profile;
  timestamp: Scalars['DateTime'];
};

export type MirrorNotification = {
  __typename?: 'MirrorNotification';
  id: Scalars['String'];
  mirrors: Array<ProfileMirrorResult>;
  publication: PrimaryPublication;
};

export type MirrorablePublication = Comment | Post | Quote;

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
  app: App;
  commentedOnProfile: Profile;
  commentedOnPublicationId: Scalars['PublicationId'];
  createdAt: Scalars['DateTime'];
  profile: Profile;
  publicationId: Scalars['PublicationId'];
  submitter: Scalars['EvmAddress'];
  transactionId: Scalars['String'];
  verificationStatus: MomokaVerificationStatus;
};

export type MomokaInfo = {
  __typename?: 'MomokaInfo';
  proof: Scalars['MomokaProof'];
};

export type MomokaMirrorRequest = {
  from: Scalars['ProfileId'];
  mirror: Scalars['PublicationId'];
};

export type MomokaMirrorTransaction = {
  __typename?: 'MomokaMirrorTransaction';
  app: App;
  createdAt: Scalars['DateTime'];
  mirrorOfProfile: Profile;
  mirrorOfPublicationId: Scalars['PublicationId'];
  profile: Profile;
  publicationId: Scalars['PublicationId'];
  submitter: Scalars['EvmAddress'];
  transactionId: Scalars['String'];
  verificationStatus: MomokaVerificationStatus;
};

export type MomokaPostRequest = {
  contentURI: Scalars['URI'];
};

export type MomokaPostTransaction = {
  __typename?: 'MomokaPostTransaction';
  app: App;
  createdAt: Scalars['DateTime'];
  profile: Profile;
  publicationId: Scalars['PublicationId'];
  submitter: Scalars['EvmAddress'];
  transactionId: Scalars['String'];
  verificationStatus: MomokaVerificationStatus;
};

export type MomokaQuoteRequest = {
  contentURI: Scalars['URI'];
};

export type MomokaQuoteTransaction = {
  __typename?: 'MomokaQuoteTransaction';
  app: App;
  createdAt: Scalars['DateTime'];
  profile: Profile;
  publicationId: Scalars['PublicationId'];
  quotedOnProfile: Profile;
  quotedOnPublicationId: Scalars['PublicationId'];
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

export type MomokaTransaction =
  | MomokaCommentTransaction
  | MomokaMirrorTransaction
  | MomokaPostTransaction
  | MomokaQuoteTransaction;

export type MomokaTransactionRequest = {
  /** The momoka transaction id or internal publication id */
  id: Scalars['String'];
};

export type MomokaTransactionsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  for: Scalars['ProfileId'];
  limit?: InputMaybe<Scalars['LimitScalar']>;
};

export type MomokaTransactionsResult = {
  __typename?: 'MomokaTransactionsResult';
  items: Array<MomokaTransaction>;
  pageInfo: PaginatedResultInfo;
};

export enum MomokaValidatorErrorType {
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
  Unknown = 'UNKNOWN',
}

export type MomokaVerificationStatus =
  | MomokaVerificationStatusFailure
  | MomokaVerificationStatusSuccess;

export type MomokaVerificationStatusFailure = {
  __typename?: 'MomokaVerificationStatusFailure';
  status: MomokaValidatorErrorType;
};

export type MomokaVerificationStatusSuccess = {
  __typename?: 'MomokaVerificationStatusSuccess';
  verified: Scalars['Boolean'];
};

export type MultirecipientFeeCollectModuleInput = {
  amount: AmountInput;
  collectLimit?: InputMaybe<Scalars['String']>;
  endsAt?: InputMaybe<Scalars['DateTime']>;
  followerOnly?: InputMaybe<Scalars['Boolean']>;
  recipients: Array<RecipientDataInput>;
  referralFee?: InputMaybe<Scalars['Float']>;
};

export type MultirecipientFeeCollectOpenActionSettings = {
  __typename?: 'MultirecipientFeeCollectOpenActionSettings';
  /** The collect module amount info */
  amount: Amount;
  /** The maximum number of collects for this publication. 0 for no limit. */
  collectLimit?: Maybe<Scalars['String']>;
  contract: NetworkAddress;
  /** The end timestamp after which collecting is impossible. 0 for no expiry. */
  endTimestamp?: Maybe<Scalars['DateTime']>;
  /** True if only followers of publisher may collect the post. */
  followerOnly: Scalars['Boolean'];
  /** Recipient of collect fees. */
  recipients: Array<RecipientDataOutput>;
  /** The referral fee associated with this publication. */
  referralFee: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  ach?: Maybe<Scalars['Void']>;
  actOnOpenAction: LensProfileManagerRelayResult;
  addProfileInterests: Scalars['Void'];
  addPublicationBookmark: Scalars['Void'];
  addPublicationNotInterested: Scalars['Void'];
  addReaction: Scalars['Void'];
  authenticate: AuthenticationResult;
  block: LensProfileManagerRelayResult;
  broadcastOnMomoka: BroadcastMomokaResult;
  broadcastOnchain: RelayResult;
  claimProfile: CreateProfileWithHandleResult;
  commentOnMomoka: RelayMomokaResult;
  commentOnchain: LensProfileManagerRelayResult;
  createActOnOpenActionTypedData: CreateActOnOpenActionBroadcastItemResult;
  createBlockProfilesTypedData: CreateBlockProfilesBroadcastItemResult;
  createChangeProfileManagersTypedData: CreateChangeProfileManagersBroadcastItemResult;
  createFollowTypedData: CreateFollowBroadcastItemResult;
  createHandleLinkToProfileTypedData: CreateHandleLinkToProfileBroadcastItemResult;
  createHandleUnlinkFromProfileTypedData: CreateHandleUnlinkFromProfileBroadcastItemResult;
  createLegacyCollectTypedData: CreateLegacyCollectBroadcastItemResult;
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
  createProfileWithHandle: CreateProfileWithHandleResult;
  createSetFollowModuleTypedData: CreateSetFollowModuleBroadcastItemResult;
  createUnblockProfilesTypedData: CreateUnblockProfilesBroadcastItemResult;
  createUnfollowTypedData: CreateUnfollowBroadcastItemResult;
  deleteNftGallery?: Maybe<Scalars['Void']>;
  dismissRecommendedProfiles: Scalars['Void'];
  dss?: Maybe<Scalars['Void']>;
  follow: LensProfileManagerRelayResult;
  gci?: Maybe<Scalars['Void']>;
  gcr?: Maybe<Scalars['Void']>;
  gdi?: Maybe<Scalars['Void']>;
  handleLinkToProfile: LensProfileManagerRelayResult;
  handleUnlinkFromProfile: LensProfileManagerRelayResult;
  hel?: Maybe<Scalars['Void']>;
  hidePublication: Scalars['Void'];
  idKitPhoneVerifyWebhook: IdKitPhoneVerifyWebhookResultStatusType;
  in?: Maybe<Scalars['Void']>;
  internalPin: InternalPinResult;
  inviteProfile?: Maybe<Scalars['Void']>;
  legacyCollect: LensProfileManagerRelayResult;
  mirrorOnMomoka: RelayMomokaResult;
  mirrorOnchain: LensProfileManagerRelayResult;
  nftOwnershipChallenge: NftOwnershipChallengeResult;
  nni?: Maybe<Scalars['Void']>;
  nnv?: Maybe<Scalars['Void']>;
  postOnMomoka: RelayMomokaResult;
  postOnchain: LensProfileManagerRelayResult;
  quoteOnMomoka: RelayMomokaResult;
  quoteOnchain: LensProfileManagerRelayResult;
  refresh: AuthenticationResult;
  removeProfileInterests: Scalars['Void'];
  removePublicationBookmark: Scalars['Void'];
  removeReaction: Scalars['Void'];
  reportPublication: Scalars['Void'];
  setFollowModule: LensProfileManagerRelayResult;
  setProfileMetadata: LensProfileManagerRelayResult;
  unblock: LensProfileManagerRelayResult;
  undoPublicationNotInterested: Scalars['Void'];
  unfollow: LensProfileManagerRelayResult;
  updateNftGalleryInfo?: Maybe<Scalars['Void']>;
  updateNftGalleryItems?: Maybe<Scalars['Void']>;
  updateNftGalleryOrder?: Maybe<Scalars['Void']>;
};

export type MutationAchArgs = {
  request: AchRequest;
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

export type MutationClaimProfileArgs = {
  request: ClaimProfileRequest;
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

export type MutationCreateHandleLinkToProfileTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: HandleLinkToProfileRequest;
};

export type MutationCreateHandleUnlinkFromProfileTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: HandleUnlinkFromProfileRequest;
};

export type MutationCreateLegacyCollectTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: LegacyCollectRequest;
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

export type MutationDeleteNftGalleryArgs = {
  request: NftGalleryDeleteRequest;
};

export type MutationDismissRecommendedProfilesArgs = {
  request: DismissRecommendedProfilesRequest;
};

export type MutationDssArgs = {
  request: PrfRequest;
};

export type MutationFollowArgs = {
  request: FollowLensManagerRequest;
};

export type MutationGciArgs = {
  request: GciRequest;
};

export type MutationGcrArgs = {
  request: GcrRequest;
};

export type MutationGdiArgs = {
  request: GddRequest;
};

export type MutationHandleLinkToProfileArgs = {
  request: HandleLinkToProfileRequest;
};

export type MutationHandleUnlinkFromProfileArgs = {
  request: HandleUnlinkFromProfileRequest;
};

export type MutationHelArgs = {
  request: HelRequest;
};

export type MutationHidePublicationArgs = {
  request: HidePublicationRequest;
};

export type MutationIdKitPhoneVerifyWebhookArgs = {
  request: IdKitPhoneVerifyWebhookRequest;
};

export type MutationInArgs = {
  request: InRequest;
};

export type MutationInternalPinArgs = {
  request: InternalPinRequest;
};

export type MutationInviteProfileArgs = {
  request: InviteRequest;
};

export type MutationLegacyCollectArgs = {
  request: LegacyCollectRequest;
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

export type MutationNniArgs = {
  request: NniRequest;
};

export type MutationNnvArgs = {
  request: NnvRequest;
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

export type MutationUpdateNftGalleryInfoArgs = {
  request: NftGalleryUpdateInfoRequest;
};

export type MutationUpdateNftGalleryItemsArgs = {
  request: NftGalleryUpdateItemsRequest;
};

export type MutationUpdateNftGalleryOrderArgs = {
  request: NftGalleryUpdateItemOrderRequest;
};

export type MutualFollowersRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  observer: Scalars['ProfileId'];
  viewing: Scalars['ProfileId'];
};

/** Mutual NFT collections request */
export type MutualNftCollectionsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** Profile id of the second user */
  viewingProfileId: Scalars['ProfileId'];
  /** Profile id of the first user */
  yourProfileId: Scalars['ProfileId'];
};

export type MutualPoapsQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
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
  ownerInfo: Owner;
  tokenId: Scalars['TokenId'];
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
  None = 'None',
}

/** NFT collection owners request */
export type NftCollectionOwnersRequest = {
  /** The contract address */
  address: Scalars['EvmAddress'];
  /** The chain id */
  chainId: Scalars['ChainId'];
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** The profile id to use when ordering by followers */
  for?: InputMaybe<Scalars['ProfileId']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The ordering of Nft collection owners */
  order?: InputMaybe<NftCollectionOwnersOrder>;
};

/** A wrapper object containing an Nft collection, the total number of Lens profiles that own it, and optional field resolvers */
export type NftCollectionWithOwners = {
  __typename?: 'NftCollectionWithOwners';
  /** The Nft collection */
  collection: NftCollection;
  /** The total number of Lens profiles that own this collection */
  totalProfiles: Scalars['Float'];
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
  limit?: InputMaybe<Scalars['Float']>;
};

export enum NftContractType {
  Erc721 = 'ERC721',
  Erc721Enumerable = 'ERC721Enumerable',
  Erc1155 = 'ERC1155',
}

export type NftGalleriesRequest = {
  for: Scalars['ProfileId'];
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

export type NftInput = {
  contract: NetworkAddressInput;
  tokenId: Scalars['TokenId'];
};

export type NftMetadata = {
  __typename?: 'NftMetadata';
  description: Scalars['String'];
  image: Scalars['URI'];
  name: Scalars['String'];
};

export type NftOwnershipChallenge = {
  contract: NetworkAddressInput;
  tokenId: Scalars['TokenId'];
};

export type NftOwnershipChallengeRequest = {
  for: Scalars['EvmAddress'];
  nfts: Array<NftOwnershipChallenge>;
};

export type NftOwnershipChallengeResult = {
  __typename?: 'NftOwnershipChallengeResult';
  id: Scalars['String'];
  text: Scalars['String'];
};

export type NftOwnershipCondition = {
  __typename?: 'NftOwnershipCondition';
  contract: NetworkAddress;
  contractType: NftContractType;
  tokenIds?: Maybe<Array<Scalars['TokenId']>>;
};

/** NFT search query */
export type NftSearchRequest = {
  /** Chain IDs to search. Supports Ethereum and Polygon. If omitted, it will search in both chains */
  chainIds?: InputMaybe<Array<Scalars['ChainId']>>;
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** Exclude follower NFTs from the search */
  excludeFollowers?: InputMaybe<Scalars['Boolean']>;
  /** Ethereum address of the owner. If unknown you can also search by profile ID */
  forAddress?: InputMaybe<Scalars['EvmAddress']>;
  /** Profile ID of the owner */
  forProfileId?: InputMaybe<Scalars['ProfileId']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** Search query. Has to be part of a collection name */
  query: Scalars['String'];
};

export type NftUpdateItemOrder = {
  contract: NetworkAddressInput;
  newOrder: Scalars['Int'];
  tokenId: Scalars['TokenId'];
};

export type NftsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  where?: InputMaybe<NftsRequestWhere>;
};

export type NftsRequestWhere = {
  chainIds?: InputMaybe<Array<Scalars['ChainId']>>;
  excludeCollections?: InputMaybe<Array<NetworkAddressInput>>;
  for?: InputMaybe<Scalars['ProfileId']>;
  includeCollections?: InputMaybe<Array<NetworkAddressInput>>;
  query?: InputMaybe<Scalars['String']>;
};

export type NniRequest = {
  n: Array<Nfi>;
  secret: Scalars['String'];
};

export type NnvRequest = {
  n: Array<Nfi>;
  secret: Scalars['String'];
};

export type Notification =
  | ActedNotification
  | CommentNotification
  | FollowNotification
  | FutureProofNotification
  | MentionNotification
  | MirrorNotification
  | QuoteNotification
  | ReactionNotification;

export type NotificationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  where?: InputMaybe<NotificationWhere>;
};

export type NotificationSubscriptionRequest = {
  for: Scalars['ProfileId'];
};

export enum NotificationType {
  CollectActed = 'COLLECT_ACTED',
  Commented = 'COMMENTED',
  Followed = 'FOLLOWED',
  Mentioned = 'MENTIONED',
  Mirrored = 'MIRRORED',
  OtherActed = 'OTHER_ACTED',
  Quoted = 'QUOTED',
  Reacted = 'REACTED',
}

export type NotificationWhere = {
  customFilters?: InputMaybe<Array<CustomFiltersType>>;
  highSignalFilter?: InputMaybe<Scalars['Boolean']>;
  notificationTypes?: InputMaybe<Array<NotificationType>>;
  publishedOn?: InputMaybe<Array<Scalars['AppId']>>;
};

export type OnchainCommentRequest = {
  commentOn: Scalars['PublicationId'];
  commentOnReferenceModuleData?: InputMaybe<Scalars['BlockchainData']>;
  contentURI: Scalars['URI'];
  openActionModules?: InputMaybe<Array<OpenActionModuleInput>>;
  referenceModule?: InputMaybe<ReferenceModuleInput>;
  referrers?: InputMaybe<Array<OnchainReferrer>>;
};

export type OnchainMirrorRequest = {
  mirrorOn: Scalars['PublicationId'];
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
  Collect = 'COLLECT',
}

export type OpenActionFilter = {
  address?: InputMaybe<Scalars['EvmAddress']>;
  category?: InputMaybe<OpenActionCategoryType>;
  type?: InputMaybe<OpenActionModuleType>;
};

export type OpenActionModule =
  | LegacyAaveFeeCollectModuleSettings
  | LegacyErc4626FeeCollectModuleSettings
  | LegacyFeeCollectModuleSettings
  | LegacyFreeCollectModuleSettings
  | LegacyLimitedFeeCollectModuleSettings
  | LegacyLimitedTimedFeeCollectModuleSettings
  | LegacyMultirecipientFeeCollectModuleSettings
  | LegacyRevertCollectModuleSettings
  | LegacySimpleCollectModuleSettings
  | LegacyTimedFeeCollectModuleSettings
  | MultirecipientFeeCollectOpenActionSettings
  | SimpleCollectOpenActionSettings
  | UnknownOpenActionModuleSettings;

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
  UnknownOpenActionModule = 'UnknownOpenActionModule',
}

export type OpenActionResult = CollectOpenActionResult | UnknownOpenActionResult;

export type OptimisticStatusResult = {
  __typename?: 'OptimisticStatusResult';
  isFinalisedOnchain: Scalars['Boolean'];
  value: Scalars['Boolean'];
};

export type OrCondition = {
  __typename?: 'OrCondition';
  criteria: Array<AccessCondition>;
};

export type OwnedHandlesRequest = {
  /** The Ethereum address for which to retrieve owned handles */
  address: Scalars['EvmAddress'];
};

export type Owner = {
  __typename?: 'Owner';
  address: Scalars['EvmAddress'];
  amount: Scalars['Int'];
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

export type PaginatedForYouResult = {
  __typename?: 'PaginatedForYouResult';
  items: Array<PublicationForYou>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedHandlesResult = {
  __typename?: 'PaginatedHandlesResult';
  items: Array<HandleResult>;
  pageInfo: PaginatedResultInfo;
};

/** Nft collections paginated result */
export type PaginatedNftCollectionsResult = {
  __typename?: 'PaginatedNftCollectionsResult';
  items: Array<NftCollection>;
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
  limit?: InputMaybe<Scalars['LimitScalar']>;
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

export type PaginatedWhoReactedResult = {
  __typename?: 'PaginatedWhoReactedResult';
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
  reactions: Array<ProfileReactionResult>;
};

/** The POAP Event result */
export type PoapEvent = {
  __typename?: 'PoapEvent';
  animation_url?: Maybe<Scalars['URL']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['DateTime']>;
  event_template_id?: Maybe<Scalars['Int']>;
  event_url: Scalars['URL'];
  fancy_id: Scalars['String'];
  id: Scalars['Int'];
  image_url?: Maybe<Scalars['URL']>;
  name: Scalars['String'];
  private_event?: Maybe<Scalars['Boolean']>;
  start_date?: Maybe<Scalars['DateTime']>;
  virtual_event?: Maybe<Scalars['Boolean']>;
  year?: Maybe<Scalars['Int']>;
};

export type PoapEventQueryRequest = {
  eventId: Scalars['Float'];
};

export type PoapHoldersQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  eventId: Scalars['Float'];
  limit?: InputMaybe<Scalars['LimitScalar']>;
};

/** The Poap Token Event */
export type PoapToken = {
  __typename?: 'PoapToken';
  created: Scalars['DateTime'];
  event: PoapEvent;
  /** Poap Event Id */
  eventId: Scalars['Float'];
  /** Which network the token is: L1 (eth) or L2 (Gnosis) */
  layer: PoapTokenLayerType;
  /** migrated to L1 at */
  migrated?: Maybe<Scalars['DateTime']>;
  owner: NetworkAddress;
  tokenId: Scalars['Int'];
};

export enum PoapTokenLayerType {
  Layer1 = 'Layer1',
  Layer2 = 'Layer2',
}

/** Popular NFT collections request */
export type PopularNftCollectionsRequest = {
  /** The chain ids to look for NFTs on. Ethereum and Polygon are supported. If omitted, it will look on both chains by default. */
  chainIds?: InputMaybe<Array<Scalars['ChainId']>>;
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** Exclude Lens Follower NFTs */
  excludeFollowers?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** Include only verified collections */
  onlyVerified?: InputMaybe<Scalars['Boolean']>;
};

export type Post = {
  __typename?: 'Post';
  by: Profile;
  createdAt: Scalars['DateTime'];
  id: Scalars['PublicationId'];
  isGated: Scalars['Boolean'];
  isHidden: Scalars['Boolean'];
  metadata: PublicationMetadata;
  momoka?: Maybe<MomokaInfo>;
  openActionModules?: Maybe<Array<OpenActionModule>>;
  operations: PublicationOperations;
  publishedOn?: Maybe<App>;
  referenceModule?: Maybe<ReferenceModule>;
  stats: PublicationStats;
  txHash: Scalars['TxHash'];
};

export type PostStatsArgs = {
  request: PublicationStatsInput;
};

export type PrfRequest = {
  dd: Scalars['Boolean'];
  hhh: Scalars['String'];
  secret: Scalars['String'];
  ss: Scalars['Boolean'];
};

export type PrfResult = {
  __typename?: 'PrfResult';
  dd: Scalars['Boolean'];
  ss: Scalars['Boolean'];
};

export type PriRequest = {
  hhh: Scalars['String'];
  secret: Scalars['String'];
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
  /** The gasless settings for the profile */
  gasless: Gasless;
  guardian?: Maybe<ProfileGuardianResult>;
  /** The profile handle - a profile may not have one */
  handle?: Maybe<Scalars['Handle']>;
  haveBlocked: OptimisticStatusResult;
  /** The profile id */
  id: Scalars['ProfileId'];
  interests: Array<Scalars['String']>;
  invitedBy?: Maybe<Profile>;
  /** The number of invites left */
  invitesLeft?: Maybe<Scalars['Int']>;
  isFollowedByMe: OptimisticStatusResult;
  isFollowingMe: OptimisticStatusResult;
  /** The profile metadata */
  metadata?: Maybe<ProfileMetadata>;
  /** The on chain identity */
  onchainIdentity: ProfileOnchainIdentity;
  /** Who owns the profile */
  ownedBy: NetworkAddress;
  stats: ProfileStats;
  txHash: Scalars['TxHash'];
};

export type ProfileActedResult = {
  __typename?: 'ProfileActedResult';
  action: OpenActionResult;
  id: Scalars['String'];
  profile: Profile;
};

export type ProfileBookmarksRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  where?: InputMaybe<ProfileBookmarksWhere>;
};

export type ProfileBookmarksWhere = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
};

export type ProfileGuardianResult = {
  __typename?: 'ProfileGuardianResult';
  cooldownEndsOn?: Maybe<Scalars['DateTime']>;
  protected: Scalars['Boolean'];
};

export type ProfileInterestsRequest = {
  interests: Scalars['String'];
};

export type ProfileManagersRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** The profile ID for which to retrieve managers */
  for: Scalars['ProfileId'];
  limit?: InputMaybe<Scalars['LimitScalar']>;
};

export type ProfileMetadata = {
  __typename?: 'ProfileMetadata';
  /** The bio for the profile */
  bio?: Maybe<Scalars['Markdown']>;
  /** The display name for the profile */
  displayName?: Maybe<Scalars['String']>;
  /** The raw uri for the which the profile metadata was set as */
  rawURI: Scalars['URI'];
};

export type ProfileMirrorResult = {
  __typename?: 'ProfileMirrorResult';
  id: Scalars['String'];
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

export type ProfileOwnershipCondition = {
  __typename?: 'ProfileOwnershipCondition';
  profileId: Scalars['ProfileId'];
};

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
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** Shuffle the recommendations (default: false) */
  shuffle?: InputMaybe<Scalars['Boolean']>;
};

export type ProfileRequest = {
  /** The handle for profile you want to fetch */
  handle?: InputMaybe<Scalars['Handle']>;
  /** The profile you want to fetch */
  profileId?: InputMaybe<Scalars['ProfileId']>;
};

export type ProfileSearchRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
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
  reactions: Scalars['Int'];
};

/** The Profile Stats */
export type ProfileStatsCommentsArgs = {
  request: ProfileStatsArgs;
};

/** The Profile Stats */
export type ProfileStatsCountOpenActionsArgs = {
  request: ProfileStatsCountOpenActionArgs;
};

/** The Profile Stats */
export type ProfileStatsFollowersArgs = {
  request: ProfileStatsArgs;
};

/** The Profile Stats */
export type ProfileStatsFollowingArgs = {
  request: ProfileStatsArgs;
};

/** The Profile Stats */
export type ProfileStatsMirrorsArgs = {
  request: ProfileStatsArgs;
};

/** The Profile Stats */
export type ProfileStatsPostsArgs = {
  request: ProfileStatsArgs;
};

/** The Profile Stats */
export type ProfileStatsPublicationsArgs = {
  request: ProfileStatsArgs;
};

/** The Profile Stats */
export type ProfileStatsQuotesArgs = {
  request: ProfileStatsArgs;
};

/** The Profile Stats */
export type ProfileStatsReactionsArgs = {
  request: ProfileStatsReactionArgs;
};

export type ProfileStatsArgs = {
  customFilters?: InputMaybe<Array<CustomFiltersType>>;
  forApps?: InputMaybe<Array<Scalars['AppId']>>;
};

export type ProfileStatsCountOpenActionArgs = {
  anyOf?: InputMaybe<Array<OpenActionFilter>>;
};

export type ProfileStatsReactionArgs = {
  type?: InputMaybe<PublicationReactionType>;
};

export type ProfilesManagedRequest = {
  /** The Ethereum address for which to retrieve managed profiles */
  address: Scalars['EvmAddress'];
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
};

export type ProfilesManagedResult = {
  __typename?: 'ProfilesManagedResult';
  address: Scalars['EvmAddress'];
};

export type ProfilesRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The where clause to use to filter on what you are looking for */
  where: ProfilesRequestWhere;
};

export type ProfilesRequestWhere = {
  /** Pass in an array of handles to get the profile entities */
  handles?: InputMaybe<Array<Scalars['Handle']>>;
  /** Pass in an array of evm address to get the profile entities they own */
  ownedBy?: InputMaybe<Array<Scalars['ProfileId']>>;
  /** Pass in an array of profile ids to get the profile entities */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  /** Pass the publication id and get a list of the profiles who commented on it */
  whoCommentedOn?: InputMaybe<Scalars['PublicationId']>;
  /** Pass the publication id and get a list of the profiles who mirrored it */
  whoMirroredPublication?: InputMaybe<Scalars['PublicationId']>;
  /** Pass the publication id and get a list of the profiles who quoted it */
  whoQuotedPublication?: InputMaybe<Scalars['PublicationId']>;
};

export enum PublicationArticleMetadataV1MainFocusType {
  Article = 'ARTICLE',
}

export type PublicationBookmarkRequest = {
  on: Scalars['PublicationId'];
};

export enum PublicationCheckingInMetadataV1MainFocusType {
  CheckingIn = 'CHECKING_IN',
}

export type PublicationCommentOf = {
  commentsRankingFilter?: InputMaybe<CommentRankingFilterType>;
  id: Scalars['PublicationId'];
};

export enum PublicationContentWarningType {
  Nsfw = 'NSFW',
  Sensitive = 'SENSITIVE',
  Spoiler = 'SPOILER',
}

export enum PublicationEmbedMetadataV1MainFocusType {
  Embed = 'EMBED',
}

export enum PublicationEventMetadataV1MainFocusType {
  Event = 'EVENT',
}

export type PublicationForYou = Post | Quote;

export type PublicationForYouRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  for: Scalars['ProfileId'];
  limit?: InputMaybe<Scalars['LimitScalar']>;
};

export type PublicationImageMetadataV1 = {
  __typename?: 'PublicationImageMetadataV1';
  appId?: Maybe<Scalars['AppId']>;
  attachments?: Maybe<Array<PublicationMetadataAttachment>>;
  attributes?: Maybe<Array<PublicationMetadataV3Attribute>>;
  content?: Maybe<Scalars['Markdown']>;
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  globalReach: Scalars['Boolean'];
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  image: PublicationMetadataMediaImage;
  locale?: Maybe<Scalars['Locale']>;
  mainContentFocus: PublicationImageMetadataV1MainFocusType;
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export enum PublicationImageMetadataV1MainFocusType {
  Image = 'IMAGE',
}

export enum PublicationLinkMetadataV1MainFocusType {
  Link = 'LINK',
}

export enum PublicationLiveStreamMetadataV1MainFocusType {
  Livestream = 'LIVESTREAM',
}

export type PublicationMarketplaceMetadataAttribute = {
  __typename?: 'PublicationMarketplaceMetadataAttribute';
  displayType?: Maybe<PublicationMarketplaceMetadataAttributeDisplayType>;
  traitType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export enum PublicationMarketplaceMetadataAttributeDisplayType {
  Date = 'DATE',
  Number = 'NUMBER',
  String = 'STRING',
}

export type PublicationMetadata =
  | ArticleMetadataV1
  | CheckingInMetadataV1
  | EmbedMetadataV1
  | EventMetadataV1
  | FutureProofPublicationMetadata
  | LinkMetadataV1
  | LiveStreamMetadataV1
  | MintMetadataV1
  | PublicationImageMetadataV1
  | PublicationMetadataV1
  | PublicationMetadataV2
  | PublicationVideoMetadataV1
  | SpaceMetadataV1
  | StoryMetadataV1
  | TextOnlyMetadataV1
  | ThreeDMetadataV1
  | TransactionMetadataV1;

export type PublicationMetadataAttachment =
  | PublicationMetadataMediaAudio
  | PublicationMetadataMediaImage
  | PublicationMetadataMediaVideo;

export type PublicationMetadataContentWarningFilter = {
  oneOf?: InputMaybe<Array<PublicationContentWarningType>>;
};

export type PublicationMetadataEncryptionStrategy =
  | FutureProofPublicationEncryptionStrategy
  | PublicationMetadataV3LitEncryption;

export type PublicationMetadataFilters = {
  contentWarning?: InputMaybe<PublicationMetadataContentWarningFilter>;
  locale?: InputMaybe<Scalars['Locale']>;
  mainContentFocus?: InputMaybe<Array<PublicationMetadataMainFocusType>>;
  publishedOn?: InputMaybe<Array<Scalars['AppId']>>;
  tags?: InputMaybe<PublicationMetadataTagsFilter>;
};

export enum PublicationMetadataLicenseType {
  AllRightsReserved = 'ALL_RIGHTS_RESERVED',
}

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
  Spaces = 'SPACES',
  Story = 'STORY',
  TextOnly = 'TEXT_ONLY',
  ThreeD = 'THREE_D',
  Transaction = 'TRANSACTION',
  Video = 'VIDEO',
}

export type PublicationMetadataMediaAudio = {
  __typename?: 'PublicationMetadataMediaAudio';
  artist?: Maybe<Scalars['String']>;
  audioType?: Maybe<PublicationMetadataMediaAudioType>;
  cover?: Maybe<ImageSet>;
  credits?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  genre?: Maybe<Scalars['String']>;
  item: AudioSet;
  license?: Maybe<PublicationMetadataLicenseType>;
  lyrics?: Maybe<Scalars['String']>;
  recordLabel?: Maybe<Scalars['String']>;
  type: AudioMimeType;
};

export enum PublicationMetadataMediaAudioType {
  Mp3 = 'MP3',
}

export type PublicationMetadataMediaImage = {
  __typename?: 'PublicationMetadataMediaImage';
  item: ImageSet;
  license?: Maybe<PublicationMetadataLicenseType>;
  type: ImageMimeType;
};

export type PublicationMetadataMediaVideo = {
  __typename?: 'PublicationMetadataMediaVideo';
  cover?: Maybe<ImageSet>;
  duration?: Maybe<Scalars['Int']>;
  item: VideoSet;
  license?: Maybe<PublicationMetadataLicenseType>;
  type: VideoMimeType;
};

export type PublicationMetadataTagsFilter = {
  all?: InputMaybe<Array<Scalars['String']>>;
  oneOf?: InputMaybe<Array<Scalars['String']>>;
};

export type PublicationMetadataV1 = {
  __typename?: 'PublicationMetadataV1';
  animationUrl?: Maybe<Scalars['URI']>;
  appId?: Maybe<Scalars['AppId']>;
  attributes?: Maybe<Array<PublicationMarketplaceMetadataAttribute>>;
  content?: Maybe<Scalars['Markdown']>;
  description?: Maybe<Scalars['Markdown']>;
  image?: Maybe<ImageSet>;
  media?: Maybe<Array<MediaSet>>;
  metadata_id: Scalars['String'];
  name?: Maybe<Scalars['Markdown']>;
  version: LegacyPublicationMetadataVersions;
};

export type PublicationMetadataV2 = {
  __typename?: 'PublicationMetadataV2';
  animationUrl?: Maybe<Scalars['URI']>;
  attributes?: Maybe<Array<PublicationMarketplaceMetadataAttribute>>;
  content?: Maybe<Scalars['Markdown']>;
  contentWarning?: Maybe<PublicationContentWarningType>;
  description?: Maybe<Scalars['Markdown']>;
  encryptedWith?: Maybe<PublicationMetadataV2Encryption>;
  image?: Maybe<ImageSet>;
  locale?: Maybe<Scalars['Locale']>;
  mainContentFocus: PublicationMetadataV2MainFocusType;
  media?: Maybe<Array<MediaSet>>;
  name?: Maybe<Scalars['Markdown']>;
  tags?: Maybe<Array<Scalars['String']>>;
};

export type PublicationMetadataV2EncryptedFields = {
  __typename?: 'PublicationMetadataV2EncryptedFields';
  animationUrl?: Maybe<Scalars['EncryptedValue']>;
  content?: Maybe<Scalars['EncryptedValue']>;
  externalUrl?: Maybe<Scalars['EncryptedValue']>;
  image?: Maybe<Scalars['EncryptedValue']>;
  media?: Maybe<Array<EncryptedMedia>>;
};

export type PublicationMetadataV2Encryption = {
  __typename?: 'PublicationMetadataV2Encryption';
  accessCondition: AccessCondition;
  encryptedFields: PublicationMetadataV2EncryptedFields;
  encryptionKey: Scalars['ContentEncryptionKey'];
};

export enum PublicationMetadataV2MainFocusType {
  Article = 'ARTICLE',
  Audio = 'AUDIO',
  Embed = 'EMBED',
  Image = 'IMAGE',
  Link = 'LINK',
  TextOnly = 'TEXT_ONLY',
  Video = 'VIDEO',
}

export type PublicationMetadataV3Attribute = {
  __typename?: 'PublicationMetadataV3Attribute';
  key: Scalars['String'];
  value: Scalars['String'];
};

export type PublicationMetadataV3LitEncryption = {
  __typename?: 'PublicationMetadataV3LitEncryption';
  accessCondition: AccessCondition;
  encryptionKey: Scalars['ContentEncryptionKey'];
};

export enum PublicationMintMetadataV1MainFocusType {
  Mint = 'MINT',
}

export type PublicationNotInterestedRequest = {
  on: Scalars['PublicationId'];
};

export type PublicationOperations = {
  __typename?: 'PublicationOperations';
  canComment: Scalars['Boolean'];
  canDecrypt: CanDecryptResponse;
  canMirror: Scalars['Boolean'];
  hasActed: Array<OpenActionResult>;
  hasBookmarked: Scalars['Boolean'];
  hasMirrored: Scalars['Boolean'];
  hasReacted: Scalars['Boolean'];
  hasReported: Scalars['Boolean'];
  id: Scalars['PublicationId'];
  isNotInterested: Scalars['Boolean'];
};

export type PublicationOperationsHasReactedArgs = {
  request: PublicationOperationsReactionArgs;
};

export type PublicationOperationsReactionArgs = {
  type?: InputMaybe<PublicationReactionType>;
};

export enum PublicationReactionType {
  Downvote = 'DOWNVOTE',
  Upvote = 'UPVOTE',
}

export enum PublicationReportingFraudSubreason {
  Impersonation = 'IMPERSONATION',
  Scam = 'SCAM',
}

export enum PublicationReportingIllegalSubreason {
  AnimalAbuse = 'ANIMAL_ABUSE',
  DirectThreat = 'DIRECT_THREAT',
  HumanAbuse = 'HUMAN_ABUSE',
  ThreatIndividual = 'THREAT_INDIVIDUAL',
  Violence = 'VIOLENCE',
}

export enum PublicationReportingReason {
  Fraud = 'FRAUD',
  Illegal = 'ILLEGAL',
  Sensitive = 'SENSITIVE',
  Spam = 'SPAM',
}

export enum PublicationReportingSensitiveSubreason {
  Nsfw = 'NSFW',
  Offensive = 'OFFENSIVE',
}

export enum PublicationReportingSpamSubreason {
  FakeEngagement = 'FAKE_ENGAGEMENT',
  LowSignal = 'LOW_SIGNAL',
  ManipulationAlgo = 'MANIPULATION_ALGO',
  Misleading = 'MISLEADING',
  MisuseHashtags = 'MISUSE_HASHTAGS',
  Repetitive = 'REPETITIVE',
  SomethingElse = 'SOMETHING_ELSE',
  Unrelated = 'UNRELATED',
}

export type PublicationRequest = {
  for?: InputMaybe<Scalars['PublicationId']>;
  txHash?: InputMaybe<Scalars['TxHash']>;
};

export type PublicationRevenue = {
  __typename?: 'PublicationRevenue';
  publication: AnyPublication;
  revenue: Array<RevenueAggregate>;
};

export type PublicationRevenueRequest = {
  for: Scalars['PublicationId'];
};

export type PublicationSearchRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  query: Scalars['String'];
  where: PublicationSearchWhere;
};

export type PublicationSearchWhere = {
  customFilters?: InputMaybe<Array<CustomFiltersType>>;
  publicationTypes?: InputMaybe<Array<PublicationType>>;
  publishedOn?: InputMaybe<Array<Scalars['AppId']>>;
};

export enum PublicationSpaceMetadataV1MainFocusType {
  Space = 'SPACE',
}

export type PublicationStats = {
  __typename?: 'PublicationStats';
  additionalArgs: PublicationStatsRequest;
  comments: Scalars['Int'];
  countOpenActions: Scalars['Int'];
  id: Scalars['PublicationId'];
  mirrors: Scalars['Int'];
  quotes: Scalars['Int'];
  reactions: Scalars['Int'];
};

export type PublicationStatsCountOpenActionsArgs = {
  request: PublicationStatsCountOpenActionArgs;
};

export type PublicationStatsReactionsArgs = {
  request: PublicationStatsReactionArgs;
};

export type PublicationStatsCountOpenActionArgs = {
  anyOf?: InputMaybe<Array<OpenActionFilter>>;
};

export type PublicationStatsInput = {
  customFilters?: InputMaybe<Array<CustomFiltersType>>;
  forApps?: InputMaybe<Array<Scalars['AppId']>>;
};

export type PublicationStatsReactionArgs = {
  type?: InputMaybe<PublicationReactionType>;
};

export type PublicationStatsRequest = {
  __typename?: 'PublicationStatsRequest';
  customFilters?: Maybe<Array<CustomFiltersType>>;
  forApps?: Maybe<Array<Scalars['AppId']>>;
};

export type PublicationStatsSubscriptionRequest = {
  for: Scalars['PublicationId'];
};

export enum PublicationStoryMetadataV1MainFocusType {
  Story = 'STORY',
}

export enum PublicationTextOnlyMetadataV1MainFocusType {
  TextOnly = 'TEXT_ONLY',
}

export enum PublicationThreeDMetadataV1MainFocusType {
  ThreeD = 'THREE_D',
}

export enum PublicationTransactionMetadataType {
  Erc20 = 'ERC20',
  Erc721 = 'ERC721',
  Other = 'OTHER',
}

export enum PublicationTransactionMetadataV1MainFocusType {
  Transaction = 'TRANSACTION',
}

export enum PublicationType {
  Comment = 'COMMENT',
  Mirror = 'MIRROR',
  Post = 'POST',
  Quote = 'QUOTE',
}

export type PublicationValidateMetadataResult = {
  __typename?: 'PublicationValidateMetadataResult';
  reason?: Maybe<Scalars['String']>;
  valid: Scalars['Boolean'];
};

export type PublicationVideoMetadataV1 = {
  __typename?: 'PublicationVideoMetadataV1';
  appId?: Maybe<Scalars['AppId']>;
  attachments?: Maybe<Array<PublicationMetadataAttachment>>;
  attributes?: Maybe<Array<PublicationMetadataV3Attribute>>;
  content?: Maybe<Scalars['Markdown']>;
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  globalReach: Scalars['Boolean'];
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  locale?: Maybe<Scalars['Locale']>;
  mainContentFocus: PublicationVideoMetadataV1MainFocusType;
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  tags?: Maybe<Array<Scalars['String']>>;
  video: PublicationMetadataMediaVideo;
};

export enum PublicationVideoMetadataV1MainFocusType {
  ShortVideo = 'SHORT_VIDEO',
  Video = 'VIDEO',
}

export enum PublicationsOrderByType {
  CommentOfQueryRanking = 'COMMENT_OF_QUERY_RANKING',
  Latest = 'LATEST',
  TopCollectedOpenAction = 'TOP_COLLECTED_OPEN_ACTION',
  TopCommented = 'TOP_COMMENTED',
  TopMirrored = 'TOP_MIRRORED',
  TopQuoted = 'TOP_QUOTED',
}

export type PublicationsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  orderBy?: InputMaybe<PublicationsOrderByType>;
  where: PublicationsWhere;
};

export type PublicationsTagsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  orderBy?: InputMaybe<TagSortCriteriaType>;
  where?: InputMaybe<PublicationsTagsWhere>;
};

export type PublicationsTagsWhere = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  publishedOn?: InputMaybe<Array<Scalars['AppId']>>;
};

export type PublicationsWhere = {
  acted?: InputMaybe<Array<OpenActionFilter>>;
  commentsOf?: InputMaybe<PublicationCommentOf>;
  customFilters?: InputMaybe<Array<CustomFiltersType>>;
  from?: InputMaybe<Array<Scalars['ProfileId']>>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  mirrorOf?: InputMaybe<Scalars['PublicationId']>;
  publicationIds?: InputMaybe<Array<Scalars['PublicationId']>>;
  publicationTypes?: InputMaybe<Array<PublicationType>>;
  quoteOf?: InputMaybe<Scalars['PublicationId']>;
  withOpenActions?: InputMaybe<Array<OpenActionFilter>>;
};

export type Query = {
  __typename?: 'Query';
  approvedModuleAllowanceAmount: ApprovedAllowanceAmountResult;
  challenge: AuthChallengeResult;
  claimableProfiles: ClaimableProfilesResult;
  claimableStatus: ClaimProfileStatusType;
  cur: Array<Scalars['String']>;
  /** Get all enabled currencies */
  currencies: PaginatedCurrenciesResult;
  exploreProfiles: PaginatedProfileResult;
  explorePublications: PaginatedExplorePublicationResult;
  feed: PaginatedFeedResult;
  feedHighlights: PaginatedFeedHighlightsResult;
  followRevenues: FollowRevenueResult;
  followers: PaginatedProfileResult;
  following: PaginatedProfileResult;
  forYou: PaginatedForYouResult;
  gct: Array<Scalars['String']>;
  gdm: Array<Scalars['URL']>;
  generateModuleCurrencyApprovalData: GenerateModuleCurrencyApprovalResult;
  intotal: Scalars['Int'];
  invitedProfiles: Array<InvitedResult>;
  iss: Array<PrfResult>;
  lensTransactionStatus: LensTransactionResult;
  momokaSubmitters: MomokaSubmittersResult;
  momokaSummary: MomokaSummaryResult;
  momokaTransaction: MomokaTransaction;
  momokaTransactions: MomokaTransactionsResult;
  mutualFollowers: PaginatedProfileResult;
  /** Get the NFT collections that the given two profiles own at least one NFT of. */
  mutualNftCollections: PaginatedNftCollectionsResult;
  mutualPoaps: PaginatedPoapEventResult;
  /** Get the Lens Profiles that own NFTs from a given collection. */
  nftCollectionOwners: PaginatedProfileResult;
  /** Get the NFT collections that the given wallet or profileId owns at least one NFT of. Only supports Ethereum and Polygon NFTs. Note excludeFollowers is set to true by default, so the result will not include Lens Follower NFTsunless explicitly requested. */
  nftCollections: PaginatedNftCollectionsResult;
  nftGalleries: Array<NftGallery>;
  nfts: PaginatedNftsResult;
  notifications: PaginatedNotificationResult;
  ownedHandles: PaginatedHandlesResult;
  ping: Scalars['String'];
  poapEvent: PoapEvent;
  poapHolders: PaginatedProfileResult;
  poaps: PaginatedPoapTokenResult;
  /** Get the most popular NFT collections. Popularity is based on how many Lens Profiles own NFTs from a given collection. */
  popularNftCollections: PaginatedPopularNftCollectionsResult;
  profile?: Maybe<Profile>;
  profileActionHistory: Scalars['Void'];
  profileAlreadyInvited: Scalars['Boolean'];
  profileBookmarks: PaginatedPublicationsResult;
  profileInterestsOptions: Array<Scalars['String']>;
  profileManagers: PaginatedProfileManagersResult;
  profileRecommendations: PaginatedProfileResult;
  profiles: PaginatedProfileResult;
  profilesManaged: PaginatedProfileResult;
  publication?: Maybe<AnyPublication>;
  publications: PaginatedPublicationsResult;
  publicationsTags: PaginatedPublicationsTagsResult;
  rel?: Maybe<Scalars['Void']>;
  relayQueues: Array<RelayQueueResult>;
  revenueForPublication: PublicationRevenue;
  revenueFromPublications: PaginatedRevenueFromPublicationsResult;
  /** Search for NFTs in a wallet by collection name. Supports Polygon and Ethereum and searches in both by default. */
  searchNfts: PaginatedNftsResult;
  searchProfiles: PaginatedProfileResult;
  searchPublications: PaginatedPublicationPrimaryResult;
  supportedModules: Array<SupportedModules>;
  txIdToTxHash?: Maybe<Scalars['TxHash']>;
  userSigNonces: UserSigNonces;
  validatePublicationMetadata: PublicationValidateMetadataResult;
  verify: Scalars['Boolean'];
  whoActedOnPublication: PaginatedProfileResult;
  whoHaveBlocked: PaginatedProfileResult;
  whoReactedPublication: PaginatedWhoReactedResult;
};

export type QueryApprovedModuleAllowanceAmountArgs = {
  request: ApprovedModuleAllowanceAmountRequest;
};

export type QueryChallengeArgs = {
  request: ChallengeRequest;
};

export type QueryCurArgs = {
  request: CurRequest;
};

export type QueryCurrenciesArgs = {
  request: PaginatedOffsetRequest;
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

export type QueryFollowersArgs = {
  request: FollowersRequest;
};

export type QueryFollowingArgs = {
  request: FollowingRequest;
};

export type QueryForYouArgs = {
  request: PublicationForYouRequest;
};

export type QueryGctArgs = {
  request: GctRequest;
};

export type QueryGdmArgs = {
  request: GdmRequest;
};

export type QueryGenerateModuleCurrencyApprovalDataArgs = {
  request: GenerateModuleCurrencyApprovalDataRequest;
};

export type QueryIntotalArgs = {
  request: InTotalRequest;
};

export type QueryIssArgs = {
  request: PriRequest;
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
  request: NotificationRequest;
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
  request: WhoHaveBlockedRequest;
};

export type QueryProfileAlreadyInvitedArgs = {
  request: AlreadyInvitedCheckRequest;
};

export type QueryProfileBookmarksArgs = {
  request: ProfileBookmarksRequest;
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

export type QueryPublicationsArgs = {
  request: PublicationsRequest;
};

export type QueryPublicationsTagsArgs = {
  request: PublicationsTagsRequest;
};

export type QueryRelArgs = {
  request: RelRequest;
};

export type QueryRevenueForPublicationArgs = {
  request: PublicationRevenueRequest;
};

export type QueryRevenueFromPublicationsArgs = {
  request: RevenueFromPublicationsRequest;
};

export type QuerySearchNftsArgs = {
  request: NftSearchRequest;
};

export type QuerySearchProfilesArgs = {
  request: ProfileSearchRequest;
};

export type QuerySearchPublicationsArgs = {
  request: PublicationSearchRequest;
};

export type QueryTxIdToTxHashArgs = {
  txId: Scalars['TxId'];
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
  id: Scalars['PublicationId'];
  isGated: Scalars['Boolean'];
  isHidden: Scalars['Boolean'];
  metadata: PublicationMetadata;
  momoka?: Maybe<MomokaInfo>;
  openActionModules?: Maybe<Array<OpenActionModule>>;
  operations: PublicationOperations;
  publishedOn?: Maybe<App>;
  quotedOn: PrimaryPublication;
  referenceModule?: Maybe<ReferenceModule>;
  stats: PublicationStats;
  txHash: Scalars['TxHash'];
};

export type QuoteStatsArgs = {
  request: PublicationStatsInput;
};

export type QuoteNotification = {
  __typename?: 'QuoteNotification';
  id: Scalars['String'];
  quote: Quote;
};

export type ReactedResult = {
  __typename?: 'ReactedResult';
  reactedAt: Scalars['DateTime'];
  reaction: PublicationReactionType;
};

export type ReactionEvent = {
  __typename?: 'ReactionEvent';
  by: Profile;
  reaction: PublicationReactionType;
  timestamp: Scalars['DateTime'];
};

export type ReactionNotification = {
  __typename?: 'ReactionNotification';
  id: Scalars['String'];
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

export type ReferenceModule =
  | DegreesOfSeparationReferenceModuleSettings
  | FollowOnlyReferenceModuleSettings
  | UnknownReferenceModuleSettings;

export type ReferenceModuleInput = {
  degreesOfSeparationReferenceModule?: InputMaybe<DegreesOfSeparationReferenceModuleInput>;
  followerOnlyReferenceModule?: InputMaybe<Scalars['Boolean']>;
  unknownReferenceModule?: InputMaybe<UnknownReferenceModuleInput>;
};

export enum ReferenceModuleType {
  DegreesOfSeparationReferenceModule = 'DegreesOfSeparationReferenceModule',
  FollowerOnlyReferenceModule = 'FollowerOnlyReferenceModule',
  UnknownReferenceModule = 'UnknownReferenceModule',
}

/** The refresh request */
export type RefreshRequest = {
  /** The refresh token */
  refreshToken: Scalars['Jwt'];
};

export type RelRequest = {
  address: Scalars['EvmAddress'];
  secret: Scalars['String'];
};

export type RelayError = {
  __typename?: 'RelayError';
  reason: RelayErrorReasonType;
};

export enum RelayErrorReasonType {
  AppGaslessNotAllowed = 'APP_GASLESS_NOT_ALLOWED',
  Expired = 'EXPIRED',
  Failed = 'FAILED',
  RateLimited = 'RATE_LIMITED',
  WrongWalletSigned = 'WRONG_WALLET_SIGNED',
}

export type RelayMomokaResult = CreateMomokaPublicationResult | RelayError;

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
  WithSig_10 = 'WITH_SIG_10',
}

export type RelaySuccess = {
  __typename?: 'RelaySuccess';
  txHash?: Maybe<Scalars['TxHash']>;
  txId?: Maybe<Scalars['TxId']>;
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
  withHandle: Scalars['Handle'];
};

export type RevenueAggregate = {
  __typename?: 'RevenueAggregate';
  total: Amount;
};

export type RevenueFromPublicationsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  for: Scalars['ProfileId'];
  limit?: InputMaybe<Scalars['LimitScalar']>;
  where: RevenueFromPublicationsWhere;
};

export type RevenueFromPublicationsWhere = {
  anyOf?: InputMaybe<Array<OpenActionFilter>>;
  fromCollects: Scalars['Boolean'];
  metadata?: InputMaybe<PublicationMetadataFilters>;
  publicationTypes?: InputMaybe<Array<PublicationType>>;
};

export type RevertFollowModuleSettings = {
  __typename?: 'RevertFollowModuleSettings';
  contract: NetworkAddress;
};

export type SensitiveReasonInput = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingSensitiveSubreason;
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
  followerOnly?: InputMaybe<Scalars['Boolean']>;
  recipient?: InputMaybe<Scalars['EvmAddress']>;
  referralFee?: InputMaybe<Scalars['Float']>;
};

export type SimpleCollectOpenActionSettings = {
  __typename?: 'SimpleCollectOpenActionSettings';
  /** The collect module amount info */
  amount?: Maybe<Amount>;
  /** The maximum number of collects for this publication. 0 for no limit. */
  collectLimit?: Maybe<Scalars['String']>;
  contract: NetworkAddress;
  /** The end timestamp after which collecting is impossible. 0 for no expiry. */
  endTimestamp?: Maybe<Scalars['DateTime']>;
  /** True if only followers of publisher may collect the post. */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EvmAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
};

export type SpaceMetadataV1 = {
  __typename?: 'SpaceMetadataV1';
  appId?: Maybe<Scalars['AppId']>;
  attachments?: Maybe<Array<PublicationMetadataAttachment>>;
  attributes?: Maybe<Array<PublicationMetadataV3Attribute>>;
  content?: Maybe<Scalars['Markdown']>;
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  globalReach: Scalars['Boolean'];
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  link: Scalars['URL'];
  locale?: Maybe<Scalars['Locale']>;
  mainContentFocus: PublicationSpaceMetadataV1MainFocusType;
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  startsAt: Scalars['DateTime'];
  tags?: Maybe<Array<Scalars['String']>>;
  title: Scalars['String'];
};

export type SpamReasonInput = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingSpamSubreason;
};

export type StoryMetadataV1 = {
  __typename?: 'StoryMetadataV1';
  appId?: Maybe<Scalars['AppId']>;
  asset: PublicationMetadataAttachment;
  attributes?: Maybe<Array<PublicationMetadataV3Attribute>>;
  content?: Maybe<Scalars['Markdown']>;
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  globalReach: Scalars['Boolean'];
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  locale?: Maybe<Scalars['Locale']>;
  mainContentFocus: PublicationStoryMetadataV1MainFocusType;
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export type Subscription = {
  __typename?: 'Subscription';
  newMomokaTransaction: MomokaTransaction;
  newNotification: Notification;
  newPublicationStats: PublicationStats;
  watchLensTransaction: LensTransactionResult;
};

export type SubscriptionNewNotificationArgs = {
  request: NotificationSubscriptionRequest;
};

export type SubscriptionNewPublicationStatsArgs = {
  request: PublicationStatsSubscriptionRequest;
};

export type SubscriptionWatchLensTransactionArgs = {
  request: LensTransactionStatusRequest;
};

export type SupportedModule = {
  __typename?: 'SupportedModule';
  contract: NetworkAddress;
  isTypeSafe: Scalars['Boolean'];
  moduleInput: Array<ModuleInfo>;
  moduleName: Scalars['String'];
  redeemInput: Array<ModuleInfo>;
  returnDataInput: Array<ModuleInfo>;
};

export type SupportedModules = {
  __typename?: 'SupportedModules';
  followModules: Array<SupportedModule>;
  openActionsModules: Array<SupportedModule>;
  referenceModules: Array<SupportedModule>;
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
  MostPopular = 'MOST_POPULAR',
}

export type TextOnlyMetadataV1 = {
  __typename?: 'TextOnlyMetadataV1';
  appId?: Maybe<Scalars['AppId']>;
  attributes?: Maybe<Array<PublicationMetadataV3Attribute>>;
  content: Scalars['Markdown'];
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  globalReach: Scalars['Boolean'];
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  locale?: Maybe<Scalars['Locale']>;
  mainContentFocus: PublicationTextOnlyMetadataV1MainFocusType;
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export type ThreeDMetadataV1 = {
  __typename?: 'ThreeDMetadataV1';
  appId?: Maybe<Scalars['AppId']>;
  assets: Array<ThreeDMetadataV1Asset>;
  attachments?: Maybe<Array<PublicationMetadataAttachment>>;
  attributes?: Maybe<Array<PublicationMetadataV3Attribute>>;
  content?: Maybe<Scalars['Markdown']>;
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  globalReach: Scalars['Boolean'];
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  locale?: Maybe<Scalars['Locale']>;
  mainContentFocus: PublicationThreeDMetadataV1MainFocusType;
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export type ThreeDMetadataV1Asset = {
  __typename?: 'ThreeDMetadataV1Asset';
  format: Scalars['String'];
  license?: Maybe<PublicationMetadataLicenseType>;
  playerURL: Scalars['URL'];
  uri: Scalars['URI'];
  zipPath?: Maybe<Scalars['String']>;
};

export type TransactionMetadataV1 = {
  __typename?: 'TransactionMetadataV1';
  appId?: Maybe<Scalars['AppId']>;
  attachments?: Maybe<Array<PublicationMetadataAttachment>>;
  attributes?: Maybe<Array<PublicationMetadataV3Attribute>>;
  chainId: Scalars['ChainId'];
  content?: Maybe<Scalars['Markdown']>;
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  globalReach: Scalars['Boolean'];
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  locale?: Maybe<Scalars['Locale']>;
  mainContentFocus: PublicationTransactionMetadataV1MainFocusType;
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  tags?: Maybe<Array<Scalars['String']>>;
  txHash: Scalars['TxHash'];
  type: PublicationTransactionMetadataType;
};

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
  followModuleReturnData: Scalars['BlockchainData'];
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
  contract: NetworkAddress;
  /** The data used to setup the module which you can decode with your known ABI  */
  openActionModuleReturnData: Scalars['BlockchainData'];
};

export type UnknownOpenActionResult = {
  __typename?: 'UnknownOpenActionResult';
  address: Scalars['EvmAddress'];
  redeemData: Scalars['BlockchainData'];
};

export type UnknownReferenceModuleInput = {
  address: Scalars['EvmAddress'];
  data: Scalars['BlockchainData'];
};

export type UnknownReferenceModuleSettings = {
  __typename?: 'UnknownReferenceModuleSettings';
  contract: NetworkAddress;
  /** The data used to setup the module which you can decode with your known ABI  */
  referenceModuleReturnData: Scalars['BlockchainData'];
};

export type UserPoapsQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  for: Scalars['ProfileId'];
  limit?: InputMaybe<Scalars['LimitScalar']>;
};

export type UserSigNonces = {
  __typename?: 'UserSigNonces';
  lensHubOnchainSigNonce: Scalars['Nonce'];
  peripheryOnchainSigNonce: Scalars['Nonce'];
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
  mimeType?: Maybe<VideoMimeType>;
  url: Scalars['URI'];
};

export enum VideoMimeType {
  Mp4 = 'MP4',
}

export type VideoSet = {
  __typename?: 'VideoSet';
  altTag?: Maybe<Scalars['String']>;
  rawURI: Scalars['URI'];
  video: Video;
};

export type WhoActedOnPublicationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  on: Scalars['PublicationId'];
  where?: InputMaybe<WhoActedOnPublicationWhere>;
};

export type WhoActedOnPublicationWhere = {
  anyOf: Array<OpenActionFilter>;
};

export type WhoHaveBlockedRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
};

export type WhoReactedPublicationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  for: Scalars['PublicationId'];
  limit?: InputMaybe<Scalars['LimitScalar']>;
  where?: InputMaybe<WhoReactedPublicationWhere>;
};

export type WhoReactedPublicationWhere = {
  anyOf?: InputMaybe<Array<PublicationReactionType>>;
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
};

export type WorldcoinIdentity = {
  __typename?: 'WorldcoinIdentity';
  /** If the profile has verified as a user */
  isHuman: Scalars['Boolean'];
};

export enum WorldcoinPhoneVerifyType {
  Orb = 'ORB',
  Phone = 'PHONE',
}

export type WorldcoinPhoneVerifyWebhookRequest = {
  nullifierHash: Scalars['String'];
  signal: Scalars['EvmAddress'];
  signalType: WorldcoinPhoneVerifyType;
};

export type AuthenticateMutationVariables = Exact<{
  request: SignedAuthChallenge;
}>;

export type AuthenticateMutation = {
  __typename?: 'Mutation';
  authenticate: { __typename?: 'AuthenticationResult'; accessToken: any; refreshToken: any };
};

export type ChallengeQueryVariables = Exact<{
  request: ChallengeRequest;
}>;

export type ChallengeQuery = {
  __typename?: 'Query';
  challenge: { __typename?: 'AuthChallengeResult'; id: any; text: string };
};

export type RefreshMutationVariables = Exact<{
  request: RefreshRequest;
}>;

export type RefreshMutation = {
  __typename?: 'Mutation';
  refresh: { __typename?: 'AuthenticationResult'; accessToken: any; refreshToken: any };
};

export type VerifyQueryVariables = Exact<{
  request: VerifyRequest;
}>;

export type VerifyQuery = { __typename?: 'Query'; verify: boolean };

export type BroadcastOnchainMutationVariables = Exact<{
  request: BroadcastRequest;
}>;

export type BroadcastOnchainMutation = {
  __typename?: 'Mutation';
  broadcastOnchain:
    | { __typename: 'RelayError'; reason: RelayErrorReasonType }
    | { __typename: 'RelaySuccess'; txHash?: any | null; txId?: any | null };
};

export type BroadcastOnMomokaMutationVariables = Exact<{
  request: BroadcastRequest;
}>;

export type BroadcastOnMomokaMutation = {
  __typename?: 'Mutation';
  broadcastOnMomoka:
    | { __typename?: 'CreateMomokaPublicationResult'; id: any; proof: any; momokaId: any }
    | { __typename: 'RelayError'; reason: RelayErrorReasonType };
};

export type CreateFollowTypedDataMutationVariables = Exact<{
  request: FollowRequest;
}>;

export type CreateFollowTypedDataMutation = {
  __typename?: 'Mutation';
  createFollowTypedData: {
    __typename?: 'CreateFollowBroadcastItemResult';
    expiresAt: any;
    id: any;
    typedData: {
      __typename?: 'CreateFollowEIP712TypedData';
      domain: {
        __typename?: 'EIP712TypedDataDomain';
        name: string;
        chainId: any;
        version: string;
        verifyingContract: any;
      };
      types: {
        __typename?: 'CreateFollowEIP712TypedDataTypes';
        Follow: Array<{ __typename?: 'EIP712TypedDataField'; name: string; type: string }>;
      };
      value: {
        __typename?: 'CreateFollowEIP712TypedDataValue';
        nonce: any;
        deadline: any;
        followerProfileId: any;
        idsOfProfilesToFollow: Array<any>;
        followTokenIds: Array<any>;
        datas: Array<any>;
      };
    };
  };
};

export type FollowMutationVariables = Exact<{
  request: FollowLensManagerRequest;
}>;

export type FollowMutation = {
  __typename?: 'Mutation';
  follow:
    | {
        __typename?: 'LensProfileManagerRelayError';
        reason: LensProfileManagerRelayErrorReasonType;
      }
    | { __typename?: 'RelaySuccess'; txHash?: any | null; txId?: any | null };
};

export type CreateUnfollowTypedDataMutationVariables = Exact<{
  request: UnfollowRequest;
}>;

export type CreateUnfollowTypedDataMutation = {
  __typename?: 'Mutation';
  createUnfollowTypedData: {
    __typename?: 'CreateUnfollowBroadcastItemResult';
    expiresAt: any;
    id: any;
    typedData: {
      __typename?: 'CreateUnfollowEIP712TypedData';
      types: {
        __typename?: 'CreateUnfollowEIP712TypedDataTypes';
        Unfollow: Array<{ __typename?: 'EIP712TypedDataField'; name: string; type: string }>;
      };
      domain: {
        __typename?: 'EIP712TypedDataDomain';
        name: string;
        chainId: any;
        version: string;
        verifyingContract: any;
      };
      value: {
        __typename?: 'CreateUnfollowEIP712TypedDataValue';
        nonce: any;
        deadline: any;
        unfollowerProfileId: any;
        idsOfProfilesToUnfollow: Array<any>;
      };
    };
  };
};

export type UnfollowMutationVariables = Exact<{
  request: UnfollowRequest;
}>;

export type UnfollowMutation = {
  __typename?: 'Mutation';
  unfollow:
    | {
        __typename?: 'LensProfileManagerRelayError';
        reason: LensProfileManagerRelayErrorReasonType;
      }
    | { __typename?: 'RelaySuccess'; txHash?: any | null; txId?: any | null };
};

export type CreateHandleLinkToProfileTypedDataMutationVariables = Exact<{
  request: HandleLinkToProfileRequest;
}>;

export type CreateHandleLinkToProfileTypedDataMutation = {
  __typename?: 'Mutation';
  createHandleLinkToProfileTypedData: {
    __typename?: 'CreateHandleLinkToProfileBroadcastItemResult';
    id: any;
    expiresAt: any;
    typedData: {
      __typename?: 'CreateHandleLinkToProfileEIP712TypedData';
      types: {
        __typename?: 'CreateHandleLinkToProfileEIP712TypedDataTypes';
        Link: Array<{ __typename?: 'EIP712TypedDataField'; name: string; type: string }>;
      };
      domain: {
        __typename?: 'EIP712TypedDataDomain';
        name: string;
        chainId: any;
        version: string;
        verifyingContract: any;
      };
      value: {
        __typename?: 'CreateHandleLinkToProfileEIP712TypedDataValue';
        nonce: any;
        deadline: any;
        profileId: any;
        handleId: any;
      };
    };
  };
};

export type HandleLinkToProfileMutationVariables = Exact<{
  request: HandleLinkToProfileRequest;
}>;

export type HandleLinkToProfileMutation = {
  __typename?: 'Mutation';
  handleLinkToProfile:
    | {
        __typename?: 'LensProfileManagerRelayError';
        reason: LensProfileManagerRelayErrorReasonType;
      }
    | { __typename?: 'RelaySuccess'; txHash?: any | null; txId?: any | null };
};

export type CreateHandleUnlinkFromProfileTypedDataMutationVariables = Exact<{
  request: HandleUnlinkFromProfileRequest;
}>;

export type CreateHandleUnlinkFromProfileTypedDataMutation = {
  __typename?: 'Mutation';
  createHandleUnlinkFromProfileTypedData: {
    __typename?: 'CreateHandleUnlinkFromProfileBroadcastItemResult';
    id: any;
    expiresAt: any;
    typedData: {
      __typename?: 'CreateHandleUnlinkFromProfileEIP712TypedData';
      types: {
        __typename?: 'CreateHandleUnlinkFromProfileEIP712TypedDataTypes';
        Unlink: Array<{ __typename?: 'EIP712TypedDataField'; name: string; type: string }>;
      };
      domain: {
        __typename?: 'EIP712TypedDataDomain';
        name: string;
        chainId: any;
        version: string;
        verifyingContract: any;
      };
      value: {
        __typename?: 'CreateHandleUnlinkFromProfileEIP712TypedDataValue';
        nonce: any;
        deadline: any;
        profileId: any;
        handleId: any;
      };
    };
  };
};

export type HandleUnlinkFromProfileMutationVariables = Exact<{
  request: HandleUnlinkFromProfileRequest;
}>;

export type HandleUnlinkFromProfileMutation = {
  __typename?: 'Mutation';
  handleUnlinkFromProfile:
    | {
        __typename?: 'LensProfileManagerRelayError';
        reason: LensProfileManagerRelayErrorReasonType;
      }
    | { __typename?: 'RelaySuccess'; txHash?: any | null; txId?: any | null };
};

export type CreateSetFollowModuleTypedDataMutationVariables = Exact<{
  request: SetFollowModuleRequest;
}>;

export type CreateSetFollowModuleTypedDataMutation = {
  __typename?: 'Mutation';
  createSetFollowModuleTypedData: {
    __typename?: 'CreateSetFollowModuleBroadcastItemResult';
    id: any;
    expiresAt: any;
    typedData: {
      __typename?: 'CreateSetFollowModuleEIP712TypedData';
      types: {
        __typename?: 'CreateSetFollowModuleEIP712TypedDataTypes';
        SetFollowModule: Array<{ __typename?: 'EIP712TypedDataField'; name: string; type: string }>;
      };
      domain: {
        __typename?: 'EIP712TypedDataDomain';
        name: string;
        chainId: any;
        version: string;
        verifyingContract: any;
      };
      value: {
        __typename?: 'CreateSetFollowModuleEIP712TypedDataValue';
        nonce: any;
        deadline: any;
        profileId: any;
        followModule: any;
        followModuleInitData: any;
      };
    };
  };
};

export type SetFollowModuleMutationVariables = Exact<{
  request: SetFollowModuleRequest;
}>;

export type SetFollowModuleMutation = {
  __typename?: 'Mutation';
  setFollowModule:
    | {
        __typename?: 'LensProfileManagerRelayError';
        reason: LensProfileManagerRelayErrorReasonType;
      }
    | { __typename?: 'RelaySuccess'; txHash?: any | null; txId?: any | null };
};

export type CreateChangeProfileManagersTypedDataMutationVariables = Exact<{
  request: ChangeProfileManagersRequest;
}>;

export type CreateChangeProfileManagersTypedDataMutation = {
  __typename?: 'Mutation';
  createChangeProfileManagersTypedData: {
    __typename?: 'CreateChangeProfileManagersBroadcastItemResult';
    expiresAt: any;
    id: any;
    typedData: {
      __typename?: 'CreateChangeProfileManagersEIP712TypedData';
      domain: {
        __typename?: 'EIP712TypedDataDomain';
        name: string;
        chainId: any;
        version: string;
        verifyingContract: any;
      };
      types: {
        __typename?: 'CreateChangeProfileManagersEIP712TypedDataTypes';
        ChangeDelegatedExecutorsConfig: Array<{
          __typename?: 'EIP712TypedDataField';
          name: string;
          type: string;
        }>;
      };
      value: {
        __typename?: 'CreateChangeProfileManagersEIP712TypedDataValue';
        nonce: any;
        deadline: any;
        delegatorProfileId: any;
        delegatedExecutors: Array<any>;
        approvals: Array<boolean>;
        configNumber: number;
        switchToGivenConfig: boolean;
      };
    };
  };
};

export type CreateBlockProfilesTypedDataMutationVariables = Exact<{
  request: BlockRequest;
}>;

export type CreateBlockProfilesTypedDataMutation = {
  __typename?: 'Mutation';
  createBlockProfilesTypedData: {
    __typename?: 'CreateBlockProfilesBroadcastItemResult';
    id: any;
    expiresAt: any;
    typedData: {
      __typename?: 'CreateBlockProfilesEIP712TypedData';
      value: {
        __typename?: 'CreateBlockProfilesEIP712TypedDataValue';
        nonce: any;
        deadline: any;
        byProfileId: any;
        idsOfProfilesToSetBlockStatus: Array<any>;
        blockStatus: Array<boolean>;
      };
      domain: {
        __typename?: 'EIP712TypedDataDomain';
        name: string;
        chainId: any;
        version: string;
        verifyingContract: any;
      };
      types: {
        __typename?: 'CreateBlockProfilesEIP712TypedDataTypes';
        SetBlockStatus: Array<{ __typename?: 'EIP712TypedDataField'; name: string; type: string }>;
      };
    };
  };
};

export type BlockMutationVariables = Exact<{
  request: BlockRequest;
}>;

export type BlockMutation = {
  __typename?: 'Mutation';
  block:
    | {
        __typename?: 'LensProfileManagerRelayError';
        reason: LensProfileManagerRelayErrorReasonType;
      }
    | { __typename?: 'RelaySuccess'; txHash?: any | null; txId?: any | null };
};

export type CreateProfileWithHandleMutationVariables = Exact<{
  request: CreateProfileWithHandleRequest;
}>;

export type CreateProfileWithHandleMutation = {
  __typename?: 'Mutation';
  createProfileWithHandle:
    | {
        __typename?: 'CreateProfileWithHandleErrorResult';
        reason: CreateProfileWithHandleErrorReasonType;
      }
    | { __typename?: 'RelaySuccess'; txHash?: any | null; txId?: any | null };
};

export type CreateOnchainSetProfileMetadataTypedDataMutationVariables = Exact<{
  request: OnchainSetProfileMetadataRequest;
}>;

export type CreateOnchainSetProfileMetadataTypedDataMutation = {
  __typename?: 'Mutation';
  createOnchainSetProfileMetadataTypedData: {
    __typename?: 'CreateOnchainSetProfileMetadataBroadcastItemResult';
    expiresAt: any;
    id: any;
    typedData: {
      __typename?: 'CreateOnchainSetProfileMetadataEIP712TypedData';
      domain: {
        __typename?: 'EIP712TypedDataDomain';
        name: string;
        chainId: any;
        version: string;
        verifyingContract: any;
      };
      types: {
        __typename?: 'CreateOnchainSetProfileMetadataEIP712TypedDataTypes';
        SetProfileMetadataURI: Array<{
          __typename?: 'EIP712TypedDataField';
          name: string;
          type: string;
        }>;
      };
      value: {
        __typename?: 'CreateOnchainSetProfileMetadataEIP712TypedDataValue';
        nonce: any;
        deadline: any;
        profileId: any;
        metadataURI: any;
      };
    };
  };
};

export type SetProfileMetadataMutationVariables = Exact<{
  request: OnchainSetProfileMetadataRequest;
}>;

export type SetProfileMetadataMutation = {
  __typename?: 'Mutation';
  setProfileMetadata:
    | {
        __typename?: 'LensProfileManagerRelayError';
        reason: LensProfileManagerRelayErrorReasonType;
      }
    | { __typename?: 'RelaySuccess'; txHash?: any | null; txId?: any | null };
};

export type CreateUnblockProfilesTypedDataMutationVariables = Exact<{
  request: UnblockRequest;
}>;

export type CreateUnblockProfilesTypedDataMutation = {
  __typename?: 'Mutation';
  createUnblockProfilesTypedData: {
    __typename?: 'CreateUnblockProfilesBroadcastItemResult';
    id: any;
    expiresAt: any;
    typedData: {
      __typename?: 'CreateUnblockProfilesEIP712TypedData';
      types: {
        __typename?: 'CreateUnblockProfilesEIP712TypedDataTypes';
        SetBlockStatus: Array<{ __typename?: 'EIP712TypedDataField'; name: string; type: string }>;
      };
      domain: {
        __typename?: 'EIP712TypedDataDomain';
        name: string;
        chainId: any;
        version: string;
        verifyingContract: any;
      };
      value: {
        __typename?: 'CreateUnblockProfilesEIP712TypedDataValue';
        nonce: any;
        deadline: any;
        byProfileId: any;
        idsOfProfilesToSetBlockStatus: Array<any>;
        blockStatus: Array<boolean>;
      };
    };
  };
};

export type UnblockMutationVariables = Exact<{
  request: UnblockRequest;
}>;

export type UnblockMutation = {
  __typename?: 'Mutation';
  unblock:
    | {
        __typename?: 'LensProfileManagerRelayError';
        reason: LensProfileManagerRelayErrorReasonType;
      }
    | { __typename?: 'RelaySuccess'; txHash?: any | null; txId?: any | null };
};

export type CreateMomokaPostTypedDataMutationVariables = Exact<{
  request: MomokaPostRequest;
}>;

export type CreateMomokaPostTypedDataMutation = {
  __typename?: 'Mutation';
  createMomokaPostTypedData: {
    __typename?: 'CreateMomokaPostBroadcastItemResult';
    id: any;
    expiresAt: any;
    typedData: {
      __typename?: 'CreateMomokaPostEIP712TypedData';
      types: {
        __typename?: 'CreateMomokaPostEIP712TypedDataTypes';
        Post: Array<{ __typename?: 'EIP712TypedDataField'; name: string; type: string }>;
      };
      domain: {
        __typename?: 'EIP712TypedDataDomain';
        name: string;
        chainId: any;
        version: string;
        verifyingContract: any;
      };
      value: { __typename?: 'CreateMomokaPostEIP712TypedDataValue'; nonce: any; deadline: any };
    };
  };
};

export type CreateOnchainPostTypedDataMutationVariables = Exact<{
  request: OnchainPostRequest;
}>;

export type CreateOnchainPostTypedDataMutation = {
  __typename?: 'Mutation';
  createOnchainPostTypedData: {
    __typename?: 'CreateOnchainPostBroadcastItemResult';
    id: any;
    expiresAt: any;
    typedData: {
      __typename?: 'CreateOnchainPostEIP712TypedData';
      types: {
        __typename?: 'CreateOnchainPostEIP712TypedDataTypes';
        Post: Array<{ __typename?: 'EIP712TypedDataField'; name: string; type: string }>;
      };
      domain: {
        __typename?: 'EIP712TypedDataDomain';
        name: string;
        chainId: any;
        version: string;
        verifyingContract: any;
      };
      value: {
        __typename?: 'CreateOnchainPostEIP712TypedDataValue';
        nonce: any;
        deadline: any;
        profileId: any;
        contentURI: any;
        actionModules: Array<any>;
        actionModulesInitDatas: Array<any>;
        referenceModule: any;
        referenceModuleInitData: any;
      };
    };
  };
};

export type PostOnchainMutationVariables = Exact<{
  request: OnchainPostRequest;
}>;

export type PostOnchainMutation = {
  __typename?: 'Mutation';
  postOnchain:
    | {
        __typename?: 'LensProfileManagerRelayError';
        reason: LensProfileManagerRelayErrorReasonType;
      }
    | { __typename?: 'RelaySuccess'; txHash?: any | null; txId?: any | null };
};

export type CreateOnchainQuoteTypedDataMutationVariables = Exact<{
  request: OnchainQuoteRequest;
}>;

export type CreateOnchainQuoteTypedDataMutation = {
  __typename?: 'Mutation';
  createOnchainQuoteTypedData: {
    __typename?: 'CreateOnchainQuoteBroadcastItemResult';
    id: any;
    expiresAt: any;
    typedData: {
      __typename?: 'CreateOnchainQuoteEIP712TypedData';
      types: {
        __typename?: 'CreateOnchainQuoteEIP712TypedDataTypes';
        Quote: Array<{ __typename?: 'EIP712TypedDataField'; name: string; type: string }>;
      };
      domain: {
        __typename?: 'EIP712TypedDataDomain';
        name: string;
        chainId: any;
        version: string;
        verifyingContract: any;
      };
      value: {
        __typename?: 'CreateOnchainQuoteEIP712TypedDataValue';
        nonce: any;
        deadline: any;
        profileId: any;
        contentURI: any;
        pointedProfileId: any;
        pointedPubId: any;
        referrerProfileIds: Array<any>;
        referrerPubIds: Array<any>;
        referenceModuleData: any;
        actionModules: Array<any>;
        actionModulesInitDatas: Array<any>;
        referenceModule: any;
        referenceModuleInitData: any;
      };
    };
  };
};

export type QuoteOnchainMutationVariables = Exact<{
  request: OnchainQuoteRequest;
}>;

export type QuoteOnchainMutation = {
  __typename?: 'Mutation';
  quoteOnchain:
    | {
        __typename?: 'LensProfileManagerRelayError';
        reason: LensProfileManagerRelayErrorReasonType;
      }
    | { __typename?: 'RelaySuccess'; txHash?: any | null; txId?: any | null };
};

export type CreateOnchainCommentTypedDataMutationVariables = Exact<{
  request: OnchainCommentRequest;
}>;

export type CreateOnchainCommentTypedDataMutation = {
  __typename?: 'Mutation';
  createOnchainCommentTypedData: {
    __typename?: 'CreateOnchainCommentBroadcastItemResult';
    id: any;
    expiresAt: any;
    typedData: {
      __typename?: 'CreateOnchainCommentEIP712TypedData';
      types: {
        __typename?: 'CreateOnchainCommentEIP712TypedDataTypes';
        Comment: Array<{ __typename?: 'EIP712TypedDataField'; name: string; type: string }>;
      };
      domain: {
        __typename?: 'EIP712TypedDataDomain';
        name: string;
        chainId: any;
        version: string;
        verifyingContract: any;
      };
      value: {
        __typename?: 'CreateOnchainCommentEIP712TypedDataValue';
        nonce: any;
        deadline: any;
        profileId: any;
        contentURI: any;
        pointedProfileId: any;
        pointedPubId: any;
        referrerProfileIds: Array<any>;
        referrerPubIds: Array<any>;
        referenceModuleData: any;
        actionModules: Array<any>;
        actionModulesInitDatas: Array<any>;
        referenceModule: any;
        referenceModuleInitData: any;
      };
    };
  };
};

export type CommentOnchainMutationVariables = Exact<{
  request: OnchainCommentRequest;
}>;

export type CommentOnchainMutation = {
  __typename?: 'Mutation';
  commentOnchain:
    | {
        __typename?: 'LensProfileManagerRelayError';
        reason: LensProfileManagerRelayErrorReasonType;
      }
    | { __typename?: 'RelaySuccess'; txHash?: any | null; txId?: any | null };
};

export type CreateOnchainMirrorTypedDataMutationVariables = Exact<{
  request: OnchainMirrorRequest;
}>;

export type CreateOnchainMirrorTypedDataMutation = {
  __typename?: 'Mutation';
  createOnchainMirrorTypedData: {
    __typename?: 'CreateOnchainMirrorBroadcastItemResult';
    id: any;
    expiresAt: any;
    typedData: {
      __typename?: 'CreateOnchainMirrorEIP712TypedData';
      domain: {
        __typename?: 'EIP712TypedDataDomain';
        name: string;
        chainId: any;
        version: string;
        verifyingContract: any;
      };
      types: {
        __typename?: 'CreateOnchainMirrorEIP712TypedDataTypes';
        Mirror: Array<{ __typename?: 'EIP712TypedDataField'; name: string; type: string }>;
      };
      value: {
        __typename?: 'CreateOnchainMirrorEIP712TypedDataValue';
        nonce: any;
        deadline: any;
        profileId: any;
        pointedProfileId: any;
        pointedPubId: any;
        referrerProfileIds: Array<any>;
        referrerPubIds: Array<any>;
        referenceModuleData: any;
      };
    };
  };
};

export type MirrorOnchainMutationVariables = Exact<{
  request: OnchainMirrorRequest;
}>;

export type MirrorOnchainMutation = {
  __typename?: 'Mutation';
  mirrorOnchain:
    | {
        __typename?: 'LensProfileManagerRelayError';
        reason: LensProfileManagerRelayErrorReasonType;
      }
    | { __typename?: 'RelaySuccess'; txHash?: any | null; txId?: any | null };
};

export type LensTransactionStatusQueryVariables = Exact<{
  request: LensTransactionStatusRequest;
}>;

export type LensTransactionStatusQuery = {
  __typename?: 'Query';
  lensTransactionStatus:
    | {
        __typename: 'LensMetadataTransaction';
        status: LensTransactionStatusType;
        metadataFailedReason?: LensMetadataTransactionFailureType | null;
        extraInfo?: string | null;
      }
    | {
        __typename: 'LensTransaction';
        status: LensTransactionStatusType;
        txHash: any;
        reason?: LensTransactionFailureType | null;
        extraInfo?: string | null;
      };
};

export const AuthenticateDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Authenticate' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'SignedAuthChallenge' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authenticate' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
                { kind: 'Field', name: { kind: 'Name', value: 'refreshToken' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AuthenticateMutation, AuthenticateMutationVariables>;
export const ChallengeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Challenge' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ChallengeRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'challenge' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'text' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ChallengeQuery, ChallengeQueryVariables>;
export const RefreshDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Refresh' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'RefreshRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'refresh' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
                { kind: 'Field', name: { kind: 'Name', value: 'refreshToken' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RefreshMutation, RefreshMutationVariables>;
export const VerifyDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Verify' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'VerifyRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'verify' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VerifyQuery, VerifyQueryVariables>;
export const BroadcastOnchainDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'BroadcastOnchain' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'BroadcastRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'broadcastOnchain' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'RelaySuccess' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'txHash' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'txId' } },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'RelayError' } },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'reason' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BroadcastOnchainMutation, BroadcastOnchainMutationVariables>;
export const BroadcastOnMomokaDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'BroadcastOnMomoka' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'BroadcastRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'broadcastOnMomoka' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CreateMomokaPublicationResult' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'proof' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'momokaId' } },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'RelayError' } },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'reason' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BroadcastOnMomokaMutation, BroadcastOnMomokaMutationVariables>;
export const CreateFollowTypedDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateFollowTypedData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'FollowRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createFollowTypedData' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'expiresAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'typedData' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'domain' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'chainId' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'version' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'verifyingContract' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'types' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'Follow' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'value' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'nonce' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'deadline' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'followerProfileId' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'idsOfProfilesToFollow' },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'followTokenIds' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'datas' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateFollowTypedDataMutation, CreateFollowTypedDataMutationVariables>;
export const FollowDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Follow' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'FollowLensManagerRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'follow' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'RelaySuccess' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'txHash' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'txId' } },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'LensProfileManagerRelayError' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'reason' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FollowMutation, FollowMutationVariables>;
export const CreateUnfollowTypedDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateUnfollowTypedData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UnfollowRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createUnfollowTypedData' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'expiresAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'typedData' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'types' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'Unfollow' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'domain' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'chainId' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'version' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'verifyingContract' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'value' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'nonce' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'deadline' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'unfollowerProfileId' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'idsOfProfilesToUnfollow' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateUnfollowTypedDataMutation,
  CreateUnfollowTypedDataMutationVariables
>;
export const UnfollowDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Unfollow' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UnfollowRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'unfollow' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'RelaySuccess' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'txHash' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'txId' } },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'LensProfileManagerRelayError' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'reason' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UnfollowMutation, UnfollowMutationVariables>;
export const CreateHandleLinkToProfileTypedDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateHandleLinkToProfileTypedData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'HandleLinkToProfileRequest' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createHandleLinkToProfileTypedData' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'expiresAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'typedData' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'types' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'Link' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'domain' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'chainId' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'version' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'verifyingContract' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'value' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'nonce' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'deadline' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'profileId' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'handleId' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateHandleLinkToProfileTypedDataMutation,
  CreateHandleLinkToProfileTypedDataMutationVariables
>;
export const HandleLinkToProfileDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'HandleLinkToProfile' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'HandleLinkToProfileRequest' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'handleLinkToProfile' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'RelaySuccess' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'txHash' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'txId' } },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'LensProfileManagerRelayError' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'reason' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HandleLinkToProfileMutation, HandleLinkToProfileMutationVariables>;
export const CreateHandleUnlinkFromProfileTypedDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateHandleUnlinkFromProfileTypedData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'HandleUnlinkFromProfileRequest' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createHandleUnlinkFromProfileTypedData' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'expiresAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'typedData' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'types' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'Unlink' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'domain' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'chainId' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'version' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'verifyingContract' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'value' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'nonce' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'deadline' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'profileId' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'handleId' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateHandleUnlinkFromProfileTypedDataMutation,
  CreateHandleUnlinkFromProfileTypedDataMutationVariables
>;
export const HandleUnlinkFromProfileDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'HandleUnlinkFromProfile' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'HandleUnlinkFromProfileRequest' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'handleUnlinkFromProfile' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'RelaySuccess' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'txHash' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'txId' } },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'LensProfileManagerRelayError' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'reason' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  HandleUnlinkFromProfileMutation,
  HandleUnlinkFromProfileMutationVariables
>;
export const CreateSetFollowModuleTypedDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateSetFollowModuleTypedData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'SetFollowModuleRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createSetFollowModuleTypedData' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'expiresAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'typedData' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'types' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'SetFollowModule' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'domain' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'chainId' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'version' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'verifyingContract' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'value' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'nonce' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'deadline' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'profileId' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'followModule' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'followModuleInitData' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateSetFollowModuleTypedDataMutation,
  CreateSetFollowModuleTypedDataMutationVariables
>;
export const SetFollowModuleDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SetFollowModule' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'SetFollowModuleRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'setFollowModule' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'RelaySuccess' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'txHash' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'txId' } },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'LensProfileManagerRelayError' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'reason' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SetFollowModuleMutation, SetFollowModuleMutationVariables>;
export const CreateChangeProfileManagersTypedDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateChangeProfileManagersTypedData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ChangeProfileManagersRequest' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createChangeProfileManagersTypedData' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'expiresAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'typedData' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'domain' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'chainId' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'version' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'verifyingContract' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'types' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'ChangeDelegatedExecutorsConfig' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'value' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'nonce' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'deadline' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'delegatorProfileId' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'delegatedExecutors' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'approvals' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'configNumber' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'switchToGivenConfig' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateChangeProfileManagersTypedDataMutation,
  CreateChangeProfileManagersTypedDataMutationVariables
>;
export const CreateBlockProfilesTypedDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateBlockProfilesTypedData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'BlockRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createBlockProfilesTypedData' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'expiresAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'typedData' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'value' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'nonce' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'deadline' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'byProfileId' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'idsOfProfilesToSetBlockStatus' },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'blockStatus' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'domain' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'chainId' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'version' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'verifyingContract' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'types' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'SetBlockStatus' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateBlockProfilesTypedDataMutation,
  CreateBlockProfilesTypedDataMutationVariables
>;
export const BlockDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Block' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'BlockRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'block' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'RelaySuccess' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'txHash' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'txId' } },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'LensProfileManagerRelayError' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'reason' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BlockMutation, BlockMutationVariables>;
export const CreateProfileWithHandleDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateProfileWithHandle' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateProfileWithHandleRequest' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createProfileWithHandle' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'RelaySuccess' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'txHash' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'txId' } },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CreateProfileWithHandleErrorResult' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'reason' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateProfileWithHandleMutation,
  CreateProfileWithHandleMutationVariables
>;
export const CreateOnchainSetProfileMetadataTypedDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateOnchainSetProfileMetadataTypedData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'OnchainSetProfileMetadataRequest' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createOnchainSetProfileMetadataTypedData' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'expiresAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'typedData' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'domain' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'chainId' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'version' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'verifyingContract' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'types' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'SetProfileMetadataURI' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'value' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'nonce' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'deadline' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'profileId' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'metadataURI' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateOnchainSetProfileMetadataTypedDataMutation,
  CreateOnchainSetProfileMetadataTypedDataMutationVariables
>;
export const SetProfileMetadataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SetProfileMetadata' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'OnchainSetProfileMetadataRequest' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'setProfileMetadata' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'RelaySuccess' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'txHash' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'txId' } },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'LensProfileManagerRelayError' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'reason' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SetProfileMetadataMutation, SetProfileMetadataMutationVariables>;
export const CreateUnblockProfilesTypedDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateUnblockProfilesTypedData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UnblockRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createUnblockProfilesTypedData' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'expiresAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'typedData' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'types' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'SetBlockStatus' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'domain' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'chainId' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'version' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'verifyingContract' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'value' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'nonce' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'deadline' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'byProfileId' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'idsOfProfilesToSetBlockStatus' },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'blockStatus' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateUnblockProfilesTypedDataMutation,
  CreateUnblockProfilesTypedDataMutationVariables
>;
export const UnblockDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Unblock' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UnblockRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'unblock' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'RelaySuccess' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'txHash' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'txId' } },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'LensProfileManagerRelayError' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'reason' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UnblockMutation, UnblockMutationVariables>;
export const CreateMomokaPostTypedDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateMomokaPostTypedData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'MomokaPostRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createMomokaPostTypedData' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'expiresAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'typedData' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'types' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'Post' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'domain' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'chainId' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'version' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'verifyingContract' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'value' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'nonce' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'deadline' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateMomokaPostTypedDataMutation,
  CreateMomokaPostTypedDataMutationVariables
>;
export const CreateOnchainPostTypedDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateOnchainPostTypedData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'OnchainPostRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createOnchainPostTypedData' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'expiresAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'typedData' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'types' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'Post' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'domain' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'chainId' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'version' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'verifyingContract' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'value' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'nonce' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'deadline' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'profileId' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'contentURI' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'actionModules' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'actionModulesInitDatas' },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'referenceModule' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'referenceModuleInitData' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateOnchainPostTypedDataMutation,
  CreateOnchainPostTypedDataMutationVariables
>;
export const PostOnchainDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'PostOnchain' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'OnchainPostRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'postOnchain' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'RelaySuccess' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'txHash' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'txId' } },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'LensProfileManagerRelayError' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'reason' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PostOnchainMutation, PostOnchainMutationVariables>;
export const CreateOnchainQuoteTypedDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateOnchainQuoteTypedData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'OnchainQuoteRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createOnchainQuoteTypedData' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'expiresAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'typedData' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'types' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'Quote' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'domain' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'chainId' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'version' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'verifyingContract' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'value' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'nonce' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'deadline' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'profileId' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'contentURI' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'pointedProfileId' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'pointedPubId' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'referrerProfileIds' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'referrerPubIds' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'referenceModuleData' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'actionModules' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'actionModulesInitDatas' },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'referenceModule' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'referenceModuleInitData' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateOnchainQuoteTypedDataMutation,
  CreateOnchainQuoteTypedDataMutationVariables
>;
export const QuoteOnchainDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'QuoteOnchain' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'OnchainQuoteRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'quoteOnchain' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'RelaySuccess' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'txHash' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'txId' } },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'LensProfileManagerRelayError' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'reason' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QuoteOnchainMutation, QuoteOnchainMutationVariables>;
export const CreateOnchainCommentTypedDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateOnchainCommentTypedData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'OnchainCommentRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createOnchainCommentTypedData' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'expiresAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'typedData' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'types' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'Comment' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'domain' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'chainId' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'version' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'verifyingContract' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'value' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'nonce' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'deadline' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'profileId' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'contentURI' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'pointedProfileId' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'pointedPubId' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'referrerProfileIds' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'referrerPubIds' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'referenceModuleData' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'actionModules' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'actionModulesInitDatas' },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'referenceModule' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'referenceModuleInitData' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateOnchainCommentTypedDataMutation,
  CreateOnchainCommentTypedDataMutationVariables
>;
export const CommentOnchainDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CommentOnchain' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'OnchainCommentRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'commentOnchain' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'RelaySuccess' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'txHash' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'txId' } },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'LensProfileManagerRelayError' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'reason' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CommentOnchainMutation, CommentOnchainMutationVariables>;
export const CreateOnchainMirrorTypedDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateOnchainMirrorTypedData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'OnchainMirrorRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createOnchainMirrorTypedData' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'expiresAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'typedData' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'domain' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'chainId' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'version' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'verifyingContract' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'types' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'Mirror' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'value' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'nonce' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'deadline' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'profileId' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'pointedProfileId' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'pointedPubId' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'referrerProfileIds' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'referrerPubIds' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'referenceModuleData' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateOnchainMirrorTypedDataMutation,
  CreateOnchainMirrorTypedDataMutationVariables
>;
export const MirrorOnchainDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'MirrorOnchain' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'OnchainMirrorRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'mirrorOnchain' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'RelaySuccess' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'txHash' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'txId' } },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'LensProfileManagerRelayError' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'reason' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MirrorOnchainMutation, MirrorOnchainMutationVariables>;
export const LensTransactionStatusDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'LensTransactionStatus' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'LensTransactionStatusRequest' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'lensTransactionStatus' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'request' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'request' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'LensTransaction' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'txHash' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'reason' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'extraInfo' } },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'LensMetadataTransaction' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'metadataFailedReason' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'extraInfo' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LensTransactionStatusQuery, LensTransactionStatusQueryVariables>;

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    AccessCondition: [
      'AndCondition',
      'CollectCondition',
      'EoaOwnershipCondition',
      'Erc20OwnershipCondition',
      'FollowCondition',
      'NftOwnershipCondition',
      'OrCondition',
      'ProfileOwnershipCondition',
    ],
    AnyPublication: ['Comment', 'Mirror', 'Post', 'Quote'],
    Asset: ['Erc20'],
    BroadcastMomokaResult: ['CreateMomokaPublicationResult', 'RelayError'],
    CreateProfileWithHandleResult: ['CreateProfileWithHandleErrorResult', 'RelaySuccess'],
    ExplorePublication: ['Post', 'Quote'],
    FeedHighlight: ['Post', 'Quote'],
    FollowModule: [
      'FeeFollowModuleSettings',
      'RevertFollowModuleSettings',
      'UnknownFollowModuleSettings',
    ],
    LensProfileManagerRelayResult: ['LensProfileManagerRelayError', 'RelaySuccess'],
    LensTransactionResult: ['LensMetadataTransaction', 'LensTransaction'],
    MediaSet: ['AudioSet', 'ImageSet', 'VideoSet'],
    MirrorablePublication: ['Comment', 'Post', 'Quote'],
    MomokaTransaction: [
      'MomokaCommentTransaction',
      'MomokaMirrorTransaction',
      'MomokaPostTransaction',
      'MomokaQuoteTransaction',
    ],
    MomokaVerificationStatus: [
      'MomokaVerificationStatusFailure',
      'MomokaVerificationStatusSuccess',
    ],
    Notification: [
      'ActedNotification',
      'CommentNotification',
      'FollowNotification',
      'FutureProofNotification',
      'MentionNotification',
      'MirrorNotification',
      'QuoteNotification',
      'ReactionNotification',
    ],
    OpenActionModule: [
      'LegacyAaveFeeCollectModuleSettings',
      'LegacyERC4626FeeCollectModuleSettings',
      'LegacyFeeCollectModuleSettings',
      'LegacyFreeCollectModuleSettings',
      'LegacyLimitedFeeCollectModuleSettings',
      'LegacyLimitedTimedFeeCollectModuleSettings',
      'LegacyMultirecipientFeeCollectModuleSettings',
      'LegacyRevertCollectModuleSettings',
      'LegacySimpleCollectModuleSettings',
      'LegacyTimedFeeCollectModuleSettings',
      'MultirecipientFeeCollectOpenActionSettings',
      'SimpleCollectOpenActionSettings',
      'UnknownOpenActionModuleSettings',
    ],
    OpenActionResult: ['CollectOpenActionResult', 'UnknownOpenActionResult'],
    PrimaryPublication: ['Comment', 'Post', 'Quote'],
    PublicationForYou: ['Post', 'Quote'],
    PublicationMetadata: [
      'ArticleMetadataV1',
      'CheckingInMetadataV1',
      'EmbedMetadataV1',
      'EventMetadataV1',
      'FutureProofPublicationMetadata',
      'LinkMetadataV1',
      'LiveStreamMetadataV1',
      'MintMetadataV1',
      'PublicationImageMetadataV1',
      'PublicationMetadataV1',
      'PublicationMetadataV2',
      'PublicationVideoMetadataV1',
      'SpaceMetadataV1',
      'StoryMetadataV1',
      'TextOnlyMetadataV1',
      'ThreeDMetadataV1',
      'TransactionMetadataV1',
    ],
    PublicationMetadataAttachment: [
      'PublicationMetadataMediaAudio',
      'PublicationMetadataMediaImage',
      'PublicationMetadataMediaVideo',
    ],
    PublicationMetadataEncryptionStrategy: [
      'FutureProofPublicationEncryptionStrategy',
      'PublicationMetadataV3LitEncryption',
    ],
    ReferenceModule: [
      'DegreesOfSeparationReferenceModuleSettings',
      'FollowOnlyReferenceModuleSettings',
      'UnknownReferenceModuleSettings',
    ],
    RelayMomokaResult: ['CreateMomokaPublicationResult', 'RelayError'],
    RelayResult: ['RelayError', 'RelaySuccess'],
  },
};
export default result;
