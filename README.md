# Lens API

This repo has running code which you can execute to help you understand how to interact with the Lens API.

Lens API is beta at the moment and can change without warning! 

Full documentation is available at [https://docs.lens.dev/docs/introduction](https://docs.lens.dev/docs/introduction).

## Setup

for the scripts to run you need to create a `.env` file with these variables:

```
PK=YOUR_PK
ETHEREUM_RPC_URL=RPC_URL
PROFILE_ID=PROFILE_ID
LENS_API=https://api-mumbai.lens.dev/
```

note `PROFILE_ID` is optional but required on some endpoints!

## How to run

look in the `package.json` file for the `scripts` section you see all the scripts you can run. This is prefixed with `resolver:method`.

All scripts below and will keep in sync here so it is easy to view.

example running:

```bash
$ npm run authentication:login
```

```json
"scripts": {
    "authentication:login": "env-cmd -f .env ts-node ./src/authentication/login --init",
    "authentication:refresh": "env-cmd -f .env ts-node ./src/authentication/refresh",
    "authentication:verify": "env-cmd -f .env ts-node ./src/authentication/verify",
    "claim:claimable-handles": "env-cmd -f .env ts-node ./src/claim/claimable-handles",
    "claim:claimed-handles": "env-cmd -f .env ts-node ./src/claim/claimed-handles",
    "claim:claim-handle": "env-cmd -f .env ts-node ./src/claim/claim-handle",
    "dispatcher:set-dispatcher": "env-cmd -f .env ts-node ./src/dispatcher/set-dispatcher",
    "explore:explore-publications": "env-cmd -f .env ts-node ./src/explore/explore-publications",
    "follow:approve-follow": "env-cmd -f .env ts-node ./src/follow/approve-follow",
    "follow:does-follow": "env-cmd -f .env ts-node ./src/follow/does-follow",
    "follow:follow": "env-cmd -f .env ts-node ./src/follow/follow --init",
    "follow:follower-nft-owned-token-ids": "env-cmd -f .env ts-node ./src/follow/follower-nft-owned-token-ids",
    "follow:followers": "env-cmd -f .env ts-node ./src/follow/followers",
    "follow:following": "env-cmd -f .env ts-node ./src/follow/following",
    "follow:set-follow-module": "env-cmd -f .env ts-node ./src/follow/set-follow-module",
    "follow:set-follow-nft": "env-cmd -f .env ts-node ./src/follow/set-follow-nft",
    "follow:pending-approval-follows": "env-cmd -f .env ts-node ./src/follow/pending-approval-follows --init",
    "follow:unfollow": "env-cmd -f .env ts-node ./src/follow/unfollow",
    "health:ping": "env-cmd -f .env ts-node ./src/health/ping",
    "indexer:has-transaction-been-indexed": "env-cmd -f .env ts-node ./src/indexer/has-transaction-been-indexed --init",
    "module:approve-module": "env-cmd -f .env ts-node ./src/module/approve-module --init",
    "module:approved-allowance-of-modules": "env-cmd -f .env ts-node ./src/module/approved-allowance-of-modules",
    "module:collect": "env-cmd -f .env ts-node ./src/module/collect",
    "module:enabled-modules-currencies": "env-cmd -f .env ts-node ./src/module/enabled-modules-currencies --init",
    "module:enabled-modules": "env-cmd -f .env ts-node ./src/module/enabled-modules --init",
    "nfts:get-users-nfts": "env-cmd -f .env ts-node ./src/nfts/get-users-nfts",
    "notifications:users-notifications": "env-cmd -f .env ts-node ./src/notifications/users-notifications",
    "profile:create-profile": "env-cmd -f .env ts-node ./src/profile/create-profile",
    "profile:get-profiles": "env-cmd -f .env ts-node ./src/profile/get-profiles --init",
    "profile:recommended-profiles": "env-cmd -f .env ts-node ./src/profile/recommended-profiles",
    "profile:update-profile": "env-cmd -f .env ts-node ./src/profile/update-profile",
    "profile:set-profile-image-uri-normal": "env-cmd -f .env ts-node ./src/profile/set-profile-image-uri-normal",
    "publications:comment": "env-cmd -f .env ts-node ./src/publications/comment",
    "publications:mirror": "env-cmd -f .env ts-node ./src/publications/mirror",
    "publications:get-publication": "env-cmd -f .env ts-node ./src/publications/get-publication",
    "publications:get-publications": "env-cmd -f .env ts-node ./src/publications/get-publications",
    "publications:has-mirrored-publication": "env-cmd -f .env ts-node ./src/publications/has-mirrored-publication",
    "publications:post": "env-cmd -f .env ts-node ./src/publications/post",
    "reporting:report-publication": "env-cmd -f .env ts-node ./src/reporting/report-publication",
    "revenue:user-revenue": "env-cmd -f .env ts-node ./src/revenue/user-revenue",
    "search:search-profiles-or-publications": "env-cmd -f .env ts-node ./src/search/search-profiles-or-publications",
    "timeline:user-timeline": "env-cmd -f .env ts-node ./src/timeline/user-timeline"
  }
```

## Issues

If you have any issues with the API or want a new endpoint please create an issue!
