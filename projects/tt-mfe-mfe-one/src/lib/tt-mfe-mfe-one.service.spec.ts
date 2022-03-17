import { TestBed } from '@angular/core/testing';

import { TtMfeMfeOneService } from './tt-mfe-mfe-one.service';

describe('TtMfeMfeOneService', () => {
  let service: TtMfeMfeOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TtMfeMfeOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
