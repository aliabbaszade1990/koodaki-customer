import { Component, Input } from '@angular/core';

@Component({
  selector: 'koodaki-dashboard-sidenav',
  templateUrl: './dashboard-sidenav.component.html',
  styleUrls: ['./dashboard-sidenav.component.scss'],
})
export class DashboardSidenavComponent {
  @Input() menuItems: any[] = [];
  @Input() logo = '';
  @Input() user?: any;
  @Input() workspace?: any;
}
