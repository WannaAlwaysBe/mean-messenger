import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameIcon'
})
export class NameIconPipe implements PipeTransform {
  transform(name: string): unknown {
    return name[0].toUpperCase();
  }

}
