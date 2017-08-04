import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionsTabsComponent } from './submissions-tabs.component';

describe('SubmissionsTabsComponent', () => {
  let component: SubmissionsTabsComponent;
  let fixture: ComponentFixture<SubmissionsTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionsTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
