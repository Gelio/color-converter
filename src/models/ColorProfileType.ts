import { ConversionParameters } from 'models/ConversionParameters';
import { LabeledValue } from 'utils/LabeledValue';

export enum ColorProfileType {
  sRGB,
  AdobeRGB,
  AppleRGB,
  CIERGB,
  WideGamut,
  PAL,
  Custom
}

interface PredefinedColorProfile {
  colorProfileType: ColorProfileType;
  parameters(): ConversionParameters;
}

export const predefinedColorProfiles: PredefinedColorProfile[] = [
  { colorProfileType: ColorProfileType.AdobeRGB, parameters: ConversionParameters.adobeRGB },
  { colorProfileType: ColorProfileType.AppleRGB, parameters: ConversionParameters.appleRGB },
  { colorProfileType: ColorProfileType.sRGB, parameters: ConversionParameters.sRGB },
  { colorProfileType: ColorProfileType.CIERGB, parameters: ConversionParameters.cieRGB },
  { colorProfileType: ColorProfileType.WideGamut, parameters: ConversionParameters.wideGamut },
  { colorProfileType: ColorProfileType.PAL, parameters: ConversionParameters.pal }
];

export const labeledColorProfiles: LabeledValue<ColorProfileType>[] = [
  { value: ColorProfileType.AdobeRGB, label: 'AdobeRGB' },
  { value: ColorProfileType.AppleRGB, label: 'AppleRGB' },
  { value: ColorProfileType.sRGB, label: 'sRGB' },
  { value: ColorProfileType.CIERGB, label: 'CIERGB' },
  { value: ColorProfileType.WideGamut, label: 'WideGamut' },
  { value: ColorProfileType.PAL, label: 'PAL' },
  { value: ColorProfileType.Custom, label: 'Custom' }
];
