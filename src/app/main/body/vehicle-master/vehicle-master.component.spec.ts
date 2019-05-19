import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleMasterComponent } from './vehicle-master.component';

describe('VehicleMasterComponent', () => {
  let component: VehicleMasterComponent;
  let fixture: ComponentFixture<VehicleMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
