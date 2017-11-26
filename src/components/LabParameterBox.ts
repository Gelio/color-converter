import { wire } from 'hyperhtml/esm';

import {
  ColorProfileType,
  labeledColorProfiles,
  predefinedColorProfiles
} from 'models/ColorProfileType';
import { ConversionParameters } from 'models/ConversionParameters';
import { IlluminantType, labeledIlluminants, predefinedIlluminants } from 'models/IlluminantType';

import { changeColorProfileType } from 'actions/input/changeColorProfileType';
import { changeConversionParameters } from 'actions/input/changeConversionParameters';
import { changeIlluminantType } from 'actions/input/changeIlluminantType';
import { changeWhitePoint } from 'actions/input/changeWhitePoint';

import { appStore } from 'appStore';
import { LabeledSelect } from 'components/LabeledSelect';

function onIlluminantChange(newIlluminant: IlluminantType) {
  appStore.dispatch(changeIlluminantType(newIlluminant));
  appStore.dispatch(changeColorProfileType(ColorProfileType.Custom));

  if (newIlluminant === IlluminantType.Custom) {
    return;
  }

  const foundIlluminant = predefinedIlluminants.find(
    illuminant => illuminant.illuminantType === newIlluminant
  );
  if (!foundIlluminant) {
    throw new Error('Selected illuminant not found in predefined ones');
  }

  appStore.dispatch(changeWhitePoint(foundIlluminant.whitePoint()));
}

function onColorProfileChange(newColorProfile: ColorProfileType) {
  appStore.dispatch(changeColorProfileType(newColorProfile));
  appStore.dispatch(changeIlluminantType(IlluminantType.Custom));

  if (newColorProfile === ColorProfileType.Custom) {
    return;
  }

  const foundColorProfile = predefinedColorProfiles.find(
    colorProfile => colorProfile.colorProfileType === newColorProfile
  );
  if (!foundColorProfile) {
    throw new Error('Selected color profile not found in predefined ones');
  }

  appStore.dispatch(changeConversionParameters(foundColorProfile.parameters()));
}

export function LabParameterBox(
  illuminantType: IlluminantType,
  colorProfileType: ColorProfileType,
  conversionParameters: ConversionParameters
) {
  return wire()`
    <div>
      <label for="illuminant-type-select">Illuminant type: </label>
      ${LabeledSelect('illuminant-type-select', labeledIlluminants, illuminantType, onIlluminantChange)}
    </div>

    <div>
      <label for="color-profile-select">Color profile: </label>
      ${LabeledSelect('color-profile-select', labeledColorProfiles, colorProfileType, onColorProfileChange)}
    </div>

    <pre>${JSON.stringify(conversionParameters, null, 2)}</pre>
  `;
}
