import { AnyAction } from 'redux';

import { ChangeOriginalImageAction } from './changeOriginalImage';
import { ChangeSelectedColorSpaceAction } from './changeSelectedColorSpace';

export type InputAction =
  | ChangeOriginalImageAction
  | ChangeSelectedColorSpaceAction
  | AnyAction;
