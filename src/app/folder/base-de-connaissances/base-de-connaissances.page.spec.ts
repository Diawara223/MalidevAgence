import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseDeConnaissancesPage } from './base-de-connaissances.page';

describe('BaseDeConnaissancesPage', () => {
  let component: BaseDeConnaissancesPage;
  let fixture: ComponentFixture<BaseDeConnaissancesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BaseDeConnaissancesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
