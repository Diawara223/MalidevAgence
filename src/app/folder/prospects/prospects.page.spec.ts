import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProspectsPage } from './prospects.page';

describe('ProspectsPage', () => {
  let component: ProspectsPage;
  let fixture: ComponentFixture<ProspectsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProspectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
