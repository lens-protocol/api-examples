import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { getAddressFromSigner } from '../ethers.service';
import { PublicMediaRequest, CreateAttachMediaDataDocument } from '../graphql/generated';
import fs from 'fs';
import path from 'path';
import * as Hash from 'typestub-ipfs-only-hash';
import Axios from 'axios';

const getMediaRequest = async (request: PublicMediaRequest) => {
  const result = await apolloClient.mutate({
    mutation: CreateAttachMediaDataDocument,
    variables: {
      request,
    },
  });
  return result.data?.createAttachMediaData;
};

const uploadFile = async (presignedUrl: string, file: Buffer) => {
  const result = await Axios.put(presignedUrl, file).catch((error) =>
    console.error(error.response.data, { request: error.request })
  );

  return result;
};

export const createMediaAttachment = async () => {
  const address = getAddressFromSigner();
  console.log('create media attachment: address', address);
  await login(address);
  const file = fs.readFileSync(path.join(__dirname, 'file/video.mp4'));

  const cid = await Hash.of(file);

  const result = await getMediaRequest({
    itemCid: cid,
    altTag: 'video test',
    type: 'video/mp4',
  });

  console.log('media:', result);
  // Upload file to S3
  if (!result?.signedUrl) throw new Error('SignedURL mandatory');
  await uploadFile(result?.signedUrl, file);
  return {
    item: result.media.item,
    altTag: result.media.altTag,
    type: result.media.type,
    cover: result.media.cover,
    source: result.media.source,
  };
};

(async () => {
  await createMediaAttachment();
})();
