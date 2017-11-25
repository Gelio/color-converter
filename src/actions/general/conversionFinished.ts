import { AnyAction } from 'redux';

import { ColorSpaceConversionResult } from 'models/conversion-results/ColorSpaceConversionResult';

export const CONVERSION_FINISHED = 'CONVERSION_FINISHED';

export function conversionFinished(
  conversionResult: ColorSpaceConversionResult
): AnyAction {
  return {
    type: CONVERSION_FINISHED,
    conversionResult
  };
}
