import { mutateMap } from 'utils/mutateMap';

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

    mutateMap(hComponent.values, hue => hue / 360 * 255);
    mutateMap(sComponent.values, saturation => saturation / 100 * 255);
    mutateMap(vComponent.values, saturation => saturation / 100 * 255);
  }
}
