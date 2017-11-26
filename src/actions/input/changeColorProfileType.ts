import { AnyAction } from 'redux';

import { ColorProfileType } from 'models/ColorProfileType';
import { ConversionParameters } from 'models/ConversionParameters';

export const CHANGE_COLOR_PROFILE_TYPE = 'CHANGE_COLOR_PROFILE_TYPE';

export function changeColorProfileType(colorProfileType: ColorProfileType, conversionParameters: ConversionParameters): AnyAction {
  return {
    type: CHANGE_COLOR_PROFILE_TYPE,
    colorProfileType,
    conversionParameters
  };
}
