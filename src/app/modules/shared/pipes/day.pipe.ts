import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';
import { Dayjs } from 'dayjs';

@Pipe({ name: 'day' })
export class DayPipe implements PipeTransform {
  transform(value: Dayjs | string, format: string): string {
    return dayjs(value).format(format);
  }
}
