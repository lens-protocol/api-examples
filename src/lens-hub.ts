import { ethers, Signer } from 'ethers';
import {
  LENS_HUB_ABI,
  LENS_HUB_CONTRACT,
  LENS_PERIPHERY_ABI,
  LENS_PERIPHERY_CONTRACT,
} from './config';
import { getSigner } from './ethers.service';

// lens contract info can all be found on the deployed
// contract address on polygon.
// @ts-ignore
export const lensHub = new ethers.Contract(LENS_HUB_CONTRACT, LENS_HUB_ABI, getSigner());

export const lensPeriphery = new ethers.Contract(
  LENS_PERIPHERY_CONTRACT,
  LENS_PERIPHERY_ABI,
  // @ts-ignore
  getSigner()
);
