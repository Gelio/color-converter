import { AnyAction } from 'redux';

import { ColorPoint } from 'models/ColorPoint';
import { IlluminantType } from 'models/IlluminantType';

export const CHANGE_ILLUMINANT_TYPE = 'CHANGE_ILLUMINANT_TYPE';

export function changeIlluminantType(illuminantType: IlluminantType, whitePoint: ColorPoint): AnyAction {
  return {
    type: CHANGE_ILLUMINANT_TYPE,
    illuminantType,
    whitePoint
  };
}
