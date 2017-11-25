import { Action } from 'redux';

export const CONVERSION_STARTED = 'CONVERSION_STARTED';

export function conversionStarted(): Action {
  return {
    type: CONVERSION_STARTED
  };
}
