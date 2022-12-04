import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../shared';
import { ProjectCardComponent } from './project-card/project-card.component';

@NgModule({
  declarations: [ProjectCardComponent],
  imports: [CommonModule, RouterModule, AngularMaterialModule],
  exports: [ProjectCardComponent],
})
export class UiProjectCardModule {}
