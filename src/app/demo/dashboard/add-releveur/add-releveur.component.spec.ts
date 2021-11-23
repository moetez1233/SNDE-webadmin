import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReleveurComponent } from './add-releveur.component';

describe('AddReleveurComponent', () => {
  let component: AddReleveurComponent;
  let fixture: ComponentFixture<AddReleveurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReleveurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReleveurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
