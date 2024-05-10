import { TestBed } from '@angular/core/testing';

import { PghubFormService } from './pghub-form.service';

describe('PghubFormService', () => {
  let service: PghubFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PghubFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
