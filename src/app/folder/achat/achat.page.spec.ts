import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AchatPage } from './achat.page';

describe('AchatPage', () => {
  let component: AchatPage;
  let fixture: ComponentFixture<AchatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
