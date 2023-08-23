import { TestBed } from '@angular/core/testing';

import { MotosYamahaService } from './motos-yamaha.service';

describe('MotosYamahaService', () => {
  let service: MotosYamahaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotosYamahaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
