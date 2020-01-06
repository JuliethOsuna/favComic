import { Component, OnInit } from '@angular/core';
import { GetComicsService } from '../services/get-comics/get-comics.service'
import { ShowComicService } from '../services/show-comic/show-comic.service'

@Component({
  selector: 'app-rate-comic',
  templateUrl: './rate-comic.component.html',
  styleUrls: ['./rate-comic.component.scss']
})
export class RateComicComponent implements OnInit {

  public comicName;
  public comicImg;
  public comicId;
  public rating = 0;
  public currentRating;

  constructor(private getComicService: GetComicsService, private showComicService: ShowComicService) { }

  ngOnInit() {
    this.getComic();
    this.showComic();
  }

  getComic(){

    const comicId = this.randomComicId();

    this.getComicService.getComic(comicId).subscribe((res:any = {}) => {
      this.comicName = res.safe_title;
      this.comicImg = res.img;
      this.comicId = res.num;
      this.rating++;
    })
  }

  randomComicId(min = 1, max = 2251) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  refreshComic(){
    this.getComic();
  }

  showComic(){
    this.showComicService.data.subscribe(data => {
      this.comicName = data.comicName;
      this.comicImg = data.comicImg;
      this.comicId = data.comicId;
      this.currentRating = data.rate;
    })
  }

}
