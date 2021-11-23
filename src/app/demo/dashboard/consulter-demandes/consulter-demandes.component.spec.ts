import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConsulterDemandesComponent } from './consulter-demandes.component';

describe('ConsulterDemandesComponent', () => {
  let component: ConsulterDemandesComponent;
  let fixture: ComponentFixture<ConsulterDemandesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterDemandesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
