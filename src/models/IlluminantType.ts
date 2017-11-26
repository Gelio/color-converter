import { ColorPoint } from 'models/ColorPoint';
import { LabeledValue } from 'utils/LabeledValue';

export enum IlluminantType {
  A,
  B,
  C,
  D50,
  D55,
  D65,
  D75,
  E,
  F2,
  F7,
  F11,
  Custom
}

interface PredefinedIlluminant {
  illuminantType: IlluminantType;
  whitePoint(): ColorPoint;
}

export const predefinedIlluminants: PredefinedIlluminant[] = [
  { illuminantType: IlluminantType.A, whitePoint: () => ({ x: 0.44757, y: 0.40733 }) },
  { illuminantType: IlluminantType.B, whitePoint: () => ({ x: 0.3484, y: 0.3516 }) },
  { illuminantType: IlluminantType.C, whitePoint: () => ({ x: 0.31006, y: 0.31615 }) },
  { illuminantType: IlluminantType.D50, whitePoint: () => ({ x: 0.34567, y: 0.3585 }) },
  { illuminantType: IlluminantType.D55, whitePoint: () => ({ x: 0.33242, y: 0.34743 }) },
  { illuminantType: IlluminantType.D65, whitePoint: () => ({ x: 0.31273, y: 0.32902 }) },
  { illuminantType: IlluminantType.D75, whitePoint: () => ({ x: 0.29902, y: 0.31485 }) },
  { illuminantType: IlluminantType.E, whitePoint: () => ({ x: 0.33333, y: 0.33333 }) },
  { illuminantType: IlluminantType.F2, whitePoint: () => ({ x: 0.37207, y: 0.37512 }) },
  { illuminantType: IlluminantType.F7, whitePoint: () => ({ x: 0.31285, y: 0.32918 }) },
  { illuminantType: IlluminantType.F11, whitePoint: () => ({ x: 0.38054, y: 0.37691 }) }
];

export const labeledIlluminants: LabeledValue<IlluminantType>[] = [
  { value: IlluminantType.A, label: 'A' },
  { value: IlluminantType.B, label: 'B' },
  { value: IlluminantType.C, label: 'C' },
  { value: IlluminantType.D50, label: 'D50' },
  { value: IlluminantType.D55, label: 'D55' },
  { value: IlluminantType.D65, label: 'D65' },
  { value: IlluminantType.D75, label: 'D75' },
  { value: IlluminantType.E, label: 'E' },
  { value: IlluminantType.F2, label: 'F2' },
  { value: IlluminantType.F7, label: 'F7' },
  { value: IlluminantType.F11, label: 'F11' },
  { value: IlluminantType.Custom, label: 'Custom' }
];
