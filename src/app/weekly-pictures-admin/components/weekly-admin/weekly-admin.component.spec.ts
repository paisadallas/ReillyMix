import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyAdminComponent } from './weekly-admin.component';

describe('WeeklyAdminComponent', () => {
  let component: WeeklyAdminComponent;
  let fixture: ComponentFixture<WeeklyAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
