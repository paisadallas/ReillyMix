import { TestBed } from '@angular/core/testing';

import { FreeawaysService } from './freeaways.service';

describe('FreeawaysService', () => {
  let service: FreeawaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreeawaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
