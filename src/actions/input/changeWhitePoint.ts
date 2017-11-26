import { AnyAction } from 'redux';

import { ColorPoint } from 'models/ColorPoint';

export const CHANGE_WHITE_POINT = 'CHANGE_WHITE_POINT';

export function changeWhitePoint(whitePoint: ColorPoint): AnyAction {
  return {
    type: CHANGE_WHITE_POINT,
    whitePoint
  };
}
