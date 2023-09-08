import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OutilsPage } from './outils.page';

describe('OutilsPage', () => {
  let component: OutilsPage;
  let fixture: ComponentFixture<OutilsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OutilsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
