import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesExtrasComponent } from './services-extras.component';

describe('ServicesExtrasComponent', () => {
  let component: ServicesExtrasComponent;
  let fixture: ComponentFixture<ServicesExtrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesExtrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
