import { Component, OnInit } from '@angular/core';
import { GetComicsService } from '../services/get-comics/get-comics.service'

@Component({
  selector: 'app-rate-comic',
  templateUrl: './rate-comic.component.html',
  styleUrls: ['./rate-comic.component.scss']
})
export class RateComicComponent implements OnInit {

  public comicName;
  public comicImg;
  public comicId;

  constructor(private getComicService: GetComicsService) { }

  ngOnInit() {
    this.getComic()
  }

  getComic(){

    const comicId = this.randomComicId();

    this.getComicService.getComic(comicId).subscribe((res:any = {}) => {
      this.comicName = res.safe_title;
      this.comicImg = res.img;
      this.comicId = res.num;
    })
  }

  randomComicId(min = 1, max = 2251) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  refreshComic(){
    this.getComic();
  }

}
