import { TestBed } from '@angular/core/testing';

import { CarrosNacionaisService } from './carros-nacionais.service';

describe('CarrosNacionaisService', () => {
  let service: CarrosNacionaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrosNacionaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
