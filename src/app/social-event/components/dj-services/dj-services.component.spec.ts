import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjServicesComponent } from './dj-services.component';

describe('DjServicesComponent', () => {
  let component: DjServicesComponent;
  let fixture: ComponentFixture<DjServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DjServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
