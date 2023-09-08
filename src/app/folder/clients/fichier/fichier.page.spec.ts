import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FichierPage } from './fichier.page';

describe('FichierPage', () => {
  let component: FichierPage;
  let fixture: ComponentFixture<FichierPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FichierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
