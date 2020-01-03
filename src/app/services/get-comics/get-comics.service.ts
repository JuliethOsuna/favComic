import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetComicsService {

  constructor(private http: HttpClient) { }

  getComic(comicId){
    return this.http.get(`https://xkcd.com/${comicId}/info.0.json`)
  }
}
