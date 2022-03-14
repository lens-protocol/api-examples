import { create } from 'ipfs-http-client';
import { v4 as uuidv4 } from 'uuid';

const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
});

export const uploadIpfs = async () => {
  const result = await client.add(
    JSON.stringify({
      version: '1.0.0',
      metadata_id: uuidv4(),
      description: 'Description',
      content: 'Content',
      external_url: null,
      image: null,
      imageMimeType: null,
      name: 'Name',
      attributes: [],
      media: [],
      appId: 'testing123',
    })
  );

  console.log('upload result ipfs', result);
  return result;
};
