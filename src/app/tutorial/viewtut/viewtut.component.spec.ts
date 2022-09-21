import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtutComponent } from './viewtut.component';

describe('ViewtutComponent', () => {
  let component: ViewtutComponent;
  let fixture: ComponentFixture<ViewtutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
