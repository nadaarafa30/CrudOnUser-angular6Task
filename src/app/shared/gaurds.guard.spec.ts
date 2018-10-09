import { TestBed, async, inject } from '@angular/core/testing';

import { GaurdsGuard } from './gaurds.guard';

describe('GaurdsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GaurdsGuard]
    });
  });

  it('should ...', inject([GaurdsGuard], (guard: GaurdsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
