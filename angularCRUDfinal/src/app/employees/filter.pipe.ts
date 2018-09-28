import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, SearchText : string): any {
   if(!SearchText)
    {
      return value;
    }
    return value.filter(x => x.FirstNamej.toLowerCase().indexOf(SearchText.toLowerCase()) > -1)
  }

}
