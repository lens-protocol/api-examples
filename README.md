# Lens API

This repo has running code which you can execute to help you understand how to interact with the Lens API.

Lens API is beta at the moment and can change without warning!

Full documentation is available at [https://docs.lens.dev/docs/introduction](https://docs.lens.dev/docs/introduction).

## Setup

for the scripts to run you need to create a `.env` (or copy the template `cp .env.template .env`) file with these variables:

```
PK=YOUR_PK
MUMBAI_RPC_URL=https://rpc-mumbai.matic.today
PROFILE_ID=PROFILE_ID
LENS_API=https://api-mumbai.lens.dev/
LENS_HUB_CONTRACT=0x60Ae865ee4C725cd04353b5AAb364553f56ceF82
LENS_PERIPHERY_CONTRACT=0xD5037d72877808cdE7F669563e9389930AF404E8

INFURA_PROJECT_ID=YOUR_INFURA_PROJECT_ID
INFURA_SECRET=YOUR_INFURA_SECRET
```

note `PROFILE_ID` is optional but required on some endpoints!
note 2: Highly advised to create an API key and use the Alchemy RPC provider for Mumbai to avoid rate limiting.

## How to run

look in the `package.json` file for the `scripts` section you see all the scripts you can run. This is prefixed with `resolver:method`.

example running:

```bash
$ npm run authentication:login
```

## Issues

If you have any issues with the API or want a new endpoint please create an issue!
