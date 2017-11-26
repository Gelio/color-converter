import { AnyAction } from 'redux';

import { IlluminantType } from 'models/IlluminantType';

export const CHANGE_ILLUMINANT_TYPE = 'CHANGE_ILLUMINANT_TYPE';

export function changeIlluminantType(illuminantType: IlluminantType): AnyAction {
  return {
    type: CHANGE_ILLUMINANT_TYPE,
    illuminantType
  };
}
