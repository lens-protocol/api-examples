import { ethers } from 'ethers';
import { LENS_HUB_ABI } from './config';
import { getSigner } from './ethers.service';

// lens contract info can all be found on the deployed
// contract address on polygon.
export const lensHub = new ethers.Contract(
  '0xF6BF84E5df229029C9D36dC7ABaCDBE9c0bd7b4F',
  LENS_HUB_ABI,
  getSigner()
);
