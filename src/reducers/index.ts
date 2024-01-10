import { AnyAction, combineReducers, Reducer } from 'redux';

import dayStateStore from './day-state';
import menuStateStore from './menu-state';

export const appReducer = combineReducers({
  menuStateStore,
  dayStateStore,
});

export type RootState = ReturnType<typeof appReducer>;

export const rootReducer: Reducer = (state: RootState, action: AnyAction) => appReducer(state, action);
