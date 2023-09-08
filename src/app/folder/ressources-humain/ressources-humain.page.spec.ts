import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RessourcesHumainPage } from './ressources-humain.page';

describe('RessourcesHumainPage', () => {
  let component: RessourcesHumainPage;
  let fixture: ComponentFixture<RessourcesHumainPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RessourcesHumainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
