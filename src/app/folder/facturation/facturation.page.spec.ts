import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FacturationPage } from './facturation.page';

describe('FacturationPage', () => {
  let component: FacturationPage;
  let fixture: ComponentFixture<FacturationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FacturationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
