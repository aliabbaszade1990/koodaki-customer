import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { AuthApiService } from '../apis/auth-api.service';
import { AuthService } from '../services/auth.service';

import * as CoreActions from '../../../core/+state/core.actions';
import { UserWithTokenResponse } from '../dto/auth.dto';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private readonly actions$: Actions,
    private authApi: AuthApiService,
    private authService: AuthService
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ model }) => {
        return this.authApi.login(model).pipe(
          map((result: UserWithTokenResponse) => {
            this.authService.storeUserTokens(result);
            return CoreActions.loginSuccess({ result });
          }),
          catchError((error) => of(AuthActions.LoginFailure({ error })))
        );
      })
    )
  );
}
