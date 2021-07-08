import { Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, observable} from "rxjs";
import { catchError} from "rxjs/operators";



@Injectable()
export class FilmService {
  filmsUrl  = 'https://ghibliapi.herokuapp.com/films';


  constructor(private http: HttpClient) {}

  getFilms():Observable<any> {
    return this.http.get<any>(this.filmsUrl);
  }


  getFilmById(id: any) :Observable<any>{
    return this.http.get<any>(this.filmsUrl + '/' + id);
  }


}




