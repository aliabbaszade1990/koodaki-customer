import { TestBed } from '@angular/core/testing';

import { CoreInterceptor } from './core.interceptor';

describe('CoreInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CoreInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CoreInterceptor = TestBed.inject(CoreInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
