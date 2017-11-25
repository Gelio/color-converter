import { mutateMap } from 'utils/mutateMap';

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
    const [lComponent, aComponent, bComponent] = this.components;

    mutateMap(lComponent.values, l => l / 100 * 255);
    mutateMap(aComponent.values, a => a + 128);
    mutateMap(bComponent.values, b => b + 128);
  }
}
