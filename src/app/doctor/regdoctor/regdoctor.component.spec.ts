import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegdoctorComponent } from './regdoctor.component';

describe('RegdoctorComponent', () => {
  let component: RegdoctorComponent;
  let fixture: ComponentFixture<RegdoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegdoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
