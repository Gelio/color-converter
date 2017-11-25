import { InputAction } from 'actions/input';
import { CHANGE_ORIGINAL_IMAGE } from 'actions/input/changeOriginalImage';
import { ColorSpaceType } from 'models/ColorSpaceType';

export interface InputState {
  originalImage: HTMLImageElement | null;
  selectedColorSpace: ColorSpaceType;
}

const defaultState: InputState = {
  originalImage: null,
  selectedColorSpace: ColorSpaceType.YCbCr
};

export function inputReducer(
  state: InputState = defaultState,
  action: InputAction
) {
  switch (action.type) {
    case CHANGE_ORIGINAL_IMAGE:
      return Object.assign({}, state, {
        originalImage: action.image
      });

    default:
      return state;
  }
}
