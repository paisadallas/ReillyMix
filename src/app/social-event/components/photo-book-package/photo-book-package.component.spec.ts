import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoBookPackageComponent } from './photo-book-package.component';

describe('PhotoBookPackageComponent', () => {
  let component: PhotoBookPackageComponent;
  let fixture: ComponentFixture<PhotoBookPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoBookPackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoBookPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
