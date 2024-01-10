import { AnyAction, combineReducers, Reducer } from 'redux';

import menuStateStore from './menu-state';

export const appReducer = combineReducers({
  menuStateStore,
});

export type RootState = ReturnType<typeof appReducer>;

export const rootReducer: Reducer = (state: RootState, action: AnyAction) => appReducer(state, action);
