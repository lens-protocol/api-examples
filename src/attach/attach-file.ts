import axios, { AxiosResponse } from "axios";
import fs from "fs";
import { gql } from "@apollo/client/core";
import { apolloClient } from "../apollo-client";
import { prettyJSON } from "../helpers";
import { login } from "../authentication/login";
import { PROFILE_ID } from "../config";
import { getAddressFromSigner } from "../ethers.service";
import { request } from "http";

const ATTACH_FILE = `
    mutation AttachFile($request: AttachRequest!) {
        attachFile(request: $request) {
            signedUrl
            key
        }
    }
`;

const getSignedUrl = (request: { mimeType: string }) => {
  return apolloClient.mutate({
    mutation: gql(ATTACH_FILE),
    variables: {
      request: request,
    },
  });
};

export const attachFile = async () => {
  const CONTENT_TYPE = "image/jpeg";
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error("Must define PROFILE_ID in the .env to run this");
  }

  const address = getAddressFromSigner();
  console.log("create comment: address", address);

  await login(address);
  console.log("success - logged ");
  const result = await getSignedUrl({
    mimeType: CONTENT_TYPE,
  });

  prettyJSON("explore: result", result.data);

  console.log("PUSH example image");

  const response: AxiosResponse = await axios({
    method: "PUT",
    url: result.data.attachFile.signedUrl,
    headers: {
      "Content-Type": CONTENT_TYPE,
    },
    data: fs.readFileSync(__dirname + "/file/image_400x400.jpg"),
  });

  console.log("UPLOADED image : ", response.status);
  console.log("URL image : ", result.data.attachFile.signedUrl.split("?")[0]);
  return result.data;
};

(async () => {
  await attachFile();
})();
