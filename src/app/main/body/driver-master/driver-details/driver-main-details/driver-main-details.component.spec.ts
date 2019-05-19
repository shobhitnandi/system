import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverMainDetailsComponent } from './driver-main-details.component';

describe('DriverMainDetailsComponent', () => {
  let component: DriverMainDetailsComponent;
  let fixture: ComponentFixture<DriverMainDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverMainDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverMainDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
