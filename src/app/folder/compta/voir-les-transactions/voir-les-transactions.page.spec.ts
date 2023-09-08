import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VoirLesTransactionsPage } from './voir-les-transactions.page';

describe('VoirLesTransactionsPage', () => {
  let component: VoirLesTransactionsPage;
  let fixture: ComponentFixture<VoirLesTransactionsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VoirLesTransactionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
