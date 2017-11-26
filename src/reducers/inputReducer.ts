import { AnyAction } from 'redux';

import { configuration } from 'configuration';

import { CONVERSION_FINISHED } from 'actions/general/conversionFinished';
import { CONVERSION_STARTED } from 'actions/general/conversionStarted';
import { CHANGE_ORIGINAL_IMAGE } from 'actions/input/changeOriginalImage';
import { CHANGE_SELECTED_COLOR_SPACE } from 'actions/input/changeSelectedColorSpace';

import { ColorSpaceType } from 'models/ColorSpaceType';
import { ConversionParameters } from 'models/ConversionParameters';

export interface InputState {
  originalImage: HTMLImageElement | null;
  selectedColorSpace: ColorSpaceType;
  conversionAvailable: boolean;
  conversionInProgress: boolean;
  conversionParameters: ConversionParameters;
}

const defaultState: InputState = {
  originalImage: null,
  selectedColorSpace: configuration.defaultColorSpace,
  conversionAvailable: false,
  conversionInProgress: false,
  conversionParameters: configuration.defaultConversionParameters
};

export function inputReducer(state: InputState = defaultState, action: AnyAction) {
  switch (action.type) {
    case CHANGE_ORIGINAL_IMAGE:
      const newState = Object.assign({}, state, {
        originalImage: action.image
      });
      newState.conversionAvailable = isConversionAvailable(newState);

      return newState;

    case CHANGE_SELECTED_COLOR_SPACE:
      return Object.assign({}, state, {
        selectedColorSpace: action.colorSpace
      });

    case CONVERSION_STARTED:
      return Object.assign({}, state, {
        conversionAvailable: false,
        conversionInProgress: true
      });

    case CONVERSION_FINISHED:
      return Object.assign({}, state, {
        conversionAvailable: true,
        conversionInProgress: false
      });

    default:
      return state;
  }
}

function isConversionAvailable(state: InputState): boolean {
  return !!state.originalImage && !state.conversionInProgress;
}
