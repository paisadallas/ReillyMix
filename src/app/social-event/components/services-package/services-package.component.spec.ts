import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPackageComponent } from './services-package.component';

describe('ServicesPackageComponent', () => {
  let component: ServicesPackageComponent;
  let fixture: ComponentFixture<ServicesPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesPackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
