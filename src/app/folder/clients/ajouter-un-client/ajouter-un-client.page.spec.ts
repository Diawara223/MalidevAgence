import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterUnClientPage } from './ajouter-un-client.page';

describe('AjouterUnClientPage', () => {
  let component: AjouterUnClientPage;
  let fixture: ComponentFixture<AjouterUnClientPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterUnClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
