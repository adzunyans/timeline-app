import { TestBed } from '@angular/core/testing';

import { RaveService } from './rave.service';

describe('RaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RaveService = TestBed.get(RaveService);
    expect(service).toBeTruthy();
  });
});
