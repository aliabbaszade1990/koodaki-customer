import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { filter, firstValueFrom } from 'rxjs';
import { CoreFacade } from '../+state/core.facade';

@Injectable({
  providedIn: 'root',
})
export class UnauthorizedGuard implements CanActivate {
  constructor(private coreFacade: CoreFacade, private router: Router) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    const canView = await this.canView();

    if (!canView) {
      this.router.navigate(['']);
    }

    return canView;
  }

  private async canView(): Promise<boolean> {
    await firstValueFrom(
      this.coreFacade.initialized$.pipe(filter((response) => !!response))
    );

    const user = await firstValueFrom(this.coreFacade.user$);

    return !user;
  }
}
