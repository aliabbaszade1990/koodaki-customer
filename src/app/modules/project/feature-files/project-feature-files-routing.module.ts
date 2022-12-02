import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectFilesComponent } from './project-files/project-files.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectFilesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectFeatureFilesRoutingModule {}
