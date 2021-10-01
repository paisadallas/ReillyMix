import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayPicturesComponent } from './day-pictures.component';

describe('DayPicturesComponent', () => {
  let component: DayPicturesComponent;
  let fixture: ComponentFixture<DayPicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayPicturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
