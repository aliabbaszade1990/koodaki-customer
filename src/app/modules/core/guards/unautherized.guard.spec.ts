import { TestBed } from '@angular/core/testing';

import { UnautherizedGuard } from './unautherized.guard';

describe('UnautherizedGuard', () => {
  let guard: UnautherizedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnautherizedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
