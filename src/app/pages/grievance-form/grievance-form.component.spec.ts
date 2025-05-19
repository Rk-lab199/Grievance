import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrievanceFormComponent } from './grievance-form.component';

describe('GrievanceFormComponent', () => {
  let component: GrievanceFormComponent;
  let fixture: ComponentFixture<GrievanceFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrievanceFormComponent]
    });
    fixture = TestBed.createComponent(GrievanceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
