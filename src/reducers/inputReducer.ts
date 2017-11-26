import { AnyAction } from 'redux';

import { configuration } from 'configuration';
import { mergeState } from 'utils/mergeState';

import { CONVERSION_FINISHED } from 'actions/general/conversionFinished';
import { CONVERSION_STARTED } from 'actions/general/conversionStarted';
import { CHANGE_COLOR_PROFILE_TYPE } from 'actions/input/changeColorProfileType';
import { CHANGE_ILLUMINANT_TYPE } from 'actions/input/changeIlluminantType';
import { CHANGE_ORIGINAL_IMAGE } from 'actions/input/changeOriginalImage';
import { CHANGE_SELECTED_COLOR_SPACE } from 'actions/input/changeSelectedColorSpace';

import { ColorProfileType } from 'models/ColorProfileType';
import { ColorSpaceType } from 'models/ColorSpaceType';
import { ConversionParameters } from 'models/ConversionParameters';
import { IlluminantType } from 'models/IlluminantType';

export interface InputState {
  originalImage: HTMLImageElement | null;
  selectedColorSpace: ColorSpaceType;
  conversionAvailable: boolean;
  conversionInProgress: boolean;
  conversionParameters: ConversionParameters;

  colorProfileType: ColorProfileType;
  illuminantType: IlluminantType;
}

const defaultState: InputState = {
  originalImage: null,
  selectedColorSpace: configuration.defaultColorSpace,
  conversionAvailable: false,
  conversionInProgress: false,
  conversionParameters: configuration.defaultConversionParameters,

  colorProfileType: ColorProfileType.sRGB,
  illuminantType: IlluminantType.Custom
};

export function inputReducer(state: InputState = defaultState, action: AnyAction): InputState {
  switch (action.type) {
    case CHANGE_ORIGINAL_IMAGE:
      const newState = mergeState(state, {
        originalImage: action.image
      });
      newState.conversionAvailable = isConversionAvailable(newState);

      return newState;

    case CHANGE_SELECTED_COLOR_SPACE:
      return mergeState(state, {
        selectedColorSpace: action.colorSpace
      });

    case CONVERSION_STARTED:
      return mergeState(state, {
        conversionAvailable: false,
        conversionInProgress: true
      });

    case CONVERSION_FINISHED:
      return mergeState(state, {
        conversionAvailable: true,
        conversionInProgress: false
      });

    case CHANGE_COLOR_PROFILE_TYPE:
      return mergeState(state, {
        colorProfileType: action.colorProfileType,
        illuminantType: IlluminantType.Custom,
        conversionParameters: action.conversionParameters
      });

    case CHANGE_ILLUMINANT_TYPE:
      const currentConversionParameters = state.conversionParameters;

      return mergeState(state, {
        illuminantType: action.illuminantType,
        colorProfileType: ColorProfileType.Custom,
        conversionParameters: new ConversionParameters(
          currentConversionParameters.redPoint,
          currentConversionParameters.greenPoint,
          currentConversionParameters.bluePoint,
          action.whitePoint,
          currentConversionParameters.gamma
        )
      });

    default:
      return state;
  }
}

function isConversionAvailable(state: InputState): boolean {
  return !!state.originalImage && !state.conversionInProgress;
}
