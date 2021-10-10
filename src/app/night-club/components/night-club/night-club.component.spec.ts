import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NightClubComponent } from './night-club.component';

describe('NightClubComponent', () => {
  let component: NightClubComponent;
  let fixture: ComponentFixture<NightClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NightClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NightClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
