import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AngularMaterialModule } from '../../shared';
import { UiImageListModule } from '../ui-image-list/ui-image-list.module';
import { UiPaginatorModule } from '../ui-paginator/ui-paginator.module';
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
    UiImageListModule,
    UiPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  ],
})
export class ProjectFeatureFilesModule {}
