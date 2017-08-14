import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderIconMenuComponent } from './header-icon-menu.component';

describe('HeaderIconMenuComponent', () => {
  let component: HeaderIconMenuComponent;
  let fixture: ComponentFixture<HeaderIconMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderIconMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderIconMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
