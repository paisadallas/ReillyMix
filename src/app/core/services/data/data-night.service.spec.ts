import { TestBed } from '@angular/core/testing';

import { DataNightService } from './data-night.service';

describe('DataNightService', () => {
  let service: DataNightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataNightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
