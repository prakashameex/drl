import { TestBed, inject } from '@angular/core/testing';

import { DrlService } from './drl.service';

describe('DrlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrlService]
    });
  });

  it('should be created', inject([DrlService], (service: DrlService) => {
    expect(service).toBeTruthy();
  }));
});
