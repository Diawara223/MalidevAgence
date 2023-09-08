import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SMSPage } from './sms.page';

describe('SMSPage', () => {
  let component: SMSPage;
  let fixture: ComponentFixture<SMSPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SMSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
