import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicePrintComponent } from './device-print.component';

describe('DevicePrintComponent', () => {
  let component: DevicePrintComponent;
  let fixture: ComponentFixture<DevicePrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicePrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
