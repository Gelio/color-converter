import { AnyAction } from 'redux';

import { ConversionParameters } from 'models/ConversionParameters';

export const CHANGE_CONVERSION_PARAMETERS = 'CHANGE_CONVERSION_PARAMETERS';

export function changeConversionParameters(conversionParameters: ConversionParameters): AnyAction {
  return {
    type: CHANGE_CONVERSION_PARAMETERS,
    conversionParameters
  };
}
