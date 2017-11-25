import { ColorSpaceConversionResult } from 'models/conversion-results/ColorSpaceConversionResult';
import { HSVColorSpaceConversionResult } from 'models/conversion-results/HSVColorSpaceConversionResult';
import { PartialConversionResult } from 'models/conversion-results/PartialConversionResult';
import { ColorSpaceConverter } from 'models/converters/ColorSpaceConverter';

export class HSVColorSpaceConverter implements ColorSpaceConverter {
  public convertFromImageData(
    imageData: ImageData
  ): ColorSpaceConversionResult {
    const { data, width, height } = imageData;
    const lastPixelIndex = width * height * 4 - 4;
    const hValues: number[] = [];
    const sValues: number[] = [];
    const vValues: number[] = [];

    for (let index = 0; index <= lastPixelIndex; index += 4) {
      const { h, s, v } = this.convertSinglePixel(
        data[index],
        data[index + 1],
        data[index + 2]
      );
      hValues.push(h);
      sValues.push(s);
      vValues.push(v);
    }

    return this.createConversionResult(
      hValues,
      sValues,
      vValues,
      width,
      height
    );
  }

  public convertFromRGB(
    r: number,
    b: number,
    g: number
  ): ColorSpaceConversionResult {
    const { h, s, v } = this.convertSinglePixel(r, g, b);

    return this.createConversionResult([h], [s], [v], 1, 1);
  }

  private convertSinglePixel(
    r: number,
    g: number,
    b: number
  ): { h: number; s: number; v: number } {
    const result = {
      h: 0,
      s: 0,
      v: Math.max(r, g, b)
    };

    const x = Math.min(r, g, b); // temp

    if (x === result.v) {
      result.h = 0;
      result.s = 0;
    } else {
      if (result.v === r) {
        result.h = 0 + (g - b) * 60 / (result.v - x);
      } else if (x === g) {
        result.h = 120 + (b - r) * 60 / (result.v - x);
      } else if (x === b) {
        result.h = 240 + (r - g) * 60 / (result.v - x);
      }
    }

    if (result.h < 0) {
      result.h += 360;
    }

    if (result.v === 0) {
      result.s = 0;
    } else {
      result.s = (result.v - x) * 100 / result.v;
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
    const hComponent: PartialConversionResult = {
      values: hValues,
      label: 'H',
      width,
      height
    };

    const sComponent: PartialConversionResult = {
      values: sValues,
      label: 'S',
      width,
      height
    };

    const vComponent: PartialConversionResult = {
      values: vValues,
      label: 'V',
      width,
      height
    };

    return new HSVColorSpaceConversionResult(
      hComponent,
      sComponent,
      vComponent
    );
  }
}
