import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MotosHarleyPage } from './motos-harley.page';

describe('MotosHarleyPage', () => {
  let component: MotosHarleyPage;
  let fixture: ComponentFixture<MotosHarleyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MotosHarleyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
