import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './modules/ui-dashboard-layout/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'panel/project/list',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/feature-sign-in/feature-sign-in.module').then(
        (m) => m.FeatureSignInModule
      ),
  },
  {
    path: 'panel',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'project/list',
        loadChildren: () =>
          import(
            './modules/project/feature-list/project-feature-list.module'
          ).then((m) => m.ProjectFeatureListModule),
      },
      {
        path: 'project/:id/files',
        loadChildren: () =>
          import(
            './modules/project/feature-files/project-feature-files.module'
          ).then((m) => m.ProjectFeatureFilesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
