import { ColorSpaceType } from 'models/ColorSpaceType';
import { ConversionParameters } from 'models/ConversionParameters';

export const configuration = {
  defaultImageUrl: 'images/7-colorful-photography.jpg',
  defaultColorSpace: ColorSpaceType.YCbCr,
  defaultConversionParameters: ConversionParameters.sRGB()
};
