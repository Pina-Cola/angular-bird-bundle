import { TestBed } from '@angular/core/testing';

import { RingmarkService } from './ringmark.service';

describe('RingmarkService', () => {
  let service: RingmarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RingmarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
