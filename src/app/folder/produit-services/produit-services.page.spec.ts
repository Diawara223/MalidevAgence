import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProduitServicesPage } from './produit-services.page';

describe('ProduitServicesPage', () => {
  let component: ProduitServicesPage;
  let fixture: ComponentFixture<ProduitServicesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProduitServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
