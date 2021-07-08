import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],

})
export class DetailComponent implements OnInit {
  public film :any;
  private id: any;


  constructor(private filmService: FilmService,
  private _router :Router,
  private _route: ActivatedRoute,
  private router: Router
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe( params =>{
      let id = params.id;
      console.log(id);
      this.filmService.getFilmById(id).subscribe(
        (response :any []) => {
          this.film = response;

        }
      );

    });




  }


}
