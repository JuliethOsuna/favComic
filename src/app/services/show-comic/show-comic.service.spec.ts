import { TestBed } from '@angular/core/testing';

import { ShowComicService } from './show-comic.service';

describe('ShowComicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowComicService = TestBed.get(ShowComicService);
    expect(service).toBeTruthy();
  });
});
