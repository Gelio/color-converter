import { AnyAction } from 'redux';

import { CONVERSION_FINISHED } from 'actions/general/conversionFinished';

import { ColorSpaceConversionResult } from 'models/conversion-results/ColorSpaceConversionResult';

export interface OutputState {
  conversionResult: ColorSpaceConversionResult | null;
}

const defaultState: OutputState = {
  conversionResult: null
};

export function outputReducer(
  state: OutputState = defaultState,
  action: AnyAction
) {
  switch (action.type) {
    case CONVERSION_FINISHED:
      return Object.assign({}, state, {
        conversionResult: action.conversionResult
      });

    default:
      return state;
  }
}
