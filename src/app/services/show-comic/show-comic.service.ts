import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../behaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class ShowComicService {

  private dataSource = new BehaviorSubject();
  public data = this.dataSource.asObservable();

  constructor() { }

  setData(comicData){
    this.dataSource.next(comicData);
  }
}
