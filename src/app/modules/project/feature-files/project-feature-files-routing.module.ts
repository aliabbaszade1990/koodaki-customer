import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from '../../core';
import { ProjectFilesComponent } from './project-files/project-files.component';

const routes: Routes = [
  {
    canActivate: [AuthorizedGuard],
    path: '',
    component: ProjectFilesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectFeatureFilesRoutingModule {}
