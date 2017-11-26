import { ColorPoint } from 'models/ColorPoint';

export enum IlluminantType {
  // TODO: add more illuminant types
  D65,
  Custom
}

interface PredefinedIlluminant {
  illuminantType: IlluminantType;
  whitePoint: ColorPoint;
}

export const predefinedIlluminants: PredefinedIlluminant[] = [
  // TODO: fix this
  { illuminantType: IlluminantType.D65, whitePoint: { x: 0, y: 0 } }
];
