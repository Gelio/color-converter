import { AnyAction } from 'redux';

export const CHANGE_ORIGINAL_IMAGE = 'CHANGE_ORIGINAL_IMAGE';

export interface ChangeOriginalImageAction extends AnyAction {
  image: HTMLImageElement;
}

export function changeOriginalImage(
  image: HTMLImageElement
): ChangeOriginalImageAction {
  return {
    type: CHANGE_ORIGINAL_IMAGE,
    image
  };
}
