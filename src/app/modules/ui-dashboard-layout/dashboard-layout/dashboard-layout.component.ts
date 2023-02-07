import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Data, RouterOutlet } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from '../../auth/data-access/services/auth.service';
import { HORN_MENU_ITEMS } from '../constants/menu-items.constants';

@Component({
  selector: 'koodaki-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayoutComponent implements OnInit {
  constructor(
    private bpo: BreakpointObserver,
    private authService: AuthService
  ) {}

  user?: any;
  menuItems = HORN_MENU_ITEMS;
  smallDevice$ = this.bpo
    .observe('(max-width: 60em)')
    .pipe(map((result) => result.matches));
  opened = false;
  title = '';

  ngOnInit(): void {}

  admin: any = {};
  listenStore() {
    // this.subsink.sink = this.coreFacade.user$.subscribe((u) => {
    //   // this.user = u as GetAdminDTO;
    //   this.user = this.admin;
    // });
  }

  toggleSidenav(): void {
    this.opened = !this.opened;
  }

  setRouteTransition(outlet: RouterOutlet): RouterOutlet | Data {
    return outlet && outlet.activatedRouteData;
  }

  onClickLogout() {
    this.authService.logout();
  }
}
