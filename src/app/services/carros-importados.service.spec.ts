import { TestBed } from '@angular/core/testing';

import { CarrosImportadosService } from './carros-importados.service';

describe('CarrosImportadosService', () => {
  let service: CarrosImportadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrosImportadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
