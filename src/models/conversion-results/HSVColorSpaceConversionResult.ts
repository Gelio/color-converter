import { ColorSpaceConversionResult } from './ColorSpaceConversionResult';
import { PartialConversionResult } from './PartialConversionResult';

export class HSVColorSpaceConversionResult implements ColorSpaceConversionResult {
  public readonly components: PartialConversionResult[];

  constructor(
    hComponentResult: PartialConversionResult,
    sComponentResult: PartialConversionResult,
    vComponentResult: PartialConversionResult
  ) {
    this.components = [hComponentResult, sComponentResult, vComponentResult];
  }

  public convertComponentsToImageData(): ImageData[] {
    return [this.getHueImageData(), this.getSaturationImageData(), this.getValueImageData()];
  }

  // tslint:disable no-increment-decrement
  private getHueImageData(): ImageData {
    const hComponent = this.components[0];
    const hueImageData = new ImageData(hComponent.width, hComponent.height);

    let index = 0;
    hComponent.values.forEach(hue => {
      const normalizedHue = hue / 360 * 255;
      hueImageData.data[index++] = normalizedHue;
      hueImageData.data[index++] = normalizedHue;
      hueImageData.data[index++] = normalizedHue;
      hueImageData.data[index++] = 255;
    });

    return hueImageData;
  }

  private getSaturationImageData(): ImageData {
    const sComponent = this.components[1];
    const saturationImageData = new ImageData(sComponent.width, sComponent.height);

    let index = 0;
    sComponent.values.forEach(saturation => {
      const normalizedSaturation = saturation / 100 * 255;
      saturationImageData.data[index++] = normalizedSaturation;
      saturationImageData.data[index++] = normalizedSaturation;
      saturationImageData.data[index++] = normalizedSaturation;
      saturationImageData.data[index++] = 255;
    });

    return saturationImageData;
  }

  private getValueImageData(): ImageData {
    const vComponent = this.components[2];
    const valueImageData = new ImageData(vComponent.width, vComponent.height);

    let index = 0;
    vComponent.values.forEach(value => {
      const normalizedValue = value / 100 * 255;
      valueImageData.data[index++] = normalizedValue;
      valueImageData.data[index++] = normalizedValue;
      valueImageData.data[index++] = normalizedValue;
      valueImageData.data[index++] = 255;
    });

    return valueImageData;
  }
  // tslint:enable no-increment-decrement
}
