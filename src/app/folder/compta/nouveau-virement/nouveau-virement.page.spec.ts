import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NouveauVirementPage } from './nouveau-virement.page';

describe('NouveauVirementPage', () => {
  let component: NouveauVirementPage;
  let fixture: ComponentFixture<NouveauVirementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NouveauVirementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
