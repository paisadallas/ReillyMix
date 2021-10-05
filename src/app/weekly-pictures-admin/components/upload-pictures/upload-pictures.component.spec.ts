import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPicturesComponent } from './upload-pictures.component';

describe('UploadPicturesComponent', () => {
  let component: UploadPicturesComponent;
  let fixture: ComponentFixture<UploadPicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadPicturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
