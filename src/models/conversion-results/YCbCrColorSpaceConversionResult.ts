import { ColorSpaceConversionResult } from './ColorSpaceConversionResult';
import { PartialConversionResult } from './PartialConversionResult';

export class YCbCrColorSpaceConversionResult
  implements ColorSpaceConversionResult {
  public readonly components: PartialConversionResult[];

  constructor(
    yComponentResult: PartialConversionResult,
    cbComponentResult: PartialConversionResult,
    crComponentResult: PartialConversionResult
  ) {
    this.components = [yComponentResult, cbComponentResult, crComponentResult];
  }

  public normalizeComponents() {
    throw new Error('Not implemented');
  }

  public getImageData(): ImageData[] {
    throw new Error('Not implemented');
  }
}
