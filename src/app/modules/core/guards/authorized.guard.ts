import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { CoreFacade } from '../+state/core.facade';

@Injectable({
  providedIn: 'root',
})
export class AuthorizedGuard implements CanActivate, CanActivateChild {
  constructor(private coreFacade: CoreFacade, private router: Router) {}
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    console.log(route);

    const canView = await this.canView();

    if (!canView) {
      this.router.navigate(['auth', 'sign-in'], {
        replaceUrl: true,
      });
    }

    return canView;
  }

  async canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    return this.canActivate(childRoute, state);
  }

  private async canView(): Promise<boolean> {
    await firstValueFrom(this.coreFacade.initialized$);
    const user = await firstValueFrom(this.coreFacade.user$);

    return !!user;
  }
}
