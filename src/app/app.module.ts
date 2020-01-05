import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { MainBackgroundComponent } from './main-background/main-background.component';
import { FooterComponent } from './footer/footer.component';
import { RatingPageComponent } from './rating-page/rating-page.component';
import { NavComponent } from './nav/nav.component';
import { RateComicComponent } from './rate-comic/rate-comic.component';
import { RatingsComponent } from './ratings/ratings.component';
import { RatingComponent } from './rating/rating.component';
import { ComicCardComponent } from './comic-card/comic-card.component';

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
    RatingComponent,
    ComicCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
