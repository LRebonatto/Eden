import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapToIterable'
})
export class MapToIterablePipe implements PipeTransform {

  transform(dict?: Object) {
    if(dict){
      return Object.keys(dict).map(key => ({key, val: dict[key]}));
    } else {
      return null;
    }
  }
}