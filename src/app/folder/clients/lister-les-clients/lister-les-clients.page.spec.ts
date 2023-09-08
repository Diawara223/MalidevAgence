import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListerLesClientsPage } from './lister-les-clients.page';

describe('ListerLesClientsPage', () => {
  let component: ListerLesClientsPage;
  let fixture: ComponentFixture<ListerLesClientsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListerLesClientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
