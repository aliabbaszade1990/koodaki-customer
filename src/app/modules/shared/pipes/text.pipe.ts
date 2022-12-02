import { Pipe, PipeTransform } from '@angular/core';
import upperFirst from 'lodash-es/upperFirst';

@Pipe({ name: 'text' })
export class TextPipe implements PipeTransform {
  transform(value: string): string {
    let text = value.replace(/_/g, ' ').toLowerCase();
    text = text.replace(/-/g, ' ');
    return upperFirst(text);
  }
}
