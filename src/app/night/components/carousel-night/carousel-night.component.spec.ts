import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselNightComponent } from './carousel-night.component';

describe('CarouselNightComponent', () => {
  let component: CarouselNightComponent;
  let fixture: ComponentFixture<CarouselNightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselNightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselNightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
