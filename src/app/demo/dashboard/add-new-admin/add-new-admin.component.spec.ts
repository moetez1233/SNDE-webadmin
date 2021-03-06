import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddNewAdminComponent } from './add-new-admin.component';

describe('AddNewAdminComponent', () => {
  let component: AddNewAdminComponent;
  let fixture: ComponentFixture<AddNewAdminComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
