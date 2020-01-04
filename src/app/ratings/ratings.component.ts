import { Component, OnInit } from '@angular/core';
import { StoreComicsService } from '../services/store-comics/store-comics.service';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {

  constructor(private storeComicsService: StoreComicsService) { }

  ngOnInit() {
    this.showInfoComic()
  }

  showInfoComic(){
    this.storeComicsService.data.subscribe(data => {})
  }
}
