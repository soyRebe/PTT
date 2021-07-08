import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  public films: any[] = [];
  filterFilm = '';


  constructor(private filmService: FilmService) {
  }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe(
      (response: any[]) => {
        this.films = response;
      }
    );
  }

}
