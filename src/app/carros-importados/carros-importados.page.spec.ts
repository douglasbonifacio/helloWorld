import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarrosImportadosPage } from './carros-importados.page';

describe('CarrosImportadosPage', () => {
  let component: CarrosImportadosPage;
  let fixture: ComponentFixture<CarrosImportadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CarrosImportadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
