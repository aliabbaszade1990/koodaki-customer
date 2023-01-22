import { Action, createReducer, on } from '@ngrx/store';

import * as CoreActions from './core.actions';

export const CORE_FEATURE_KEY = 'core';

export interface CoreState {
  user: any | null;
  initialized: boolean;
  sessionExpired: boolean;
}

export interface CorePartialState {
  readonly [CORE_FEATURE_KEY]: CoreState;
}

export const initialCoreState: CoreState = {
  user: null,
  initialized: false,
  sessionExpired: false,
};

const reducer = createReducer(
  initialCoreState,
  on(CoreActions.initCore, (state) => ({
    ...state,
    user: null,
    initialized: false,
  })),
  on(CoreActions.loginSuccess, (state, { result }) => ({
    ...state,
    user: result.user,
  })),
  on(CoreActions.Initialized, (state) => ({
    ...state,
    initialized: true,
  })),
  on(CoreActions.setUser, (state, { user }) => {
    return {
      ...state,
      user: user,
      sessionExpired: false,
    };
  }),
  on(CoreActions.reset, (state) => ({
    ...state,
    user: null,
  })),
  on(CoreActions.sessionExpired, (state, action) => ({
    ...state,
    sessionExpired: true,
  }))
);

export function coreReducer(state: CoreState | undefined, action: Action) {
  return reducer(state, action);
}
