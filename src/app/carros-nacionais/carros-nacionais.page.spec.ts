import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarrosNacionaisPage } from './carros-nacionais.page';

describe('CarrosNacionaisPage', () => {
  let component: CarrosNacionaisPage;
  let fixture: ComponentFixture<CarrosNacionaisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CarrosNacionaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
