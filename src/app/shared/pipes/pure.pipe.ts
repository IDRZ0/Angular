import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pure',
  pure: true
})
export class PurePipe implements PipeTransform {

  transform(args: number[]): any {
    return args.filter(x => x % 2 === 0);
  }

}
