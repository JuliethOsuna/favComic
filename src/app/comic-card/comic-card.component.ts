import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
