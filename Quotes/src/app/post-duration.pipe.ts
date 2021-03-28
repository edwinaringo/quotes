import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postDuration'
})
export class PostDurationPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
