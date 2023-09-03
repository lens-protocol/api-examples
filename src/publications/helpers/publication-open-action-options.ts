import { OpenActionModuleInput } from '../../graphql/generated';

export const simpleCollectAmountAndLimit = (
  recipient: string,
  collectLimit: string = '100',
  referralFee: number = 20,
  followerOnly = false
): OpenActionModuleInput => {
  return {
    simpleCollectOpenAction: {
      amount: {
        currency: '0x2058A9D7613eEE744279e3856Ef0eAda5FCbaA7e',
        value: '10',
      },
      collectLimit,
      followerOnly,
      referralFee,
      recipient,
    },
  };
};

export const simpleCollectAmountAndLimitAndEndsAt = (
  recipient: string,
  collectLimit: string = '100',
  endsAt: Date = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
  referralFee: number = 20,
  followerOnly = false
): OpenActionModuleInput => {
  return {
    simpleCollectOpenAction: {
      amount: {
        currency: '0x2058A9D7613eEE744279e3856Ef0eAda5FCbaA7e',
        value: '10',
      },
      collectLimit,
      followerOnly,
      referralFee,
      recipient,
      endsAt: endsAt.toISOString(),
    },
  };
};

export const simpleCollectFreeAndLimit = (
  collectLimit: string = '100',
  followerOnly = false
): OpenActionModuleInput => {
  return {
    simpleCollectOpenAction: {
      collectLimit,
      followerOnly,
    },
  };
};

export const simpleCollectFreeAndLimitEndsAt = (
  collectLimit: string = '100',
  endsAt: Date = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
  followerOnly = false
): OpenActionModuleInput => {
  return {
    simpleCollectOpenAction: {
      collectLimit,
      followerOnly,
      endsAt: endsAt.toISOString(),
    },
  };
};

export const simpleCollectFreeAndNoLimit = (followerOnly = false): OpenActionModuleInput => {
  return {
    simpleCollectOpenAction: {
      followerOnly,
    },
  };
};

export const simpleCollectFreeAndNoLimitEndsAt = (
  endsAt: Date = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
  followerOnly = false
): OpenActionModuleInput => {
  return {
    simpleCollectOpenAction: {
      followerOnly,
      endsAt: endsAt.toISOString(),
    },
  };
};
