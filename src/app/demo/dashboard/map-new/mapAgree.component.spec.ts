import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MapAgreeComponent } from './mapAgree.component';

describe('MapAgreeComponent', () => {
  let component: MapAgreeComponent;
  let fixture: ComponentFixture<MapAgreeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MapAgreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapAgreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
