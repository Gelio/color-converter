import { wire } from 'hyperhtml/esm';

import {
  ColorProfileType,
  labeledColorProfiles,
  predefinedColorProfiles
} from 'models/ColorProfileType';
import { ConversionParameters } from 'models/ConversionParameters';
import { IlluminantType, labeledIlluminants, predefinedIlluminants } from 'models/IlluminantType';

import { changeColorProfileType } from 'actions/input/changeColorProfileType';
import { changeIlluminantType } from 'actions/input/changeIlluminantType';

import { appStore } from 'appStore';
import { LabeledSelect } from 'components/LabeledSelect';
import { ColorPoint } from 'models/ColorPoint';

function onIlluminantChange(currentWhitePoint: ColorPoint, newIlluminant: IlluminantType) {
  if (newIlluminant === IlluminantType.Custom) {
    appStore.dispatch(changeIlluminantType(newIlluminant, currentWhitePoint));

    return;
  }

  const foundIlluminant = predefinedIlluminants.find(
    illuminant => illuminant.illuminantType === newIlluminant
  );
  if (!foundIlluminant) {
    throw new Error('Selected illuminant not found in predefined ones');
  }

  appStore.dispatch(changeIlluminantType(newIlluminant, foundIlluminant.whitePoint()));
}

function onColorProfileChange(
  currentConversionParameters: ConversionParameters,
  newColorProfile: ColorProfileType
) {
  if (newColorProfile === ColorProfileType.Custom) {
    appStore.dispatch(changeColorProfileType(newColorProfile, currentConversionParameters));

    return;
  }

  const foundColorProfile = predefinedColorProfiles.find(
    colorProfile => colorProfile.colorProfileType === newColorProfile
  );
  if (!foundColorProfile) {
    throw new Error('Selected color profile not found in predefined ones');
  }

  appStore.dispatch(changeColorProfileType(newColorProfile, foundColorProfile.parameters()));
}

export function LabParameterBox(
  illuminantType: IlluminantType,
  colorProfileType: ColorProfileType,
  conversionParameters: ConversionParameters
) {
  return wire()`
    <div>
      <label for="illuminant-type-select">Illuminant type: </label>
      ${LabeledSelect(
        'illuminant-type-select',
        labeledIlluminants,
        illuminantType,
        onIlluminantChange.bind(null, conversionParameters.whitePoint)
      )}
    </div>

    <div>
      <label for="color-profile-select">Color profile: </label>
      ${LabeledSelect(
        'color-profile-select',
        labeledColorProfiles,
        colorProfileType,
        onColorProfileChange.bind(null, conversionParameters)
      )}
    </div>

    <pre>${JSON.stringify(conversionParameters, null, 2)}</pre>
  `;
}
