import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { MainBackgroundComponent } from './main-background/main-background.component';
import { FooterComponent } from './footer/footer.component';
import { RatingPageComponent } from './rating-page/rating-page.component';
import { NavComponent } from './nav/nav.component';
import { RateComicComponent } from './rate-comic/rate-comic.component';
import { RatingsComponent } from './ratings/ratings.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MainBackgroundComponent,
    FooterComponent,
    RatingPageComponent,
    NavComponent,
    RateComicComponent,
    RatingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
