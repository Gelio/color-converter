import { PartialConversionResult } from './PartialConversionResult';

export interface ColorSpaceConversionResult {
  components: PartialConversionResult[];

  convertComponentsToImageData(): ImageData[];
}
