import { TestBed } from '@angular/core/testing';

import { NavigateGuard } from './navigate.guard';

describe('NavigateGuard', () => {
  let guard: NavigateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NavigateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
