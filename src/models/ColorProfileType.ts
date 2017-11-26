import { ConversionParameters } from 'models/ConversionParameters';

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
