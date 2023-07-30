import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ImageListComponent } from './image-list/image-list.component';

@NgModule({
  declarations: [ImageListComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [ImageListComponent],
})
export class UiImageListModule {}
