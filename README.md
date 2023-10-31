# Lens API

This repo has running code which you can execute to help you understand how to interact with the Lens API.

Lens API is beta at the moment and can change without warning!

Full documentation is available at [https://docs.lens.xyz/v2/docs/introduction](https://docs.lens.xyz/v2/docs/introduction).

## Setup

for the scripts to run you need to create a `.env` (or copy the template `cp .env.template .env`) file with these variables:

```
PK=YOUR_PK
MUMBAI_RPC_URL=https://rpc-mumbai.matic.today
PROFILE_ID=PROFILE_ID
LENS_API=https://api-v2-mumbai.lens.dev/
LENS_HUB_CONTRACT=0xC1E77eE73403B8a7478884915aA599932A677870
LENS_PERIPHERY_CONTRACT=0xc3a1fabd7f8d290f7b0C45AA88af6e9c9E267843
INFURA_PROJECT_ID=YOUR_INFURA_PROJECT_ID
INFURA_SECRET=YOUR_INFURA_SECRET
```

- `PROFILE_ID` is optional but required on some endpoints! Also, make sure to insert the `PROFILE_ID` in hexadecimal format.
- Highly advised to create an API key and use the Alchemy RPC provider for Mumbai to avoid rate limiting. -`PK` represents Private key here.
- This project uses infura ipfs to pin content which now is API keys only so you have to create an API key on their side. You can also use another storage provider or pinning service if you which, feel free to do a PR with that service and we can change the .env to include option to pick.

## How to run

Always make sure you `npm install` beforehand.

look in the `package.json` file for the `scripts` section you see all the scripts you can run. This is prefixed with `resolver:method`.

example running:

```bash
$ npm run authentication:login
```

## Issues

If you have any issues with the API or want a new endpoint please create an issue!
