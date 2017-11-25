import { combineReducers, createStore } from 'redux';

import { inputReducer, InputState } from 'reducers/inputReducer';
import { outputReducer, OutputState } from 'reducers/outputReducer';

export interface AppState {
  input: InputState;
  output: OutputState;
}

const reducer = combineReducers<AppState>({
  input: inputReducer,
  output: outputReducer
});

export const appStore = createStore<AppState>(
  reducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
