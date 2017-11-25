import { combineReducers, createStore } from 'redux';

import { inputReducer, InputState } from 'reducers/inputReducer';

export interface AppState {
  input: InputState;
}

const reducer = combineReducers<AppState>({
  input: inputReducer
});

export const appStore = createStore<AppState>(
  reducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
