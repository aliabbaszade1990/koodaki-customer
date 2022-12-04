import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiProjectCardModule } from '../ui-project-card/ui-project-card.module';

import { ProjectFeatureListRoutingModule } from './project-feature-list-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';

@NgModule({
  declarations: [ProjectListComponent],
  imports: [CommonModule, UiProjectCardModule, ProjectFeatureListRoutingModule],
})
export class ProjectFeatureListModule {}
