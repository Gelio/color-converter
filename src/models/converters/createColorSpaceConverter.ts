import { ColorSpaceType } from 'models/ColorSpaceType';
import { ConversionParameters } from 'models/ConversionParameters';
import { HSVColorSpaceConverter } from 'models/converters/HSVColorSpaceConverter';
import { LabColorSpaceConverter } from 'models/converters/LabColorSpaceConverter';
import { YCbCrColorSpaceConverter } from 'models/converters/YCbCrColorSpaceConverter';
import { XYZConverter } from 'services/XYZConverter';

export function createColorSpaceConverter(
  colorSpace: ColorSpaceType,
  conversionParameters: ConversionParameters
) {
  switch (colorSpace) {
    case ColorSpaceType.HSV:
      return new HSVColorSpaceConverter();

    case ColorSpaceType.YCbCr:
      return new YCbCrColorSpaceConverter();

    case ColorSpaceType.Lab:
      const xyzConverter = new XYZConverter(conversionParameters);

      return new LabColorSpaceConverter(xyzConverter);

    default:
      throw new Error('Unknown color space type');
  }
}
