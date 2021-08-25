import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impure',
  pure: false
})
export class ImpurePipe implements PipeTransform {

  transform(args: number[]): any {
    return args.filter(x => x % 2 === 0);
  }

}
