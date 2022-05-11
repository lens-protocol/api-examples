import { GenericMetadata, MetadataDisplayType } from './generic';

export interface AttributeData {
  displayType?: MetadataDisplayType;
  traitType?: string;
  value: string;
  key: string;
}

export interface ProfileMetadata extends GenericMetadata {
  name?: string;
  bio?: string;
  cover_picture?: string;
  attributes: AttributeData[];
}
