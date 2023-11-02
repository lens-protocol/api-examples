import {
  DegreesOfSeparationReferenceModuleInput,
  ReferenceModuleInput,
  UnknownReferenceModuleInput,
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

export const referenceModuleUnknownReferenceModule = (
  input: UnknownReferenceModuleInput
): ReferenceModuleInput => {
  return {
    unknownReferenceModule: input,
  };
};
