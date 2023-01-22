import { Action, createReducer, on } from '@ngrx/store';

import * as AuthActions from './auth.actions';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState {
  error: string | null; // last known error (if any)
}

export const initialAuthState: AuthState = {
  error: null,
};

const reducer = createReducer(
  initialAuthState,
  on(AuthActions.LoginFailure, (state, { error }) => ({
    ...state,
    error: error.name,
  })),
  on(AuthActions.clearError, (state) => ({
    ...state,
    error: null,
  }))
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
