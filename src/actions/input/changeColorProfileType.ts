import { ColorProfileType } from 'models/ColorProfileType';
import { AnyAction } from 'redux';

export const CHANGE_COLOR_PROFILE_TYPE = 'CHANGE_COLOR_PROFILE_TYPE';

export function changeColorProfileType(colorProfileType: ColorProfileType): AnyAction {
  return {
    type: CHANGE_COLOR_PROFILE_TYPE,
    colorProfileType
  };
}
