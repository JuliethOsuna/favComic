import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateComicComponent } from './rate-comic.component';

describe('RateComicComponent', () => {
  let component: RateComicComponent;
  let fixture: ComponentFixture<RateComicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateComicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
