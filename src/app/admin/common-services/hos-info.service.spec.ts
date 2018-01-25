import { TestBed, inject } from '@angular/core/testing';

import { HosInfoService } from './hos-info.service';

describe('HosInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HosInfoService]
    });
  });

  it('should be created', inject([HosInfoService], (service: HosInfoService) => {
    expect(service).toBeTruthy();
  }));
});
