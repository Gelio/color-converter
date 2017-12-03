import { ColorSpaceConversionResult } from './ColorSpaceConversionResult';
import { PartialConversionResult } from './PartialConversionResult';

export class YCbCrColorSpaceConversionResult implements ColorSpaceConversionResult {
  public readonly components: PartialConversionResult[];

  constructor(
    yComponentResult: PartialConversionResult,
    cbComponentResult: PartialConversionResult,
    crComponentResult: PartialConversionResult
  ) {
    this.components = [yComponentResult, cbComponentResult, crComponentResult];
  }

  public convertComponentsToImageData(): ImageData[] {
    return [this.getYImageData(), this.getCbImageData(), this.getCrImageData()];
  }

  // tslint:disable no-increment-decrement
  private getYImageData(): ImageData {
    const yComponent = this.components[0];
    const yImageData = new ImageData(yComponent.width, yComponent.height);

    let index = 0;
    yComponent.values.forEach(y => {
      yImageData.data[index++] = y;
      yImageData.data[index++] = y;
      yImageData.data[index++] = y;
      yImageData.data[index++] = 255;
    });

    return yImageData;
  }

  private getCbImageData(): ImageData {
    const cbComponent = this.components[1];
    const cbImageData = new ImageData(cbComponent.width, cbComponent.height);

    let index = 0;
    cbComponent.values.forEach(cb => {
      cbImageData.data[index++] = 127;
      cbImageData.data[index++] = 255 - cb;
      cbImageData.data[index++] = cb;
      cbImageData.data[index++] = 255;
    });

    return cbImageData;
  }

  private getCrImageData(): ImageData {
    const crComponent = this.components[2];
    const crImageData = new ImageData(crComponent.width, crComponent.height);

    let index = 0;
    crComponent.values.forEach(cr => {
      crImageData.data[index++] = cr;
      crImageData.data[index++] = 255 - cr;
      crImageData.data[index++] = 127;
      crImageData.data[index++] = 255;
    });

    return crImageData;
  }
  // tslint:enable no-increment-decrement
}
