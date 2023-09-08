import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransfertDeComptePage } from './transfert-de-compte.page';

describe('TransfertDeComptePage', () => {
  let component: TransfertDeComptePage;
  let fixture: ComponentFixture<TransfertDeComptePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TransfertDeComptePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
