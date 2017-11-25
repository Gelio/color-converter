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

  public normalizeComponents() {
    throw new Error('Not implemented');
  }
}
