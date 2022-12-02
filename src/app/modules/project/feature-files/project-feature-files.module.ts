import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CommentOnFileComponent } from './comment-on-file/comment-on-file.component';
import { ProjectFeatureFilesRoutingModule } from './project-feature-files-routing.module';
import { ProjectFilesComponent } from './project-files/project-files.component';

@NgModule({
  declarations: [ProjectFilesComponent, CommentOnFileComponent],
  imports: [
    CommonModule,
    ProjectFeatureFilesRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class ProjectFeatureFilesModule {}
