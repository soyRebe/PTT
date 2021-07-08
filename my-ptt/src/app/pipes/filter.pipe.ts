import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultFilms = [];
    for (const film of value) {
      if (film.title.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultFilms.push(film);
      };
    };
    return resultFilms;
  }


}

