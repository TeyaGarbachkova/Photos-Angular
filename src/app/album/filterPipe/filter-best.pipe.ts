import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBest'
})
export class FilterBestPipe implements PipeTransform {

  transform(values: any[], args?: boolean): any {

    if(args == undefined) {
      return values;
    }

    if(args) {
      var mostLiked = Object.create(values);

      mostLiked.sort(function(a,b) {
          return b.countLikes - a.countLikes;
      });
      
      return mostLiked;

    } else {
      return values;
    }
  }
  

}
