import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GroupesPage } from './groupes.page';

describe('GroupesPage', () => {
  let component: GroupesPage;
  let fixture: ComponentFixture<GroupesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GroupesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
