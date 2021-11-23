import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardTraceabilityComponent } from './dashboard-traceability.component';

describe('DashboardTraceabilityComponent', () => {
  let component: DashboardTraceabilityComponent;
  let fixture: ComponentFixture<DashboardTraceabilityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTraceabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTraceabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
