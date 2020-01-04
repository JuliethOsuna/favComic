import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../behaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class StoreComicsService {

  private infoComics = [];

  private dataSource = new BehaviorSubject();
  public data = this.dataSource.asObservable();

  constructor() { }

  updateData(data){
    const found = this.infoComics.find(info => {
      return info.comicId === data.comicId
    })

    if(found === undefined) {
      this.infoComics.push(data)
    }else {
      found.rate = data.rate
    }

    this.dataSource.next(this.infoComics);
  }


}
