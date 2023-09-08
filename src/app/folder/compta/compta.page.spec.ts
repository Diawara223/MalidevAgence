import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComptaPage } from './compta.page';

describe('ComptaPage', () => {
  let component: ComptaPage;
  let fixture: ComponentFixture<ComptaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ComptaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
