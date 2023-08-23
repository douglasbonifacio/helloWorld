import { TestBed } from '@angular/core/testing';

import { MotosHarleyService } from './motos-harley.service';

describe('MotosHarleyService', () => {
  let service: MotosHarleyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotosHarleyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
