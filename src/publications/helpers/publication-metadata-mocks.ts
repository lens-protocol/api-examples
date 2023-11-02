// import { PublicationMetadataSchema } from '@lens-protocol/metadata';

export const publicationMetadataTextOnly = {
  $schema: 'https://json-schemas.lens.dev/publications/text-only/3.0.0.json',
  name: 'My text3',
  description: 'My text Description',
  external_url: 'https://mytext.com',
  image: 'https://text.com/image.png',
  lens: {
    title: 'My text',
    id: '1030ee6e-51cb-4a09-a74a-abdccc6ef890',
    locale: 'en-US',
    mainContentFocus: 'TEXT_ONLY',
    content: 'My text Content',
    tags: ['text'],
    appId: 'my-app-id',
  },
};
