import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { AuthDataAccessModule } from '../auth/data-access/auth-data-access.module';
import { SharedPipesModule } from '../shared/pipes/shared-pipes.module';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DashboardSidenavComponent } from './dashboard-sidenav/dashboard-sidenav.component';
@NgModule({
  declarations: [
    DashboardLayoutComponent,
    DashboardHeaderComponent,
    DashboardSidenavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    SharedPipesModule,
    AuthDataAccessModule,
  ],
  providers: [],
})
export class UiDashboardLayoutModule {}
