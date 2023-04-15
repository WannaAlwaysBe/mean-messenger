import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform<T>(list: T[], options: {by: string, filterTerm: string}): T[] {
    return list.filter(item => item[options.by].toLowerCase().includes(options.filterTerm.toLowerCase()));
  }
}
