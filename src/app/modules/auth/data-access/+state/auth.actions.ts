import { createAction, props } from '@ngrx/store';
import { LoginDTO } from '../dto/auth.dto';

export const login = createAction(
  '[Auth/API] Login',
  props<{ model: LoginDTO }>()
);

export const clearError = createAction('[Auth] Clear Error');

export const LoginFailure = createAction(
  '[Auth/API] Login Failure',
  props<{ error: any }>()
);
