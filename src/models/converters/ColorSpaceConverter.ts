import { ColorSpaceConversionResult } from 'models/conversion-results/ColorSpaceConversionResult';

export interface ColorSpaceConverter {
  convertFromImageData(imageData: ImageData): ColorSpaceConversionResult;
  convertFromRGB(r: number, b: number, g: number): ColorSpaceConversionResult;
}
