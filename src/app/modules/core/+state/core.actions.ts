import { createAction, props } from '@ngrx/store';

export const initCore = createAction('[Core] Init');

export const Initialized = createAction('[Core] Initialized');

export const loginSuccess = createAction(
  '[Core] Login Success',
  props<{ result: any }>()
);

export const setUser = createAction('[Core] Set User', props<{ user: any }>());

export const reset = createAction('[Core] Rest');

export const sessionExpired = createAction('[Account] Session Expired');
