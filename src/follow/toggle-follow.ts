import { gql } from "@apollo/client/core";
import { apolloClient } from "../apollo-client";
import { login } from "../authentication/login";
import { argsBespokeInit } from "../config";
import {
  getAddressFromSigner,
  signedTypeData,
  splitSignature,
} from "../ethers.service";
import { lensHub } from "../lens-hub";

const CREATE_TOGGLE_FOLLOW_TYPED_DATA = `
  mutation($request: CreateToggleFollowRequest!) { 
    createToggleFollowTypedData(request: $request) {
      id
      expiresAt
      typedData {
        domain {
          name
          chainId
          version
          verifyingContract
        }
        types {
          ToggleFollowWithSig {
            name
            type
          }
        }
        value {
          nonce
          deadline
          profileIds
          enables
        }
      }
    }
 }
`;

// TODO sort typed!
const createToggleFollowTypedData = (
  profileIds: string[],
  enables: boolean[]
) => {
  return apolloClient.mutate({
    mutation: gql(CREATE_TOGGLE_FOLLOW_TYPED_DATA),
    variables: {
      request: {
        profileIds,
        enables,
      },
    },
  });
};

export const toggleFollow = async (profileId: string = "0x032f1a") => {
  const address = getAddressFromSigner();
  console.log("follow: address", address);

  await login(address);

  const profileIds: string[] = ["0x20"];
  const enables: boolean[] = [false];

  const result = await createToggleFollowTypedData(profileIds, enables);
  console.log("follow: result", result);

  const typedData = result.data.createToggleFollowTypedData.typedData;
  console.log("follow: typedData", typedData);

  const signature = await signedTypeData(
    typedData.domain,
    typedData.types,
    typedData.value
  );
  console.log("follow: signature", signature);

  const { v, r, s } = splitSignature(signature);

  //   const tx = await lensHub.toggleFollow({
  //     follower: getAddressFromSigner(),
  //     profileIds: typedData.value.profileIds,
  //     datas: typedData.value.datas,
  //     sig: {
  //       v,
  //       r,
  //       s,
  //       deadline: typedData.value.deadline,
  //     },
  //   });
  //   console.log("follow: tx hash", tx.hash);
  //   return tx.hash;
};

(async () => {
  await toggleFollow();
})();
