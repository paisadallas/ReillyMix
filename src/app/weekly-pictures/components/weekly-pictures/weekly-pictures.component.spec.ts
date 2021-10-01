import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyPicturesComponent } from './weekly-pictures.component';

describe('WeeklyPicturesComponent', () => {
  let component: WeeklyPicturesComponent;
  let fixture: ComponentFixture<WeeklyPicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyPicturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
