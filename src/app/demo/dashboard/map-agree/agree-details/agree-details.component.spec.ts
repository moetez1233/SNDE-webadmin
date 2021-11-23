import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AgreeDetailsComponent } from './agree-details.component';

describe('AgreeDetailsComponent', () => {
  let component: AgreeDetailsComponent;
  let fixture: ComponentFixture<AgreeDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AgreeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
