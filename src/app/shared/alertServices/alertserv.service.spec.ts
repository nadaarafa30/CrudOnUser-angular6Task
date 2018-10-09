import { TestBed, inject } from '@angular/core/testing';

import { AlertservService } from './alertserv.service';

describe('AlertservService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertservService]
    });
  });

  it('should be created', inject([AlertservService], (service: AlertservService) => {
    expect(service).toBeTruthy();
  }));
});
