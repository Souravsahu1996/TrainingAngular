import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter1'
})
export class Filter1Pipe implements PipeTransform {

  transform(value: any, SearchText1 : string): any {
    if(!SearchText1)
      {
        return value;
      }
      return value.filter(x => x.EmpCode.indexOf(SearchText1)>1)
  }

}
