import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NightClubsComponent } from './night-clubs.component';

describe('NightClubsComponent', () => {
  let component: NightClubsComponent;
  let fixture: ComponentFixture<NightClubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NightClubsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NightClubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
