import { ColorSpaceConversionResult } from './ColorSpaceConversionResult';
import { PartialConversionResult } from './PartialConversionResult';

export class HSVColorSpaceConversionResult
  implements ColorSpaceConversionResult {
  public readonly components: PartialConversionResult[];

  constructor(
    hComponentResult: PartialConversionResult,
    sComponentResult: PartialConversionResult,
    vComponentResult: PartialConversionResult
  ) {
    this.components = [hComponentResult, sComponentResult, vComponentResult];
  }

  public normalizeComponents() {
    const [hComponent, sComponent, vComponent] = this.components;

    hComponent.values = hComponent.values.map(hue => hue / 360 * 255);
    sComponent.values = sComponent.values.map(saturation => saturation / 100 * 255);
    vComponent.values = vComponent.values.map(saturation => saturation / 100 * 255);
  }

  public getImageData(): ImageData[] {
    return this.components.map(component => {
      const imageData = new ImageData(component.width, component.height);

      let imageDataIndex = 0;

      component.values.forEach(value => {
        // tslint:disable:no-increment-decrement
        imageData.data[imageDataIndex++] = value;
        imageData.data[imageDataIndex++] = value;
        imageData.data[imageDataIndex++] = value;
        imageData.data[imageDataIndex++] = 255;
        // tslint:disable:no-increment-decrement
      });

      return imageData;
    });
  }
}
