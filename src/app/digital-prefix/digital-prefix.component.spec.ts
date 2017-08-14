import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalPrefixComponent } from './digital-prefix.component';

describe('DigitalPrefixComponent', () => {
  let component: DigitalPrefixComponent;
  let fixture: ComponentFixture<DigitalPrefixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalPrefixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalPrefixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
