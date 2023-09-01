import fs from 'fs';
import path from 'path';

const fileLensHub = fs.readFileSync(
  path.join(__dirname, 'abis/lens-hub-contract-abi.json'),
  'utf8'
);
const fileLensPeriphery = fs.readFileSync(
  path.join(__dirname, 'abis/lens-periphery-data-provider.json'),
  'utf8'
);
const fileFollowNFT = fs.readFileSync(
  path.join(__dirname, 'abis/lens-follow-nft-contract-abi.json'),
  'utf8'
);

const getParamOrExit = (name: string, errorMessage?: string) => {
  const param = process.env[name];
  if (!param) {
    console.error(errorMessage ?? `Required config param '${name}' missing`);
    process.exit(1);
  }
  return param;
};

const getParam = (name: string) => {
  const param = process.env[name];
  if (!param) {
    return null;
  }
  return param;
};

export const explicitStart = (filename: string) => {
  const scriptName = path.basename(process.argv[1]);
  return path.basename(filename).includes(scriptName);
};

export const PK = getParamOrExit('PK');

export const MUMBAI_RPC_URL = getParamOrExit('MUMBAI_RPC_URL');

export const LENS_API = getParamOrExit('LENS_API');

export const LENS_HUB_CONTRACT = getParamOrExit('LENS_HUB_CONTRACT');

export const LENS_PERIPHERY_CONTRACT = getParamOrExit('LENS_PERIPHERY_CONTRACT');

export const LENS_PERIPHERY_NAME = 'LensPeriphery';

export const PROFILE_ID = getParam('PROFILE_ID');

export const LENS_FOLLOW_NFT_ABI = JSON.parse(fileFollowNFT);

export const LENS_HUB_ABI = JSON.parse(fileLensHub);

export const LENS_PERIPHERY_ABI = JSON.parse(fileLensPeriphery);

export const INFURA_PROJECT_ID = getParam('INFURA_PROJECT_ID');

export const INFURA_SECRET = getParam('INFURA_SECRET');

export const USE_GASLESS = getParam('USE_GASLESS') === 'true';

export const ORIGIN = USE_GASLESS
  ? getParamOrExit('ORIGIN', 'You must supply the ORIGIN env var when USE_GASLESS is enabled')
  : getParam('ORIGIN');
