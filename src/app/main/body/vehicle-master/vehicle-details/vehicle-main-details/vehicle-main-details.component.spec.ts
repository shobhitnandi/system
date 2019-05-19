import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleMainDetailsComponent } from './vehicle-main-details.component';

describe('VehicleMainDetailsComponent', () => {
  let component: VehicleMainDetailsComponent;
  let fixture: ComponentFixture<VehicleMainDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleMainDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleMainDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
