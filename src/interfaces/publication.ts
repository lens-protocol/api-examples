import { MediaOutput, PublicationMainFocus } from '../../graphql-v1/generated';
import { GenericMetadata, MetadataDisplayType } from './generic';

export interface MetadataAttribute {
  displayType?: MetadataDisplayType;
  traitType?: string;
  value: string;
}

export interface Metadata extends GenericMetadata {
  description?: string;
  content?: string;
  external_url?: string | null;
  name: string;
  attributes: MetadataAttribute[];
  image?: string | null;
  imageMimeType?: string | null;
  media?: MediaOutput[];
  animation_url?: string;
  locale: string;
  tags?: string[];
  contentWarning?: PublicationContentWarning;
  mainContentFocus: PublicationMainFocus;
}

export enum PublicationContentWarning {
  NSFW = 'NSFW',
  SENSITIVE = 'SENSITIVE',
  SPOILER = 'SPOILER',
}
