import { TestBed } from '@angular/core/testing';

import { ValidationGuardService } from './validation-guard.service';

describe('ValidationGuardService', () => {
  let service: ValidationGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
