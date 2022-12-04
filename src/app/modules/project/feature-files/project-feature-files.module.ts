import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AngularMaterialModule } from '../../shared';
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
    MatDialogModule,
    AngularMaterialModule,
  ],
})
export class ProjectFeatureFilesModule {}
