import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from '../../core';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
  {
    canActivate: [AuthorizedGuard],
    path: '',
    component: ProjectListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectFeatureListRoutingModule {}
