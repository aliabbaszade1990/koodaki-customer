import { Pipe, PipeTransform } from '@angular/core';
import camelCase from 'lodash-es/camelCase';

@Pipe({ name: 'camelcase' })
export class CamelCasePipe implements PipeTransform {
  transform(value: string): string {
    return camelCase(value);
  }
}
