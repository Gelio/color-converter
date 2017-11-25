import { ColorSpaceConversionResult } from 'models/conversion-results/ColorSpaceConversionResult';
import { PartialConversionResult } from 'models/conversion-results/PartialConversionResult';
import { YCbCrColorSpaceConversionResult } from 'models/conversion-results/YCbCrColorSpaceConversionResult';
import { ColorSpaceConverter } from 'models/converters/ColorSpaceConverter';

export class YCbCrColorSpaceConverter implements ColorSpaceConverter {
  public convertFromImageData(imageData: ImageData): ColorSpaceConversionResult {
    const { data, width, height } = imageData;
    const lastPixelIndex = width * height * 4 - 4;
    const yValues: number[] = [];
    const cbValues: number[] = [];
    const crValues: number[] = [];

    for (let index = 0; index <= lastPixelIndex; index += 4) {
      const { y, cb, cr } = this.convertSinglePixel(data[index], data[index + 1], data[index + 2]);
      yValues.push(y);
      cbValues.push(cb);
      crValues.push(cr);
    }

    return this.createConversionResult(yValues, cbValues, crValues, width, height);
  }

  public convertFromRGB(r: number, g: number, b: number): ColorSpaceConversionResult {
    const { y, cb, cr } = this.convertSinglePixel(r, g, b);

    return this.createConversionResult([y], [cb], [cr], 1, 1);
  }

  private convertSinglePixel(
    r: number,
    g: number,
    b: number
  ): { y: number; cb: number; cr: number } {
    const y = 0.299 * r + 0.587 * g + 0.114 * b;
    const cb = (b - y) / 1.772 + 128;
    const cr = (r - y) / 1.402 + 128;

    return {
      y,
      cb,
      cr
    };
  }

  private createConversionResult(
    yValues: number[],
    cbValues: number[],
    crValues: number[],
    width: number,
    height: number
  ): YCbCrColorSpaceConversionResult {
    const yComponent = new PartialConversionResult('Y', yValues, width, height);
    const cbComponent = new PartialConversionResult('Cb', cbValues, width, height);
    const crComponent = new PartialConversionResult('Cr', crValues, width, height);

    return new YCbCrColorSpaceConversionResult(yComponent, cbComponent, crComponent);
  }
}
