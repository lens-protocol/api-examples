import { v4 as uuidv4 } from 'uuid';
import { login } from '../authentication/login';
import { explicitStart, PROFILE_ID } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import {
  PublicationMainFocus,
  PublicationMetadataV2Input as MetadataV2,
} from '../graphql/generated';
import { pollAndIndexPost } from './post';
import { postGasless } from './post-gasless';
import { createGatedPublicPostRequest, followAccessCondition } from './post-gated';

const prefix = 'create gated post gasless';

const postGatedGasless = async () => {
  const address = getAddressFromSigner();
  const profileId = PROFILE_ID;
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
    content: 'gated post!',
    external_url: null,
    image: null,
    imageMimeType: null,
    name: 'Name',
    attributes: [],
    tags: ['using_api_examples'],
    appId: 'api_examples_github',
    animation_url: null,
  };

  const { request } = await createGatedPublicPostRequest(
    profileId,
    metadata,
    followAccessCondition(profileId)
  );

  const result = await postGasless(request);

  await pollAndIndexPost(result.txHash, profileId, prefix);
};

(async () => {
  if (explicitStart(__filename)) {
    await postGatedGasless();
  }
})();
