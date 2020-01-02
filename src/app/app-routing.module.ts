import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { RatingPageComponent } from './rating-page/rating-page.component';


const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'rating',
    component: RatingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
