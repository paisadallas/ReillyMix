import { TestBed } from '@angular/core/testing';

import { DJServicesService } from './dj-services.service';

describe('DJServicesService', () => {
  let service: DJServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DJServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
