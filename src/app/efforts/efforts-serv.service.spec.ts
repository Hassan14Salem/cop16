import { TestBed } from '@angular/core/testing';

import { EffortsServService } from './efforts-serv.service';

describe('EffortsServService', () => {
  let service: EffortsServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EffortsServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
