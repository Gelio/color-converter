import { AnyAction } from 'redux';

import { ColorSpaceType } from 'models/ColorSpaceType';

export const CHANGE_SELECTED_COLOR_SPACE = 'CHANGE_SELECTED_COLOR_SPACE';

export interface ChangeSelectedColorSpaceAction extends AnyAction {
  colorSpace: ColorSpaceType;
}

export function changeSelectedColorSpace(
  colorSpace: ColorSpaceType
): ChangeSelectedColorSpaceAction {
  return {
    type: CHANGE_SELECTED_COLOR_SPACE,
    colorSpace
  };
}
