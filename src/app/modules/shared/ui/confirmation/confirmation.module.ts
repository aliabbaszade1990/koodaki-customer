import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmationComponent } from './confirmation.component';

@NgModule({
  declarations: [ConfirmationComponent],
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  exports: [ConfirmationComponent],
})
export class ConfirmationModule {}
