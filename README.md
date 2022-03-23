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
LENS_HUB_CONTRACT=0xd7B3481De00995046C7850bCe9a5196B7605c367
```

note `PROFILE_ID` is optional but required on some endpoints!

## How to run

look in the `package.json` file for the `scripts` section you see all the scripts you can run. This is prefixed with `resolver:method`.

example running:

```bash
$ npm run authentication:login
```

## Issues

If you have any issues with the API or want a new endpoint please create an issue!
