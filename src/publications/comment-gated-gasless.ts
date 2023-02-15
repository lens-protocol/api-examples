import { v4 as uuidv4 } from 'uuid';
import { login } from '../authentication/login';
import { explicitStart, PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import {
  PublicationMainFocus,
  PublicationMetadataV2Input as MetadataV2,
} from '../graphql/generated';
import { pollAndIndexComment } from './comment';
import { commentGasless } from './comment-gasless';
import { createGatedPublicCommentRequest } from './comment-gated';
import { followAccessCondition } from './post-gated';

const prefix = 'create gated comment gasless';

const commentGatedGasless = async () => {
  const address = getAddressFromSigner();
  const profileId = PROFILE_ID;
  const publicationId = '0x0f-0x01';
  console.log(`${prefix}: address`, address);

  await login(address);

  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const metadata: MetadataV2 = {
    version: '2.0.0',
    mainContentFocus: PublicationMainFocus.TextOnly,
    metadata_id: uuidv4(),
    description: 'Description',
    locale: 'en-US',
    content: 'gated comment!',
    external_url: null,
    image: null,
    imageMimeType: null,
    name: 'Name',
    attributes: [],
    tags: ['using_api_examples'],
    appId: 'api_examples_github',
    animation_url: null,
  };

  const { request } = await createGatedPublicCommentRequest(
    profileId,
    publicationId,
    metadata,
    followAccessCondition(profileId)
  );

  const result = await commentGasless(request);

  await pollAndIndexComment(result.txHash, profileId, prefix);
};

(async () => {
  if (explicitStart(__filename)) {
    await commentGatedGasless();
  }
})();
