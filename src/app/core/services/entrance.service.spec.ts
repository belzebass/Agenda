import {TestBed} from '@angular/core/testing';

import {EntranceService} from './entrance.service';

describe('EntranceService', () => {
  let service: EntranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
