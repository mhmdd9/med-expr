import { TestBed } from '@angular/core/testing';

import { SpecInfoService } from './spec-info.service';

describe('SpecInfoService', () => {
  let service: SpecInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
