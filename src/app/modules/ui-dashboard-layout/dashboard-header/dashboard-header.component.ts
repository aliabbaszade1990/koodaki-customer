import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'koodaki-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss'],
})
export class DashboardHeaderComponent {
  constructor(private cd: ChangeDetectorRef) {}

  @Input() mobileHeaderLogo = '';
  @Output() hamburgerClick = new EventEmitter();

  onHamburgerClicked(): void {
    this.hamburgerClick.next(true);
  }
}
