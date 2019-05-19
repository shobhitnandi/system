import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverMainDocumentsComponent } from './driver-main-documents.component';

describe('DriverMainDocumentsComponent', () => {
  let component: DriverMainDocumentsComponent;
  let fixture: ComponentFixture<DriverMainDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverMainDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverMainDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
