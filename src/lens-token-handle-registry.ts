import { ethers } from 'ethers';
import { LensTokenHandleRegistry } from './abis/types/LensTokenHandleRegistry';
import { LENS_TOKEN_HANDLE_REGISTRY_ABI, LENS_TOKEN_HANDLE_REGISTRY_CONTRACT } from './config';
import { getSigner } from './ethers.service';

export const lensTokenHandleRegistry = new ethers.Contract(
  LENS_TOKEN_HANDLE_REGISTRY_CONTRACT,
  LENS_TOKEN_HANDLE_REGISTRY_ABI,
  getSigner()
) as unknown as LensTokenHandleRegistry;
