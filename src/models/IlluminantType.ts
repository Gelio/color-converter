import { ColorPoint } from 'models/ColorPoint';
import { LabeledValue } from 'utils/LabeledValue';

export enum IlluminantType {
  // TODO: add more illuminant types
  D65,
  Custom
}

interface PredefinedIlluminant {
  illuminantType: IlluminantType;
  whitePoint(): ColorPoint;
}

export const predefinedIlluminants: PredefinedIlluminant[] = [
  // TODO: fix this
  { illuminantType: IlluminantType.D65, whitePoint: () => ({ x: 0, y: 0 }) }
];

export const labeledIlluminants: LabeledValue<IlluminantType>[] = [
  { value: IlluminantType.D65, label: 'D65' },
  { value: IlluminantType.Custom, label: 'Custom' }
];
