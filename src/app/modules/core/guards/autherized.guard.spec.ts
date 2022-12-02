import { TestBed } from '@angular/core/testing';

import { AutherizedGuard } from './autherized.guard';

describe('AutherizedGuard', () => {
  let guard: AutherizedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutherizedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
