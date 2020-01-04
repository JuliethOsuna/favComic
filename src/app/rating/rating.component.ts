import { Component, OnInit, Input } from '@angular/core';
import { StoreComicsService } from '../services/store-comics/store-comics.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input()
  comicName:string;
  @Input()
  comicImg:string;
  @Input()
  comicId:string;

  public stars = [1, 2, 3, 4, 5];

  constructor(private storeComicsService: StoreComicsService) {}

  ngOnInit() {

    this.storeComicsService.data.subscribe(data => {})
  }

  rate(index){
    const data = {
      comicName: this.comicName,
      comicImg: this.comicImg,
      comicId: this.comicId,
      rate: index
    }
    this.storeComicsService.updateData(data)
  }

}
