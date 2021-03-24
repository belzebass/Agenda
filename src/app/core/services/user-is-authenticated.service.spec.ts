import { TestBed } from '@angular/core/testing';

import { UserIsAuthenticatedService } from './user-is-authenticated.service';

describe('UserIsAuthenticatedService', () => {
  let service: UserIsAuthenticatedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserIsAuthenticatedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
