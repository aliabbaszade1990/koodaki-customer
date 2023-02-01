import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { LoginDTO } from '../dto/auth.dto';

import * as AuthActions from './auth.actions';
import * as AuthSelectors from './auth.selectors';

@Injectable()
export class AuthFacade {
  constructor(private readonly store: Store) {}

  error$ = this.store.pipe(select(AuthSelectors.getAuthError));

  login(model: LoginDTO) {
    this.store.dispatch(AuthActions.login({ model }));
  }

  clearError() {
    this.store.dispatch(AuthActions.clearError());
  }
}
