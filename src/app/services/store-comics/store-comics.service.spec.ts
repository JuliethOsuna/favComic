import { TestBed } from '@angular/core/testing';

import { StoreComicsService } from './store-comics.service';

describe('StoreComicsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreComicsService = TestBed.get(StoreComicsService);
    expect(service).toBeTruthy();
  });
});
