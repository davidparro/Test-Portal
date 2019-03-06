import { TestBed } from '@angular/core/testing';

import { BecService } from './bec.service';

describe('BecService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BecService = TestBed.get(BecService);
    expect(service).toBeTruthy();
  });
});
