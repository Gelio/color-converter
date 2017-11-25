import { ColorPoint } from 'models/ColorPoint';
import { ColorSpaceConversionResult } from 'models/conversion-results/ColorSpaceConversionResult';
import { LabColorSpaceConversionResult } from 'models/conversion-results/LabColorSpaceConversionResult';
import { PartialConversionResult } from 'models/conversion-results/PartialConversionResult';
import { ColorSpaceConverter } from 'models/converters/ColorSpaceConverter';
import { XYZConverter } from 'services/XYZConverter';

export class LabColorSpaceConverter implements ColorSpaceConverter {
  private readonly xyzConverter: XYZConverter;
  private readonly XR = 94.81;
  private readonly YR = 100;
  private readonly ZR = 107.3;

  constructor(
    redPoint: ColorPoint,
    greenPoint: ColorPoint,
    bluePoint: ColorPoint,
    whitePoint: ColorPoint,
    gamma: number
  ) {
    this.xyzConverter = new XYZConverter(redPoint, greenPoint, bluePoint, whitePoint, gamma);
  }

  public convertFromImageData(imageData: ImageData): ColorSpaceConversionResult {
    const { data, width, height } = imageData;
    const lastPixelIndex = width * height * 4 - 4;
    const lValues: number[] = [];
    const aValues: number[] = [];
    const bValues: number[] = [];

    for (let index = 0; index <= lastPixelIndex; index += 4) {
      const { l, a, b } = this.convertSinglePixel(data[index], data[index + 1], data[index + 2]);
      lValues.push(l);
      aValues.push(a);
      bValues.push(b);
    }

    return this.createConversionResult(lValues, aValues, bValues, width, height);
  }

  public convertFromRGB(r: number, g: number, b: number): ColorSpaceConversionResult {
    const result = this.convertSinglePixel(r, g, b);

    return this.createConversionResult([result.l], [result.a], [result.b], 1, 1);
  }

  private convertSinglePixel(r: number, g: number, b: number): { l: number; a: number; b: number } {
    const { X, Y, Z } = this.xyzConverter.rgbToXYZ(r, g, b);

    const xRatio = X / this.XR;
    const yRatio = Y / this.YR;
    const zRatio = Z / this.ZR;

    let l: number;
    if (yRatio > 0.008856) {
      l = 116 * Math.cbrt(yRatio) - 16;
    } else {
      l = 903.3 * yRatio;
    }

    return {
      l,
      a: 500 * (Math.cbrt(xRatio) - Math.cbrt(yRatio)),
      b: 200 * (Math.cbrt(yRatio) - Math.cbrt(zRatio))
    };
  }

  private createConversionResult(
    lValues: number[],
    aValues: number[],
    bValues: number[],
    width: number,
    height: number
  ): LabColorSpaceConversionResult {
    const hComponent = new PartialConversionResult('L', lValues, width, height);

    const sComponent = new PartialConversionResult('a', aValues, width, height);

    const vComponent = new PartialConversionResult('b', bValues, width, height);

    return new LabColorSpaceConversionResult(hComponent, sComponent, vComponent);
  }
}
