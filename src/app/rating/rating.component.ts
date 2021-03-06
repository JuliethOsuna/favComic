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
  @Input()
  set rating(rating:number){
    this._rating = 0;
    this._currentRating = 0;
  }
  @Input()
  set currentRating(currentRating:number){
    this._rating = currentRating;
  }

  public stars = [1, 2, 3, 4, 5];
  public _currentRating:number = this.rating;
  public _rating;

  constructor(private storeComicsService: StoreComicsService) {}

  ngOnInit() {

    this.storeComicsService.data.subscribe(data => {})
  }

  rate(position){
    const data = {
      comicName: this.comicName,
      comicImg: this.comicImg,
      comicId: this.comicId,
      rate: position
    }
    this._rating = position;
    this.storeComicsService.updateData(data);
    this._currentRating = this._rating;
    console.log(position, this._currentRating, this._rating)
  }

  over(event){
    console.log("over", event)
    const currentElement = event.target;
    const parent = currentElement.parentNode;
    const index = [].indexOf.call (parent.children, currentElement);
    this._currentRating = this._rating;
    this._rating = index + 1;
  }

  out(){
    console.log(this._currentRating, this.rating, "out")
    this._rating = this._currentRating;
  }
}
