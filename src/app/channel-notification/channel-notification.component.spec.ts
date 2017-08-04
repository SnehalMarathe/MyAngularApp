import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelNotificationComponent } from './channel-notification.component';

describe('ChannelNotificationComponent', () => {
  let component: ChannelNotificationComponent;
  let fixture: ComponentFixture<ChannelNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
