import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NouvelleDepensePage } from './nouvelle-depense.page';

describe('NouvelleDepensePage', () => {
  let component: NouvelleDepensePage;
  let fixture: ComponentFixture<NouvelleDepensePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NouvelleDepensePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
