import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarService } from '../../core';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [PaginatorComponent],
  imports: [CommonModule, MatSnackBarModule],
  exports: [PaginatorComponent],
  providers: [SnackbarService],
})
export class UiPaginatorModule {}
