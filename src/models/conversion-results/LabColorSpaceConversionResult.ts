import { ColorSpaceConversionResult } from './ColorSpaceConversionResult';
import { PartialConversionResult } from './PartialConversionResult';

export class LabColorSpaceConversionResult implements ColorSpaceConversionResult {
  public readonly components: PartialConversionResult[];

  constructor(
    lComponentResult: PartialConversionResult,
    aComponentResult: PartialConversionResult,
    bComponentResult: PartialConversionResult
  ) {
    this.components = [lComponentResult, aComponentResult, bComponentResult];
  }

  public convertComponentsToImageData(): ImageData[] {
    return [this.getLImageData(), this.getAImageData(), this.getBImageData()];
  }

  // tslint:disable no-increment-decrement
  private getLImageData(): ImageData {
    const lComponent = this.components[0];
    const lImageData = new ImageData(lComponent.width, lComponent.height);

    let index = 0;
    lComponent.values.forEach(l => {
      const normalizedL = l / 100 * 255;
      lImageData.data[index++] = normalizedL;
      lImageData.data[index++] = normalizedL;
      lImageData.data[index++] = normalizedL;
      lImageData.data[index++] = 255;
    });

    return lImageData;
  }

  private getAImageData(): ImageData {
    const aComponent = this.components[1];
    const aImageData = new ImageData(aComponent.width, aComponent.height);

    let index = 0;
    aComponent.values.forEach(a => {
      aImageData.data[index++] = 127 + a;
      aImageData.data[index++] = 127 - a;
      aImageData.data[index++] = 255;
      aImageData.data[index++] = 255;
    });

    return aImageData;
  }

  private getBImageData(): ImageData {
    const bComponent = this.components[2];
    const bImageData = new ImageData(bComponent.width, bComponent.height);

    let index = 0;
    bComponent.values.forEach(b => {
      bImageData.data[index++] = 127 + b;
      bImageData.data[index++] = 127;
      bImageData.data[index++] = 127 - b;
      bImageData.data[index++] = 255;
    });

    return bImageData;
  }
  // tslint:enable no-increment-decrement
}
