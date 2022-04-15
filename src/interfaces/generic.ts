export interface SignatureContext {
  signature?: string;
}

export interface GenericMetadata {
  /**
   * The metadata version.
   */
  version: string;

  /**
   * The metadata id can be anything but if your uploading to ipfs
   * you will want it to be random.. using uuid could be an option!
   */
  metadata_id: string;
  /**
   *  Signed metadata to validate the owner
   */
  signatureContext?: SignatureContext;
  /**
   * This is the appId the content belongs to
   */
  appId?: string;
}

export enum MetadataDisplayType {
  number = 'number',
  string = 'string',
  date = 'date',
}
