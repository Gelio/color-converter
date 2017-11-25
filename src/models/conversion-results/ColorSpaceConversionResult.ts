import { PartialConversionResult } from './PartialConversionResult';

export interface ColorSpaceConversionResult {
  components: PartialConversionResult[];

  normalizeComponents(): void;
  getImageData(): ImageData[];
}
