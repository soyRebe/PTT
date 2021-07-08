import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { DetailComponent } from './detail/detail.component';
import { ErrorComponent } from './error/error.component';



const routes: Routes = [
  { path: '', component: FilmsComponent},
  { path: 'films', component: FilmsComponent},
  { path: 'detail/:id', component: DetailComponent },
  { path:'**', component:ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
