import { TestBed } from '@angular/core/testing';

import { GetComicsService } from './get-comics.service';

describe('GetComicsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetComicsService = TestBed.get(GetComicsService);
    expect(service).toBeTruthy();
  });
});
