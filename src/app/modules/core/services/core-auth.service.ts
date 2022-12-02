import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CoreFacade } from '../+state/core.facade';

@Injectable()
export class CoreAuthService {
  constructor(
    private storage: Storage,
    private router: Router,
    private coreFacade: CoreFacade
  ) {}

  logout(): void {
    this.storage.clear();
    this.coreFacade.resetUser();
    this.router.navigate(['auth', 'sign-in', { outlets: { builder: null } }]);
  }
}
