import { v4 as uuidv4 } from 'uuid';
import { apolloClient } from '../apollo-client';
import { login } from '../authentication/login';
import { explicitStart } from '../config';
import { getAddressFromSigner } from '../ethers.service';
import { OnchainSetProfileMetadataRequest, SetProfileMetadataDocument } from '../graphql/generated';
import { ProfileMetadata } from '../interfaces/profile-metadata';
import { uploadIpfs } from '../ipfs';
import { waitUntilLensManagerTransactionIsComplete } from '../transaction/wait-until-complete';

const setProfileMetadata = async (request: OnchainSetProfileMetadataRequest) => {
  const result = await apolloClient.mutate({
    mutation: SetProfileMetadataDocument,
    variables: {
      request,
    },
  });

  return result.data!.setProfileMetadata;
};

export const setProfileMetadataLensProfileManager = async (profileId: string = '0x02') => {
  const address = getAddressFromSigner();
  console.log('set profile metadata lens profile manager: address', address);

  await login(address);

  const ipfsResult = await uploadIpfs<ProfileMetadata>({
    name: 'API examples',
    bio: 'API examples bio',
    cover_picture: 'https://pbs.twimg.com/profile_banners/1478109975406858245/1645016027/1500x500',
    attributes: [
      {
        traitType: 'string',
        value: 'yes this is custom',
        key: 'custom_field',
      },
    ],
    version: '1.0.0',
    metadata_id: uuidv4(),
  });
  console.log('set profile metadata lens profile manager: ipfs result', ipfsResult);

  const request = {
    metadataURI: `ipfs://${ipfsResult.path}`,
  };

  const result = await setProfileMetadata(request);
  console.log('set profile metadata lens profile manager: result', result);
  await waitUntilLensManagerTransactionIsComplete(result, 'setProfileMetadata');
};

(async () => {
  if (explicitStart(__filename)) {
    await setProfileMetadataLensProfileManager();
  }
})();
