import { TestBed } from '@angular/core/testing';

import { BloquearService } from './bloquear.service';

describe('BloquearService', () => {
  let service: BloquearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloquearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
