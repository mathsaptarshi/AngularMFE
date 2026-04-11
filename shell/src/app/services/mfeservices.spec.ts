import { TestBed } from '@angular/core/testing';

import { MFEServices } from './mfeservices';

describe('MFEServices', () => {
  let service: MFEServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MFEServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
