import {
  DegreesOfSeparationReferenceModuleInput,
  ReferenceModuleInput,
} from '../../graphql/generated';

export const referenceModuleFollowOnly: ReferenceModuleInput = {
  followerOnlyReferenceModule: true,
};

export const referenceModuleDegreesOfSeparation = (
  input: DegreesOfSeparationReferenceModuleInput
): ReferenceModuleInput => {
  return {
    degreesOfSeparationReferenceModule: input,
  };
};
