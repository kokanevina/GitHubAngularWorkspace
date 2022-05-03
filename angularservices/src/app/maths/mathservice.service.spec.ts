import { TestBed } from '@angular/core/testing';

import { MathserviceService } from './mathservice.service';

describe('MathserviceService', () => {
  let service: MathserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
