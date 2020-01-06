import { Component, OnInit, Input } from '@angular/core';
import { ShowComicService } from '../services/show-comic/show-comic.service'

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.scss']
})
export class ComicCardComponent implements OnInit {

  @Input()
  comicName:string;
  @Input()
  comicImg:string;
  @Input()
  comicId:string;
  @Input()
  rate:number;

  constructor(private showComicService: ShowComicService) { }

  ngOnInit() {
  }

  sendData(){
    console.log("sendData")
    const comicData = {
      comicName: this.comicName,
      comicImg: this.comicImg,
      comicId: this.comicId,
      rate: this.rate
    }
    this.showComicService.setData(comicData);
  }

}
