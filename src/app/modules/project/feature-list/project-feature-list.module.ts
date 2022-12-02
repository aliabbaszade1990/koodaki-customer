import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjectCardComponent } from '../ui-project-card/project-card/project-card.component';

import { ProjectFeatureListRoutingModule } from './project-feature-list-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';

@NgModule({
  declarations: [ProjectListComponent, ProjectCardComponent],
  imports: [CommonModule, ProjectFeatureListRoutingModule],
})
export class ProjectFeatureListModule {}
