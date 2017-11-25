import { ColorSpaceConversionResult } from 'models/conversion-results/ColorSpaceConversionResult';
import { HSVColorSpaceConversionResult } from 'models/conversion-results/HSVColorSpaceConversionResult';
import { PartialConversionResult } from 'models/conversion-results/PartialConversionResult';
import { ColorSpaceConverter } from 'models/converters/ColorSpaceConverter';

export class HSVColorSpaceConverter implements ColorSpaceConverter {
  public convertFromImageData(imageData: ImageData): ColorSpaceConversionResult {
    const { data, width, height } = imageData;
    const lastPixelIndex = width * height * 4 - 4;
    const hValues: number[] = [];
    const sValues: number[] = [];
    const vValues: number[] = [];

    for (let index = 0; index <= lastPixelIndex; index += 4) {
      const { h, s, v } = this.convertSinglePixel(data[index], data[index + 1], data[index + 2]);
      hValues.push(h);
      sValues.push(s);
      vValues.push(v);
    }

    return this.createConversionResult(hValues, sValues, vValues, width, height);
  }

  public convertFromRGB(r: number, g: number, b: number): ColorSpaceConversionResult {
    const { h, s, v } = this.convertSinglePixel(r, g, b);

    return this.createConversionResult([h], [s], [v], 1, 1);
  }

  private convertSinglePixel(r: number, g: number, b: number): { h: number; s: number; v: number } {
    const result = {
      h: 0,
      s: 0,
      v: Math.max(r, g, b)
    };

    const min = Math.min(r, g, b);

    if (min === result.v) {
      result.h = 0;
      result.s = 0;
    } else {
      if (result.v === r) {
        result.h = 0 + (g - b) * 60 / (result.v - min);
      } else if (min === g) {
        result.h = 120 + (b - r) * 60 / (result.v - min);
      } else if (min === b) {
        result.h = 240 + (r - g) * 60 / (result.v - min);
      }
    }

    if (result.h < 0) {
      result.h += 360;
    }

    if (result.v === 0) {
      result.s = 0;
    } else {
      result.s = (result.v - min) * 100 / result.v;
    }

    result.v *= 100 / 255;

    return result;
  }

  private createConversionResult(
    hValues: number[],
    sValues: number[],
    vValues: number[],
    width: number,
    height: number
  ): HSVColorSpaceConversionResult {
    const hComponent = new PartialConversionResult('H', hValues, width, height);

    const sComponent = new PartialConversionResult('S', sValues, width, height);

    const vComponent = new PartialConversionResult('V', vValues, width, height);

    return new HSVColorSpaceConversionResult(hComponent, sComponent, vComponent);
  }
}
