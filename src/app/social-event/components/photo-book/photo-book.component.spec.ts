import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoBookComponent } from './photo-book.component';

describe('PhotoBookComponent', () => {
  let component: PhotoBookComponent;
  let fixture: ComponentFixture<PhotoBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
