import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MotosYamahaPage } from './motos-yamaha.page';

describe('MotosYamahaPage', () => {
  let component: MotosYamahaPage;
  let fixture: ComponentFixture<MotosYamahaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MotosYamahaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
