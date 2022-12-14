import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdoctorComponent } from './listdoctor.component';

describe('ListdoctorComponent', () => {
  let component: ListdoctorComponent;
  let fixture: ComponentFixture<ListdoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
