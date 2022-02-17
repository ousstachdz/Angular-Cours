import { TestBed } from '@angular/core/testing';

import { DIService } from './di.service';

describe('DIService', () => {
  let service: DIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
