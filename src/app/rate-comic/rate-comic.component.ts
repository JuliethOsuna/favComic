import { Component, OnInit } from '@angular/core';
import { GetComicsService } from '../services/get-comics/get-comics.service'

@Component({
  selector: 'app-rate-comic',
  templateUrl: './rate-comic.component.html',
  styleUrls: ['./rate-comic.component.scss']
})
export class RateComicComponent implements OnInit {

  constructor(private getComicService: GetComicsService) { }

  ngOnInit() {
    this.getComic()
  }

  getComic(){

    const comicId = this.randomComicId();

    this.getComicService.getComic(comicId).subscribe(res => {
      console.log(res);
    })
  }

  randomComicId(min = 1, max = 2251) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

}
