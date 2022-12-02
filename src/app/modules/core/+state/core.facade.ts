import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as CoreActions from './core.actions';
import * as CoreFeature from './core.reducer';
import * as CoreSelectors from './core.selectors';

@Injectable()
export class CoreFacade {
  user$ = this.store.pipe(select(CoreSelectors.getUser));
  initialized$ = this.store.pipe(select(CoreSelectors.initialized));
  sessionExpired$ = this.store.pipe(select(CoreSelectors.$sessionExpired));

  constructor(private readonly store: Store<CoreFeature.CoreState>) {}

  init() {
    this.store.dispatch(CoreActions.initCore());
  }

  initialized(): void {
    this.store.dispatch(CoreActions.Initialized());
  }

  setUser(user: any) {
    this.store.dispatch(CoreActions.setUser({ user }));
  }

  resetUser() {
    this.store.dispatch(CoreActions.reset());
  }
}
