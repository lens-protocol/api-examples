import { OpenActionModuleInput } from '../../graphql/generated';

export const simpleCollectAmountAndLimitAnyone = (address: string): OpenActionModuleInput => {
  return {
    simpleCollectOpenAction: {
      amount: {
        currency: '0x2058A9D7613eEE744279e3856Ef0eAda5FCbaA7e',
        value: '10',
      },
      collectLimit: '100',
      followerOnly: false,
      recipient: address,
    },
  };
};
