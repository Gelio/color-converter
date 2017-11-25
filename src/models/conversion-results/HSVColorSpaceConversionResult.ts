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
    throw new Error('Not implemented');
  }
}
