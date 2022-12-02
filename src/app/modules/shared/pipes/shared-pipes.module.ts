import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CamelCasePipe } from './camel-case.pipe';
import { DayPipe } from './day.pipe';
import { SafeHTMLPipe } from './safe-html.pipe';
import { TextPipe } from './text.pipe';
import { TrimPipe } from './trim.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [CamelCasePipe, DayPipe, SafeHTMLPipe, TextPipe, TrimPipe],
  exports: [CamelCasePipe, DayPipe, SafeHTMLPipe, TextPipe, TrimPipe],
})
export class SharedPipesModule {}
